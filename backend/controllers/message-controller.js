const Partner = require('../models/partner-model')
const Invest = require('../models/invest-model');
const Subscribe = require('../models/subscribe-model');

const partnerMessage = async (req,res) =>{
    const{name,companyName,email, website,socials,message} = req.body;
    const createMessage = await Partner.create({name,companyName,email, website,socials,message});
    res
        .status(201)
        .json({
          msg: createMessage,
        });


}

const investMessage = async (req,res) =>{
  const{name,email, website,linkedin,message} = req.body;
  const createMessage = await Invest.create({name,email, website,linkedin,message});
  res
      .status(201)
      .json({
        msg: createMessage,
      });


}

const subscribeEmail = async (req,res) =>{
  const{email} = req.body;
  const createMessage = await Subscribe.create({email});
  res
      .status(201)
      .json({
        msg: createMessage,
      });


}


module.exports = {partnerMessage, investMessage, subscribeEmail};