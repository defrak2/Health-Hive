    const foodApiKey = 'b6a5bb964f51449d883f409924fb412e';
    const apiURL = 'https://api.spoonacular.com/recipes/random?apiKey=${foodApiKey};'

    async function getFoodList() {
        console.log(apiURL);
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        return null;
    }

    getFoodList();
    then(data => {
        if (data) {
            localStorage.setItem('foodData', JSON.stringify(data));
            window.location.href = 'index.html';
        } else {
            console.error('No data fetched');
        }
    })
    .catch(error =>{
        console.error('Error:', error);
    })



    const workoutApiKey = 'c8477a7523mshc5dda4aa787b0a4p11f355jsn84b0acd479dd'
    const restURL ='https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0'

    async function getWorkout() {
        console.log(restURL);
        const response = await fetch(restURL);
        const data = await response.json();
        console.log(data);
        return null;
    }

    getWorkout();
    then(data => {
        if (data) {
            localStorage.setItem('workoutData', JSON.stringify(data));
        } else {
            console.error('No data fetched');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });