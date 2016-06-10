var Tv = function(args) {
  this.title = args.title || "unknown";
  this.id = args.id || "unknown";
}

var availableContent = function(args) {
  this.display_name = args.display_name || "unknown";
}

  var shows = [];
  var sources;
  var show_id;

$(document).ready (function(){

  $("#title-input").on ("submit", function(){
    event.preventDefault();

    $target = $(event.target)
    var API_KEY = "2Ctcdxaw2q1s1rLdbyhm4Acna4kdC5";
    var BASE_URL = "https://api-public.guidebox.com/v1.43/US/";
    var TITLE = $target.find("input").val();
    var search_url_title_id = BASE_URL + API_KEY + "/search/title/" + TITLE + "/fuzzy";

    $.ajax({
      method: "GET",
      url: search_url_title_id
    }).done(function(response){
        shows=[];
        return response.results.forEach(function(item){
        return shows.push( new Tv(item))
      })
    })
      debugger;
    console.log(shows)


  }); // end of title input
}) //end of document ready

