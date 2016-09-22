import { ConcertConstants } from '../actions/concert_actions';
import merge from 'lodash/merge';

const ConcertReducer = (state = [], action) => {
  switch (action.type) {
    case ConcertConstants.RECEIVE_CONCERTS:
      let newState = merge([], state, action.concerts.events);
      return newState;
    default:
      return state;
  }
};

export default ConcertReducer;
