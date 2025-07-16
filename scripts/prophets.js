const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector("#cards");
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    cards.innerHTML = "";
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        card.classList.add("card-builder");
        const fullName = document.createElement("h2");
        const birthdate = document.createElement("p");
        birthdate.classList.add("birthdate");
        const birthPlace = document.createElement("p");
        birthPlace.classList.add("birth-place");
        const portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', 340);
        portrait.setAttribute('height', 440);

        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);

    });
}

getProphetData();