import React, { Component } from 'react';
import { getPage } from '../services/pageService';

class Fans2 extends Component {
  state = {
    text: ""
  };

  async componentDidMount() {
    let page = await getPage("fans2");
    console.log('Coming value', page.text)
    this.setState({ text: page.text });
  }
  
  render() {
    return (
      <div style={{fontFamily: "univers", fontStyle: "italic"}}>
        <p>
        Ну что уж тут говорить?...... <br></br>
        ... да я даже номера его телефона не знаю.
        </p>
        <audio controls autoPlay hidden>
          <source src="sounds/slujroman.mp3" type="audio/mpeg" />
        </audio>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Fans2;