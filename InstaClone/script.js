let postImages = document.getElementsByClassName("card-user-img");
let postHearts = document.getElementsByClassName("HEART_ICON");
let userProfilePic = document.getElementsByClassName("user-image-story");
let userProfilePic_small = document.getElementsByClassName("user-image");

for(let i = 0; i < postImages.length - 1; i++){
    postImages[i+1].src = "https://picsum.photos/200/300/?random&t=" + new Date().getTime() + Math.random();
}

var updateProfilePics = function (){
    const BASE = 180;
    let iterationBase = BASE;
    const INCREMENT = 1100;
    for(let i = 0; i < userProfilePic.length - 1; i++){
        setTimeout(function (){
            userProfilePic[i+1].src = "https://thispersondoesnotexist.com/image?dummy=" + new Date().getTime() + iterationBase;
            //console.log("Picture ID: "+(i+1)+" has been updated.");
        },iterationBase);
        iterationBase+=INCREMENT;
    }
    //iterationBase = BASE; // If you want to get the same pictures in the posts, remove the comment.

    for(let i = 0; i < userProfilePic_small.length - 1; i++){
        setTimeout(function (){
            userProfilePic_small[i].src = "https://thispersondoesnotexist.com/image?dummy=" + new Date().getTime() + iterationBase;
            //console.log("Picture ID: "+(i+1)+" has been updated.");
        },iterationBase);
        iterationBase+=INCREMENT;
    }
}





var changeHeart = function (){
    if(this.className.charAt(2) == 'r'){
        this.className = "fas fa-heart card-icons HEART_ICON";
        this.style.color = "red";
    } else {
        this.className = "far fa-heart card-icons HEART_ICON";
        this.style.color = "black";
    }
}


var showHeart = function() {
    var currentTime = new Date().getTime();
    var tapLength = currentTime - lastTap;
    clearTimeout(timeout);
    if (tapLength < 500 && tapLength > 0) { // Double tap check
        //<i class="fas fa-heart"></i>
        let BIG_HEART = document.createElement("i");
        BIG_HEART.className = "fas fa-heart BIG_HEART";
        BIG_HEART.style.position = "absolute";
        BIG_HEART.style.top = "290px";
        BIG_HEART.style.left = "150px";
        BIG_HEART.style.color = "white";


        postHearts[this.id].className = "fas fa-heart card-icons HEART_ICON";
        postHearts[this.id].style.color = "red";


        this.parentNode.insertBefore(BIG_HEART,this);

        setTimeout(function(){
            let hearts = document.getElementsByClassName("BIG_HEART");
            for(var i = 0; i < hearts.length; i++){
                hearts[i].parentNode.removeChild(hearts[i]);
            }

        },1000);

    } else { // Single tap
        timeout = setTimeout(function() {
            clearTimeout(timeout);
        }, 500);
    }
    lastTap = currentTime;

};


for (let i = 0; i < postImages.length; i++) {
    postImages[i].addEventListener('touchend', showHeart);
    postImages[i].id = i;
}

for (let i = 0; i < postImages.length; i++) {
    postHearts[i].addEventListener('click', changeHeart);
}

var timeout;
var lastTap = 0;


window.addEventListener('load', updateProfilePics);
