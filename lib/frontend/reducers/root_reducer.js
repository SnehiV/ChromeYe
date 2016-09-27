import { combineReducers } from 'redux';
import ThemeReducer from './theme_reducer';
import FeedReducer from './feed_reducer';
import ConcertReducer from './concert_reducer';
import VideoReducer from './video_reducer';

const RootReducer = combineReducers({
  theme: ThemeReducer,
  feed: FeedReducer,
  concerts: ConcertReducer,
  videos: VideoReducer
});

export default RootReducer;
