import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';
import configureStore from './store/store';

import { requestConcerts } from './actions/concert_actions';
document.addEventListener("DOMContentLoaded", () => {
  const store = window.store = configureStore();
  window.requestConcerts = requestConcerts;
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
