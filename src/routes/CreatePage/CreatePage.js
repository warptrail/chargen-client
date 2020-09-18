import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CharacterForm from '../../components/CharacterForm/CharacterForm';
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader';

export default class CreatePage extends Component {
  static defaultProps = {
    history: '/'
  };

  returnToRosterPage = () => {
    const { history } = this.props;
    history.push('/roster/');
  };

  render() {
    return (
      <div>
        <SecondaryHeader />
        <h2>Create a New Character!</h2>
        <CharacterForm returnToRosterPage={this.returnToRosterPage} />
      </div>
    );
  }
}

CreatePage.propTypes = {
  history: PropTypes.object
};
