
// hamburger button
const navbtn = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
const hideP = document.querySelector("header h1")
const hideL = document.querySelector(".logo")


navbtn.addEventListener("click", () => {
    navbtn.classList.toggle("show");
    navBar.classList.toggle("show");
    hideP.classList.toggle("hide");
    hideL.classList.toggle("hide");
});

// last modified
const year = document.querySelector("#year");
const lastModified = document.querySelector("#modified");

const today = new Date();

year.textContent = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

const containerSubs = document.getElementById('serviceRequest');

// Thank you page message display

document.addEventListener('DOMContentLoaded', function () {
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        const now = new Date();
        const formatted = now.toLocaleString('pt-BR', {
            timeZone: 'America/Recife',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        timestampField.value = formatted.replace(',', '')
    }
})

    const getString = window.location.search;
    const myInfo = new URLSearchParams(getString);




    containerSubs.innerHTML = `
        <H2>Welcome ${myInfo.get('first')}</h2>
        <p>You were succesfully subscribed!</p>
        <p>Details:</p> 
        <p>Name: ${myInfo.get('first')} ${myInfo.get('last')}</p>
        <p>Email: ${myInfo.get('email')}</p>
        <p>Phone Number: ${myInfo.get('phone')}</p>
        <p>Date: ${myInfo.get('start-date')}
        to ${myInfo.get('end-date')}</p>
        <p>at ${myInfo.get('timestamp')}</p>
        `;

// Stars When subscribed using js + css

document.addEventListener("DOMContentLoaded", () => {
    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        star.style.left = Math.random() * 100 + "vw";

        const size = Math.random() * 8 + 5;
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.animationDuration = Math.random() * 2 + 2 + "s";

        document.getElementById("star-container").appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 4000);
    }

    let count = 0;
    const interval = setInterval(() => {
        createStar();
        count++;
        if (count > 30) clearInterval(interval);
    }, 100);
});
