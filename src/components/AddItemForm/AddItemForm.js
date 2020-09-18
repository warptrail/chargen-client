import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CharacterContext from '../../contexts/CharacterContext';
import CharApiService from '../../services/character-api-service';

import './AddItem.css';

export default class AddItemForm extends Component {
  static defaultProps = {
    toggleForm: () => {}
  };

  static contextType = CharacterContext;

  handleSubmitItem = (e) => {
    e.preventDefault();
    const { character, addItem, setError } = this.context;
    const { itemName, itemType, itemDescription, itemAbilities } = e.target;

    // Make the Fetch to Post a new item
    CharApiService.postItem(
      character.id,
      itemName.value,
      itemType.value || 'Generic',
      itemDescription.value || 'A typical item',
      itemAbilities.value || 'None'
    )
      .then(addItem)
      .then(() => {
        itemName.value = '';
        itemType.value = '';
        itemDescription.value = '';
        itemAbilities.value = '';
      })
      .catch(setError);
  };

  render() {
    const { toggleForm } = this.props;
    return (
      <form className="AddItemForm" onSubmit={this.handleSubmitItem}>
        <div className="AddItemForm_input_box">
          <label htmlFor="itemName">Item Name</label>
          <input required id="itemName" name="itemName" type="text" />
        </div>

        <div className="AddItemForm_input_box">
          <label htmlFor="itemType">Item Type</label>
          <input id="itemType" name="itemType" type="text" />
        </div>

        <div className="AddItemForm_input_box">
          <label htmlFor="itemDescription">Item Description</label>
          <input id="itemDescription" name="itemDescription" type="text" />
        </div>

        <div className="AddItemForm_input_box">
          <label htmlFor="itemAbilities">Item Abilities</label>
          <input id="itemAbilities" name="itemAbilities" type="text" />
        </div>

        <button className="AddItemForm_submit_button" type="submit">
          Add Item
        </button>
        <button
          className="toggleForm_button"
          type="button"
          onClick={toggleForm}
        >
          Cancel
        </button>
      </form>
    );
  }
}

AddItemForm.propTypes = {
  toggleForm: PropTypes.func
};
