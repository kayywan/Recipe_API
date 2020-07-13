//set up variables

var baseURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=7592bc937593472bbd3b2ff7b0cb39e7";
var apiKey = "7592bc937593472bbd3b2ff7b0cb39e7"
var mainIng = "";
var numResults = 0;
var recipeCounter = "";

//AJAX call here
function searchRecipes(numRecipes, queryURL) {
	$.ajax({url: queryURL, method: "GET"})
			.done (function(response) {
				console.log(response)
				console.log(queryURL)
			})
}
//main processes
// 1. retrieve user inputs
// 2. use those variables to run an ajax call to spoonacular
// 3. break down the spoonacular object into useable fields
// 4. dynamically generate content

// 5. dealing with 'edge cases'-- bugs, misspelled ingredients

$("#subBtn").on('click', function() {
	alert('test');
	mainIng = $("#mainIngredient").val().trim();
	console.log(mainIng);
	var newURL = baseURL + "&q=" + mainIng;
	console.log(newURL);
	searchRecipes (5, baseURL)
	return false;
})