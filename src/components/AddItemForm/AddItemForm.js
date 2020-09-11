/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import CharacterContext from '../../contexts/CharacterContext';
import CharApiService from '../../services/character-api-service';

import './AddItem.css';

export default class AddItemForm extends Component {
  static contextType = CharacterContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const { character } = this.context;
    const { itemName, itemType, itemDescription, itemAbilities } = e.target;

    CharApiService.postItem(
      character.id,
      itemName.value,
      itemType.value,
      itemDescription.value,
      itemAbilities.value
    )
      .then(this.context.addItem)
      .then(() => {
        itemName.value = '';
        itemType.value = '';
        itemDescription.value = '';
        itemAbilities.value = '';
      })
      .catch(this.context.setError);
  };

  render() {
    return (
      <form className="AddItemForm" onSubmit={this.handleSubmit}>
        <div className="AddItemForm_input_box">
          <label htmlFor="itemName">Item Name</label>
          <input name="itemName" type="text" />
        </div>

        <div className="AddItemForm_input_box">
          <label htmlFor="itemType">Item Type</label>
          <input name="itemType" type="text" />
        </div>

        <div className="AddItemForm_input_box">
          <label htmlFor="itemDescription">Item Description</label>
          <input name="itemDescription" type="text" />
        </div>

        <div className="AddItemForm_input_box">
          <label htmlFor="itemAbilities">Item Abilities</label>
          <input name="itemAbilities" type="text" />
        </div>

        <button className="AddItemForm_submit_button" type="submit">
          Add Item
        </button>
        <button
          className="toggleForm_button"
          type="button"
          onClick={this.props.toggleForm}
        >
          Cancel
        </button>
      </form>
    );
  }
}
