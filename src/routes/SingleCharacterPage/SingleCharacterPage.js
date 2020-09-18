import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CharacterContext from '../../contexts/CharacterContext';
import CharacterApiService from '../../services/character-api-service';
import CharacterSheet from '../../components/CharacterSheet/CharacterSheet';
import CharacterItems from '../../components/CharacterItems/CharacterItems';
import AddItemForm from '../../components/AddItemForm/AddItemForm';
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader';

import RosterContext from '../../contexts/RosterContext';

import './SingleCharacterPage.css';

export default class SingleCharacterPage extends Component {
  static contextType = CharacterContext;

  state = {
    oldRoster: {},
    showForm: false
  };

  static defaultProps = {
    match: { params: {} },
    history: {}
  };

  // !Note this component references two contexts

  componentDidMount() {
    const { clearError, setError, setCharacter, setItems } = this.context;
    const { match } = this.props;
    const { characterId } = match.params;
    clearError();
    CharacterApiService.getCharacter(characterId)
      .then(setCharacter)
      .catch(setError);
    CharacterApiService.getCharacterItems(characterId)
      .then(setItems)
      .catch(setError);
    CharacterApiService.getRoster().then((oldRoster) =>
      this.setState({ oldRoster })
    );
  }

  componentWillUnmount() {
    const { clearCharacter } = this.context;
    clearCharacter();
  }

  toggleForm = () => {
    const { showForm } = this.state;
    this.setState({
      showForm: !showForm
    });
  };

  renderCharacterSheet() {
    const { character, items } = this.context;
    const { match } = this.props;
    const { showForm } = this.state;
    return (
      <>
        <CharacterSheet character={character} />
        <div className="character_controls">
          <Link className="edit_character_link_btn" to={`${match.url}/update`}>
            Edit Character
          </Link>

          {/* Render Roster Context in order to Delete Character */}
          <RosterContext.Consumer>
            {(roster) => {
              const populateRoster = () => {
                CharacterApiService.getRoster();
              };

              const returnToRosterPage = () => {
                const { history } = this.props;
                history.push('/roster/');
              };

              const handleDeleteCharacter = () => {
                const { characterId } = match.params;
                const { oldRoster } = this.state;
                populateRoster();

                const newRoster = oldRoster.filter(
                  (chr) => chr.id !== Number(characterId)
                );

                CharacterApiService.deleteCharacter(characterId)
                  .then(roster.setRoster(newRoster))
                  .then(returnToRosterPage)
                  .catch(roster.setError);
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

        {/* Render the Character Inventory with add item form to toggle */}
        {items.length === 0 ? null : <CharacterItems items={items} />}
        {showForm ? (
          <AddItemForm toggleForm={this.toggleForm} />
        ) : (
          <div className="addItemForm_toggle_button">
            <button type="button" onClick={this.toggleForm}>
              Add Item
            </button>
          </div>
        )}
      </>
    );
  }

  render() {
    const { error } = this.context;
    return (
      <>
        <SecondaryHeader />

        {error ? (
          <p>There was an error, try again</p>
        ) : (
          this.renderCharacterSheet()
        )}
      </>
    );
  }
}

SingleCharacterPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};
