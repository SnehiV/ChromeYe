

export const FeedConstants = ({
  REQUEST_FEED: "REQUEST_FEED",
  RECEIVE_FEED: "RECEIVE_FEED"
});

export const requestFeed = () => ({
  type: FeedConstants.REQUEST_FEED
});

export const receiveFeed = (feed) => ({
  type: FeedConstants.RECEIVE_FEED,
  feed
});
