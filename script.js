// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// =========================
// CURRENT YEAR
// =========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );

        contactForm.reset();

    });

}


// =========================
// VIDEO BUTTON
// =========================

document.querySelectorAll(".play-button").forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "Add your YouTube video link to this button."
        );

    });

});
