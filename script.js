// Get the DOM elements we'll need to interact with
const select = document.getElementById("location-select");
const currentBtn = document.getElementById("current-location-btn");
const todayDiv = document.getElementById("today");
const tomorrowDiv = document.getElementById("tomorrow");
const errorDiv = document.getElementById("error");

// Base URL for the Sunrise/Sunset API
const BASE_URL = "https://api.sunrisesunset.io/json";

// Function to fetch sunrise/sunset data for a given latitude and longitude
function fetchSunData(lat, lng) {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  // Fetch data for both today and tomorrow using Promise.all to make it faster
  Promise.all([
    fetch(`${BASE_URL}?lat=${lat}&lng=${lng}&date=${today}`),
    fetch(`${BASE_URL}?lat=${lat}&lng=${lng}&date=${tomorrow}`)
  ])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(([todayData, tomorrowData]) => {
      displayResults(todayData, todayDiv, "Today");
      displayResults(tomorrowData, tomorrowDiv, "Tomorrow");
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
  if (data.status !== "OK") {
    container.innerHTML = `<p>Error: ${data.status}</p>`;
    return;
  }

  // Get the results from the API data
  const r = data.results;
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
  const coords = select.value;
  if (coords) {
    // Split the coordinates into latitude and longitude
    const [lat, lng] = coords.split(",");
    fetchSunData(lat, lng);
  }
});

// Add an event listener for the "Use My Current Location" button
currentBtn.addEventListener("click", () => {
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
