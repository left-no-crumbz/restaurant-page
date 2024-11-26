import "../css/base.css";
import { contentDiv as content } from "./index.js";

const div = document.createElement("div");

const visitTitle = document.createElement("h2");
const location = document.createElement("p");
const hours = document.createElement("p");
const contact = document.createElement("p");


visitTitle.textContent = "Visit Us Today";
location.textContent = "📍 Location: 123 Fresh Street, Gourmet City, Salad State";
hours.textContent = "🕒 Hours: Monday - Saturday: 10 AM - 9 PM | Sunday: 11 AM - 8 PM";
contact.textContent = "📞 Contact: (555) 123-4567";

div.appendChild(visitTitle);
div.appendChild(location);
div.appendChild(hours);
div.appendChild(contact);

div.classList.add("contact");
