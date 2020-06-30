import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Fans extends Component {
  render() {
    return (
      <div style={{ fontFamily: "univers", fontStyle: "italic" }}>
        <p>
          Из официально известных (подчеркиваю: ОФИЦИАЛЬНО известных) поклонников
          известен только один - почетный рифмоплёт, имя которого навсегда останется тайной
           для нас.
        </p>
        <img src="images/others/poet.gif" alt="Поэт" border="0"/>

       <p>
        Ну а если уж вы решили идти до конца и познать ВСЕХ поклонников, то вам 
          <Link to="fans2"> сюда</Link>
        </p>
        <audio controls autoPlay hidden>
          <source src="sounds/ihaly_kozaki.mp3" type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default Fans;