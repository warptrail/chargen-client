/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterContext from '../../contexts/CharacterContext';
import CharacterApiService from '../../services/character-api-service';
import CharacterSheet from '../../components/CharacterSheet/CharacterSheet';
import CharacterItems from '../../components/CharacterItems/CharacterItems';
import AddItemForm from '../../components/AddItemForm/AddItemForm';

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

  componentWillUnmount() {
    this.context.clearCharacter();
  }

  renderCharacterSheet() {
    const { character, items } = this.context;
    console.log(this.props);
    return (
      <div>
        <CharacterSheet character={character} />
        {items.length === 0 ? null : <CharacterItems items={items} />}
        {this.state.showForm ? (
          <AddItemForm toggleForm={this.toggleForm} />
        ) : (
          <button onClick={this.toggleForm}>Add Item</button>
        )}
        <button className="delete-character-button" type="button">
          Delete Character
        </button>
        <Link to={`${this.props.match.url}/update`}>Edit Character</Link>
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
        </section>
      </>
    );
  }
}
