// Function to get approximate location using IP (simulated here)
function displayLocation() {
    const locationInfo = "Location: Unknown (simulated)";
    displayData("location", locationInfo);
}

// Function to get the device and browser type
function displayDeviceInfo() {
    const deviceInfo = `Device: ${navigator.userAgent}`;
    displayData("device", deviceInfo);
}

// Function to track time on page
let startTime = new Date();
function displayTimeSpent() {
    const timeSpent = Math.floor((new Date() - startTime) / 1000);
    const timeInfo = `Time spent on page: ${timeSpent} seconds`;
    displayData("timeSpent", timeInfo);
}

function displayData(type, info) {
    const existingElement = document.getElementById(type);
    if (existingElement) {
        existingElement.innerText = info;
    } else {
        const dataInfoDiv = document.getElementById("data-info");
        const infoDiv = document.createElement("div");
        infoDiv.id = type; // set ID to update data instead of adding new lines
        infoDiv.className = "info-section";
        infoDiv.innerText = info;
        dataInfoDiv.appendChild(infoDiv);
    }
}

// Run the tracking functions
displayLocation();
displayDeviceInfo();

// Update time spent every second
setInterval(displayTimeSpent, 1000);
// Function to track and display mouse position
document.addEventListener("mousemove", (event) => {
    const mouseInfo = `Mouse at: X=${event.pageX}, Y=${event.pageY}`;
    displayData("mouseMove", mouseInfo);
});
    // Function to track and display mouse position
document.addEventListener("mousemove", (event) => {
    const mouseInfo = `Mouse at: X=${event.pageX}, Y=${event.pageY}`;
    displayData("mouseMove", mouseInfo);
});

// Function to track and display scroll position
window.addEventListener("scroll", () => {
    const scrollPosition = `Scroll position: ${window.scrollY}px`;
    displayData("scroll", scrollPosition);
});
// Function to track clicks on a specific button
document.getElementById("trackButton").addEventListener("click", () => {
    const clickInfo = "Button clicked!";
    displayData("click", clickInfo);
});
