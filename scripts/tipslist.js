/*this is where you loop*/


import { tipsData } from "./tipdata.js";
import { tips } from "./tipsformat.js";

export const tipslist = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".tips-page");
    const allTips = tipsData();

    // // Add to the existing HTML in the content element
	let tipsHTMLRepresentation = `<ul>`;
	for (const oneTip of allTips) {
		tipsHTMLRepresentation += tips(oneTip);
	} 
	tipsHTMLRepresentation += `</ul>`
    contentElement.innerHTML += `${tipsHTMLRepresentation}`
}