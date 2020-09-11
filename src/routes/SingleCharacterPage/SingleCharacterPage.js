/* eslint-disable react/no-access-state-in-setstate */
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

import './SingleCharacterPage.css';

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
        <div className="character_controls">
          <Link
            className="edit_character_link_btn"
            to={`${this.props.match.url}/update`}
          >
            Edit Character
          </Link>

          {/* Render Roster Context to Delete Character */}
          <RosterContext.Consumer>
            {(roster) => {
              const populateRoster = () => {
                CharacterApiService.getRoster();
              };

              const returnToRosterPage = () => {
                const { history } = this.props;
                history.push('/roster/');
              };

              const handleDeleteCharacter = (e) => {
                const { characterId } = this.props.match.params;
                populateRoster();

                const oldRoster = this.state.roster;
                const newRoster = oldRoster.filter(
                  (chr) => chr.id !== Number(characterId)
                );

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
                  className="delete_character_button"
                  type="button"
                  onClick={handleDeleteCharacter}
                >
                  Delete Character
                </button>
              );
            }}
          </RosterContext.Consumer>
        </div>

        {items.length === 0 ? null : <CharacterItems items={items} />}
        {this.state.showForm ? (
          <AddItemForm toggleForm={this.toggleForm} />
        ) : (
          <div className="addItemForm_toggle_button">
            <button type="button" onClick={this.toggleForm}>
              Add Item
            </button>
          </div>
        )}
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
        <Link className="back_to_roster_link" to="/roster">
          ⬅︎ Back to Roster
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
