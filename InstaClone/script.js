let elements = document.getElementsByClassName("card-user-img");



var showHeart = function() {
    var currentTime = new Date().getTime();
    var tapLength = currentTime - lastTap;
    clearTimeout(timeout);
    if (tapLength < 500 && tapLength > 0) { // Double tap check
        //<i class="fas fa-heart"></i>
        let BIG_HEART = document.createElement("i");
        BIG_HEART.className = "fas fa-heart BIG_HEART";
        BIG_HEART.style.position = "absolute";
        BIG_HEART.style.top = "270px";
        BIG_HEART.style.left = "150px";
        BIG_HEART.style.color = "white";


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


for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('touchend', showHeart);
}

var timeout;
var lastTap = 0;


