import React, { Component } from 'react';
import { getPage } from '../services/pageService';

class Findus extends Component {
  state = {
    text: ""
  };

  async componentDidMount() {
    let page = await getPage("findus");
    console.log('Coming value', page.text)
    this.setState({ text: page.text });
  }
  render() {
    return (
      <div style={{fontFamily: "univers", fontStyle: "italic"}}>
        <img src="images/others/findus.gif" alt="" border="0"/>
        <p>
          Пр-т Скорины, 62<br></br>
          к.416<br></br>
          <b>Граблюк Ольга Николаевна</b>
        </p>
        <audio controls autoPlay hidden>
          <source src="sounds/adams.mp3" type="audio/mpeg" />
        </audio>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Findus;