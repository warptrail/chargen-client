import React, { Component, createContext } from 'react';
import TokenService from '../services/token-service';

const RosterContext = createContext({
  roster: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setRoster: () => {}
});
export default RosterContext;

export class RosterProvider extends Component {
  state = {
    roster: [],
    hasAuthToken: TokenService.hasAuthToken(),
    error: null
  };

  setAuthToken = (token) => {
    this.setState({ hasAuthToken: token });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setRoster = (roster) => {
    this.setState({ roster });
  };

  render() {
    const value = {
      roster: this.state.roster,
      hasAuthToken: this.state.hasAuthToken,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setRoster: this.setRoster,
      setAuthToken: this.setAuthToken
    };
    return (
      <RosterContext.Provider value={value}>
        {this.props.children}
      </RosterContext.Provider>
    );
  }
}
