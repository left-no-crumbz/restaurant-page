import heroImg from "./assets/hero-image.webp";
import freshImg from "./assets/fresh.png";
import creativeImg from "./assets/creative.png";
import healthyImg from "./assets/healthy.png";

import "./styles.css";

console.log("Hi Mom!");

// Hero section
const content = document.getElementById("content");
const text = document.createElement("section");
const img = document.createElement("img");
const title = document.createElement("h1");
const paragraph = document.createElement("p");
const heroDiv = document.createElement("div");

// Our promise section
const ourPromiseSection = document.createElement("section");
const ourPromiseHeader = document.createElement("h2");
const promiseContent = document.createElement("p");

// Why Choose Sage Gourmet section
const whySageSection = document.createElement("section");
const whySageHeader = document.createElement("h2");
const cardWrapper = document.createElement("div");

const freshCard = document.createElement("div");
const creativeCard = document.createElement("div");
const healthyCard = document.createElement("div");
const freshIcon = document.createElement("img");
const creativeIcon = document.createElement("img");
const healthyIcon = document.createElement("img");
const freshContent = document.createElement("p");
const creativeContent = document.createElement("p");
const healthyContent = document.createElement("p");

// set the text contents and src
paragraph.textContent = "At Sage Gourmet, we believe that every meal should be a celebration of freshness, health, and unforgettable taste. Specializing in salads that are as vibrant as they are delicious, we transform simple, wholesome ingredients into culinary works of art."
title.textContent = "Welcome to Sage Gourmet – Where Freshness Meets Flavor";
ourPromiseHeader.textContent = "Our Promise"
promiseContent.textContent = "We hand-select the freshest greens, the ripest vegetables, and the most flavorful toppings to craft salads that not only nourish but delight your senses. Whether you're craving something light and crisp or hearty and satisfying, our menu has something to suit every palate.";
img.src = heroImg;
whySageHeader.textContent = "Why Choose Us?"
freshIcon.src = freshImg;
creativeIcon.src = creativeImg;
healthyIcon.src = healthyImg;
freshContent.textContent = "Locally-sourced ingredients for unbeatable flavor and sustainability.";


// add classes to the text div
text.classList.add("hero-text");
text.classList.add("flex");
text.classList.add("column");

heroDiv.classList.add("flex");
heroDiv.classList.add("align-center");
heroDiv.classList.add("hero-div");
img.classList.add("hero-img");


ourPromiseSection.classList.add("promise-section");
ourPromiseHeader.classList.add("promise-header");
promiseContent.classList.add("promise-content");

freshCard.classList.add("card");
creativeCard.classList.add("card");
healthyCard.classList.add("card");


cardWrapper.classList.add("card-wrapper");
cardWrapper.classList.add("flex");
cardWrapper.classList.add("justify-space-between");
whySageHeader.classList.add("sage-header");





text.appendChild(title);
text.appendChild(paragraph);

ourPromiseSection.appendChild(ourPromiseHeader);
ourPromiseSection.appendChild(promiseContent);

heroDiv.appendChild(text);
heroDiv.appendChild(img);

whySageSection.appendChild(whySageHeader);
cardWrapper.appendChild(freshCard);
cardWrapper.appendChild(creativeCard);
cardWrapper.appendChild(healthyCard);
freshCard.appendChild(freshIcon);
freshCard.appendChild(freshContent);
creativeCard.appendChild(creativeIcon);
creativeCard.appendChild(creativeContent);
healthyCard.appendChild(healthyIcon);
healthyCard.appendChild(healthyContent);

whySageSection.appendChild(cardWrapper);

content.appendChild(heroDiv);
content.appendChild(ourPromiseSection);
content.append(whySageSection);

