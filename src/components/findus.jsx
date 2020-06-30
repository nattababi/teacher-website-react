import React, { Component } from 'react';

class Findus extends Component {
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
      </div>
    );
  }
}

export default Findus;