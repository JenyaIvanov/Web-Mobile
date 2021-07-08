// "Random" post descriptions array
const RANDOM_DESCRIPTION = [
    {"Description":"What a beautiful scenery 🥰"},
    {"Description":"such an amazing view"},
    {"Description":"This is amazing!"},
    {"Description":"😄😄😄😄"},
    {"Description":"awesome!"},
    {"Description":"isn't it pretty?"},
    {"Description":"first try"},
    {"Description":"i think i got this"},
    {"Description":"🔥"},
    {"Description":"how are you spending today?"},
    {"Description":"cool views"},
    {"Description":"the views in here lol"},
    {"Description":"lol 🤣"},
    {"Description":"i like this picture"},
    {"Description":"would you visit this place?"},
    {"Description":"that's my shot at photography 🤣"},
    {"Description":"Be happy it drives people crazy."},
    {"Description":"Another fine day ruined by responsibilities..."},
    {"Description":"Create your own sunshine 🌞"},
    {"Description":"lifes too short 4 bad vibes"},
    {"Description":"id like to stay here for a while"},
    {"Description":"Work hard, travel harder"},
    {"Description":"wander often, wander always"},
    {"Description":"Catch flights, not feelings"},
    {"Description":"Listen to your intuition 😄"},
    {"Description":"be anything but predictable"},
    {"Description":"lifes too short for boring days"},
    {"Description":"shrek is lief"},
    {"Description":"do stuff that matter"},
    {"Description":"success is a long road"},
    {"Description":"Decide. Commit. Succeed."},
    {"Description":"Life is the biggest party you'll ever be at"},
    {"Description":"An apple a day 🍎"},
    {"Description":"this is my vibe 🔥"}];
// ^- "Random" post descriptions array

// "Random" names array
const RANDOM_NAMES = [
    {"Username":"dornakashe91"},
    {"Username":"Gigastrength"},
    {"Username":"Deadlyinx"},
    {"Username":"Techpill"},
    {"Username":"Methshot"},
    {"Username":"Methnerd"},
    {"Username":"TreeEater"},
    {"Username":"PackManBrainlure"},
    {"Username":"Carnalpleasure"},
    {"Username":"Sharpcharm"},
    {"Username":"Snarelure"},
    {"Username":"Skullbone"},
    {"Username":"Burnblaze"},
    {"Username":"Emberburn"},
    {"Username":"Emberfire"},
    {"Username":"Evilember"},
    {"Username":"Firespawn"},
    {"Username":"Flameblow"},
    {"Username":"SniperGod"},
    {"Username":"TalkBomber"},
    {"Username":"SniperWish"},
    {"Username":"RavySnake"},
    {"Username":"WebTool"},
    {"Username":"TurtleCat"},
    {"Username":"BlogWobbles"},
    {"Username":"LuckyDusty"},
    {"Username":"RumChicken"},
    {"Username":"StonedTime"},
    {"Username":"CouchChiller"},
    {"Username":"VisualMaster"},
    {"Username":"DeathDog"},
    {"Username":"ZeroReborn"},
    {"Username":"TechHater"},
    {"Username":"eGremlin"},
    {"Username":"BinaryMan"},
    {"Username":"AwesomeTucker"},
    {"Username":"FastChef"},
    {"Username":"JunkTop"},
    {"Username":"PurpleCharger"},
    {"Username":"CodeBuns"},
    {"Username":"BunnyJinx"},
    {"Username":"GoogleCat"},
    {"Username":"StrangeWizard"},
    {"Username":"Fuzzy_Logic"},
    {"Username":"New_Cliche"},
    {"Username":"Ignoramus"},
    {"Username":"yosiashqenazi11"},
    {"Username":"whereismyname"},
    {"Username":"Nojokur"},
    {"Username":"Illusionz"},
    {"Username":"Spazyfool"},
    {"Username":"Supergrass"},
    {"Username":"Dreamworx"},
    {"Username":"Fried_Sushi"},
    {"Username":"Stark_Naked"},
    {"Username":"Need_TLC"},
    {"Username":"Raving_Cute"},
    {"Username":"david____levi_"},
    {"Username":"Lunatick"},
    {"Username":"Garbage_Can_Lid"},
    {"Username":"Crazy_Nice"},
    {"Username":"Booteefool"},
    {"Username":"Harmless_Venom"},
    {"Username":"Lord_Tryzalot"},
    {"Username":"Shrek"},
    {"Username":"Borgir&#8482;"},
    {"Username":"MPmaster"},
    {"Username":"Queen_Martha"},
    {"Username":"Spamalot"},
    {"Username":"soft99701"},
    {"Username":"space_hamster"},
    {"Username":"evil_kitten"},
    {"Username":"farquit"},
    {"Username":"nofar_salmi_42"},
    {"Username":"happy_sad"},
    {"Username":"haveahappyday"},
    {"Username":"SomethingNew"},
    {"Username":"5mileys"},
    {"Username":"ashley_cohen13"},
    {"Username":"takes2long"},
    {"Username":"w8t4u"},
    {"Username":"askme"},
    {"Username":"Bidwell"},
    {"Username":"massdebater"},
    {"Username":"talya__sapir"},
    {"Username":"Inmate"},
    {"Username":"aviyaitzhak97"},
    {"Username":"alexberger92"}];
