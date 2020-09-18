import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CharacterContext from '../../contexts/CharacterContext';
import CharacterForm from '../../components/CharacterForm/CharacterForm';

export default class UpdateCharacterPage extends Component {
  static contextType = CharacterContext;

  static defaultProps = {
    history: {},
    match: {}
  };

  returnToCharacterPage = () => {
    const { match } = this.props;
    const { characterId } = match.params;

    const { history } = this.props;
    history.push(`/roster/${characterId}`);
  };

  render() {
    const { match } = this.props;
    const { characterId } = match.params;

    return (
      <div>
        Update yer guy here!
        <CharacterForm
          characterId={characterId}
          returnToCharacterPage={this.returnToCharacterPage}
        />
      </div>
    );
  }
}

UpdateCharacterPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};
