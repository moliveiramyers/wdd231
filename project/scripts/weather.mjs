const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.54522336816549&lon=-8.425345381204188&appid=b229578c9d6e392f410dbf630fa39da4&units=metric';

export async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());

        }
    }
    catch (error) {
        console.log(error);
    }
}

// apiFetch();

function displayResults(data) {
    const cardContainer = document.getElementById('to-do');
    const sunriseUnix = data.sys.sunrise;
    const sunsetUnix = data.sys.sunset;

    // create html elements
    const divWeather = document.createElement('div');
    divWeather.classList.add('weather-card');

    const title = document.createElement('h3');
    const temperature = document.createElement('p');
    const description = document.createElement('p');
    const min = document.createElement('p');
    const max = document.createElement('p');
    const humidity = document.createElement('p');
    const sRise = document.createElement('p');
    const sSet = document.createElement('p');
    const iconImg = document.createElement("img");
    // weatherIcon.appendChild(iconImg);

    const options = { timeZone: "Europe/Lisbon", hour: "2-digit", minute: "2-digit" };

    const sunriseDate = new Date(sunriseUnix * 1000);
    const sunsetDate = new Date(sunsetUnix * 1000);
    // const currentDate = new Date(dt * 1000);

    temperature.innerHTML = `Temp: ${data.main.temp}&deg;C`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    description.textContent = data.weather[0].description;
    max.textContent = `Max: ${data.main.temp_max}°C`;
    min.textContent = `Min: ${data.main.temp_min}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    sRise.textContent = `Sunrise: ${sunriseDate.toLocaleTimeString("pt-BR", options)}`;
    sSet.textContent = `Sunset: ${sunsetDate.toLocaleTimeString("pt-BR", options)}`;

    iconImg.setAttribute('src', iconsrc);
    iconImg.setAttribute('alt', 'Weather Icon');
    iconImg.setAttribute('width', "50");
    iconImg.setAttribute('height', "50");

    title.textContent = `Weather Today`;

    divWeather.appendChild(title);
    divWeather.appendChild(iconImg);
    divWeather.appendChild(description);
    divWeather.appendChild(temperature);
    divWeather.appendChild(max);
    divWeather.appendChild(min);

    cardContainer.appendChild(divWeather);
}
