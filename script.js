// Get the DOM elements we'll need to interact with
const select = document.getElementById("location-select"); // Dropdown for selecting a city
const currentBtn = document.getElementById("current-location-btn"); // Button to use geolocation
const todayDiv = document.getElementById("today"); // Div for today's sunrise/sunset data
const tomorrowDiv = document.getElementById("tomorrow"); // Div for tomorrow's data
const errorDiv = document.getElementById("error"); // Div for displaying error messages

// Base URL for the Sunrise/Sunset API
const BASE_URL = "https://api.sunrisesunset.io/json";

// Function to fetch sunrise/sunset data for a given latitude and longitude
function fetchSunData(lat, lng) {
  // Get today's date in YYYY-MM-DD format for the API
  const today = new Date().toISOString().split('T')[0];
  // Get tomorrow's date by adding 1 day (86400000 milliseconds)
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  // Fetch data for both today and tomorrow using Promise.all to make it faster
  Promise.all([
    fetch(`${BASE_URL}?lat=${lat}&lng=${lng}&date=${today}`),
    fetch(`${BASE_URL}?lat=${lat}&lng=${lng}&date=${tomorrow}`)
  ])
    .then(responses => Promise.all(responses.map(res => res.json()))) // Convert both responses to JSON
    .then(([todayData, tomorrowData]) => {
      // Display the data in the Today and Tomorrow sections
      displayResults(todayData, todayDiv, "Today");
      displayResults(tomorrowData, tomorrowDiv, "Tomorrow");
      // Hide any error message if the fetch was successful
      errorDiv.classList.add("hidden");
    })
    .catch(err => {
      // Show an error message if something goes wrong with the fetch
      errorDiv.textContent = "Failed to fetch data. Please try again.";
      errorDiv.classList.remove("hidden");
    });
}

// Function to display the API data in a given container (Today or Tomorrow)
function displayResults(data, container, label) {
  // Check if the API returned a successful response
  if (data.status !== "OK") {
    container.innerHTML = `<p>Error: ${data.status}</p>`;
    return;
  }

  // Get the results from the API data
  const r = data.results;
  // Update the container with a list of sunrise/sunset details
  container.innerHTML = `
    <h2>${label}</h2>
    <ul>
      <li><strong>Sunrise:</strong> ${r.sunrise}</li>
      <li><strong>Sunset:</strong> ${r.sunset}</li>
      <li><strong>Dawn:</strong> ${r.dawn}</li>
      <li><strong>Dusk:</strong> ${r.dusk}</li>
      <li><strong>Solar Noon:</strong> ${r.solar_noon}</li>
      <li><strong>Day Length:</strong> ${r.day_length}</li>
      <li><strong>Timezone:</strong> ${r.timezone}</li>
    </ul>
  `;
}

// Add an event listener for when the user selects a city from the dropdown
select.addEventListener("change", () => {
  const coords = select.value; // Get the selected city's coordinates
  if (coords) {
    // Split the coordinates into latitude and longitude
    const [lat, lng] = coords.split(",");
    fetchSunData(lat, lng); // Fetch data for the selected location
  }
});

// Add an event listener for the "Use My Current Location" button
currentBtn.addEventListener("click", () => {
  // Use the browser's Geolocation API to get the user's location
  navigator.geolocation.getCurrentPosition(
    pos => {
      // If successful, fetch data using the user's coordinates
      fetchSunData(pos.coords.latitude, pos.coords.longitude);
    },
    err => {
      // If geolocation fails, show an error message
      errorDiv.textContent = "Geolocation failed or permission denied.";
      errorDiv.classList.remove("hidden");
    }
  );
});
