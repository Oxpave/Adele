import React, { Component } from 'react';

let year = new Date().getFullYear();

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="copyright">©{year}</div>
      </div>
    );
  }
}

export default Footer;
