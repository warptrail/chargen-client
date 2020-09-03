import React, { Component, createContext } from 'react';

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
    error: null
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
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setRoster: this.setRoster
    };
    return (
      <RosterContext.Provider value={value}>
        {this.props.children}
      </RosterContext.Provider>
    );
  }
}
