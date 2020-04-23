// Init Storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init UI
const ui = new UI();

// Change location event
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
	const city = document.querySelector("#city").value;
	weather.changeLocation(city);

	// Set location in LS
	storage.setLocationData(city);

	// Get and display weather
	getWeather();

	// close the modal
	$("#locModal").modal("hide");
});

// Get Weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
	weather
		.getWeather()
		.then((results) => {
			if (results.message === "city not found") {
				// Show Alert
				ui.showAlert(
					`${
						storage.getLocationData().city
					} city not found!! Please check the spelling and enter again...`
				);

				// switch to default location
				localStorage.setItem("city", "madgaon");
			} else {
				ui.paint(results);
			}
		})
		.catch((err) => console.log(err));
}
