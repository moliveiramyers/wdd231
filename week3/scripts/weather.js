const temp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const figCap = document.querySelector("figcaption");
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75257863940927&lon=6.6315579220837&appid=b229578c9d6e392f410dbf630fa39da4&units=metric';

async function apiFetch() {
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

apiFetch();

function dispalyResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    figCap.textContent = `${desc}`;
}