import React, { Component } from 'react';
import FunnyButton from './funnyButton';
//import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        {/* <Link to="teacher"> <img src="images/buttons/teacher.gif" alt="Учительница" border="0"/> </Link><br></br>
        <Link to="talents"> <img src="images/buttons/talents.gif" alt="Таланты" border="0"/> </Link><br></br>
        <Link to="fans"> <img src="images/buttons/fans.gif" alt="Поклонники" border="0"/> </Link><br></br>
        <Link to="apartments"> <img src="images/buttons/apartments.gif" alt="Апартаменты" border="0"/> </Link><br></br>
        <Link to="findus"> <img src="images/buttons/findus.gif" alt="Найди нас!" border="0"/> </Link><br></br>
        <Link to="gallery"> <img src="images/buttons/gallery.gif" alt="Галерея" border="0"/> </Link><br></br> */}
        <FunnyButton to="teacher">Учительница</FunnyButton>
        <FunnyButton to="talents">Таланты</FunnyButton>
        <FunnyButton to="fans">Поклонники</FunnyButton>
        <FunnyButton to="apartments">Апартаменты</FunnyButton>
        <FunnyButton to="findus">Найди нас</FunnyButton>
        <FunnyButton to="gallery">Галерея</FunnyButton>
        <FunnyButton to="jbTweets">Joe Biden Tweets</FunnyButton>
      </div>
    );
  }
}

export default Navbar;