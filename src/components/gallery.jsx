import React, { Component } from 'react';
import { getPage } from '../services/pageService';

class Gallery extends Component {
  state = {
    text: ""
  };

  async componentDidMount() {
    let page = await getPage("gallery");
    console.log('Coming value', page.text)
    this.setState({ text: page.text });
  }
  
  render() {
    return (
      <div style={{fontFamily: "univers", fontStyle: "italic"}}> 
        <p>
          Все, на галерею меня не хватило. Занимайся сама вже ей. <br></br><br></br>
          Сегодня 19:05 4/19/2004 <br></br><br></br>
          А если честно, то мне сейчас очень-очень плохо. Плохо потому, что я - дура. Дура самая настоящая. Поэтому и страдаю. За дело наврное. Или за грехи мои.
          Да.... скорее за это. <br></br><br></br>
          Что я могу еще добавить в скромное послание на далёкую планету? Да наверное ничего уж больше.<br></br><br></br>
          Всем желаю счастья и удачи. И жизни весёлой и прекрасной. Побольше доброты и сочувствия к людям. И сил для жизни. Сил для солнца. Сил для любви...
        </p>
        <audio controls autoPlay hidden>
          <source src="sounds/kelize.mp3" type="audio/mpeg"/>
        </audio>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Gallery;