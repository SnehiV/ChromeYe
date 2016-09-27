import { VideoConstants, requestVideos, receiveVideos } from '../actions/video_actions';
import { fetchVideos } from '../util/video_api_util';

const VideoMiddleware = store => next => action => {
  let error = () => {};
  let success = (videoIds) => store.dispatch(receiveVideos(videoIds));
  switch (action.type) {
    case VideoConstants.REQUEST_VIDEOS:
      fetchVideos(success, error);
      break;
    default:
      return next(action);
  }
};

export default VideoMiddleware;
