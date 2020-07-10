// $(document).ready (function() {
// });

//     var queryURL = "https://tasty.p.rapidapi.com/recipes/detail";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     });
    
    
//     var unirest = require("unirest");

// var req = unirest("GET", "https://tasty.p.rapidapi.com/recipes/detail");

// req.query({
// 	"id": "5586"
// });

// req.headers({
// 	"x-rapidapi-host": "tasty.p.rapidapi.com",
// 	"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae",
// 	"useQueryString": true
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://tasty.p.rapidapi.com/recipes/list?tags=under_30_minutes&from=0&sizes=20",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "9a704dd885msh789f32ffd1cf5adp10be0ajsnae658894dd9c"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

//========== CODE LOGIC ==========//

//===== BUTTON =====// 
////pulls inputs from the ingredients 
////API takes pulled data from ingredients 
////pulls number of selected recipes to be printed 
////pull possible allergies as an array 
////for (number-recipes) {
//     if number === 5 print 5 || if number === 10 || if number === 15 {
//         return 5 or 15 or 20    <---- example code not for use 
//     }
// }
////ONCE THE API DATA IS COLLECTED 
//create a card to display recipe data (instructions, feeds, ingredients, cook time?)
////CARD SHOULD INCLUDE...?
//only the number of recipes selected by the user should be displayed (so stop at x num)


//===== CLEAR BUTTON =====//
// function clear(); {
//     display: none "common-id"
// }


//===== INGREDIENTS  =====//
//fill out ingredient inputs 
////minimum of one input filled out 
////on click for submit button the value is drawn <--- this is when API is called 
////OPTIONAL: keydown enter submit inputs 














    
    
    
    
    







