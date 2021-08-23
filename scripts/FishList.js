
import { Fish } from "./Fish.js";
import { getMostHolyFish, getSoldierFish } from "./FishData.js";

export const FishList = () => {
    const holyFish = getMostHolyFish();
    addFishToDom(holyFish);
    const soldierFish = getSoldierFish();
    addFishToDom(soldierFish);
}

const addFishToDom = (arrayOfFish) => {
    const contentElement = document.querySelector(".fishList");
    let fishHTMLRepresentation = "";
    for (const oneThingFromTheSea of arrayOfFish) {
        fishHTMLRepresentation += Fish(oneThingFromTheSea);
    }
       contentElement.innerHTML += `${fishHTMLRepresentation}`
    
}


   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    // Get a reference to the `<section class="fishList">` element
    //const contentElement = document.querySelector(".fishList");
    //const allFishes = getFish();
    //const theFishes = getMostHolyFish(); //<---// setting a varaible equal to a function 
    // // Add to the existing HTML in the content element
    // addFishToDom(holyFishes);
    // const soldierFish = getSoldierFish();
    
    //addFishToDom(soldierFish);
    //const unworthyFish 
    //YOU HAVE TO CHANGE THESE NOW TO MATCH "theFishes"
	//let fishHTMLRepresentation = "";
	//for (const oneThingFromTheSea of allFishes) {
	//	fishHTMLRepresentation += Fish(oneThingFromTheSea);
	//
	
    //contentElement.innerHTML += `${fishHTMLRepresentation}`
    //this section above doesnt care as long as....
    //GET FISH SHOULD BE CALLED FISH DATA
    //const addFishToDom = (arrayOfFish) => {
    //const contentElement = document.querySelector(".fishList");

