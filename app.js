const cityInput = document.getElementById('city-input');

const city = document.querySelector("#city");
const temperatue = document.getElementById('temp');
const feelsLike = document.getElementById('f-l');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const wind = document.getElementById('wind');



async function chechWeather() {

  const apiKey = "908645ca144fb5b2acf0993ffe0ed27d";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + cityInput.value;



  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);













  city.innerText = data.name;

  temperatue.innerText = Math.round(data.main.temp) + "*" + "C";
  feelsLike.innerText = Math.round(data.main.feels_like) + "*" + "C";
  humidity.innerText = Math.round(data.main.humidity) + "%";
  pressure.innerText = Math.round(data.main.pressure) + "Pa";
  wind.innerText = Math.round(data.wind.speed) + "km/h";


}

