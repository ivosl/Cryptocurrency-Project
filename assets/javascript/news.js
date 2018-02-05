//News

var newsURL = 'https://newsapi.org/v2/top-headlines?' +
          'q=cryptocurrency&' +
          'pageSize=10&' +
          'sortBy=popularity&' +
          'apiKey=974292774cf04f52908d323234d03c1f';


    $.ajax({
          url: newsURL,
          method: "GET"
        })
        .then(function(response) {

        for (var i = 0; i < response.articles.length; i++) {
        

        var title = $("<a>").text(response.articles[i].title);
        var p = $("<p>").text("Source: " + response.articles[i].source.name);
        
        $("#lead").append(title);
        $("#lead").append(p);

        title.attr("href", response.articles[i].url);
        title.attr("target", "_blank");
        //Some js somewhere is preventing this, used this solution: https://stackoverflow.com/a/40934953
        title.attr("onclick", "window.open('"+response.articles[i].url+"')")
        //p.class("<br>")
        };
    });