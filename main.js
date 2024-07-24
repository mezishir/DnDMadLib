
//Changing variables
let restart = document.querySelector(".restart");
let generate = document.querySelector(".bbtn");
let afterstory = document.querySelector(".astory");
let beforestory = document.querySelector(".bstory");
//let cleared = document.querySelectorAll(".inputs");

//Stories to randomly choose
var story1 = "Our hero, :heroname, was :adj1 towards :townname when he suddenly encountered a great beast!\nIt was the legendary :vname!\nLocal legends have told about this :adj2 creature.\nIt :adj3 its :item1 and :verb1 our Hero.\nOur Hero was :adj4.\:heroname :verb2 his :item2 and :verb3 at the creature.\nThe :adj5 beast was adj6.\nThe Hero :verb4 at his :townname to :adj7 applause.";
var story2 = "Our hero, :heroname, was :adj1 towards :townname when he suddenly encountered a great :dndclass!\nIt was the legendary :vname!\nLocal Legends have told about this :adj2 villain.\nIt revealed its :adj3 :item1 and :verb1 our Hero.\nOur Hero was :adj4.\n:heroname :verb2 his :item2 and :verb3 the villain.\nThe :adj5 villain was :adj6.\nThe hero :verb4 at :townname to :adj7 applause.";
var story3 = "Our hero, :heroname, was :adj1 towards :townname when he came across a damsel.\nShe was a beautiful woman named :vname.\n:heroname had heard of this damsel from local lore talking of her :adj2 beauty.\nHero :adj3 his best to :verb1 the lady with his skills in :item1.\nShe was :adj4.\n:vname :verb2 Hero away with a :verb3 of her :item2.\n:heroname was :adj5 to leave the damsel and her :adj6 smile.\nThe hero arrived at :townname :adj7.";

//story1 = story1.replaceAll(":heroname", heroname1);

const stories = [story1, story2, story3];
const dndclass = ["warlock", "wizard", "sorcerer", "paladin", "druid", "cleric", "bard", "barbarian", "artificer", "rogue", "ranger", "fighter", "monk"]

var newStory = randomValueFromArray(stories);
var classes = randomValueFromArray(dndclass);

function randomValueFromArray(stories){
  var numberofstories = stories.length;
  var randStory = Math.floor(Math.random()*numberofstories);
  var selectStory = stories[randStory];
  return selectStory;
}
function randomValueFromArray(dndclasses){
  var numberofclasses = dndclasses.length;
  var randClass = Math.floor(Math.random()*numberofclasses);
  var selectClass = dndclasses[randClass];
  return selectClass;
}

//generate story
generate.addEventListener("click", updateStory);

function updateStory() {
  //variables saved from inputs
  let heroname1 = document.getElementById("heroname").value;
  let townname1 = document.getElementById("townname").value;
  let vname = document.getElementById("vname").value;
  let item1 = document.getElementById("item1").value;
  let item2 = document.getElementById("item2").value;
  let verb1 = document.getElementById("verb1").value;
  let verb2 = document.getElementById("verb2").value;
  let verb3 = document.getElementById("verb3").value;
  let verb4 = document.getElementById("verb4").value;
  let adj1 = document.getElementById("adj1").value;
  let adj2 = document.getElementById("adj2").value;
  let adj3 = document.getElementById("adj3").value;
  let adj4 = document.getElementById("adj4").value;
  let adj5 = document.getElementById("adj5").value;
  let adj6 = document.getElementById("adj6").value;
  let adj7 = document.getElementById("adj7").value;
   
   
   //replacement in string
    newStory = newStory.replaceAll(":heroname", heroname1);
    newStory = newStory.replaceAll(":townname", townname1);
    newStory = newStory.replace(":dndclass", classes);
    newStory = newStory.replaceAll(":vname", vname);
    newStory = newStory.replace(":item1", item1);
    newStory = newStory.replace(":item2", item2);
    newStory = newStory.replace(":verb1", verb1);
    newStory = newStory.replace(":verb2", verb2);
    newStory = newStory.replace(":verb3", verb3);
    newStory = newStory.replace(":verb4", verb4);
    newStory = newStory.replace(":adj1", adj1);
    newStory = newStory.replace(":adj2", adj2);
    newStory = newStory.replace(":adj3", adj3);
    newStory = newStory.replace(":adj4", adj4);
    newStory = newStory.replace(":adj5", adj5);
    newStory = newStory.replace(":adj6", adj6);
    newStory = newStory.replace(":adj7", adj7);
   
    //create story. hide unneccessary divs
    document.querySelector("#updated").textContent = newStory;
    generate.style.visibility = "hidden";
    beforestory.style.visibility = "hidden";
    restart.style.visibility = "visible";
    afterstory.style.visibility = "visible";
}

//reset story
  restart.addEventListener("click", changeBack);

  function changeBack() {
    //story is not regenerating. Remaining code not needed.
    //Story regens on page reload.
    //Also clears values of inputs.
    //Leaving this here in case needed in future.
      // beforestory.style.visibility = "visible";
      // restart.style.visibility = "hidden";
      // afterstory.style.visibility = "hidden";
      // generate.style.visibility = "visible";
      // cleared.value = "";
      window.location.reload();
  }



