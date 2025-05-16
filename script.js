async function getWeather() {
  const city = document.getElementById("city-input").value;
  const apiKey = "a603f5f19405d6512f57a859e65c2bba";
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  
    const response = await fetch(url);
    const data = await response.json();


    const resultHtml = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p><strong>Temperature:</strong> ${data.current.temperature}°C</p>
      <p><strong>Weather:</strong> ${data.current.weather_descriptions[0]}</p>
      <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.current.wind_speed} km/h</p>
      <img src="${data.current.weather_icons[0]}" alt="Weather icon">
    `;

    document.getElementById("result").innerHTML = resultHtml;
  } 
