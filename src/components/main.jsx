import React, { Component } from 'react';
import { getPage } from '../services/pageService';

class Main extends Component {
  state = {
    text: ""
  };

  async componentDidMount() {
    console.log('before call');
    let page = await getPage("main");
    console.log('after call');
    console.log('Coming value', page.text)
    this.setState({ text: page.text });
  }
  
  render() {
    return (
      <div style={{fontFamily: "univers", fontStyle: "italic"}}>
        <p>
          Творческий коллектив Минского Высшего Радиотехнического Колледжа 
          рад приветствовать Вас на нашем официальном сайте!
        </p>
        <p>
          Открыты всем, ценим каждого - вот основополагающая идея, 
          проходящая красной нитью через весь воспитательно-образовательный процесс 
          нашего учебного заведения.
        </p>
        <p>
          Чуткие педагоги помогут вашим детям обрести индивидуальность, 
          раскрыть таланты, затаившиеся в самых глубинках души, и главное - 
          в нашей кузнице талантов мы готовим высококвалифицированные кадры 
          по специальностям экономика, экономика и еще раз экономика.
        </p>
        <p>
          Экономизация всей страны не пройдет без вашего участия.
        </p>
        <p>
          Внеси свою лепту в будущее всей Беларуси!
        </p>

        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Main;