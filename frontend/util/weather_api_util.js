
export const fetchWeather = (success, error) => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var data = JSON.parse(xmlHttp.responseText);
          if(data.status == 'ok'){

              var output = '<h1>'+data.feed.title+'</h1>';

              for(var i=0;i<data.items.length;++i){

                  output += '<p><h2><a href="' +
                          data.items[i].link + '" >' +
                          data.items[i].title + '</h2></a></p>';
              }
          }
      success(data);
    }
  };
  xmlHttp.open("GET", 'http://rss2json.com/api.json?rss_url=http%3A%2F%2Fcompanies.einnews.com%2Frss%2FpV4hTb7KLoNAdavF', true);
  xmlHttp.send();
};
