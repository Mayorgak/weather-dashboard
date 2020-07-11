function initPage () {
    var inputEL = document.getElementById("city-input");
    var searchEL = document.getElementById("earch-button")
    var clearEl = document.getElementById("clear-history");
    var nameEl = document.getElementById("city-name");
    var currentPicEl = document.getElementById ("current-pic");
    var currentTempEl = document.getElementById("temprature");
    var currentHumdityEl = document.getElementById("#umidity");
    var currentWindEl = document.getElementById("wind-speed");
    var currentUVEL = document.getElementById("UV-index");
    var historyEL = document.getElementById("history");

    var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
     console.log(searchHistory);


    var apiKey = "e8f5f64870bb4d6157cd0e7e73574b75";

    function getWeather(cityName) {
    
        var queryURL =
          "http://api.openweathermap.org/data/2.5/weather?q=" +
          cityName +
          "&appid=" +
          APIKey;
        axios.get(queryURL)
        .then(function(response){
            console.log(response);


    var currentDate = new Date(response.data.dt * 1000);
        console.log(currentDate);   



        });
    }
}
    initPage();