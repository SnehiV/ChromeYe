import { connect } from 'react-redux';
import Theme from './theme';
import { requestBackground, requestQuote } from '../actions/theme_actions';

const mapStateToProps = state => ({
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  fetchBackground: () => {dispatch(requestBackground());},
  fetchQuote: () => {dispatch(requestQuote());}
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Theme);
