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

    return (
      <div style={{ fontFamily: "Helvetica Neue" }}>
        <p><b>Here go tweet of our famous president!</b></p>
        {this.state.tweets.map(element => <p>{element.submitted_at} {element.message}</p>)}
      </div>
    );
  }
}

export default DtTweets