
// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the footer
document.querySelector("#currentyear").textContent = currentYear;

// Get the last modification date
document.querySelector("#lastModified").textContent = document.lastModified;


// Weather information
const temperature = 28;
const windSpeed = 15;


// Calculate wind chill
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}


// Check if wind chill calculation is possible
if (temperature <= 10 && windSpeed > 4.8) {
    document.querySelector("#windchill").textContent =
        calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
    document.querySelector("#windchill").textContent = "N/A";
}
