/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterContext from '../../contexts/CharacterContext';
import CharacterApiService from '../../services/character-api-service';
import CharacterSheet from '../../components/CharacterSheet/CharacterSheet';
import CharacterItems from '../../components/CharacterItems/CharacterItems';

export default class SingleCharacterPage extends Component {
  state = {
    showForm: false
  };

  static defaultProps = {
    match: { params: {} }
  };

  static contextType = CharacterContext;

  componentDidMount() {
    const { characterId } = this.props.match.params;
    this.context.clearError();
    CharacterApiService.getCharacter(characterId)
      .then(this.context.setCharacter)
      .catch(this.context.setError);
    CharacterApiService.getCharacterItems(characterId)
      .then(this.context.setItems)
      .catch(this.context.setError);
  }

  renderCharacterSheet() {
    const { character, items } = this.context;
    return (
      <div>
        <CharacterSheet character={character} />
        {!items ? null : <CharacterItems items={items} />}
      </div>
    );
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  render() {
    console.log(this.context);
    const { error } = this.context;
    return (
      <>
        <Link to="/roster">
          <p>Back to Roster</p>
        </Link>
        <section className="CharacterSheet">
          {error ? (
            <p>There was an error, try again</p>
          ) : (
            this.renderCharacterSheet()
          )}

          {this.state.showForm ? (
            <form>
              <input type="text" />
              <button type="submit">Push</button>
              <button type="button" onClick={this.toggleForm}>
                Cancel
              </button>
            </form>
          ) : (
            <button onClick={this.toggleForm}>Add Item</button>
          )}
          <button>Delete Character</button>
        </section>
      </>
    );
  }
}
