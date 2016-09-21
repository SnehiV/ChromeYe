import { ThemeConstants } from '../actions/theme_actions';
import merge from 'lodash/merge';

const ThemeReducer = (state = {background: "", quote: ""}, action) => {
  let newState;
  debugger
  switch (action.type) {
    case ThemeConstants.RECEIVE_BACKGROUND:
      newState = merge({}, state);
      newState.background = action.imageURL;
      return newState;
    case ThemeConstants.RECEIVE_QUOTE:
      newState = merge({}, state);
      newState.quote = action.quote;
      return newState;
    default:
      return state;
  }
};

export default ThemeReducer;
