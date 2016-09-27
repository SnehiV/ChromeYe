import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';
import configureStore from './store/store';

const feedUpdate = () => {
  chrome.storage.local.get(storage => {
    if (typeof storage.feed !== "undefined") {
      if (((Date.now() - storage.feed.time) /1000 /3600) > 1) {
        chrome.storage.local.remove('feed')
      }
    }
  });
};

const concertUpdate = () => {
  chrome.storage.local.get(storage => {
    if (typeof storage.concerts !== "undefined") {
      if (((Date.now() - storage.concerts.time) /1000 /3600) > 24) {
        chrome.storage.local.remove('concerts')
      }
    }
  });
};

const videoUpdate = () => {
  chrome.storage.local.get(storage => {
    if (typeof storage.videos !== "undefined") {
      if (((Date.now() - storage.videos.time) /1000 /3600) > 72) {
        chrome.storage.local.remove('videos')
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  feedUpdate();
  concertUpdate();
  videoUpdate();
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<div className='new-tab'><Root store={store} /></div>, rootEl);
});
