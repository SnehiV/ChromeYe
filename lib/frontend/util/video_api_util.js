


export const fetchVideos = (success, error) => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      let data = JSON.parse(xmlHttp.response);
      let videoIds = data.items.map(item => item.snippet.resourceId.videoId);
      success(videoIds);
    }
  };
  xmlHttp.open("GET", 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUhpJbg7zMbi5jx9Gdjaxa9g&key=AIzaSyAzsVlLCYQl3ekoCF6hJVCcSCCVLbxDGqs', true);
  xmlHttp.send(null);
};
