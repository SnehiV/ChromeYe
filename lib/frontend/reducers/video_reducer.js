import { VideoConstants } from '../actions/video_actions';
import merge from 'lodash/merge';

const VideoReducer = (state = [], action) => {
  switch (action.type) {
    case VideoConstants.RECEIVE_VIDEOS:
    let newState = merge([], state);
    if (action.videoIds.length > 0) {
      newState = action.videoIds;
    }
    return newState;
    default:
      return state;
  }
};

export default VideoReducer;
