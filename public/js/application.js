
// https://api-public.guidebox.com/v1.43/US/jpoBwnzeZ3kKrwKVt1oBGcJE5Z9y0f/search/title/Arrested%252520Development/fuzzy
var Tv = function(args) {
  this.title = args.title || "unknown";
  this.id = args.id || "unknown";
}

var availableContent = function(args) {
  this.available_content = args.available_content || "unknown";
}


$(document).ready (function(){

var shows = [];
var sources = [];

  $('#title-input').on ('submit', function(event) {
    event.preventDefault();

    $target = $(event.target)
    var API_KEY = "jpoBwnzeZ3kKrwKVt1oBGcJE5Z9y0f";
    var BASE_URL = "https://api-public.guidebox.com/v1.43/US/";
    var TITLE = $target.find("input").val();
    var search_url_title_id = BASE_URL + API_KEY + "/search/title/" + TITLE + "/fuzzy";

  $.ajax({
    method: "GET",
    url: search_url_title_id,
    dataType: 'json'
    }).done(function(response){
    return response.results.forEach(function(item){
      return shows.push( new Tv(item) )
    })
    }).then(function(resp){
      $("#title").append(shows[0].title)
      $("#first_aired").append(shows[0].first_aired)
  });
      debugger

  });



});
