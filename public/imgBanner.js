

var bannerStatus = 1;
var bannerTimer = 18000;     //this equiv to 18 sec in js.. stays for 35sec?
// bannerTime value must be larger than times below


window.onload = function() {
    bannerLoop();
   
}

var startBannerLoop = setInterval (function() {
    bannerLoop();
}, bannerTimer);                                           //how many seconds until it loads other image


 //commented out because does not work
/*
//these two make it so when you hover mouse over banner it doesn't change
document.getElementById("main-banner").onmouseenter = function() {                            //if do something inside browser then it needs to run functio inside of event handler
    clearInterval(startBannerLoop);                             //clearing it means wont run anymore
}

document.getElementById("main-banner").onmouseenter = function(){                            //if do something inside browser then it needs to run functio inside of event handler
    clearInterval(startBannerLoop); 
}

document.getElementById("main-banner").onmouseenter = function(){                            //if do something inside browser then it needs to run functio inside of event handler
    startBannerLoop = setInterval (function() {
        bannerLoop();
    }, bannerTimer);  
}
*/


function bannerLoop() {
    if (bannerStatus === 1) {
        document.getElementById("imgban2").style.opacity = "0";                //img 2 next in line

        setTimeout(function() {
            //position of images                                                  
            document.getelementById("imgban1").style.right = "0px";             //means image 1 will be leaning right up against right side of container
            document.getelementById("imgban1").style.zIndex = "1000";
            document.getElementById("imgban2").style.right = "-1200px";
            document.getElementById("imgban2").style.zIndex = "1500";
            document.getElementById("imgban3").style.right = "1200px";
            document.getElementById("imgban3").style.zIndex = "500";
        }, 10000);
        setTimeout(function() {
             document.getElementById("imgban2").style.opacity = "1";
        }, 13000);                                                               //prob fade out
        bannerStatus = 2;
    }


    else if (bannerStatus === 2) {
        document.getElementById("imgban3").style.opacity = "0";

        setTimeout(function() {
        
            document.getelementById("imgban2").style.right = "0px";             //means image 1 will be leaning right up against right side of container
            document.getelementById("imgban2").style.zIndex = "1000";
            document.getElementById("imgban3").style.right = "-1200px";
            document.getElementById("imgban3").style.zIndex = "1500";
            document.getElementById("imgban1").style.right = "1200px";
            document.getElementById("imgban1").style.zIndex = "500";
        }, 0);
        setTimeout(function() {
             document.getElementById("imgban3").style.opacity = "1";
        }, 11200);
        bannerStatus = 3;
    }
    

    else if (bannerStatus === 3) {
        document.getElementById("imgban1").style.opacity = "0";

        setTimeout(function() {
        
            document.getelementById("imgban3").style.right = "0px";             //means image 1 will be leaning right up against right side of container
            document.getelementById("imgban3").style.zIndex = "1000";
            document.getElementById("imgban1").style.right = "-1200px";
            document.getElementById("imgban1").style.zIndex = "1500";
            document.getElementById("imgban2").style.right = "1200px";
            document.getElementById("imgban2").style.zIndex = "500";
        }, 0);                                                                //was 500
        setTimeout(function() {
             document.getElementById("imgban1").style.opacity = "1";
        }, 30000);
        bannerStatus = 1;
    }
}

var banner_status = 1;
