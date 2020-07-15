import React, { Component } from 'react';
import { getTweets } from '../services/tweetService';

class DtTweets extends Component {

  state = {
    tweets: []
  };

  async componentDidMount() {
    let tweets = await getTweets();
    console.log('COMING VALUE', tweets)
    this.setState({ tweets });
  }

  render() {

    console.log('my tweets', this.state.tweets);
   
    this.state.tweets.sort((a, b)=>(a.created_at<b.created_at ? 1: -1));
    
    return (
      <div style={{ fontFamily: "Helvetica Neue"}}>
        {this.state.tweets.map(element => <p>{element.created_at} {element.full_text}</p>)}
      </div>
    );
  }
}

export default DtTweets