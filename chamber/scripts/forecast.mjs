const today = document.getElementById("today");
const secondDay = document.getElementById("second-day");
const thirdDay = document.getElementById("third-day");
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=-5.782436051645603&lon=-35.2098657204633&appid=b229578c9d6e392f410dbf630fa39da4&units=metric`;

export async function forecastFetch() {
    try {
        const response = await fetch(forecastURL);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        }
        else {
            throw Error(await response.text());

        }
    }
    catch (error) {
        console.log(error);
    }
}


function displayForecast(forecastList) {

    const dailyData = [];

    let itemsAdded = 0;
    let i = 0;

    while (itemsAdded < 3 && i < forecastList.list.length) {
        const item = forecastList.list[i];
        if (item.dt_txt.includes("12:00:00")) {
            dailyData.push(item);
            itemsAdded++;
        }
        i++;

        // const date = new Date(dailyData[0].dt_txt);
        // const day = date.toLocaleDateString("en-US", { weekday: "long" });
        // const temp = dailyData[0].main.temp.toFixed(1);

        // const secondDate = new Date(dailyData[1].dt_txt);
        // const secondDayString = secondDate.toLocaleDateString("en-US", { weekday: "long" });
        // const tempSecond = dailyData[1].main.temp.toFixed(1);

        // const thirdDate = new Date(dailyData[1].dt_txt);
        // const thirdDayString = thirdDate.toLocaleDateString("en-US", { weekday: "long" });
        // const tempThird = dailyData[2].main.temp.toFixed(1);

        // today.textContent = `${day}: ${temp}°C`;
        // secondDay.textContent = `${secondDayString}: ${tempSecond}`;

        // thirdDay.textContent = `${thirdDayString}: ${tempThird}`;
    }

    if (dailyData.length === 3) {
        const date1 = new Date(dailyData[0].dt_txt);
        const day1 = date1.toLocaleDateString("en-US", { weekday: "long" });
        const temp1 = dailyData[0].main.temp.toFixed(1);

        const date2 = new Date(dailyData[1].dt_txt);
        const day2 = date2.toLocaleDateString("en-US", { weekday: "long" });
        const temp2 = dailyData[1].main.temp.toFixed(1);

        const date3 = new Date(dailyData[2].dt_txt);
        const day3 = date3.toLocaleDateString("en-US", { weekday: "long" });
        const temp3 = dailyData[2].main.temp.toFixed(1);

        today.textContent = `${day1}: ${temp1}°C`;
        secondDay.textContent = `${day2}: ${temp2}°C`;
        thirdDay.textContent = `${day3}: ${temp3}°C`;
    }

}
