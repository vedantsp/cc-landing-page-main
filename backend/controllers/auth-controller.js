const User = require('../models/user-model')

const home = async (req, res) => {
    try {
      res.status(200).send("welcome to home page using comtrollers");
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (req, res) => {
    try {
      console.log("inside try");
      console.log(req.body);
      const { username, email, password } = req.body;
      const userExists = await User.findOne({ email: email });
      if (userExists) {
        console.log(userExists.email);
        
        return res.status(400).json({ message: "user already exists" });
      }
  
      const userCreated = await User.create({ username, email, password });
      res
        .status(201)
        .json({
          msg: userCreated,
          token: await userCreated.generateToken(),
          userId: userCreated._id.toString(),
        });
    } catch (error) {
      console.log(error);
    }
  };


  const login = async (req,res) => {
    try {
      const {email,password} = req.body;
      const userExists = await User.findOne({email});
  if(!userExists){
    return res.status(400).json({message : "Invalid Credentials"});
  
  }
  const isPasswordValid = await userExists.isPasswordValid(password)
  
  if(isPasswordValid){
    res.status(200).json({
      message : "Login Successful",
      token : await userExists.generateToken(),
      userId : userExists._id.toString(),
    });
  } 
  else{
    res.status(401).json({message:"Invalid email or password"});
  }
  
    } catch (error) {
      console.log(error);
      res.status(500).json({message:"Internal Server error"});
    }
  }


  const user = async (req,res) => {

    try {
      console.log("inside user")
      const userData = req.user;
      console.log("got the userData");
      console.log("this is user data" + userData);
      return res.status(200).json({userData});
      
    } catch (error) {
      console.log(`error from user route ${error}`)
    }
    
  }

  module.exports = {home,register, login, user};