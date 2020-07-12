
    
    // Variable declaration
    
    var city ="";
    
    // var inputEl = document.querySelector("city-input");
    // var searchEl = document.querySelector("searchbtn");
    // var clearEl = document.querySelector("clear-history");

    // var nameEl = document.querySelector("city-name");
    // var currentTempEl = document.querySelector("temprature");
    // var currentHumdityEl = document.querySelector("humidity");
    // var currentWindEl = document.querySelector("wind-speed");
    // var currentUVEL = document.querySelector("UV-index");
    // var historyEL = document.querySelector("#history");
    // var responseContainer = document.querySelector("#searchbtn")
    // var inputEL = document.querySelector("#searchinput")




    // var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    //  console.log(searchHistory);



    var getWeather= function () {
      fetch(api.openweathermap.org/data/2.5/weather?q=)
    };

    getWeather();

    // // query selector for search button
    // // event listner for search button

    // // query selector input text value
    // // make sure fetch is working 

    

    // var getWeather = function(cityName) {
        
    //     var apiKey = "886705b4c1182eb1c69f28eb8c520e20";
    
    //     var queryURL =
    //       "http://api.openweathermap.org/data/2.5/weather?q=" +
    //       cityName +
    //       "&appid=" +
    //       apiKey;

    //     fetch(queryURL)
    //       .then(function (response) {
    //         return response.json();
    //       })
    //       .then(function (data) {
    //         console.log(data);

    //         var currentDate = new Date(response.data.dt * 1000);
    //         console.log(currentDate);
    //       });
    // }




  