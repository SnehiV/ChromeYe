
export const fetchFeed = (success) => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var feed = JSON.parse(xmlHttp.responseText);
          if(feed.status == 'ok'){

              var output = '<h1>'+feed.feed.title+'</h1>';

              for(var i=0;i<feed.items.length;++i){

                  output += '<p><h2><a href="' +
                          feed.items[i].link + '" >' +
                          feed.items[i].title + '</h2></a></p>';
              }
          }
      success(feed);
    }
  };
  xmlHttp.open("GET", 'http://rss2json.com/api.json?rss_url=http%3A%2F%2Fmusic.einnews.com%2Frss%2FZK-Wkwa0fPFuAwDY', true);
  xmlHttp.send();
};
