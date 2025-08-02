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

// Dialogs

document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelectorAll("button[data-dialog]");
    openButton.forEach(button => {
        const dialogId = button.getAttribute("data-dialog");
        const dialog = document.getElementById(dialogId);
        button.addEventListener("click", () => {
            dialog.showModal();
        });
    });

    const closeButton = document.querySelectorAll(".closeDialog");
    closeButton.forEach(button => {
        button.addEventListener("click", (event) => {
            const dialog = event.target.closest("dialog");
            dialog.close();
        });
    });
})


// Thank you page message dispaly

const getString = window.location.search;
const myInfo = new URLSearchParams(getString);

const containerSubs = document.getElementById('subscription');

containerSubs.innerHTML = `
<H2>Welcome ${myInfo.get('first')}</h2>
<p>You were succesfully subscribed!</p>
<p>Details:</p> 
<p>Name: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Phone Number: ${myInfo.get('phone')}</p>
<p>Business Name: ${myInfo.get('organization')}</p>
<p>Membership: ${myInfo.get('membership')}
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

