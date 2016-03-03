$(document).ready(function (){
  /*
alert("Where the fuck is that data1?");
$.ajax({
    url: 'https://mager-spotify-web.p.mashape.com/search/1/artist.json?q=Justin%2BTimberlake', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
        console.log("success");
        console.dir((data)); },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "LV9LpSlQramshJQy1fnb6l39pZyep1CWIZcjsnvrW8svsORDNA"); // Enter here your Mashape key
    }
});
/*
unirest.get("https://mager-spotify-web.p.mashape.com/search/1/track.json?q=Call%2BMe%2BMaybe")
.header("X-Mashape-Key", "LV9LpSlQramshJQy1fnb6l39pZyep1CWIZcjsnvrW8svsORDNA")
.header("Accept", "text/plain")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
$("table").find("td").on("click", function(){
$(this).css("background-color","#e5e5e5");
})
*/
})