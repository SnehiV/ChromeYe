import { combineReducers } from 'redux';
import ThemeReducer from './theme_reducer';

const RootReducer = combineReducers({
  theme: ThemeReducer
});

export default RootReducer;
