require('dotenv').config();

const FRONTEND_URL = process.env.FRONTEND_URL;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const authMiddleware = require('../middlewares/auth-middleware')
const authController = require('../controllers/auth-controller');

const User = require('../models/user-model')


router.route("/").get(authController.home);
router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
router.route("/user").get(authMiddleware, authController.user);


// Google OAuth login
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
  prompt: 'select_account'  // This will force the account selection screen
}));

// auth-router.js
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  async (req, res) => {
    try {
      const googleEmail = req.user.email;  // Get the email from the Google profile
      
      // Check if the user already exists in your database
      const existingUser = await User.findOne({ email: googleEmail });

      if (existingUser) {
        // If the user exists, generate token and log them in
        const token = await existingUser.generateToken();
        return res.redirect(`${FRONTEND_URL}/oauth-success?token=${token}`);
      } else {
        // If the user doesn't exist, create a new user
        const newUser = new User({
          username: req.user.displayName || req.user.email.split('@')[0],  // Use the name or part of email as username
          email: googleEmail,
          password: '',  // You can leave this empty, as this is for OAuth login
        });
        
        await newUser.save();

        // Generate token for the newly registered user
        const token = await newUser.generateToken();
        return res.redirect(`${FRONTEND_URL}/oauth-success?token=${token}`);
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  }
);


  

module.exports = router;
