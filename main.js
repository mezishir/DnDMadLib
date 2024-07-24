//constants to save inputs
const heroname = document.getElementById("heroname");
const vname = document.getElementById("vname");
const townname = document.getElementById("townname");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const verb1 = document.getElementById("verb1");
const verb2 = document.getElementById("verb2");
const verb3 = document.getElementById("verb3");
const verb4 = document.getElementById("verb4");
const adj1 = document.getElementById("adj1");
const adj2 = document.getElementById("adj2");
const adj3 = document.getElementById("adj3");
const adj4 = document.getElementById("adj4");
const adj5 = document.getElementById("adj5");
const adj6 = document.getElementById("adj6");
const adj7 = document.getElementById("adj7");

//Changing variables
let restart = document.querySelector(".restart");
let generate = document.querySelector(".bbtn");
let afterstory = document.querySelector(".astory");
let beforestory = document.querySelector(".bstory");


//Stories to randomly choose
const story1 = "Our hero, :heroname, was :adj1 towards :townname when he suddenly encountered a great beast!\nIt was the legendary :vname!\nLocal legends have told about this :adj2 creature.\nIt :adj3 its :item1 and :verb1 our Hero.\nOur Hero was :adj4.\:heroname :verb2 his :item2 and :verb3 at the creature.\nThe :adj5 beast was adj6.\nThe Hero :verb4 at his :townname to :adj7 applause.";
const story2 = "Our hero, :heroname, was :adj1 towards :townname when he suddenly encountered a great :dndclass!\nIt was the legendary :vname!\nLocal Legends have told about this :adj2 villain.\nIt revealed its :adj3 :item1 and :verb1 our Hero.\nOur Hero was :adj4.\n:heroname :verb2 his :item2 and :verb3 the villain.\nThe :adj5 villain was :adj6.\nThe hero :verb4 at :townname to :adj7 applause.";
const story3 = "Our hero, :heroname, was :adj1 towards :townname when he came across a damsel.\nShe was a beautiful woman named :vname.\n:heroname had heard of this damsel from local lore talking of her :adj2 beauty.\nHero :adj3 his best to :verb1 the lady with his skills in :item1.\nShe was :adj4.\n:vname :verb2 Hero away with a :verb3 of her :item2.\n:heroname was :adj5 to leave the damsel and her :adj6 smile.\nThe hero arrived at :townname :adj7.";

const stories = [story1, story2, story3];
const dndclass = ["warlock", "wizard", "sorcerer", "paladin", "druid", "cleric", "bard", "barbarian", "artificer", "rogue", "ranger", "fighter", "monk"]
const newStory = randomValueFromArray("stories");
const classes = randomValueFromArray("dndclass");
let cleared = document.querySelectorAll(".inputs");

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


//generate story
generate.addEventListener("click", updateStory);

function updateStory() {
    document.querySelector("updated").innerText = newStory;
    
    // genStory = newStory.replaceAll(":townname", townname.value);
    // genStory = newStory.replaceAll(":heroname", heroname.value);
    // genStory = newStory.replace(":dndclass", classes);
    
    generate.style.visibility = "hidden";
    beforestory.style.visibility = "hidden";
    restart.style.visibility = "visible";
    afterstory.style.visibility = "visible";
}

//reset story
restart.addEventListener("click", changeBack);

function changeBack() {
    beforestory.style.visibility = "visible";
    restart.style.visibility = "hidden";
    afterstory.style.visibility = "hidden";
    generate.style.visibility = "visible";
    cleared.value = "";
}



