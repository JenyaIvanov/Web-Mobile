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
// Variables
var progressBar = document.getElementsByClassName("progress-bar");
var progress = document.getElementsByClassName("progress");

// Add event listener to each progress bar.
for(let i = 0; i < progress.length; i++) {
    progress[i].addEventListener("mouseover", displaySkillProgress);
    progress[i].id = i; // Assign to ID the position of that element within the array. (Used later)
}

function displaySkillProgress(){
    let thisPB = progressBar[this.id]; // Assign that progress bar, using the position within the array (from previous).
    let volume = thisPB.getAttribute("aria-valuenow"); // Get the volume of that progress bar.
    thisPB.style.width = volume+"%"; // Render to screen.
}

// ~-~-~-~-~-~-~-~-~-  Char count Script ~-~-~-~-~-~-~-~-~-
// Variables
var contactText = document.getElementById("contact-message");

// Listen to keys and changes to the text field.
contactText.addEventListener("keyup",updateCharCounter); // Key pressed.
contactText.addEventListener("change",updateCharCounter); // Text pasted.

// Assign variables to elements
var charCounter = document.getElementById("charCounter");
var sendButton = document.getElementById("sendButton");


function updateCharCounter() {
    const MAX_CHAR = 200; // Maximum characters to input inside the text field.
    let count = contactText.value.length; // Grab the length of the current text within the box (after update).
    charCounter.innerText = count + "/" + MAX_CHAR; // Render on screen that update [ex; 80/200]

    // Disable button if criteria is not met.
    if (count > MAX_CHAR) {
        charCounter.style.color = "red"; // Warn user that something is wrong.
        sendButton.setAttribute("disabled",""); // Disable button.

    } else { // Criteria is met.
        charCounter.style.color = "grey";
        sendButton.removeAttribute("disabled"); // Enable button
    }
}


// ~-~-~-~-~-~-~-~-~-  Scroll To Top ~-~-~-~-~-~-~-~-~-
// Assign variables to elements
var scrollTop = document.getElementById("scrollTop");

scrollTop.onclick = function (){ // Listen to clicks upon the element.
    window.scrollTo(20,0); // Scroll to top.
}