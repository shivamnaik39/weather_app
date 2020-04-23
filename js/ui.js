class UI {
	constructor() {
		this.location = document.querySelector("#w-location");
		this.desc = document.querySelector("#w-desc");
		this.string = document.querySelector("#w-string");
		this.details = document.querySelector("#w-details");
		this.humidity = document.querySelector("#w-humidity");
		this.feelsLike = document.querySelector("#w-feels-like");
		this.icon = document.querySelector("#w-icon");
		this.pressure = document.querySelector("#w-pressure");
		this.wind = document.querySelector("#w-wind");
	}

	paint(weather) {
		this.location.textContent = `${weather.name}, ${weather.sys.country}`;

		this.desc.textContent = weather.weather[0].description;

		this.string.textContent = `${
			convertKelvin(weather.main.temp).celcius
		} °C , (${convertKelvin(weather.main.temp).fahrenheit} °F)`;

		this.feelsLike = document.querySelector("#w-feels-like");
		this.icon.setAttribute(
			"src",
			`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
		);

		this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;

		this.feelsLike.textContent = `Feels Like: ${
			convertKelvin(weather.main.feels_like).celcius
		} °C , (${convertKelvin(weather.main.feels_like).fahrenheit} °F)`;

		this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;

		this.wind.textContent = `Wind: ${weather.wind.speed} m/s , ${windDirection(
			weather.wind.deg
		)} `;
	}

	// Show Alert
	showAlert(message) {
		// Create div
		const div = document.createElement("div");
		// Apply Classes
		div.className = "alert alert-danger";

		// set text content
		div.appendChild(document.createTextNode(message));

		// Select paraents
		const column = document.querySelector("#column");
		const cityName = document.querySelector("#w-location");

		// Appen div
		column.insertBefore(div, cityName);

		// hide alert
		setTimeout(this.hideAlert, 3000);
	}

	hideAlert() {
		document.querySelector(".alert").remove();
	}
}

function convertKelvin(k) {
	const c = k - 273;
	const f = c * (9 / 5) + 32;

	return {
		celcius: Math.round(c),
		fahrenheit: Math.round(f),
	};
}

function windDirection(deg) {
	if (deg > 337.5 || deg <= 22.5) return `North (${deg})`;
	else if (deg > 22.5 || deg <= 67.5) return `Northeast (${deg})`;
	else if (deg > 67.5 || deg <= 112.5) return `East (${deg})`;
	else if (deg > 112.5 || deg <= 157.5) return `Southeast (${deg})`;
	else if (deg > 157.5 || deg <= 202.5) return `South (${deg})`;
	else if (deg > 202.5 || deg <= 247.5) return `Southwest (${deg})`;
	else if (deg > 247.5 || deg <= 292.5) return `West (${deg})`;
	else if (deg > 292.5 || deg <= 337.5) return `Northwest (${deg})`;
}
