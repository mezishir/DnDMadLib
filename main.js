const noun1 = document.getElementById("noun");
const story = document.querySelector(".story");

const storyText = "Replacing :insertX Here!";

document.querySelector("button").addEventListener("click", updateName);

function updateName() {
    document.querySelector("button").innerHTML = "Clicked!";
    let newStory = storyText;
    newStory = newStory.replaceAll(":insertX", noun1.value);
    story.textContent = newStory;

}
