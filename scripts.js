// Select the logo and link
const logo = document.getElementById("game-logo");
const logoLink = document.getElementById("logo-link");

// Add a click event listener to the logo link
logoLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent immediate navigation

    // Add the "clicked" class to trigger the animation
    logo.classList.add("clicked");

    // Wait for the animation to complete, then navigate
    setTimeout(() => {
        window.location.href = logoLink.href; // Redirect to the game page
    }, 500); // Match the duration of the animation (0.5s)
});
