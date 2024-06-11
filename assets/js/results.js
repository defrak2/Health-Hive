    const storedFoodData = localStorage.getItem('foodData');
    const foodData = JSON.parse(storedFoodData);

    const storedWorkoutData = localStorage.getItem('workoutData');
    const workoutData = JSON.parse(storedWorkoutData);

    console.log(foodData);
    console.log(workoutData);
