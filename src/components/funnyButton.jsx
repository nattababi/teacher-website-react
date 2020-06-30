import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FunnyButton extends Component {
  render() {
    return (
      <Link style={{textDecoration: "none", color: "#000000"}} {...this.props}>
        <div style={{
          borderRadius: '11px',
          padding: '4px 32px', margin: '2px', borderColor: '#808000', background: 'transparent',
          borderWidth: '2px', borderStyle: 'solid', fontWeight: 'bold', 
          fontFamily: "Snell Roundhand", fontSize: "20px"
        }}>      
          {this.props.children}
          </div>
        </Link>
    );
  }
}

export default FunnyButton;