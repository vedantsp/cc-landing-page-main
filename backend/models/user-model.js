const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");



const userSchema = new mongoose.Schema({
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: function() {
        return !this.googleId; // or just make it optional
      },
    },
    googleId: {
      type: String,
      required: false,
    },
    
    isAdmin: {
      type: Boolean,
      default: false,
    },
  });

  userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified('password')) return next(); // only hash if password changed
    if (!user.password) return next(); // skip if no password (Google OAuth)
  
    try {
      const hash_password = await bcryptjs.hash(user.password, 10);
      user.password = hash_password;
      next();
    } catch (error) {
      next(error);
    }
  });
  
  
  userSchema.methods.isPasswordValid = async function (password) {

    return bcryptjs.compare(password,this.password);
    
  };


  userSchema.methods.generateToken = async function () {
    console.log('i am token');
    try {
      return jwt.sign(
        {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn:"30d"
    }
    );
    } catch (error) {
      console.error("token error:", error);
    }
      
    }


const User = new mongoose.model("User", userSchema);
module.exports = User;
