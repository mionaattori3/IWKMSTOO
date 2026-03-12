// ------------------------------
// Basic JS Template
// ------------------------------

// Runs when the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded and JS is running");

    // Call your setup functions here
    setupButtons();
    setupEvents();
});

// ------------------------------
// selecting elements
// ------------------------------
function setupButtons() {
    const time = new Date().getHours(); //getMinutes() getSeconds() getFullYear() getMonth() getDate(Day of month) getDay(Day of week (0–6))
    alert(x);
    const myButton = document.getElementById("myButton");

    if (myButton) {
        myButton.addEventListener("click", () => {
            console.log("Button clicked");
            doSomething();
        });
    }
}

// ------------------------------
// doing something
// ------------------------------
function doSomething() {
    console.log("Doing something...");
    // Add your logic here
}

// ------------------------------
// keyboard listener
// ------------------------------
function setupEvents() {
    document.addEventListener("keydown", (event) => {
        console.log("Key pressed:", event.key);

        if (event.key === "Escape") {
            console.log("Escape pressed, stopping something");
        }

        if (event.key === "a" || event.key === "A") {
            console.log("You pressed a");
        }
    });
}
