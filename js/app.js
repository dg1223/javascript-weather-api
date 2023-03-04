// DO NOT show API KEY on your JS file
const API_KEY = `7fc33929181b0e5fd0aa66d58fcc5c3a`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

loadTemperature("Dhaka");
