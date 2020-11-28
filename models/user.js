//Code structure from: https://medium.com/better-programming/build-a-login-system-in-node-js-f1ba2abd19a

const mongoose = require('mongoose');//Import necessary module
const UserSchema  = new mongoose.Schema({//Sets how the user schema should appear 'name', 'email', 'password', 'date' 
  name :{
      type  : String,
      required : true
  } ,
  email :{
    type  : String,
    required : true
} ,
password :{
    type  : String,
    required : true
} ,
date :{
    type : Date,
    default : Date.now
}
});
const User= mongoose.model('User',UserSchema);//Creats const user variable that can be called

module.exports = User;//Exports the variable
