

export const fetchImage = (success, error) => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      success(xmlHttp.responseText);
    }
  };
  xmlHttp.open("GET", 'https://yepi.io/api/image', true);
  xmlHttp.send(null);
};

export const fetchQuote = (success, error) => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      success(xmlHttp.response);
    }
  };
  xmlHttp.open("GET", 'https://yepi.io/api/quote', true);
  xmlHttp.send(null);
};
