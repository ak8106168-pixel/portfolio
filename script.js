// ===============================
// MOBILE NAVIGATION
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// PROJECT MODAL
// ===============================

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");


function showProject(project) {

    modal.classList.add("active");

    if (project === "electric") {

        modalTitle.textContent =
            "AI-Integrated Electric Saver System";

        modalText.textContent =
            "This project uses sensors such as PIR, LDR and DHT11 with an ESP32 controller to monitor occupancy, light and environmental conditions. The goal is to intelligently control electrical devices and reduce unnecessary energy consumption.";

    }

    else if (project === "security") {

        modalTitle.textContent =
            "Python Security Utilities";

        modalText.textContent =
            "A collection of Python-based security tools including password generation, password strength evaluation, login attempt limiting and other basic security utilities.";

    }

    else if (project === "portfolio") {

        modalTitle.textContent =
            "Personal Portfolio Website";

        modalText.textContent =
            "A responsive portfolio website developed using HTML, CSS and JavaScript. It presents education, technical skills, projects, certifications, career direction and professional goals.";

    }

}


// Close modal

closeModal.addEventListener("click", function () {
    modal.classList.remove("active");
});


// Close when clicking outside modal

modal.addEventListener("click", function (event) {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});


// Close modal using Escape key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        modal.classList.remove("active");
    }

});