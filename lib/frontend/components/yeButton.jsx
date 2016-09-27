import React from 'react';

class YeButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      videos: []
    };
  }

  componentWillMount(){
    let self = this;
    chrome.storage.local.get(storage => {
      if (typeof storage.videos === "undefined") {
        self.props.fetchVideos();
      } else {
        self.setState({videos: storage.videos.videos});
      }
    });
  }

  componentWillReceiveProps(nextProps){
    if (this.state.videos.length === 0 && nextProps.videos.length > 0) {
      chrome.storage.local.set({'videos': {videos: nextProps.videos, time: Date.now()}});
      this.setState({
        videos: nextProps.videos
      });
    }
  }

  yeButtonClick(e){
    e.preventDefault();
    let videoId;
    if (this.state.videos.length > 0) {
      videoId = this.state.videos[Math.floor(Math.random() * 50)];
    } else {
      videoId = "0hdQmd0uug0";
    }
    let videoURL = `http://cdn.embedly.com/widgets/media.html?src=https://www.youtube.com/embed/${videoId}?feature=oembed&autoplay=1&url=http://www.youtube.com/watch?v=${videoId}&image=https://i.ytimg.com/vi/${videoId}/hqdefault.jpg&args=showinfo=0&key=fb9e352be661412e8424e2de92f19747&type=text/html&schema=youtube`;
    window.open(videoURL, '_blank');
  }

  render(){

    return(
      <div className='yeButton-container'>
        <h3 className='list-header'>Ye Button</h3>
        <button onClick={this.yeButtonClick.bind(this)} target="_blank" className="yeButton">Ye</button>
      </div>
    );
  }
}

export default YeButton;
