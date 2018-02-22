import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {

    const test = this.props.cards.map((card) => {
      return <div className="col" key={card.title}>
              <div className="card">
                <div className="card__heading">
                  <div className="heading__title">
                    <h1><span className="heading__title--span">Words </span>{card.title}</h1>
                  </div>
                  <div className="heading__level">
                    <div className={"level__indicator level__indicator--"+card.level.toLowerCase()}></div>
                    <h5>{card.level}</h5>
                  </div>
                </div>
                <Link to={"/test/" + card.title} className="button"><h3>Start</h3></Link>
              </div>
            </div>
      });

    return (
      <div className="layout">
        <div className="row">
          {test}
        </div>
      </div>
    );

  }

}

export default Home;
