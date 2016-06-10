
// https://api-public.guidebox.com/v1.43/US/jpoBwnzeZ3kKrwKVt1oBGcJE5Z9y0f/search/title/Arrested%252520Development/fuzzy
var Tv = function(args) {
  this.title = args.title || "unknown";
  this.id = args.id || "unknown";
}

var availableContent = function(args) {
  this.display_name = args.display_name || "unknown";
}

  var shows;
  var sources;

$(document).ready (function(){


  $('#title-input').on ('submit', function(event) {
    event.preventDefault();

    $target = $(event.target)
    var API_KEY = "2Ctcdxaw2q1s1rLdbyhm4Acna4kdC5";
    var BASE_URL = "https://api-public.guidebox.com/v1.43/US/";
    var TITLE = $target.find("input").val();
    var search_url_title_id = BASE_URL + API_KEY + "/search/title/" + TITLE + "/fuzzy";

  $.ajax({
    method: "GET",
    url: search_url_title_id,
    dataType: 'json'
    }).done(function(response){
    return response.results.forEach(function(item){
      shows = []
      return shows.push( new Tv(item) )
    })

    }).then(function(resp){
      var show_id = shows[0].id
      var search_available_content = BASE_URL + API_KEY + "/show/" + shows[0].id + "/available_content";
      $.ajax({
        method: "GET",
        url: search_available_content,
        dataType: 'json'
      }).done(function(response){
        sources = []
        return response.results.web.episodes.all_sources.forEach(function(item) {
          return sources.push( new availableContent(item))
        })
      }).then(function(resp){
      $("#available-sources").html("")
      $("#title").html(shows[0].title)
      for (var i in sources) {
        $("#available-sources").append('<li>'+ sources[i].display_name + " " + '</li>')
      }
      $("#title-input-box").val("")
      })

  });

  });



});
