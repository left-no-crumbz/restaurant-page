import "../css/base.css";
import { displayHomePage } from "./home.js";
import { displayMenuPage } from "./menu.js";
import { displayContactPage } from "./contact.js";

export const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

displayHomePage();

function wipeContent() {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

menuBtn.addEventListener("mousedown", () => {
    wipeContent();
    displayMenuPage();
});

homeBtn.addEventListener("mousedown", () => {
    wipeContent();
    displayHomePage();
});

contactBtn.addEventListener("mousedown", () => {
    wipeContent();
    displayContactPage();
});