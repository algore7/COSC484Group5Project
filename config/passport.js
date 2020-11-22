//Code structure from: https://medium.com/better-programming/build-a-login-system-in-node-js-f1ba2abd19a

const LocalStrategy = require('passport-local').Strategy;//Import the required modules <!--
const bcrypt = require('bcrypt');
const User = require("../models/user");// --> Done importing modules.

module.exports = function(passport) { //export the module function so that it can be called elsewere 
    passport.use(
        new LocalStrategy({usernameField : 'email'},(email,password,done)=> {//Matches user and pass.
                //match user
                User.findOne({email : email})
                .then((user)=>{
                 if(!user) {
                     return done(null,false,{message : 'that email is not registered'});
                 }
                 //match pass
                 bcrypt.compare(password,user.password,(err,isMatch)=>{
                     if(err) throw err;

                     if(isMatch) {
                         return done(null,user);
                     } else {
                         return done(null,false,{message : 'pass incorrect'});
                     }
                 })
                })
                .catch((err)=> {console.log(err)})
        })
        
    )
    passport.serializeUser(function(user, done) {//Sets user status to authenticated
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {//Sets user status to un-authenticated.
        User.findById(id, function(err, user) {
          done(err, user);
        });
      }); 
}; 