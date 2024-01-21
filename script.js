const meals = document.getElementById('meals');
getRandomMeal();

    async function getRandomMeal(){
    const resp = (await fetch("https://www.themealdb.com/api/json/v1/1/random.php"));
    const respData  = await resp.json();
    const randomMeal = respData.meals[0];
    console.log(randomMeal);
    addMeal(randomMeal,true);
    }
async function getMealById(id){
const Meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ id)
}
async function getMealBySearch(term){
    const Meals = await fetch('www.themealdb.com/api/json/v1/1/search.php?s='+term);
}
function addMeal(MealData,random = false){
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = `
    <div class="meals">
    <div class="meal-header">
    ${random ? `<span class="random">Random Recipe</span>`: ""} 
        <img src="${MealData.strMealThumb}" alt="${MealData.strMeal}">
    </div>
    <div class="meal-body">
        <h4>${MealData.strMeal}</h4>
        <button class="fav-btn"><i class="fa fa-heart"></i></button>
    </div>
</div>
    `
    const btn = meal.querySelector('.meal-body .fav-btn');
    btn.addEventListener("click",()=>{
        btn.classList.toggle("active");
    });
     meals.appendChild(meal);
}