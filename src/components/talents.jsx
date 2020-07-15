import React, { Component } from 'react';
import { getPage } from '../services/pageService';

class Talents extends Component {
  state = {
    text: ""
  };

  async componentDidMount() {
    let page = await getPage("talents");
    console.log('Coming value', page.text)
    this.setState({ text: page.text });
  }
  
  render() {
    return (
      <div style={{ fontFamily: "univers", fontStyle: "italic" }}>
        <p>Несомненно, главным талантом Минского Государственного Высшего Радиотехнического
         Колледжа является студент второго курса обучения <b>УШОЛИК АРТЁМ</b>
        </p>
        <img src="images/others/artiom.gif" alt="" border="0" />
        <p>
          Всех потрясает его всепоглощающая страсть и рвение к учебе. Глубочайшие следы в душе оставляет диссертация Артёма на тему "Есть ли жизнь на Марсе?" и
          другие научные исследования.
        </p>
        <audio controls autoPlay hidden>
          <source src="sounds/sirtaki.mp3" type="audio/mpeg" />
        </audio>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Talents;