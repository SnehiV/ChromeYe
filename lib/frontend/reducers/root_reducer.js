import { combineReducers } from 'redux';
import ThemeReducer from './theme_reducer';
import FeedReducer from './feed_reducer';
import ConcertReducer from './concert_reducer';

const RootReducer = combineReducers({
  theme: ThemeReducer,
  feed: FeedReducer,
  concerts: ConcertReducer
});

export default RootReducer;
