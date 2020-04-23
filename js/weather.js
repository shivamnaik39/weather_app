class Weather {
	constructor(city) {
		(this.apikey = "836d3265513ffa4c3ab0ea4679f3f9bf"), (this.city = city);
	}

	// Fetch Weather from api
	async getWeather() {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`
		);

		const responseData = await response.json();

		return responseData;
	}

	changeLocation(city) {
		this.city = city;
	}
}
