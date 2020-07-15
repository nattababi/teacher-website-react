import React, { Component } from 'react';
import { getPage } from '../services/pageService';


class Apartments extends Component {
  state = {
    text: ""
  };

  async componentDidMount() {
    let page = await getPage("apartments");
    console.log('Coming value', page.text)
    this.setState({ text: page.text });
  }
  
  render() {
    return (
      <div style={{ fontFamily: "univers", fontStyle: "italic" }}>
        <p>
          Для преподавателей, находящихся в особом почете, колледж готов предоставить 
          апартаменты класса люкс системы все включено.
        </p>

        <p>
          <b>Широкоформатный стол для проведения переговоров.</b><br></br>
          Поначалу переговорные столы не оснащены устройством для проведения переговоров, 
          как это показано на рисунке, но всё же сходство с оригиналом (см. ниже)
         имеется.
        </p>
    
        <img src="images/others/desk.gif" alt="" border="0"/> 

        <p>
          <b>Суперскоростной компьютер, оснащенный манипулятором "мышь" и возможностью выхода 
            в глобальную мировую сеть.</b><br></br>
            Возможность выхода будет рассмотрена в отдельном порядке и строго индивидуально подобрана, 
            сохраняя специфику нашего заведения, с учетом финансовых
            возможностей руководящих органов и физических возможностей 
            непосредственных исполнителей данной задачи.
        </p>
    
        <img src="images/others/compic.gif" alt="" border="0"/><br></br>

        <audio controls autoPlay hidden>
          <source src="sounds/miss_imposs.mp3" type="audio/mpeg"/>
       </audio>
       <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Apartments;