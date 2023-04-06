function attachEvents() {
  const inputLocation = document.querySelector("#location");
  const getWeatherButton = document.querySelector("#submit");
  const BASE_URL = "http://localhost:3030/jsonstore/forecaster/locations";
  const today_URL = "http://localhost:3030/jsonstore/forecaster/today/";
  const longForecast_URL =
    "http://localhost:3030/jsonstore/forecaster/upcoming/";

  const forecast = document.getElementById("forecast");

  getWeatherButton.addEventListener("click", weatherInfo);

  function weatherInfo() {
    fetch(BASE_URL)
      .then((res) => res.json)
      .then((data) => {
        let searchLocation = data.find((item) => item.name === inputLocation);

        console.log(searchLocation);
      })
      .catch(Error);
  }
}

attachEvents();
