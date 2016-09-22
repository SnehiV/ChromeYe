import React from 'react';


class Concerts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      concerts: []
    };
  }

  componentWillMount() {
    this.props.fetchConcerts();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      concerts: nextProps.concerts
    });
  }

  concertItems(concerts) {
    let items = concerts.map((concert, idx) => {
      let date = new Date(concert.datetime_local);
      let dateString = `${date.getDate()} ${date.toString().slice(4, 7)} ${date.getFullYear()}`;
      let locationString = `in ${concert.venue.display_location} at ${concert.venue.name}`;
      let urlString = concert.url;
      return (
        <li className='feed-item' key={urlString}>
          <div className='feed-item-date'>{dateString}</div>
          <a href={urlString}>{concert.title} {locationString}</a>
        </li>
      );
    });
  }

  concertFilter() {
    if (this.state.concerts.length === 0) {
      return <h4>No shows near you</h4>;
    } else if (this.state.concerts.length > 5) {
      return (
        <ul className='feed-list'>
          {this.concertItems(this.state.concerts.slice(0, 5))}
        </ul>
      );
    } else {
      return (
        <ul className='feed-list'>
          {this.concertItems(this.state.concerts)}
        </ul>
      );
    }
  }

  render() {
    return(
      <div className='feed'>
        <h3 className='list-header'>The Shows of Pablo</h3>
        {this.concertFilter()}
      </div>
    );

  }
}

export default Concerts;
