import { applyMiddleware } from 'redux';
import ThemeMiddleware from './theme_middleware';
import FeedMiddleware from './feed_middleware';
import ConcertMiddleware from './concert_middleware';
import VideoMiddleware from './video_middleware';

const RootMiddleware = applyMiddleware(
  ThemeMiddleware,
  FeedMiddleware,
  ConcertMiddleware,
  VideoMiddleware
);

export default RootMiddleware;
