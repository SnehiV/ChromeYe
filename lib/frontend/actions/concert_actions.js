

export const ConcertConstants = {
  REQUEST_CONCERTS: "REQUEST_CONCERTS",
  RECEIVE_CONCERTS: "RECEIVE_CONCERTS"
};

export const requestConcerts = () => ({
  type: ConcertConstants.REQUEST_CONCERTS
});

export const receiveConcerts = (concerts) => ({
  type: ConcertConstants.RECEIVE_CONCERTS,
  concerts
});
