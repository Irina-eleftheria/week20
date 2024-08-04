// Charts.js
import Chart from "chart.js/auto";
const myChart1 = document.getElementById("myChart1");

new Chart(myChart1, {
  type: "bar",
  data: {
    labels: [
      "HTML и CSS",
      "Проект 1",
      "Проект 2",
      "JavaScript",
      "Проект 3",
      "React",
      "Трудоустройство",
      "Проект 4",
    ],
    datasets: [
      {
        label: "Количество недель на обучение",
        data: [8, 2, 2, 12, 2, 10, 3, 2],
        borderWidth: 1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const myChart2 = document.getElementById("myChart2");
new Chart(myChart2, {
  type: "line",
  data: {
    labels: [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],
    datasets: [
      {
        label: "Сколько часов уходило на обучение в среднем",
        data: [2, 3, 4, 3, 2, 5, 6],
        fill: false,
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Leaflet
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const map = L.map("map").setView([55.47251, 37.54958], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const marker = L.marker([55.47251, 37.54958]).addTo(map);
marker.bindPopup("<b>Подольск</b><br>Мое местоположение").openPopup();

//OpenWeatherMap
const apiKey = "30cc6ab997a760bc8bf4f0198e5de8b3";
const city = "Podolsk";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(url)
  .then((response) => response.json())
  .then((weather) => {
    console.log(weather);
    document.querySelector(".city").innerText = weather.name;
    document.querySelector(".tempValue").innerText =
      Math.round(weather.main.temp) + "℃";
    document.querySelector(".hi-low").innerText =
      Math.round(weather.main.temp_max) +
      "℃" +
      " / " +
      Math.round(weather.main.temp_min) +
      "℃";
    document.querySelector(".weather").innerText =
      weather.weather[0].description;
  })
  .catch((err) => console.log(err));
