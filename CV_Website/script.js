// ~-~-~-~-~-~-~-~-~- Modal Scripts ~-~-~-~-~-~-~-~-~-
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var TairModal = document.getElementById("TairImg");
var JenyaModal = document.getElementById("JenyaModal");
var modalImg = document.getElementById("img01");

TairModal.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

JenyaModal.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// ~-~-~-~-~-~-~-~-~- Skills Script ~-~-~-~-~-~-~-~-~-
var progressBar = document.getElementsByClassName("progress-bar");
var progress = document.getElementsByClassName("progress");

for(let i = 0; i < progress.length; i++){
    progress[i].addEventListener("mouseover", testFunc);
    progress[i].id = i;
}

function testFunc(){
    let thisPB = progressBar[this.id];
    let volume = thisPB.getAttribute("aria-valuenow");
    thisPB.style.width = volume+"%";
}

// ~-~-~-~-~-~-~-~-~-  Char count Script ~-~-~-~-~-~-~-~-~-
var contactText = document.getElementById("contact-message");
contactText.addEventListener("keyup",updateCharCounter);
contactText.addEventListener("change",updateCharCounter);

var charCounter = document.getElementById("charCounter");
var sendButton = document.getElementById("sendButton");

function updateCharCounter(){
    let count = contactText.value.length;
    charCounter.innerText = count + "/200";

    if(count >= 200){
        charCounter.style.color = "red";
        sendButton.setAttribute("disabled","");

    } else {
        charCounter.style.color = "grey";
        sendButton.removeAttribute("disabled");
        sendButton.setAttribute("enabled","");
    }

}

// ~-~-~-~-~-~-~-~-~-  Scroll To Top ~-~-~-~-~-~-~-~-~-
var scrollTop = document.getElementById("scrollTop");

scrollTop.onclick = function (){
    window.scrollTo(20,0);
}