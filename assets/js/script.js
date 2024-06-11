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
    createWorkoutCard();
}

getWorkout();


fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0', {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': 'c8477a7523mshc5dda4aa787b0a4p11f355jsn84b0acd479dd'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);

    let html = '';
    data.forEach(item => {
      html += `
      <div>
       <h2>${item.name}</h2>
      </div>
      `;
    })
    document.getElementById('data-container').innerHTML = html;
  })
  .catch(error => {
    console.error('Error:', error)
  })
  

.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});

