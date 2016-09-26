import { FeedConstants } from '../actions/feed_actions';
import merge from 'lodash/merge';

const FeedReducer = (state = [], action) => {
  switch (action.type) {
    case FeedConstants.RECEIVE_FEED:
      let newState = merge([], state);
      if (action.feed.status === "ok") {
        newState = action.feed.items;
      }
      return newState;
    default:
      return state;
  }
};

export default FeedReducer;
