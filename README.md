ChromeYe
======

###Description
ChromeYe is a Google Chrome extension that provides a new tab page with a background image and quote of Kanye West to inspire/entertain you during your browsing session. The image and quote will change every time you open a new tab. The new tab page also includes:

- A latest news feed of articles related to Kanye
- A list of shows where Kanye West will be performing at within 200 miles of your location
- A 'Ye button' that will open a new tab at [kanyewest.com]

[Chrome Store Link](https://chrome.google.com/webstore/detail/chromeye/bfflmlaplfjkbaecodimdfbjeohbdjng?hl=en-US)

###Technical Details

This extension uses React.js and a Redux framework.
It requests data from the following APIs:
- [yepi.io](https://yepi.io/) for the background image and quote
- [SeatGeek](http://platform.seatgeek.com/) for the concert data
- [rss2Json](http://rss2json.com/) returns an RSS feed in JSON format
    - [EIN Newsdesk][http://www.einnews.com/] for the Kanye West RSS feed
- HTML5 geolocation API

I chose to use a Redux framework because of the many API calls being made through
XMLHttpRequests. The Redux architecture provides a very organized way of sending API requests
and updating the React/HTML components. It also provides a good structure for adding/replacing/editing the different features and widgets

The concert data is retrieved from the SeatGeek API that has a geographic filtering feature that can take a latitude and a longitude and filters for results within a given range (in miles) of that location.
The user's location is retrieved through the HTML5 geolocation API. Here is the api call:
```Javascript
export const fetchConcerts = (success) => {

  const apiCall = (geo) => {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        let data = JSON.parse(xmlHttp.response);
        success(data);
      }
    };
    xmlHttp.open("GET", `https://api.seatgeek.com/2/events?client_id=NTc3Mzg1OXwxNDc0NTA1NTQw&${geo}&per_page=100&format=json&performers.slug=kanye-west`, true);
    xmlHttp.send(null);
  };

  let geoString = ``;
  let geoSucess = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    geoString = `lat=${lat}&lon=${lon}&range=200mi`;
    apiCall(geoString);
  };

  let geoError = (error) => {
    console.log(error);
    apiCall(error);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSucess, geoError);
  }
};
```


In order reduce the amount of API calls made the extension uses ```javascript chrome.storage ```.
The concert and news feed data is stored in the users local storage along with a time stamp of when it was stored. This data is updated every hour for the news feed and every day for the concert data by checking the current time when a new tab is open against the timestamp stored with the stored data.

###To-Dos/Future
- I will soon add a feature where the 'Ye Button' will play a random Kanye West song
- I may add a Goals widget that will allow the user to keep track and be reminded of their Goals

Open to any suggestions on how to make it better.
