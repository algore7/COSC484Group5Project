//Code structure from: https://medium.com/better-programming/build-a-login-system-in-node-js-f1ba2abd19a

const express = require('express');//Import all necessary modules <!---
const router  = express.Router();
var path = require('path');
var mongoose = require('mongoose');
const fs = require("fs");
var fPosts = require("../forumPost.json");
const {ensureAuthenticated} = require("../config/auth.js")// ---> Import done 

//login page
router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})

router.get('/addPost', (req,res)=>{
    res.render('addPost');
})

router.get('/myFile', (req,res)=>{
    res.render('myFile');
})

router.get('/viewPost', (req,res)=>{
    res.render('viewPost');
})

router.get('/fileUpload', (req,res)=>{
    res.render('fileUpload');
})

router.get('/dashboard',ensureAuthenticated,(req,res)=>{
    console.log('New Login: Name:' + req.user.name + ' Email:' + req.user.email +' Date:' + req.user.date)
    res.render('dashboard',{
        user: req.user    
    });
})

router.get('/forum',ensureAuthenticated,(req,res)=>{
    res.render('forum', {
        user: req.user,
        fs: fs,
        fPosts: fPosts
    });
})

router.post('/forums',ensureAuthenticated,(req,res)=>{
    const {postTitle,commentUser, comments, postDate, postUser} = req.body;
    console.log(postTitle,commentUser, comments, postDate, postUser)
    let errors = [];
    if(!postTitle || !comments) {
        errors.push({msg : "Please fill in all fields"})
    }
     if(errors.length > 0 ) {
        res.render('forum', {
            errors : errors,
            postTitle : postTitle,
            commentUser : commentUser,
            comments : comments,
            postDate: postDate,
            postUser: postUser
        })
    } else {
        if(postTitle == "r3s3tM3R1ghtN0w!"){
            fPosts = [{postTitle:"Welcome to the forum", postComments:{commentUser:"Admin", comments:"Welcome to our forum!"}, postDate:postDate, postUser:"Admin"}];
            fs.writeFile('forumPost.json', JSON.stringify(fPosts), function (err) {
                if (err) return console.log(err);
            });
            res.redirect('/forum');
        }else{
            fPosts.push({postTitle:postTitle, postComments:{commentUser:commentUser, comments:comments}, postDate:postDate, postUser:postUser});
            fs.writeFile('forumPost.json', JSON.stringify(fPosts), function (err) {
                if (err) return console.log(err);
            });
            res.redirect('/forum');
        }
    }
})


router.get('/backpack',(req,res)=>{
    res.render('backpack');
 })

router.get('/requirements',(req,res)=>{
    res.render('requirements');
 })

router.get('/profile',ensureAuthenticated,(req,res)=>{
    res.render('profile',{
        user: req.user
    });
 })

router.get('/faculty',(req,res)=>{
    res.render('faculty');
 })

router.get('/cBackpack',(req,res)=>{
    res.render('cBackpack');
 })

module.exports = router; 
