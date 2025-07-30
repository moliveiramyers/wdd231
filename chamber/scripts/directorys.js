import { apiFetch } from "./weather.mjs";
import { forecastFetch } from "./forecast.mjs";
import { getCompanyData } from "./companies.mjs";
import { getPremiumCompany } from "./premium.mjs";
// menu button
apiFetch();
forecastFetch();
getCompanyData();
getPremiumCompany();


const navbtn = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
const hideP = document.querySelector("header p")


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

