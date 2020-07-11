//API Call
var queryAmount = $('returnQuery').val();    
var queryJSON = JSON.stringify(queryAmount); 
var ingredient = $('ingredient1').val();
var ingJSON = JSON.stringify(ingredient);
var settings = {    
	"async": true,
	"crossDomain": true,
	"url": "https://tasty.p.rapidapi.com/recipes/list?",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "45d544cce5msh3da1dba9529989bp135592jsn98c4e08591b1"
    

	}
}
var queryURL = $(settings,"url");
alert(queryURL);

//functions

$.ajax(settings).done(function (response) {
    console.log(response);
    
})
//main process

$('#submitBtn').on('click', function() {
    $('#ingredient1').val().trim();
    var newURL = settings.
    console.log(settings.url);

})