// ^- "Random" names array


const STORY_IMAGES_SRC = ["https://picsum.photos/200/300/?random&t=" + new Date().getTime() + Math.random(),
    "https://picsum.photos/200/300/?random&t=" + new Date().getTime() + Math.random(),
    "https://picsum.photos/200/300/?random&t=" + new Date().getTime() + Math.random()];
// ^- Random story images src


// Arrays and variables
let postImages = document.getElementsByClassName("card-user-img");
let postHearts = document.getElementsByClassName("HEART_ICON");
let postBookmarks = document.getElementsByClassName("BOOKMARK_ICON");
let userProfilePic = document.getElementsByClassName("user-image-story");
let userProfilePic_small = document.getElementsByClassName("user-image");
let likeCounter = document.getElementsByClassName("card-like-counter");
let randomSearchImg = document.getElementsByClassName("RANDOM_SEARCH_IMG");
let userNamesArray = document.getElementsByClassName('POST_USERNAME');
let navbar_buttons = document.getElementsByClassName('navbar-button-css');
let shiftView_array = document.getElementsByClassName('shiftView');
let topNavBar = document.getElementsByClassName("topNav")[0];
let storiesNavBar = document.getElementsByClassName("storiesNav")[0];
let searchBox = document.getElementsByClassName("searchBox")[0];
let cameraView = document.getElementById("cameraView");
let shoppingView = document.getElementById("shopingBag");
let postDescription = document.getElementsByClassName("POST_DESCRIPTION");
let documentPositionListener = document.body;

// Stories variables
let storiesNav = document.getElementsByClassName("user-image-story");
let storyView = document.getElementsByClassName('storyView')[0];
let bottomNav = document.getElementsByClassName("navbar-container")[0];
let storyView_close_btn = document.getElementById("STORY_CLOSE_BTN");
let STORY_PIC_SWAP = document.getElementById("STORY_PIC_SWAP");
let STORY_USR_SWAP = document.getElementsByClassName("STORY_USERNAME")[0];
let storyBackground_src = document.getElementById("story-img");
let storyID = 0;








// -- Just for fun
const SWAMP_GUY_PROFILE_CHANCE = 3;
const SWAMP_GUY_STORY_CHANCE = 3;
const SWAMP_GUY_UPLOAD_CHANCE = 3;

let userView = "navigation";
var timeout;
var lastTap = 0;

// ----- Functions

// -- Help function; randoms an integer within a given range.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// -- Function controlling main view (Switches between tabs)
function shiftViews() {
    // This function hides all other views and presents the clicked one.
    // The clicked tab is the one calling the function.
    // We get which tab was clicked through this.id, which is a unique ID per (bottom) navbar button.
    for(let i = 0; i < navbar_buttons.length; i++){
        if(this.id != i){
            shiftView_array[i].style.display = "none";
        } else {
            if(this.id == 1 || this.id == 4){
                hideTopNav();
                hideStories();
                hideSearchBox();

                if(this.id == 1) { // Gallery tab
                    showSearchBox();
                    userView = "explore";
                }

            } else {
                showTopNav();
                showStories();
                hideSearchBox();
            }
            shiftView_array[i].style.display = "block";
        }

    }
}

