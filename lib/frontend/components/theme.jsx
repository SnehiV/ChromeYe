import React from 'react';
import { requestBackground, requestQuote } from '../actions/theme_actions';
import Feed from './feed';
import Concerts from './concerts';

class Theme extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      background: "",
      quote: "",
      videoIndex: Math.floor(Math.random() * 61),
    };
    this.videoURL = `http://www.kanyewest.com/`;
    this.themeStyle = {
      backgroundColor: 'white',
      height: "100%",
      opacity: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    };
  }


  componentWillMount(){
    this.props.fetchBackground();
    this.props.fetchQuote();
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.theme.background !== "") {
      let img = new Image();
      img.src = nextProps.theme.background;
      img.onload = () => {
        this.setState({
          background: nextProps.theme.background,
          quote: nextProps.theme.quote,
        });
      };
    }
  }

  render(){
    if (this.state.background !== "") {
      this.themeStyle = {
        backgroundImage: `url('${this.state.background}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "100%",
        opacity: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      };
    }
    return(
      <div className='theme' style={this.themeStyle}>
        <h1 className='quote'>{this.state.quote}</h1>
        <div className='content'>
          <div className='sub-content'>
            <Feed feed={this.props.feed} fetchFeed={this.props.fetchFeed} />
          </div>
          <div className='sub-content'>
            <div className='yeButton-container'>
              <h3 className='list-header'>Ye Button</h3>
              <a href={this.videoURL} target="_blank" className="yeButton">Ye</a>
            </div>
            <Concerts concerts={this.props.concerts} fetchConcerts={this.props.fetchConcerts} />
          </div>
        </div>
      </div>
    );
  }
}

<a href="#" class="yeButton">red</a>



export default Theme;
