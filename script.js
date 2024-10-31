// JavaScript to make the navbar visible for 5 seconds on page load
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    // Remove the initial-visible class after 5 seconds
    setTimeout(() => {
        navbar.classList.remove("initial-visible");
    }, 5000); // 5000 milliseconds = 5 seconds
});
