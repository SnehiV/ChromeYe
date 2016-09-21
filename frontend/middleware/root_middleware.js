import { applyMiddleware } from 'redux';
import ThemeMiddleware from './theme_middleware';

const RootMiddleware = applyMiddleware(
  ThemeMiddleware
);

export default RootMiddleware;
