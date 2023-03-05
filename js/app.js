// DO NOT show API KEY on your JS file
const API_KEY = `7fc33929181b0e5fd0aa66d58fcc5c3a`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  // const temperature = document.getElementById("temperature");
  console.log(data.name, data.main.temp);
  // temperature.innerText = `${data.main.temp}`;

  setInnerText("temperature", data.main.temp);
  setInnerText("weather", data.weather[0].main);
};

const setInnerText = (id, text) => {
  const element = document.getElementById(id);
  element.innerText = `${text}`;
  console.log(text);
};

document.getElementById("btn-search").addEventListener("click", () => {
  const searchField = document.getElementById("search-field");
  // set city
  const city = searchField.value;
  document.getElementById("city").innerText = city;
  //set weather
  // const weather = data.weather[0].main;
  document.getElementById("weather").innerText = weather;

  loadTemperature(city);
});

loadTemperature("dhaka");
