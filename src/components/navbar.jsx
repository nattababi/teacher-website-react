import React, { Component } from 'react';
import FunnyButton from './funnyButton';

class Navbar extends Component {
  render() {
    return (
      <div>
        <FunnyButton to="teacher">Учительница</FunnyButton>
        <FunnyButton to="talents">Таланты</FunnyButton>
        <FunnyButton to="fans">Поклонники</FunnyButton>
        <FunnyButton to="apartments">Апартаменты</FunnyButton>
        <FunnyButton to="findus">Найди нас</FunnyButton>
        <FunnyButton to="gallery">Галерея</FunnyButton>
      </div>
    );
  }
}

export default Navbar;