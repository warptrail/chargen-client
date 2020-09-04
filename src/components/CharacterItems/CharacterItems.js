/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import CharApiService from '../../services/character-api-service';
import CharacterContext from '../../contexts/CharacterContext';

export default class CharacterItems extends Component {
  static contextType = CharacterContext;

  handleDeleteItem = (id) => {
    console.log(id, 'item ID?');
    const { items } = this.context;
    const newItems = items.filter((item) => item.id !== id);
    console.log(items);

    CharApiService.deleteItem(id)
      .then(this.context.setItems(newItems))
      .catch(this.context.setError);
  };

  render() {
    return (
      <ul className="SingleCharacterPage__item_list">
        {this.context.items.length === 0
          ? null
          : this.props.items.map((item, index) => (
              <li key={index} className="SingleCharacterPage__item">
                <h3>{item.item_name}</h3>
                <p>Type: {item.item_type}</p>
                <p>Description: {item.item_description}</p>
                <p>Abilities: {item.item_abilities}</p>
                <p>Created By: {item.user.user_name}</p>
                <button
                  type="button"
                  onClick={() => this.handleDeleteItem(item.id)}
                >
                  Delete Item
                </button>
              </li>
            ))}
      </ul>
    );
  }
}
