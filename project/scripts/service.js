// // hamburger button
// const navbtn = document.querySelector("#ham-btn");
// const navBar = document.querySelector("#nav-bar");
// const hideP = document.querySelector("header h1")
// const hideL = document.querySelector(".logo")


// navbtn.addEventListener("click", () => {
//     navbtn.classList.toggle("show");
//     navBar.classList.toggle("show");
//     hideP.classList.toggle("hide");
//     hideL.classList.toggle("hide");
// });



// hamburger button
const navbtn = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
const hideP = document.querySelector("header p")
const hideL = document.querySelector(".logo")


navbtn.addEventListener("click", () => {
    navbtn.classList.toggle("show");
    navBar.classList.toggle("show");
    hideP.classList.toggle("hide");
    hideL.classList.toggle("hide");
});

document.getElementById('myButton').onclick = function () {
    window.location.href = 'contact.html';
};

document.getElementById('WhatsApp').onclick = function () {
    window.location.href = 'https://wa.me/351965883627';
};
document.getElementById('bookButton').onclick = function () {
    window.location.href = 'contact.html';
};

// last modified
const year = document.querySelector("#year");
const lastModified = document.querySelector("#modified");

const today = new Date();

year.textContent = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;


// Service Page DIALOG

const openDialog = document.getElementById('openDialog');
const healthCare = document.getElementById('healthCare');
const closeDialog = document.getElementById('closeDialog');

openDialog.addEventListener('click', () => healthCare.showModal());
closeDialog.addEventListener('click', () => healthCare.close())
