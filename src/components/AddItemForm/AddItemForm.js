import React, { Component } from 'react';
import CharacterContext from '../../contexts/CharacterContext';
import CharApiService from '../../services/character-api-service';

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
        <label />
        <label htmlFor="itemName">Item Name</label>
        <input name="itemName" type="text" />

        <label htmlFor="itemType">Item Type</label>
        <input name="itemType" type="text" />

        <label htmlFor="itemDescription">Item Description</label>
        <input name="itemDescription" type="text" />

        <label htmlFor="itemAbilities">Item Abilities</label>
        <input name="itemAbilities" type="text" />

        <button type="submit">Add Item</button>
        <button type="button" onClick={this.props.toggleForm}>
          Cancel
        </button>
      </form>
    );
  }
}
