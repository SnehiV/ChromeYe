import { ThemeConstants, requestBackground, requestQuote,
          receiveBackground, receiveQuote} from '../actions/theme_actions';
import { fetchImage, fetchQuote } from '../util/theme_api_util.js';

const ThemeMiddleware = store => next => action => {
  let error = () => {};
  let success;
  switch (action.type) {
    case ThemeConstants.REQUEST_BACKGROUND:
      success = (imageURL) => store.dispatch(receiveBackground(imageURL));
      fetchImage(success, error);
      break;
    case ThemeConstants.REQUEST_QUOTE:
      success = (quote) => store.dispatch(receiveQuote(quote));
      fetchQuote(success, error);
      break;
    default:
      return next(action);
  }
};

export default ThemeMiddleware;
