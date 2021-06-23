let postImages = document.getElementsByClassName("card-user-img");
let postHearts = document.getElementsByClassName("HEART_ICON");
let postBookmarks = document.getElementsByClassName("BOOKMARK_ICON");
let userProfilePic = document.getElementsByClassName("user-image-story");
let userProfilePic_small = document.getElementsByClassName("user-image");
let likeCounter = document.getElementsByClassName("card-like-counter");
let randomSearchImg = document.getElementsByClassName("RANDOM_SEARCH_IMG");


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i = 0; i < likeCounter.length; i++){
    const MIN = 13;
    const MAX = 1337;
    likeCounter[i].innerHTML = getRandomInt(MIN,MAX).toLocaleString() + " likes";
}

for(let i = 0; i < postImages.length - 1; i++){
    postImages[i+1].src = "https://picsum.photos/200/300/?random&t=" + new Date().getTime() + Math.random();
}

for(let i = 0; i < randomSearchImg.length - 1; i++){
    randomSearchImg[i+1].src = "https://picsum.photos/200/300/?random&t=" + new Date().getTime() + Math.random();
}

var updateProfilePics = function (){
    const BASE = 500;
    let iterationBase = BASE;
    const INCREMENT = 1150;
    for(let i = 0; i < userProfilePic.length - 1; i++){
        setTimeout(function (){
            userProfilePic[i+1].src = "https://thispersondoesnotexist.com/image?dummy=" + new Date().getTime() + iterationBase;
            //console.log("Picture ID: "+(i+1)+" has been updated.");
        },iterationBase);
        iterationBase+=INCREMENT;
    }
    //iterationBase = BASE; // If you want to get the same pictures in the posts, remove the comment.

    for(let i = 0; i < userProfilePic_small.length; i++){
        setTimeout(function (){
            userProfilePic_small[i].src = "https://thispersondoesnotexist.com/image?dummy=" + new Date().getTime() + iterationBase;
            //console.log("Picture ID: "+(i+1)+" has been updated.");
        },iterationBase);
        iterationBase+=INCREMENT;
    }
}

var vibratePhone = function () {
    const FORCE = 200;
    window.navigator.vibrate(FORCE);
}



var changeBookmark = function (){
    if(this.className.charAt(2) == 'r'){
        this.className = "fas fa-bookmark float-end card-icons me-3 BOOKMARK_ICON";
        vibratePhone();
    } else {
        this.className = "far fa-bookmark float-end card-icons me-3 BOOKMARK_ICON";
    }
    this.style.color = "black";
}


var changeHeart = function (){
    const LIKES = likeCounter[this.id].innerHTML;


    if(this.className.charAt(2) == 'r'){
        this.className = "fas fa-heart card-icons HEART_ICON";
        this.style.color = "red";

        likeCounter[this.id].innerHTML = (prettyNumber(LIKES) + 1).toLocaleString() + " likes";

        vibratePhone();
    } else {
        this.className = "far fa-heart card-icons HEART_ICON";
        this.style.color = "black";

        likeCounter[this.id].innerHTML = (prettyNumber(LIKES) - 1).toLocaleString() + " likes";
    }
}

function prettyNumber (num){
    const NUM = num.replace(",", "");
    NUM.replace("likes", "");

    return parseInt(NUM);
}


var showHeart = function() {
    var currentTime = new Date().getTime();
    var tapLength = currentTime - lastTap;
    clearTimeout(timeout);
    if (tapLength < 500 && tapLength > 0 && postHearts[this.id].className.charAt(2) != 's') { // Double tap check
        //<i class="fas fa-heart"></i>
        let BIG_HEART = document.createElement("i");
        BIG_HEART.className = "fas fa-heart BIG_HEART";
        BIG_HEART.style.position = "absolute";
        BIG_HEART.style.top = "160px";
        BIG_HEART.style.left = "145px";
        BIG_HEART.style.color = "white";


        postHearts[this.id].className = "fas fa-heart card-icons HEART_ICON";
        postHearts[this.id].style.color = "red";

        const LIKES = likeCounter[this.id].innerHTML.replace( "likes", '');
        likeCounter[this.id].innerHTML = (prettyNumber(LIKES) + 1).toLocaleString() + " likes";

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

for (let i = 0; i < postHearts.length; i++) {
    postHearts[i].addEventListener('click', changeHeart);
    postHearts[i].id = i;
}

for (let i = 0; i < postBookmarks.length; i++) {
    postBookmarks[i].addEventListener('click', changeBookmark);
    postBookmarks[i].id = i;
}

var timeout;
var lastTap = 0;


window.addEventListener('load', updateProfilePics);
