const express = require('express');//Import all necessary modules <!---
const router = express.Router();
const User = require("../models/user.js");
var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');// ---> Import done

router.get('/forum',(req,res)=>{
    res.render('forum')
    })
    
router.post('/forum',(req,res)=>{
    const {fName,fUsers, fComments} = req.body;
    let errors = [];
    if(!fName || !fComments) {
        errors.push({msg : "Please fill in all fields"})
    }
     if(errors.length > 0 ) {
        res.render('forum', {
            errors : errors,
            fName : fName,
            fUsers : fUsers,
            fComments : fComments
        })
    } else { 
        const newPost = new Forum({
            fName: fName,
            fUsers: fUsers,
            fComments: fComments,
            date: Date.now()
        })
    newPost.save()
        .then((value)=>{
            console.log('New forum post: fName:' + value.fName + ' fUsers:' + value.fUsers +' comments: '+value.fComments +' Date:' + value.date )
            req.flash('success_msg','New forum created!')
            res.redirect('/index/forum');
        })
        .catch(value=> console.log(value));
    }
}
module.exports  = router;