const container = document.getElementById("company-premium");
const membershipData = "data/members.json";


export async function getPremiumCompany() {
    const response = await fetch(membershipData);
    try {
        if (response.ok) {
            const data = await response.json();
            const spotlightMembers = data.companies.filter(company =>
                company.membership === 'gold' || company.membership === 'silver'
            ).sort(() => Math.random() - 0.5).slice(0, 3);;

            displayCompanies(spotlightMembers);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }

}

const displayCompanies = (companies) => {
    container.innerHTML = "";

    companies.forEach(company => {
        const card = document.createElement("section");
        card.classList.add("company-card");

        const compName = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const membershipLevel = document.createElement("p");
        const url = document.createElement("a");


        compName.textContent = company.name;

        address.textContent = `Address: ${company.address}`;
        address.classList.add("address");

        phone.textContent = `Phone: ${company.phone}`;
        phone.classList.add("phone");
        const capitalized = company.membership.charAt(0).toUpperCase() + company.membership.slice(1);
        membershipLevel.textContent = capitalized;
        membershipLevel.classList.add("membership-level")
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


        card.appendChild(icon);
        card.appendChild(compName);
        card.appendChild(address);
        card.appendChild(phone);
        card.append(membershipLevel);
        card.appendChild(url);
        container.appendChild(card);

    });
}

// getCompanyData()
