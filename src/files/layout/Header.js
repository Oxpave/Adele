import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import cards from '../../data/cards.js';

class Header extends Component {
  render() {

    let number = 0;

    for (let i = 0; i < cards.length; i++) {
      number += cards[i].words.length;
    }

    return (
      <div className="header">
        <Link to="/" className="logo">Adele{"'"}s <span className="logo--span">{number}</span> words</Link>
      </div>
    );
  }
}

export default Header;
