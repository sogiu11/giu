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

// Function to display tracked data
function displayData(type, info) {
    const dataInfoDiv = document.getElementById("data-info");
    const infoDiv = document.createElement("div");
    infoDiv.className = "info-section";
    infoDiv.innerText = info;
    dataInfoDiv.appendChild(infoDiv);
}

// Run the tracking functions
displayLocation();
displayDeviceInfo();

// Update time spent every second
setInterval(displayTimeSpent, 1000);
