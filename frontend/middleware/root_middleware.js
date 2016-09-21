import { applyMiddleware } from 'redux';
import ThemeMiddleware from './theme_middleware';
import FeedMiddleware from './feed_middleware';

const RootMiddleware = applyMiddleware(
  ThemeMiddleware,
  FeedMiddleware
);

export default RootMiddleware;
