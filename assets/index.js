var city = document.getElementById('city-input');

function getForecast() {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=29.74439674904094&lon=-95.36559187196157&exclude=minutely,hourly,alerts&appid=f8f9b280883e596e240d7e0d55c206fb"

    fetch(apiUrl);
}

function getLatLng() {
    var apiUrl = "http://www.mapquestapi.com/geocoding/v1/address?key=UdymKn6A0FogSJTjNS96CNnnoR5ku5D6&location=" + city.value;

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            console.log(response);
        } else {
            alert("Error: " + response.statusText);
        }

        var latitude = response.results.locations.latLng.lat;
        var longitude = response.results.locations.latLng.lng;
        console.log(latitude, longitude);
    });
};