function showStory(){
    userView = "story"; // Change user viewport category.
    storyID = (parseInt(this.id) + 1); // Save which story user clicked (counting left-to-right starting 1).
    storyBackground_src.src = STORY_IMAGES_SRC[this.id]; // Change the story background img based on ID to a generated img from mem.
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll window to top (fix viewing Y)
    document.body.style.overflowY = "hidden"; // Hide overflow for polish
    STORY_PIC_SWAP.src = this.src; // Change user icon to said generated user's story.
    STORY_USR_SWAP.innerHTML = RANDOM_NAMES[getRandomInt(0,RANDOM_NAMES.length)].Username; // Generate a random name.

    // Hide everything else from view.
    shiftView_array[0].style.display = "none";
    bottomNav.style.display = "none";
    hideTopNav();
    hideSearchBox();
    hideStories();
    storyView.style.display = "block"; // Show the story viewport.


    // Set timer to automatically continue to next story.
    storyClose = setTimeout(nextStory,4100);
}

function nextStory(){
    clearTimeout(storyClose);
    // Check if its the last story (ID 3 is last story in this demo)
    if(storyID < 3){
        storyID++; // Increment current story ID.

        // Change profile picture
        STORY_PIC_SWAP.src = storiesNav[storyID - 1].src;

        // Change background (change story)
        storyBackground_src.src = STORY_IMAGES_SRC[storyID - 1];

        // Generate new username
        STORY_USR_SWAP.innerHTML = RANDOM_NAMES[getRandomInt(0,RANDOM_NAMES.length)].Username; // Generate a random name.

        // Restart animation
        let animationElement = document.getElementsByClassName("progress-value")[0];
        animationElement.style.animation = "none";
        setTimeout(function (){
            animationElement.style.animation = "load 5s normal forwards";
        },50);

        storyClose = setTimeout(nextStory,4100);

    } else {
        hideStory();
    }

}

function previousStory(){
    clearTimeout(storyClose);
    // Check if its the last story (ID 3 is last story in this demo)
    if(storyID > 1){
        storyID--; // Increment current story ID.

        // Change profile picture
        STORY_PIC_SWAP.src = storiesNav[storyID - 1].src;

        // Change background (change story)
        storyBackground_src.src = STORY_IMAGES_SRC[storyID - 1];

        // Generate new username
        STORY_USR_SWAP.innerHTML = RANDOM_NAMES[getRandomInt(0,RANDOM_NAMES.length)].Username; // Generate a random name.

        // Restart animation
        let animationElement = document.getElementsByClassName("progress-value")[0];
        animationElement.style.animation = "none";
        setTimeout(function (){
            animationElement.style.animation = "load 5s normal forwards";
        },50);

        storyClose = setTimeout(nextStory,4100);

    } else {
        hideStory();
    }

}

function hideStory(){
    storyID = 0;
    userView = "navigation";
    shiftView_array[0].style.display = "block";
    document.body.style.overflowY = "visible";
    bottomNav.style.display = "block";
    showTopNav();
    hideSearchBox();
    showStories();
    storyView.style.display = "none";
    clearTimeout(storyClose);

}

// -- Function that hides the stories carousel.
function hideStories() {
    storiesNavBar.style.display = "none";
}

// -- Function that displays the stories carousel.
function showStories() {
    storiesNavBar.style.display = "block";
}

// -- Function that hides the top nav bar.
function hideTopNav() {
    topNavBar.style.display = "none";
}

// -- Function that displays the top nav bar.
function showTopNav() {
    topNavBar.style.display = "block";
}

// -- Function that hides the search box.
function hideSearchBox() {
    searchBox.style.display = "none";
}

// -- Function that displays the search box.
function showSearchBox() {
    searchBox.style.display = "block";
}


// This function updates the profile images to randomly AI generated images.
let updateProfilePics = function (){
    // Due to limitations of thispersondoesntexist.com (image source website),
    // I'm required to wait roughly 1.1seconds between each call.
    // Therefore, profile images update very slowly.
    const BASE = 500;
    let iterationBase = BASE;
    const INCREMENT = 1150;


    // Story profile pictures
    for(let i = 0; i < userProfilePic.length - 1; i++){
        if(getRandomInt(0,100) < SWAMP_GUY_STORY_CHANCE){
            userProfilePic[i+1].src = "https://lolfilter.com/files/thumbnails/5216263123397404.png";
        }
        else {
            setTimeout(function (){
                userProfilePic[i+1].src = "https://thispersondoesnotexist.com/image?dummy=" + new Date().getTime() + iterationBase;
                //console.log("Picture ID: "+(i+1)+" has been updated.");
            },iterationBase);
            iterationBase+=INCREMENT;
        }

    }
    //iterationBase = BASE; // If you want to get the same pictures in the posts, remove this comment.

    // Post feed profile pictures
    for(let i = 0; i < userProfilePic_small.length; i++){
        if(getRandomInt(0,100) < SWAMP_GUY_PROFILE_CHANCE){
            userProfilePic_small[i].src = "https://lolfilter.com/files/thumbnails/5216263123397404.png";
        }
        else {
            setTimeout(function (){
                userProfilePic_small[i].src = "https://thispersondoesnotexist.com/image?dummy=" + new Date().getTime() + iterationBase;
                //console.log("Picture ID: "+(i+1)+" has been updated.");
            },iterationBase);
            iterationBase+=INCREMENT;
        }

    }
}

