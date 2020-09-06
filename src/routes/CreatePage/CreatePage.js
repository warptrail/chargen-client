import React, { Component } from 'react';
import CharacterForm from '../../components/CharacterForm/CharacterForm';

export default class CreatePage extends Component {
  returnToRosterPage = () => {
    const { history } = this.props;
    history.push(`/roster/`);
  };

  render() {
    return (
      <div>
        <h2>Create a New Character!</h2>
        <CharacterForm returnToRosterPage={this.returnToRosterPage} />
      </div>
    );
  }
}
