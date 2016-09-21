import { combineReducers } from 'redux';
import ThemeReducer from './theme_reducer';
import FeedReducer from './feed_reducer';

const RootReducer = combineReducers({
  theme: ThemeReducer,
  feed: FeedReducer
});

export default RootReducer;
