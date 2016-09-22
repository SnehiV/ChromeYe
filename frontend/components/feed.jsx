import React from 'react';


class Feed extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      feed: []
    };
  }

  componentWillMount(){
    this.props.fetchFeed();
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      feed: nextProps.feed
    });
  }

  similarTitles(title1, title2){
    let words1 = title1.split(" ");
    let words2 = title2.split(" ");
    let count = 0;
      words1.forEach(word1 => {
          words2.forEach(word2 => {
            if (word1 === word2) {
              count += 1;
            }
          });
      });
    return count > 3;
  }

  filterFeed(){
    let copy = this.state.feed.slice(0, 10).filter((item, idx) => {
      for (var i = idx + 1; i < this.state.feed.length; i++) {
        return !this.similarTitles(item.title, this.state.feed[i].title);
      }
    });
    return copy;
  }

  everyOther(){
    let newFeed = [];
    for (var i = 0; i < this.state.feed.length; i = i + 3) {
      newFeed.push(this.state.feed[i]);
    }
    return newFeed;
  }

  render(){
    let feedItems = this.everyOther().map((item, idx) => {
      let date = item.pubDate.slice(5,16);
      let title = item.title;
      let link = <a href={item.link}>{title}</a>;
      return (
        <li className='feed-item' key={title + idx}>
          <div className='feed-item-date'>{date}</div>
          {link}
        </li>
      );
    });

    return(
      <div className='feed'>
        <h3 className='list-header'>My Beautiful Dark Twisted Feed</h3>
        <ul className='feed-list'>
          {feedItems}
        </ul>
      </div>
    );
  }
}

export default Feed;
