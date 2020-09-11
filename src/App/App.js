import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TokenService from '../services/token-service';

// Import Components
import Header from '../components/Header/Header';

// Import Route Pages
import HomePage from '../routes/HomePage/HomePage';
import LoginPage from '../routes/LoginPage/LoginPage';
import RegistrationPage from '../routes/RegistrationPage/RegistrationPage';
import RosterPage from '../routes/RosterPage/RosterPage';
import SingleCharacterPage from '../routes/SingleCharacterPage/SingleCharacterPage';
import UpdateCharacterPage from '../routes/UpdateCharacterPage/UpdateCharacterPage';
import CreatePage from '../routes/CreatePage/CreatePage';
import NotFoundPage from '../routes/NotFoundPage/NotFoundPage';
import PublicOnlyRoute from '../utils/PublicOnlyRoute';
import PrivateRoute from '../utils/PrivateRoute';
import RosterContext from '../contexts/RosterContext';

import './App.css';

export default class App extends Component {
  state = { hasError: false };

  static contextType = RosterContext;

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    if (!TokenService.hasAuthToken()) {
      return;
    }
    const token = TokenService.readJwtToken();
    console.log(token);
    if (new Date(token.exp * 1000) < new Date()) {
      TokenService.clearAuthToken();
      this.context.setAuthToken(null);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main className="App__main">
          {this.state.hasError && <p>An Error has dealt you ten damage!</p>}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PublicOnlyRoute exact path="/login" component={LoginPage} />
            <PublicOnlyRoute
              exact
              path="/register"
              component={RegistrationPage}
            />
            <Route exact path="/roster" component={RosterPage} />
            <Route
              exact
              path="/roster/:characterId"
              component={SingleCharacterPage}
            />
            <PrivateRoute
              exact
              path="/roster/:characterId/update"
              component={UpdateCharacterPage}
            />

            <PrivateRoute exact path="/create" component={CreatePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
