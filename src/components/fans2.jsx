import React, { Component } from 'react';

class Fans2 extends Component {
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
      </div>
    );
  }
}

export default Fans2;