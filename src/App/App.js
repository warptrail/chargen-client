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
import AboutPage from '../routes/AboutPage/AboutPage';
import NotFoundPage from '../routes/NotFoundPage/NotFoundPage';
import PublicOnlyRoute from '../utils/PublicOnlyRoute';
import PrivateRoute from '../utils/PrivateRoute';
import RosterContext from '../contexts/RosterContext';

import './App.css';

export default class App extends Component {
  static contextType = RosterContext;

  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    // Check if token exists
    if (!TokenService.hasAuthToken()) {
      return;
    }
    // Check if token is expired and delete if expired.
    const token = TokenService.readJwtToken();
    const { setAuthToken } = this.context;
    if (new Date(token.exp * 1000) < new Date()) {
      TokenService.clearAuthToken();
      setAuthToken(null);
    }
  }

  render() {
    const { hasError, hideSecondaryMenu } = this.state;
    return (
      <div className="App">
        <Header atHomePage={hideSecondaryMenu} />

        <main className="App__main">
          {hasError && <p>An Error has dealt you ten damage!</p>}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PublicOnlyRoute exact path="/login" component={LoginPage} />
            <PublicOnlyRoute
              exact
              path="/register"
              component={RegistrationPage}
            />
            <PrivateRoute exact path="/roster" component={RosterPage} />
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
            <Route exact path="/about" component={AboutPage} />

            <PrivateRoute exact path="/create" component={CreatePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
