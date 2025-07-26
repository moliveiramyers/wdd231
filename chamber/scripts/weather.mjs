const temp = document.getElementById("temperature");
const des = document.getElementById("weather");
const max = document.getElementById("high");
const min = document.getElementById("low");
const hum = document.getElementById("humidity");
const sRise = document.getElementById("sunrise");
const sSet = document.getElementById("sunset");
const weatherIcon = document.getElementById("weather-icon")
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-5.782436051645603&lon=-35.2098657204633&appid=b229578c9d6e392f410dbf630fa39da4&units=metric';



export async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            dispalyResults(data);
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

function dispalyResults(data) {
    const sunriseUnix = data.sys.sunrise;
    const sunsetUnix = data.sys.sunset;
    // const dt = data.sys.dt;
    const iconImg = document.createElement("img");
    weatherIcon.appendChild(iconImg);

    const options = { timeZone: "America/Fortaleza", hour: "2-digit", minute: "2-digit" };

    const sunriseDate = new Date(sunriseUnix * 1000);
    const sunsetDate = new Date(sunsetUnix * 1000);
    // const currentDate = new Date(dt * 1000);

    temp.innerHTML = `${data.main.temp}&deg;C`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    des.textContent = data.weather[0].description;
    max.textContent = `Max: ${data.main.temp_max}°C`;
    min.textContent = `Min: ${data.main.temp_min}°C`;
    hum.textContent = `Humidity: ${data.main.humidity}%`;
    sRise.textContent = `Sunrise: ${sunriseDate.toLocaleTimeString("pt-BR", options)}`;
    sSet.textContent = `Sunset: ${sunsetDate.toLocaleTimeString("pt-BR", options)}`;

    iconImg.setAttribute('src', iconsrc);
    iconImg.setAttribute('alt', 'Weather Icon');
    iconImg.setAttribute('width',"50");
    iconImg.setAttribute('height',"50");
}


