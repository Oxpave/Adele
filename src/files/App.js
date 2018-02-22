import React from 'react';
import { BrowserRouter , Route, Switch, Redirect } from 'react-router-dom';

import Header from './layout/Header.js';
import Footer from './layout/Footer.js';

import Home from './Home.js';
import Test from './Test.js';

import cards from '../data/cards.js';

class App extends React.Component {

  render() {

    const routes = cards.map((card, index) => {
      let title = card.title;
      return (
        <Route key={card.title} path={'/test/'+title} render={ () => <Test cards={cards} index={index} /> } />
      );
    });

    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path='/' render={ () => <Home cards={cards} /> } />
            {routes}
            <Redirect to='/' />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );

  }

}

export default App;