// Function to vibrate the phone on certain events.
// NOTICE: Doesn't work!
let vibratePhone = function () {
    const FORCE = 200;
    window.navigator.vibrate(FORCE);
}

// Function to iterate between a saved and unsaved bookmark.
let changeBookmark = function (){
    if(this.className.charAt(2) == 'r'){
        this.className = "fas fa-bookmark float-end card-icons me-3 BOOKMARK_ICON";
        vibratePhone();
    } else {
        this.className = "far fa-bookmark float-end card-icons me-3 BOOKMARK_ICON";
    }
    this.style.color = "black";
}

// Function to update (increase/decrease) the amount of likes a post has.
// Needed for user to like/dislike pictures.
let changeHeart = function (){
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

// Function that takes a prettified likes string and converts it into an integer.
function prettyNumber (num){
    const NUM = num.replace(",", "");
    NUM.replace("likes", "");

    return parseInt(NUM);
}

// Function that presents a big white heart on top of a double tapped image.
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


// ----- Code Segments

// This segment generates a random username to a post within the feed.
for(let i = 0; i < userNamesArray.length; i+=2){
    const RANDOM = getRandomInt(0,RANDOM_NAMES.length - 1);
    //console.log(RANDOM); // Debug
    const RANDOM_USERNAME = RANDOM_NAMES[RANDOM].Username;
    //console.log((RANDOM_USERNAME)); // Debug

    userNamesArray[i].innerHTML = RANDOM_USERNAME;
    userNamesArray[i+1].innerHTML = RANDOM_USERNAME;
}

// This segment generates a random post description (to each post) within the feed.
const LENGTH = RANDOM_DESCRIPTION.length - 1;
for(let i = 0; i < postDescription.length; i++){
    let RANDOM_2 = getRandomInt(0, LENGTH);
    //console.log(RANDOM_2); // Debug
    const RANDOM_DESC = RANDOM_DESCRIPTION[RANDOM_2].Description;
    //console.log((RANDOM_DESC)); // Debug

    postDescription[i].innerHTML = RANDOM_DESC;
}

// This segment updates the likes counters to a random integer within the range.
for(let i = 0; i < likeCounter.length; i++){
    // Range variables
    const MIN = 13;
    const MAX = 1337;

    likeCounter[i].innerHTML = getRandomInt(MIN,MAX).toLocaleString() + " likes";
}

// This segment updates the post feeds to random images.
for(let i = 0; i < postImages.length - 1; i++){
    if(getRandomInt(0,100) < SWAMP_GUY_UPLOAD_CHANCE){
        postImages[i+1].src = "https://storage.googleapis.com/my-insta-filters.appspot.com/3101760145/478050156378362.jpg";

    } else
        postImages[i+1].src = "https://picsum.photos/200/300/?random&t=" + new Date().getTime() + Math.random();
}

// This segment updates the search button feed with random images.
for(let i = 0; i < randomSearchImg.length - 1; i++){
    randomSearchImg[i+1].src = "https://picsum.photos/200/300/?random&t=" + new Date().getTime() + Math.random();
}

// ----- Event Listeners
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

for (let i = 0; i < navbar_buttons.length; i++) {
    navbar_buttons[i].addEventListener('click', shiftViews);
    navbar_buttons[i].id = i;
}

for (let i = 0; i < storiesNav.length; i++) {
    storiesNav[i].addEventListener('click', showStory);
    storiesNav[i].id = i;
}

documentPositionListener.addEventListener('click', function(event) {
    var rect = documentPositionListener.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;


    if(x >= 270 && !userView.localeCompare("story") && y > 140){
        nextStory();
    }

    if(x <= 80 && !userView.localeCompare("story") && y > 140){
        previousStory();
    }

}, false);
shoppingView.addEventListener('click', function(){ alert("Do you remember the times Instagram wasn't about product placements and fake content (IE ads)?"); });
cameraView.addEventListener('click', function(){ alert("In development!"); });
window.addEventListener('load', updateProfilePics);
storyView_close_btn.addEventListener('click',hideStory);
