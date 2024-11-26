import "./styles.css";
import citrusSalad from "./assets/citrus-salad.webp";
import proteinSalad from "./assets/protein-salad.webp";
import diySalad from "./assets/diy-salad.webp";
import mediterraneanSalad from "./assets/mediterranean-salad.webp";

const grid = document.createElement("div");
grid.classList.add("grid");

const citrusSaladImg = document.createElement("img");
const proteinSaladImg = document.createElement("img");
const diySaladImg = document.createElement("img");
const mediterraneanSaladImg = document.createElement("img");

const citrusSaladTitle = document.createElement("h2");
const proteinSaladTitle = document.createElement("h2");
const diySaladTitle = document.createElement("h2");
const mediterraneanSaladTitle = document.createElement("h2");


const citrusDesc = document.createElement("p");
const proteinDesc = document.createElement("p");
const mediterraneanDesc = document.createElement("p");
const diyDesc = document.createElement("p");


citrusDesc.textContent = "A refreshing mix of arugula, grapefruit, orange slices, avocado, and toasted almonds, topped with a tangy honey-lime dressing.";
proteinDesc.textContent = "Grilled chicken, boiled eggs, quinoa, cherry tomatoes, and kale, served with a creamy tahini dressing.";
mediterraneanDesc.textContent = "Spinach, feta cheese, olives, cucumber, roasted red peppers, and a drizzle of our signature Greek vinaigrette.";
diyDesc.textContent = "Choose from over 50 fresh ingredients to create a salad as unique as you are.";

citrusSaladTitle.textContent = "The Citrus Bliss";
proteinSaladTitle.textContent = "The Protein Powerhouse";
mediterraneanSaladTitle.textContent = "The Mediterranean Delight";
diySaladTitle.textContent = "DIY Salad";

citrusSaladImg.src = citrusSalad;
proteinSaladImg.src = proteinSalad;
diySaladImg.src = proteinSalad;
mediterraneanSalad.src = mediterraneanSalad;





// TODO: Add images, title, and desc as block then place-item: center them