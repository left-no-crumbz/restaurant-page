import "./base.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";

export const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

homePage();

function wipeContent() {
    while (contentDiv.children.length !== 0) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

menuBtn.addEventListener("mousedown", () => {
    wipeContent();
    menuPage();
});

homeBtn.addEventListener("mousedown", () => {
    wipeContent();
    homePage();
});
