//Code structure from: https://medium.com/better-programming/build-a-login-system-in-node-js-f1ba2abd19a
module.exports = {
    ensureAuthenticated : function(req,res,next) { //Function to ensure that the user is authenticated.
        if(req.isAuthenticated()) {
            return next(); //If authenticated, moves the user along.
        }
        req.flash('error_msg' , 'please login to view this resource');//If not authenticated, ask to login
        res.redirect('/users/login'); //Redirects user to login page.
    }
}

