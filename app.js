// Get the button and the dropdown menu
let button = document.getElementById("dropdown-btn");
let dropdown = document.getElementById("dropdown-info");

// Set the initial state of the dropdown menu to be hidden
dropdown.style.display = "none";

// Add an event listener to the button to toggle the dropdown menu when clicked
button.addEventListener("click", function() {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});