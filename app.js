//Code structure from: https://medium.com/better-programming/build-a-login-system-in-node-js-f1ba2abd19a

const express = require('express'); //Import all necessary modules <!---
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts');
const passport = require('passport');
const session = require('express-session');
var path = require('path');
const flash = require('connect-flash');// ---> Import done 

require("./config/passport")(passport)//'require' passport module from passport.js so that the user can login

//Mongoose functionality here; if successful prints success message, if unsuccessful prints error.
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('Mongoose has connected to MongoDB.\nStarting webservice...'))
.catch((err)=> console.log(err));

//Set the readable files to 'EJS'
app.set('view engine','ejs');
app.use(expressEjsLayout);

//BodyParser; Allows for parsing of expressions
app.use(express.urlencoded({extended : false}));

//express session
app.use(session({//Allows the app.js to create a user session
 secret : 'secret',
 resave : true,
 saveUninitialized : true
}));

app.use(passport.initialize());//Initialize the passport session
app.use(passport.session());

//use flash
app.use(flash());

//Prints out success when either passing, failing, or erroring out during activity.
app.use((req,res,next)=> {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error  = req.flash('error');
next();
})  

//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.use(express.static(path.join(__dirname, './public')));

app.listen(3000); //Create a listening port.