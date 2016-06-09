
// https://api-public.guidebox.com/v1.43/US/jpoBwnzeZ3kKrwKVt1oBGcJE5Z9y0f/search/title/Arrested%252520Development/fuzzy
var Tv = function(args) {
  this.title = args.title || "unknown";
  this.first_aired = args.first_aired || "unknown";
}


var shows = [];
$(document).ready (function(){
  var API_KEY = "jpoBwnzeZ3kKrwKVt1oBGcJE5Z9y0f";
  var BASE_URL = "https://api-public.guidebox.com/v1.43/US/";
  var TITLE = "Game of Thrones";
  var search_url = BASE_URL + API_KEY + "/search/title/" + TITLE + "/fuzzy";

  $.ajax({
    url: search_url,
    dataType: 'json'
  }).done(function(response){
    return response.results.forEach(function(item){
      return shows.push( new Tv(item) )
    })

  }).fail(function(error) {

  }).then(function(resp){
      $("#title").append(shows[0].title)
      $("#first_aired").append(shows[0].first_aired)

  });





})
