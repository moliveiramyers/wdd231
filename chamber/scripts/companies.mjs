const membership = "data/members.json";
const cards = document.querySelector("#company-container");
let isListView = false;
cards.classList.add("grid");

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



export async function getCompanyData() {
    const response = await fetch(membership);
    try {
        if (response.ok) {
            const data = await response.json();
            displayCompanies(data.companies);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch(error) {
        console.log(error);
    }
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

// getCompanyData()
