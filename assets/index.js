var city = document.getElementById('city-input');
var dailyOne = document.getElementById('card-temp-1');
var dailyTwo = document.getElementById('card-temp-2');
var dailyThree = document.getElementById('card-temp-3');
var dailyFour = document.getElementById('card-temp-4');
var dailyFive = document.getElementById('card-temp-5');

var tempArr = [];

function getForecast() {
    var forecastUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=29.74439674904094&lon=-95.36559187196157&exclude=minutely,hourly,alerts&appid=f8f9b280883e596e240d7e0d55c206fb"

    fetch(apiUrl);
}

function getLatLng() {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=f8f9b280883e596e240d7e0d55c206fb"

    fetch(apiUrl).then(function(response) {
        return response.json().then(function(response) {
            var latitude = response.coord.lat;
            var longitude = response.coord.lon;
            var forecastUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly,alerts&appid=f8f9b280883e596e240d7e0d55c206fb";
            fetch(forecastUrl).then(function(response) {
                return response.json().then(function(response) {
                    for (i = 0; i < 5; i++) {
                        tempArr.push(response.daily[i].temp.day);
                    }
                    temp(tempArr);
                })
            })
        })
    });
};

function temp() {
    dailyOne.textContent = tempArr[0] + "°F";
    dailyTwo.textContent = tempArr[1] + "°F";
    dailyThree.textContent = tempArr[2] + "°F";
    dailyFour.textContent = tempArr[3] + "°F";
    dailyFive.textContent = tempArr[4] + "°F";
}