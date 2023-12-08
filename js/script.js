var searchBtn = document.querySelector('#searchBtn')
var chosenCity = document.querySelector('#city')
var forecast = document.querySelector('#forecast')
var city = document.querySelector('#searchInput').value
var saved = document.querySelector('#list')


function setCity() {
  var choice = document.querySelector('#searchInput').value
  return city = choice, getLatLon()
}

function getLatLon() {
  var query = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=c0e07c2ad7875f10702ee8282f540c2c"
  fetch(query)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return lat = data[0].lat, lon = data[0].lon, searchApi()
    });
}

function searchApi() {
  var query = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=c0e07c2ad7875f10702ee8282f540c2c&units=imperial"
  fetch(query)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      chosenCity.innerHTML = `<h2>${city}</h2>
      <p1>Temp: ${data.list[0].main.temp}</p>
      <p2>Wind: ${data.list[0].wind.speed}</p>
      <p3>Humidity: ${data.list[0].main.humidity}</p>`,
      forecast.innerHTML = `<h2>5-Day Forecast:</h2>
      <div id="cards">
        <div>
          <h3 id="date-1">${data.list[8].dt_txt}</h3>
          <p1>Temp: ${data.list[8].main.temp}</p>
          <p>Wind: ${data.list[8].wind.speed}</p>
          <p>Humidity: ${data.list[8].main.humidity}</p>
        </div>
        <div>
          <h3 id="date-2">${data.list[16].dt_txt}</h3>
          <p>Temp: ${data.list[16].main.temp}</p>
          <p>Wind: ${data.list[16].wind.speed}</p>
          <p>Humidity: ${data.list[16].main.humidity}</p>
        </div>
        <div>
          <h3 id="date-3">${data.list[24].dt_txt}</h3>
          <p>Temp: ${data.list[24].main.temp}</p>
          <p>Wind: ${data.list[24].wind.speed}</p>
          <p>Humidity: ${data.list[24].main.humidity}</p>
        </div>
        <div>
          <h3 id="date-4">${data.list[32].dt_txt}</h3>
          <p>Temp: ${data.list[32].main.temp}</p>
          <p>Wind: ${data.list[32].wind.speed}</p>
          <p>Humidity: ${data.list[32].main.humidity}</p>
        </div>
        <div>
          <h3 id="date-5">${data.list[39].dt_txt}</h3>
          <p>Temp: ${data.list[39].main.temp}</p>
          <p>Wind: ${data.list[39].wind.speed}</p>
          <p>Humidity: ${data.list[39].main.humidity}</p>
        </div>
      </div>`,
      button = document.createElement('button')
      button.innerHTML = `${data.city.name}`   
      saved.append(button)
    })
}





searchBtn.addEventListener('click', setCity)