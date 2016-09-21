

export const ThemeConstants = {
  REQUEST_BACKGROUND: 'REQUEST_BACKGROUND',
  REQUEST_QUOTE: 'REQUEST_QUOTE',
  RECEIVE_BACKGROUND: 'RECEIVE_BACKGROUND',
  RECEIVE_QUOTE: 'RECEIVE_QUOTE'
};

export const requestBackground = () => ({
  type: ThemeConstants.REQUEST_BACKGROUND
});
export const  requestQuote = () => ({
  type: ThemeConstants.REQUEST_QUOTE
});
export const receiveBackground = (imageURL) => ({
  type: ThemeConstants.RECEIVE_BACKGROUND,
  imageURL
});

export const receiveQuote = (quote) => ({
  type: ThemeConstants.RECEIVE_QUOTE,
  quote
});
