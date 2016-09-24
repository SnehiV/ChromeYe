import React from 'react';


class Concerts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      concerts: []
    };
  }

  componentWillMount() {
    let self = this;
    chrome.storage.local.get(storage => {
      if (typeof storage.concerts === "undefined") {
        self.props.fetchConcerts();
      } else {
        self.setState({concerts: storage.concerts.concerts});
      }
    });
  }

  componentWillReceiveProps(nextProps) {
     if (this.state.concerts.length === 0 && nextProps.concerts.length > 0) {
       chrome.storage.local.set({'concerts': {concerts: nextProps.concerts, time: Date.now()}});
       this.setState({
         concerts: nextProps.concerts
       });
     }
  }

  concertItems(concerts) {
    let items = concerts.map((concert, idx) => {
      let date = new Date(concert.datetime_local);
      let dateString = `${date.getDate()} ${date.toString().slice(4, 7)} ${date.getFullYear()}`;
      let locationString = `at ${concert.venue.name} in ${concert.venue.display_location}`;
      let urlString = concert.url;
      return (
        <li className='feed-item' key={urlString}>
          <div className='feed-item-date'>{dateString}</div>
          <a href={urlString}>{concert.title} {locationString}</a>
        </li>
      );
    });
    return items;
  }

  concertFilter() {
    if (this.state.concerts.length === 0) {
      return <h4 className='no-shows'>No shows near you</h4>;
    } else if (this.state.concerts.length > 5) {
      return (
        <ul className='feed-list' style={this.feedListStyle}>
          {this.concertItems(this.state.concerts.slice(0, 5))}
        </ul>
      );
    } else {
      return (
        <ul className='feed-list' style={this.feedListStyle}>
          {this.concertItems(this.state.concerts)}
        </ul>
      );
    }
  }

  render() {
    return(
      <div className='feed'>
        <h3 className='list-header'>The Shows of Pablo (near you)</h3>
        {this.concertFilter()}
      </div>
    );

  }
}

export default Concerts;
