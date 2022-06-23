let weather = {
  apikey: "fd69c93362352527a36ff89facca597c",
  fetchWeather: function (zip) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
        zip +
        "&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector("zip").innerText = "weather in" + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "01n@2x.png";
  },
};
