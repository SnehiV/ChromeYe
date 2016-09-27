import { connect } from 'react-redux';
import Theme from './theme';
import { requestBackground, requestQuote } from '../actions/theme_actions';
import { requestFeed } from '../actions/feed_actions';
import { requestConcerts } from '../actions/concert_actions';
import { requestVideos } from '../actions/video_actions';

const mapStateToProps = state => ({
  theme: state.theme,
  feed: state.feed,
  concerts: state.concerts,
  videos: state.videos
});

const mapDispatchToProps = dispatch => ({
  fetchBackground: () => {dispatch(requestBackground());},
  fetchQuote: () => {dispatch(requestQuote());},
  fetchFeed: () => {dispatch(requestFeed());},
  fetchConcerts: () => {dispatch(requestConcerts());},
  fetchVideos: () => {dispatch(requestVideos());}
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Theme);
