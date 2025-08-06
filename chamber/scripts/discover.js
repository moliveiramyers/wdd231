// Hamburger
const navbtn = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
const hideP = document.querySelector("header p");


navbtn.addEventListener("click", () => {
    navbtn.classList.toggle("show");
    navBar.classList.toggle("show");
    hideP.classList.toggle("hide");
});

// last modified
const year = document.querySelector("#year");
const lastModified = document.querySelector("#modified");

const today = new Date();

year.textContent = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

// interest cards

import { interest } from "../data/interest.mjs";

const interestCards = document.getElementById('cardsInterest');

const displayInterests = () => {
    interestCards.innerHTML = "";

    interest.forEach(item => {
        const interestCard = document.createElement("section");
        interestCard.classList.add("interest-card");

        // creating elements
        const title = document.createElement("h2");
        const figure = document.createElement("figure")
        const image = document.createElement("img");
        const address = document.createElement("p");
        const description = document.createElement("p");
        const button = document.createElement("button");
        const dialog = document.createElement("dialog");
        const closeButton = document.createElement("button");


        // adding image attributes

        image.src = item.image;
        image.alt = item.title;
        image.width = 300;
        image.height = 200;
        image.loading = "lazy";
        figure.appendChild(image);

        title.textContent = item.title;

        address.textContent = `Address: ${item.address}`;
        address.classList.add("address");

        description.textContent = `Description: ${item.description}`;
        description.classList.add("description");
        button.textContent = "Learn more";
        button.classList.add("learn-more");


        // modal



        // Adding the cards info to the html

        interestCard.appendChild(title);
        interestCard.appendChild(figure);
        interestCard.appendChild(address);
        interestCard.appendChild(description);
        interestCard.appendChild(button);
        interestCard.appendChild(dialog);

        interestCards.appendChild(interestCard);

        
        dialog.innerHTML = `
            <h2>${item.title}</h2>
            <address>${item.address}</address>
            <p>${item.description}</p>
        `;
        closeButton.textContent = "Close";
        closeButton.addEventListener("click", () => dialog.close());
        dialog.appendChild(closeButton);

        // Button click opens dialog
        button.addEventListener("click", () => {
            dialog.showModal();
        });

    });
}

displayInterests();


const sidebarMessage = document.getElementById("sidebar-message");

const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

if (!lastVisit) {
    sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const difference = now - parseInt(lastVisit, 10);

    const daysBetween = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (daysBetween < 1) {
        sidebarMessage.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        sidebarMessage.textContent = "You last visited 1 day ago.";
    } else {
        sidebarMessage.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

// Update the last visit time in localStorage
localStorage.setItem("lastVisit", now);
