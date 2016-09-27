export const VideoConstants = {
  REQUEST_VIDEOS: "REQUEST_VIDEOS",
  RECEIVE_VIDEOS: "RECEIVE_VIDEOS"
};

export const requestVideos = () => ({
  type: VideoConstants.REQUEST_VIDEOS
});

export const receiveVideos = (videoIds) => ({
  type: VideoConstants.RECEIVE_VIDEOS,
  videoIds
});
