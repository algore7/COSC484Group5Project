//Code structure from: https://medium.com/better-programming/build-a-login-system-in-node-js-f1ba2abd19a

const express = require('express');//Import all necessary modules <!---
const router  = express.Router();
var path = require('path');
const {ensureAuthenticated} = require("../config/auth.js")// ---> Import done 

//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})

router.get('/dashboard',ensureAuthenticated,(req,res)=>{
    console.log('New Login: Name:' + req.user.name + ' Email:' + req.user.email +' Date:' + req.user.date)
    res.render('dashboard',{
        user: req.user
    });
})

router.get('/forum',(req,res)=>{
    //res.render(express.static((__dirname, '../views/forum'))); 
    console.log('Onforum');
    res.render('forum');
})

router.get('/backpack',(req,res)=>{
    res.render('backpack');
 })

router.get('/requirements',(req,res)=>{
    res.render('requirements');
 })

router.get('/profile',(req,res)=>{
    res.render('profile');
 })

router.get('/faculty',(req,res)=>{
    res.render('faculty');
 })

router.get('/cBackpack',(req,res)=>{
    res.render('cBackpack');
 })

module.exports = router; 
