var city = "";
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty = $("#humidity");
var currentWSpeed = $("#wind-speed");
var currentUvindex = $("#uv-index");
var sCity = [];

function find(city) {
  for (var i = 0; i < sCity.length; i++) {
    if (city.toUpperCase() === sCity[i]) {
      return true;
    }
  }
  return false;
}

var APIKey = "e8f5f64870bb4d6157cd0e7e73574b75";
{
  //  event.preventDefault();
  if (searchCity.val().trim() !== "") {
    city = searchCity.val().trim();
    currentWeather(city);
  }

  function currentWeather(city) {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&APPID=" +
      APIKey;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var weathericon = response.weather[0].icon;
      var iconurl =
        "https://openweathermap.org/img/wn/" + weathericon + "@2x.png";

      var date = new Date(response.dt * 1000).toLocaleDateString();

      $(currentCity).html(
        response.name + "(" + date + ")" + "<img src=" + iconurl + ">"
      );

      var tempF = (response.main.temp - 273.15) * 1.8 + 32;
      $(currentTemperature).html(tempF.toFixed(2) + "&#8457");

      $(currentHumidty).html(response.main.humidity + "%");

      var ws = response.wind.speed;
      var windsmph = (ws * 2.237).toFixed(1);
      $(currentWSpeed).html(windsmph + "MPH");

      UVIndex(response.coord.lon, response.coord.lat);
      forecast(response.id);
      if (response.cod == 200) {
        sCity = JSON.parse(localStorage.getItem("cityname"));
        console.log(sCity);
        if (sCity == null) {
          sCity = [];
          sCity.push(city.toUpperCase());
          localStorage.setItem("cityname", JSON.stringify(sCity));
          addToList(city);
        } else {
          if (find(city) === true) {
            sCity.push(city.toUpperCase());
            localStorage.setItem("cityname", JSON.stringify(sCity));
            addToList(city);
          }
        }
      }
    });
  }

  function UVIndex(ln, lt) {
    var uvqURL =
      "https://api.openweathermap.org/data/2.5/uvi?appid=" +
      APIKey +
      "&lat=" +
      lt +
      "&lon=" +
      ln;
    fetch(uvqURL).then(function (response) {
      document.getElementById(currentUvindex).innerHTML(response.value);
    });
  }

  function addToList(c) {
    var listEl = $("<li>" + c.toUpperCase() + "</li>");
    $(listEl).attr("class", "list-group-item");
    $(listEl).attr("data-value", c.toUpperCase());
    $(".list-group").append(listEl);
  }

  function invokePastSearch(event) {
    var liEl = event.target;
    if (event.target.matches("li")) {
      city = liEl.textContent.trim();
      currentWeather(city);
    }
  }

  function loadlastCity() {
    $("ul").empty();
    var sCity = JSON.parse(localStorage.getItem("cityname"));
    if (sCity !== null) {
      sCity = JSON.parse(localStorage.getItem("cityname"));
      for (i = 0; i < sCity.length; i++) {
        addToList(sCity[i]);
      }
      city = sCity[i - 1];
      currentWeather(city);
    }
  }

  function clearHistory(event) {
    event.preventDefault();
    sCity = [];
    localStorage.removeItem("cityname");
    document.location.reload();
  }

  function displayWeather(event) {
    event.preventDefault();
    if (searchCity.val().trim() !== "") {
      city = searchCity.val().trim();
      currentWeather(city);
    }
  }
}
$("#search-button").on("click", displayWeather);
$(document).on("click", invokePastSearch);
$(window).on("load", loadlastCity);
$("#clear-history").on("click", clearHistory);
