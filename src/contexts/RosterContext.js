import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import TokenService from '../services/token-service';

const RosterContext = createContext({
  roster: [],
  error: null,
  hasAuthToken: false,
  setError: () => {},
  clearError: () => {},
  setRoster: () => {}
});
export default RosterContext;

export class RosterProvider extends Component {
  static defaultProps = {
    children: {}
  };

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
    const { roster, hasAuthToken, error } = this.state;
    const { children } = this.props;
    const value = {
      roster,
      hasAuthToken,
      error,
      setError: this.setError,
      clearError: this.clearError,
      setRoster: this.setRoster,
      setAuthToken: this.setAuthToken
    };
    return (
      <RosterContext.Provider value={value}>{children}</RosterContext.Provider>
    );
  }
}

RosterProvider.propTypes = {
  children: PropTypes.object
};
