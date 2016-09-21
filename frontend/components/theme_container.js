import { connect } from 'react-redux';
import Theme from './theme';
import { requestBackground, requestQuote } from '../actions/theme_actions';
import { requestFeed } from '../actions/feed_actions';

const mapStateToProps = state => ({
  theme: state.theme,
  feed: state.feed
});

const mapDispatchToProps = dispatch => ({
  fetchBackground: () => {dispatch(requestBackground());},
  fetchQuote: () => {dispatch(requestQuote());},
  fetchFeed: () => {dispatch(requestFeed());}
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Theme);
