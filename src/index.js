import "./base.css";
import { homePage } from "./home.js";

const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

homePage();

menuBtn.addEventListener("mousedown", () => {
    const childrenNodes = Array.from(contentDiv.children);

    for (const childNode of childrenNodes) {
        console.log(childNode);
        contentDiv.removeChild(childNode);
    }

});

homeBtn.addEventListener("mousedown", () => {
    homePage();
});
