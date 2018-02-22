import React from 'react';
import { Link } from 'react-router-dom';

import success from '../data/success.js';
import check from '../img/success.svg';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      value: "",
      wrong: false,
      width: 0
    };
  }

  componentWillMount = () => {
    const shuffle = (array) => {
      let currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    this.props.cards[this.props.index].words = shuffle(this.props.cards[this.props.index].words);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.props.cards[this.props.index].words[this.state.current].english.indexOf(this.state.value) > -1) {
      this.setState((prevState) => {
        return {current: prevState.current + 1, width: prevState.width + 100/this.props.cards[this.props.index].words.length}
      });
    } else {
      this.setState({wrong: true});
      setTimeout(function() { this.setState({wrong: false}); }.bind(this), 1000);
    }

    this.setState({value: ""});
  };

  render() {

    let game = null;
    let svg = null;
    let random = Math.floor( Math.random() * success.length ) - 1;
    let output = success[random];

    if (this.state.width === 100) {

      game = <div className="game">
               <div className="game__swedish">
                 <h1>{output}</h1>
               </div>
             </div>

      svg = <img className="check" src={check} alt="Success" />;

    } else {

      game = <div className="game">
               <div className="game__swedish">
                 <h1>{this.props.cards[this.props.index].words[this.state.current].swedish}</h1>
               </div>
               <div className="game__help">
                 <h2>{this.props.cards[this.props.index].words[this.state.current].help}</h2>
               </div>
               <form onSubmit={this.handleSubmit}>
                 <input type="text" className={this.state.wrong ? "wrong" : ""} value={this.state.value} onChange={this.handleChange} />
               </form>
               <div className="game__counter"><h2>{this.state.current + 1} / {this.props.cards[this.props.index].words.length}</h2></div>
             </div>;

    }

    return (
      <div className="container">
        <div className="progress">
          <div className="progress__bar" style={{ width: this.state.width+'%' }}></div>
        </div>
        {game}
        {svg}
        <div className="return">
          <Link to={"/"} className="button"><h3>Go back</h3></Link>
        </div>
      </div>
    );
  }
}

export default Test;
