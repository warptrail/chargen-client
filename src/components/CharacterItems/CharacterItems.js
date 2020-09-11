/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import CharApiService from '../../services/character-api-service';
import CharacterContext from '../../contexts/CharacterContext';

import './CharacterItems.css';

export default class CharacterItems extends Component {
  static contextType = CharacterContext;

  handleDeleteItem = (id) => {
    console.log(id, 'item ID?');
    const { items } = this.context;
    const newItems = items.filter((item) => item.id !== id);

    CharApiService.deleteItem(id)
      .then(this.context.setItems(newItems))
      .catch(this.context.setError);
  };

  render() {
    return (
      <>
        <h4 className="item_list_title">Items List:</h4>
        <ul className="SingleCharacterPage__item_list">
          {this.context.items.length === 0
            ? null
            : this.props.items.map((item, index) => (
                <li key={index} className="item_list">
                  <h3>{item.item_name}</h3>
                  <p>
                    <span className="item_attribute_title">Type:</span>{' '}
                    {item.item_type}
                  </p>
                  <p>
                    {' '}
                    <span className="item_attribute_title">
                      Description:
                    </span>{' '}
                    {item.item_description}
                  </p>
                  <p>
                    {' '}
                    <span className="item_attribute_title">
                      Abilities:
                    </span>{' '}
                    {item.item_abilities}
                  </p>

                  <div className="item_delete_button">
                    <button
                      type="button"
                      onClick={() => this.handleDeleteItem(item.id)}
                    >
                      Delete Item
                    </button>
                  </div>
                </li>
              ))}
        </ul>
      </>
    );
  }
}
