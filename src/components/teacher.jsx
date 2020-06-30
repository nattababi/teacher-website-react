import React, { Component } from 'react';

class Teacher extends Component {
  render() {
    return (
      <div style={{ fontFamily: "univers", fontStyle: "italic" }}>
        <p>
          Здравствуйте! Меня зовут Ольга Николаевна Граблюк.
          Вернее, меня зовут Натус, но повесть сея не обо мне, а об уважаемой Ольге.
        </p>
        <p>
          В ту роковую пятницу... субботу.... Да, это была суббота. В ту роковую субботу ничто не предвещало неприятностей, если бы не желание г-на Гайнутдинова
          ИМЕТЬ собственный сайт своего любимого колледжа.....
        </p>
        <p>
          Что же предпринять Ольге Николаевне, чтобы удовлетворить изысканный вкус своего босса? И Ольга начинает действовать.
        </p>
        <p>
          Экономизация всей страны не пройдет без вашего участия. Да, да, не пройдёт....
        </p>
        <p>
          Краткая справка: <br></br>
          На плече имеется татуировка. Вредных привычек практически нет.<br></br>
          К уголовной ответственности не привлекалась.
        </p>
        <img src="images/olia/2.jpg" alt="" border="0" />

        <div>Люблю маслины. Но ем всё.</div>
        <img src="images/olia/3.jpg" alt="" border="0" />

        <div>
          Могу на всё махнуть рукой.
        </div>
        <img src="images/olia/4.jpg" alt="" border="0" />

        <div>
          Иногда могу испугаться.
        </div>
        <img src="images/olia/5.jpg" alt="" border="0" />

        <div>
          Могу быть выше всех.
        </div>
        <img src="images/olia/6.jpg" alt="" border="0" />

        <div>
          Могу терять равновесие.
        </div>
        <img src="images/olia/7.jpg" alt="" border="0" />

        <div>
          Могу оторваться.
        </div>
        <img src="images/olia/8.jpg" alt="" border="0"/>

        <div>
          Могу!
        </div>
        <img src="images/olia/9.jpg" alt="" border="0"/>


        <audio controls autoPlay hidden>
          <source src="sounds/bender.mp3" type="audio/mpeg" />
        </audio>

          
      </div >
    );
  }
}

export default Teacher;