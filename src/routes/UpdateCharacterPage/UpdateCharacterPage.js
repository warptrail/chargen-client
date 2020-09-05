import React, { Component } from 'react';

import CharacterContext from '../../contexts/CharacterContext';
import CharacterForm from '../../components/CharacterForm/CharacterForm';

export default class UpdateCharacterPage extends Component {
  static contextType = CharacterContext;

  render() {
    return (
      <div>
        Update yer guy here!
        <CharacterForm characterId={this.props.match.params.characterId} />
      </div>
    );
  }
}
