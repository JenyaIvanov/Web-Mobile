var elements = document.getElementsByClassName("card-user-img");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('dblclick', showHeart);
}

var showHeart = function() {
    let BIG_HEART = document.createElement("img");
    BIG_HEART.alt = "Big Heart";
    BIG_HEART.src = "img/rootUser.jpg";
    BIG_HEART.style.position = "absolute";
    BIG_HEART.style.width = "20%";
    BIG_HEART.style.marginTop = "300px";
    BIG_HEART.style.marginLeft = "180px";
    BIG_HEART.style.zIndex = 1;
    this.childNodes = BIG_HEART;

    this.parentNode.insertBefore(BIG_HEART,this);

};

