import { ConcertConstants, requestConcerts, receiveConcerts} from '../actions/concert_actions';
import { fetchConcerts } from '../util/concerts_api_util';

const ConcertMiddleware = store => next => action => {
  switch (action.type) {
    case ConcertConstants.REQUEST_CONCERTS:
      let success = (concerts) => {store.dispatch(receiveConcerts(concerts));};
      fetchConcerts(success);
      break;
    default:
      return next(action);
  }
};

export default ConcertMiddleware;
