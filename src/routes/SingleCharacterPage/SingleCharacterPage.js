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
import RosterContext from '../../contexts/RosterContext';

export default class SingleCharacterPage extends Component {
  state = {
    roster: {},
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
    CharacterApiService.getRoster().then((roster) => this.setState({ roster }));
  }

  componentWillUnmount() {
    this.context.clearCharacter();
  }

  renderCharacterSheet() {
    const { character, items } = this.context;
    return (
      <div>
        <CharacterSheet character={character} />
        {items.length === 0 ? null : <CharacterItems items={items} />}
        {this.state.showForm ? (
          <AddItemForm toggleForm={this.toggleForm} />
        ) : (
          <button onClick={this.toggleForm}>Add Item</button>
        )}
        <Link to={`${this.props.match.url}/update`}>Edit Character</Link>

        {/* Render Roster Context to Delete Character */}
        <RosterContext.Consumer>
          {(roster) => {
            const populateRoster = () => {
              CharacterApiService.getRoster().then((r) => {
                console.log(r);
                // roster.setRoster(r);
              });
            };

            const returnToRosterPage = () => {
              const { history } = this.props;
              history.push(`/roster/`);
            };

            const handleDeleteCharacter = (e) => {
              console.log(e, 'character ID?');
              console.log(this.props.match.params.characterId);
              const { characterId } = this.props.match.params;
              populateRoster();

              const oldRoster = this.state.roster;
              const newRoster = oldRoster.filter(
                (chr) => chr.id !== Number(characterId)
              );
              console.log(oldRoster, newRoster);

              CharacterApiService.deleteCharacter(characterId)
                .then(roster.setRoster(newRoster))
                .then(returnToRosterPage)
                .catch(roster.setError);
              // CharApiService.deleteItem(id)
              //   .then(this.context.setItems(newItems))
              //   .catch(this.context.setError);
            };
            return (
              <button
                className="delete-character-button"
                type="button"
                onClick={handleDeleteCharacter}
              >
                Delete Character
              </button>
            );
          }}
        </RosterContext.Consumer>
      </div>
    );
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  render() {
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
