const noun1 = document.getElementById("noun");
const story = document.querySelector(".story");
const oldText = document.querySelector(".oldtext");
const restart = document.querySelector(".restart");
const clickMe = document.querySelector(".btn");
const clicked = document.querySelector(".restart");

const storyText = "Replacing :insertX Here!";


//generate story
clickMe.addEventListener("click", updateStory);

function updateStory() {
    document.querySelector(".btn").innerHTML = "Clicked!";
    let newStory = storyText;
    newStory = newStory.replaceAll(":insertX", noun1.value);
    story.textContent = newStory;
    oldText.style.visibility = "hidden";
    restart.style.visibility = "visible";
    story.style.visibility = "visible";
}

//reset story
clicked.addEventListener("click", changeBack);

function changeBack() {
   oldText.style.visibility = "visible";
    restart.style.visibility = "hidden";
    clickMe.innerHTML = "Click Me";
    story.style.visibility = "hidden";
    noun1.value = "";
}




//this works
// const story1 = "bunch of text here";
// const story2 = "bunch more text";
// const story3 = "lots of text";

// const stories = [story1, story2, story3];
// const newStory = randomValueFromArray(stories);

// function randomValueFromArray(array){
//   const random = Math.floor(Math.random()*array.length);
//   return array[random];
// }


// document.querySelector("h2").innerHTML = newStory;