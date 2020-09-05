import React, { Component } from 'react';

import CharacterContext from '../../contexts/CharacterContext';
import CharacterForm from '../../components/CharacterForm/CharacterForm';

export default class UpdateCharacterPage extends Component {
  static contextType = CharacterContext;

  returnToCharacterPage = () => {
    const { characterId } = this.props.match.params;
    console.log('Its cool guy', this.props.match.params);
    const { history } = this.props;
    history.push(`/roster/${characterId}`);
  };

  render() {
    console.log('routeprope???', this.props);
    return (
      <div>
        Update yer guy here!
        <CharacterForm
          characterId={this.props.match.params.characterId}
          returnToCharacterPage={this.returnToCharacterPage}
        />
      </div>
    );
  }
}
