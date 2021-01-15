import React, { Component } from 'react';
import { getTweets } from '../services/tweetService';

class JbTweets extends Component {

  state = {
    tweets: []
  };

  async componentDidMount() {
    let tweets = await getTweets();
    console.log('COMING VALUE', tweets)
    this.setState({ tweets });
  }

  render() {

    return (
      <div style={{ fontFamily: "Helvetica Neue" }}>
        <p><b>Here are tweets of Joe Biden!</b></p>
        {this.state.tweets.map(element => <p>{element.submitted_at} {element.message}</p>)}
      </div>
    );
  }
}

export default JbTweets;