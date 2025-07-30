const navbtn = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");
import { courses } from "./course.mjs";

navbtn.addEventListener("click", () => {
    navbtn.classList.toggle("show");
    navBar.classList.toggle("show");
});

const year = document.querySelector("#year");
const lastModified = document.querySelector("#modified");

const today = new Date();

year.textContent = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;



// Courses Cards and Filters
const courseContainer = document.getElementById("course-container");
const getTotalCourses = document.getElementById("total-courses");
const getTotalCredits = document.getElementById("total-credits");

function selectcourses(coursesList) {
    courseContainer.innerHTML = "";
    getTotalCourses.innerHTML = "";
    getTotalCredits.innerHTML = "";
    const totalCredits = coursesList.reduce((sum, course) => sum + course.credits, 0);
    coursesList.forEach(course => {
        const courseCard = document.createElement("p");
        courseCard.classList.add("course-card");
        if (course.completed) {
            courseCard.classList.add("completed")
        };

        // Dialog Box Functionality
        const openDialButton = document.createElement("button");
        openDialButton.classList.add("course-button"); 
        const dialogBox = document.getElementById("dialogButton");
        const closeDialButton = document.getElementById("closeButton");
        const dialogBoxHeader = document.querySelector("#dialogButton h2");
        const dialogBoxCont = document.querySelector("#dialogButton p");

        courseCard.innerHTML = `${course.subject} ${course.number}`;
        openDialButton.appendChild(courseCard);
        //

        // Add info to the Course button
        getTotalCourses.innerHTML = `The total number of courses listed below is ${coursesList.length}`;
        getTotalCredits.innerHTML = `The total number of credits for courses above is ${totalCredits}`
        courseContainer.appendChild(openDialButton);

        // Add Event Listener of Dialog
        openDialButton.addEventListener("click", () => {
            dialogBox.showModal();
            dialogBoxHeader.textContent = `${course.title}`;
            dialogBoxCont.textContent = `${course.description}`;
        });

        closeDialButton.addEventListener("click", () => {
            dialogBox.close();
        });
        // 
    })

};

document.addEventListener("DOMContentLoaded", () => {
    filterCourses("all");
});

function filterCourses(category) {
    let filteredCourses;

    if (category === "all") {
        filteredCourses = courses;

    }
    else {
        filteredCourses = courses.filter(course =>
            course.subject.toLowerCase() === category.toLowerCase()
        );

    }

    selectcourses(filteredCourses);
}

const filterButtons = document.querySelectorAll(".bnt");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        filterCourses(category);
    });
});




