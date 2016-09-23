
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
