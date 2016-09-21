import React from 'react';
import { requestBackground, requestQuote } from '../actions/theme_actions';

class Theme extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      background: "",
      quote: ""
    };
    this.themeStyle = {
      backgroundColor: "white",
      height: "100%",
      opacity: 0};
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
        opacity: 1
      };
    }
    console.log(this.state.quote);
    return(
      <div className='theme' style={this.themeStyle}>
        <h1 className='quote'>{this.state.quote}</h1>
      </div>
    );
  }
}

export default Theme;
