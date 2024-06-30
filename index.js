const url ="https://www.themealdb.com/api/json/v1/1/random.php"
console.log("js start")
const thumbnailE1 = document.getElementById("thumbnail");
const titleE1 = document.getElementById("thumbnail");
const recipeE1 = document.getElementById("thumbnail");
const mycardEl = document.getElementById("mycard")
const searchtxtEl = document.getElementById("searchtxt")
const searchRecEl = document.getElementById("searchRec")

const res = fetch(url)
.then((data) => data.json())
.then((data1) => {

console.log("🚀 ~ file: index.js:23 ~ res:",data1.meals[0])

const result = data1.meals[0];
console.log(result.strMeal)

const title= result.strMeal
const category= result.strCategory
const recipe= result.strInstructoins
const thumbnail= result.strMealThumnb
title.textContent = titleE1
// recipeE1.textContent = recipe.slice(0,200) +"....."
// thumbnailE1.src = thumbnail
// console.log(thumbnail.getAttribute("class"))
})
function searchMeal(e) {
    e.parentdefault ()

    console.log("i am in search")
    return false
}
 console.log("i am in search",searchtxtE1.value)
 
