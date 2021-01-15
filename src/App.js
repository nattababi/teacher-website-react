import React from 'react';
import { Route } from 'react-router-dom';
import Teacher from './components/teacher';
import Talents from './components/talents';
import Fans from './components/fans';
import Fans2 from './components/fans2';
import Apartments from './components/apartments';
import Findus from './components/findus';
import Gallery from './components/gallery';
import Navbar from './components/navbar.jsx';
import Main from './components/main.jsx';
import JbTweets from './components/jbTweets';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container" >
      <div className="row">
        <div className="col-sm-3">
          <Link to="/"><img src="images/buttons/logo.gif" alt="" border="0" /></Link>
        </div>
        <div className="col-sm-9" style={{textAlign: "center", margin: "auto", 
          fontFamily : "univers", fontStyle: "italic", fontWeight: 'bold',
          fontSize : 26, color : "#808000", textShadow: "2px 2px 0px white"}}>
          Минский Государственный Высший Радиотехнический Колледж
      </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <Navbar />
        </div>
        <div className="col-sm-9">
          <Route path="/teacher" component={Teacher} />
          <Route path="/talents" component={Talents} />
          <Route path="/fans" component={Fans} />
          <Route path="/fans2" component={Fans2} />
          <Route path="/apartments" component={Apartments} />
          <Route path="/findus" component={Findus} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/jbTweets" component={JbTweets} />
          <Route exact path="/" component={Main} />
        </div>
      </div>
    </div>
  );
}

export default App;