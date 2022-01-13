$(document).ready(function(){

    //api key to access youtube api
    var API_KEY = "AIzaSyCYx9B0PURxtbFUA_-XzFmZUIOx_pPc-hM"
    var video = ''
    var desc = ''
    //breaks to add to the html page for formatting purposes
    var br = document.createElement("br");

    //search button
    $("form").submit(function (event) {
        event.preventDefault() //remove auto completion
        var search = $("#search").val()
        var results = $("#results").val()
        videoSearch(API_KEY,search,results)
    })

    //video search function which gets the video and puts it into an iframe along with the description
    videoSearch = (key, search, numResults) => {

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + numResults + "&q=" + search, function(data){
            console.log(data)

            data.items.forEach(item => {
                video = `
                <iframe width="520" height="420"
                src="https://www.youtube.com/embed/${item.id.videoId}">
                </iframe>
                `
                desc =  `
                 Video Description: ${item.snippet.description}
                `
                
                $("#videos").append(video, document.createElement('br'), desc, document.createElement('br'), document.createElement('br'))
            });

        });
        
    }
})