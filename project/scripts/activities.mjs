// weatherActivities.mjs

export const weatherActivities = [
  {
    weather_condition: "Sunny",
    activity: "Sitting outside under a shaded area",
    image: "images/nursing-care.webp",
    scientific_fact: "Exposure to natural sunlight helps regulate sleep-wake cycles and increases Vitamin D levels, which are important for bone health in older adults."
  },
  {
    weather_condition: "Rainy",
    activity: "Listening to calming music by the window",
    image: "images/music.webp",
    scientific_fact: "Music therapy has been shown to reduce anxiety, improve mood, and even support memory recall in elderly individuals with dementia."
  },
  {
    weather_condition: "Snowy",
    activity: "Watching nature or travel documentaries",
    image: "images/watching.webp",
    scientific_fact: "Watching stimulating visual content can engage cognitive functions and reduce feelings of isolation in elderly individuals during long indoor periods."
  },
  {
    weather_condition: "Windy",
    activity: "Reading a book or being read to",
    image: "images/reading.webp",
    scientific_fact: "Reading or being read to can help maintain language comprehension and attention span, even in older adults with cognitive decline."
  },
  {
    weather_condition: "Cloudy",
    activity: "Reminiscing with photo albums",
    image: "images/photos.webp",
    scientific_fact: "Reminiscence therapy using photos enhances emotional well-being and can help reduce depression in elderly people."
  },
  {
    weather_condition: "Hot",
    activity: "Drinking cold beverages and chatting indoors",
    image: "images/hot-tea.webp",
    scientific_fact: "Social interaction is a key factor in preserving cognitive function and reducing the risk of depression in seniors."
  },
  {
    weather_condition: "Cold",
    activity: "Knitting or folding soft fabrics",
    image: "images/knitting.webp",
    scientific_fact: "Light handwork like knitting can help maintain fine motor skills and offers calming, repetitive activity that promotes focus and emotional regulation."
  }
];

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.54522336816549&lon=-8.425345381204188&appid=b229578c9d6e392f410dbf630fa39da4&units=metric';

export async function activityFetch() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      crateActivityCards(data);
    }
    else {
      throw Error(await response.text());

    }
  }
  catch (error) {
    console.log(error);
  }
}
function crateActivityCards(data) {

  // Create card accordingly to weather description
  const weatherCondition = data.weather[0].main.toLowerCase();
  const temperature = data.main.temp;
  let mappedConditions;

  if (weatherCondition.includes("clear")) mappedConditions = "Sunny";
  if (weatherCondition.includes("rain") || weatherCondition.includes("drizzle") || weatherCondition.includes("thunderstorm")) mappedConditions = "Rainy";
  if (weatherCondition.includes("snow")) mappedConditions = "Snowy";
  if (weatherCondition.includes("wind") || weatherCondition.includes("squall") || weatherCondition.includes("breeze")) mappedConditions = "Windy";
  if (weatherCondition.includes("cloud") || weatherCondition.includes("mist") || weatherCondition.includes("fog") || weatherCondition.includes("haze")) mappedConditions = "Cloudy";
  if (temperature >= 30) mappedConditions = "Hot";
  if (temperature <= 5) mappedConditions = "Cold";

  else mappedConditions = "Cloudy";

  const activityCard = weatherActivities.find(card => card.weather_condition === mappedConditions);

  if (activityCard) {
    const cardContainer = document.getElementById('to-do')
    const card = document.createElement('section');
    card.classList.add('activity-card')

    const title = document.createElement('h3');
    title.textContent = `This ${activityCard.weather_condition} Day is Perfect To: `;

    const activity = document.createElement("p");
    activity.textContent = activityCard.activity;
    activity.classList.add('p-styling');

    const image = document.createElement("img");
    image.src = activityCard.image;
    image.alt = activityCard.activity;
    image.width = 300;
    image.height = 200;

    const fact = document.createElement("p");
    fact.textContent = `Did you know? ${activityCard.scientific_fact}`;




    // //  Create Dialog
    // const dialog = document.createElement('dialog');
    // dialog.classList.add('dialog-fact');

    // // create the elements of the dialog
    


    // // Close Modal Button
    // const closeDialog = document.createElement('button');
    // closeDialog.textContent = 'Close';

    // closeDialog.addEventListener('click', () => dialog.close());

    // // Appending the elements
    // dialog.appendChild(fact);
    // dialog.appendChild(closeDialog);

    // // create the button to open the Dialog
    // const openDialog = document.createElement('button');
    // openDialog.classList.add('openDialog');
    // openDialog.textContent = `Did you know?`;

    // openDialog.addEventListener('click', () => dialog.showModal());


    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(activity);
    card.appendChild(fact);


    cardContainer.appendChild(card);
  }
}    