import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';

//testing
import configureStore from './store/store';
import { requestBackground, requestQuote } from './actions/theme_actions';
import { fetchWeather } from './util/weather_api_util';
document.addEventListener("DOMContentLoaded", () => {
  const store = window.store = configureStore();
  window.requestBackground = requestBackground;
  window.fetchWeather = fetchWeather;
  window.requestQuote = requestQuote;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<div className='new-tab'><Root store={store} /></div>, rootEl);
});





const setBackground = (imageURL) => {
  let body = $("body");
  let img = new Image();
  $(img).src(imageURL);
  img.onload = () => {
    body.css({'background-image': `url("${imageURL}")`,
    'background-size': 'cover',
    'background-repeat': 'no-repeat'});
  };
};

const _error = (data) => {};

const setQuote = (quote) => {
  let header = $("#yeQuote");
  header.text(quote);
};


//
// $( document ).ready(() => {
//   fetchImage(setBackground, _error);
//   fetchQuote(setQuote, _error);
// });
