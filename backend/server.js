require('dotenv').config();
const FRONTEND_URL = process.env.FRONTEND_URL;
const PORT = process.env.PORT || 5000;

const express = require('express');
const session = require('express-session');
const cors = require("cors");
const passport = require('passport');
require('./utils/passport'); 

const app = express();
const router = require('./router/auth-router');
const messageRouter = require('./router/message-router')
const connectDb = require('./utils/db');
console.log(`at start of server ${FRONTEND_URL}`);
const corsOptions = {
  origin: [`${FRONTEND_URL}`],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

// Add session middleware - needed for Passport
app.use(session({
  secret: process.env.SESSION_SECRET,  // put this in your .env as SESSION_SECRET
  resave: false,
  saveUninitialized: true
}));

// Initialize Passport and session support
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", router);
app.use("/api/messages", messageRouter);
app.get('/', (req,res) => {
  res.send(
    {
      activeStatus:true,
      error : false,
      
    }
  )
} );



connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
  });
});