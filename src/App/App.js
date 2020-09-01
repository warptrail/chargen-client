import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import MainMenu from '../routes/MainMenu/MainMenu';
import LoginPage from '../routes/LoginPage/LoginPage';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          {this.state.hasError && <p>An Error has dealt you ten damage</p>}
          <Switch>
            <Route exact path="/" component={MainMenu} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
