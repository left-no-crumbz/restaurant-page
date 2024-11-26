import "../css/base.css";
import "../css/contact.css";
import { contentDiv as content } from "./index.js";

export function displayContactPage() {
    const div = document.createElement("div");

    const visitTitle = document.createElement("h2");
    const location = document.createElement("p");
    const hours = document.createElement("p");
    const contact = document.createElement("p");
    const map = document.createElement("iframe");
    
    visitTitle.textContent = "Visit Us Today";
    location.textContent = "📍 Location: 123 Fresh Street, Gourmet City, Salad State";
    hours.textContent = "🕒 Hours: Monday - Saturday: 10 AM - 9 PM | Sunday: 11 AM - 8 PM";
    contact.textContent = "📞 Contact: (555) 123-4567";
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.8200354463224!2d120.95201596934751!3d14.146675557749653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd79bb0bfc7949%3A0xf13365080afe0a2a!2sGourmet%20Farms!5e0!3m2!1sen!2sph!4v1732604728060!5m2!1sen!2sph";
    map.width = "600";
    map.height = "450";
    map.style.border = "0";
    map.allowFullscreen = "";
    map.loading = "eager";
    map.referrerPolicy = "no-referrer-when-downgrade";

    div.appendChild(visitTitle);
    div.appendChild(location);
    div.appendChild(hours);
    div.appendChild(contact);
    div.appendChild(map);

    div.classList.add("contact");
    
    content.appendChild(div);
}
