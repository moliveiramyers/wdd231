// menu button

const navbtn = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
const hideH1 = document.querySelector("header h1")
let isListView = false;
const membership = "data/members.json";
const cards = document.querySelector("#company-container");
cards.classList.add("grid");
getCompanyData();

navbtn.addEventListener("click", () => {
    navbtn.classList.toggle("show");
    navBar.classList.toggle("show");
    hideH1.classList.toggle("hide");
});

// last modified
const year = document.querySelector("#year");
const lastModified = document.querySelector("#modified");

const today = new Date();

year.textContent = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

// cards or list

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
    isListView = false;
    cards.classList.remove("list");
    cards.classList.add("grid");
    getCompanyData();
});

listbutton.addEventListener("click", () => {
    isListView = true;
    cards.classList.remove("grid");
    cards.classList.add("list");
    getCompanyData();
});

async function getCompanyData() {
    const response = await fetch(membership);
    const data = await response.json();
    // console.table(data.prophets);
    displayCompanies(data.companies);
}


const displayCompanies = (companies) => {
    cards.innerHTML = "";

    companies.forEach(company => {
        const card = document.createElement("section");
        card.classList.add("company-card");

        const compName = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const url = document.createElement("a");


        compName.textContent = company.name;
        
        address.textContent = `Address: ${company.address}`;
        address.classList.add("address");

        phone.textContent = `Phone: ${company.phone}`;
        phone.classList.add("phone");
        url.href = company.url;
        url.classList.add("url")
        url.textContent = company.url;
        url.target = "_blank";


        

        const icon = document.createElement("img");
        icon.setAttribute('src', company.icon);
        icon.setAttribute('alt', `company ${company.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', 100);
        icon.setAttribute('height', 150);

        if (!isListView) {
            card.appendChild(icon);
        }
        card.appendChild(compName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        cards.appendChild(card);

    });
}

getCompanyData()
