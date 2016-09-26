import { FeedConstants, requestFeed, receiveFeed} from '../actions/feed_actions';
import { fetchFeed } from '../util/feed_api_util';

const FeedMiddleware = store => next => action => {
  let success = (feed) => store.dispatch(receiveFeed(feed));
  let error = () => {};
  switch (action.type) {
    case FeedConstants.REQUEST_FEED:
      fetchFeed(success);
    break;
    default:
      return next(action);
  }
};

export default FeedMiddleware;
