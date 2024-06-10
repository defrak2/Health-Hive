const apiKey = 'b6a5bb964f51449d883f409924fb412e';
const apiURL = 'https://api.spoonacular.com/recipes/random?apiKey=${apiKey};'

async function getFoodList() {
    console.log(apiURL);
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
}

getFoodList();

// getFoodList();


const restURL = 'https://wger.de/api/v2/exercise/?language=2&limit=50'; 

async function getWorkout() {
    console.log(restURL);
    const response = await fetch(restURL);
    const data = await response.json();
    console.log(data);
}

// getWorkout();