/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import CharacterContext from '../../contexts/CharacterContext';
import CharacterForm from '../../components/CharacterForm/CharacterForm';

export default class UpdateCharacterPage extends Component {
  static contextType = CharacterContext;

  returnToCharacterPage = () => {
    const { characterId } = this.props.match.params;
    console.log('Its cool guy', characterId);
    const { history } = this.props;
    history.push(`/roster/${characterId}`);
  };

  render() {
    const { characterId } = this.props.match.params;
    console.log('route props???', this.props);
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
