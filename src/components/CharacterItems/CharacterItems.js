import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharApiService from '../../services/character-api-service';
import CharacterContext from '../../contexts/CharacterContext';

import './CharacterItems.css';

export default class CharacterItems extends Component {
  static defaultProps = {
    items: [
      {
        id: 0,
        item_name: '',
        item_type: '',
        item_description: '',
        item_abilities: ''
      }
    ]
  };

  static contextType = CharacterContext;

  // Makes the delete fetch request to delete an item
  handleDeleteItem = (id) => {
    const { items, setItems, setError } = this.context;
    const newItems = items.filter((item) => item.id !== id);

    CharApiService.deleteItem(id).then(setItems(newItems)).catch(setError);
  };

  render() {
    const { items } = this.props;
    return (
      <>
        <h4 className="item_list_title">Items List:</h4>
        <ul className="SingleCharacterPage__item_list">
          {items.length === 0
            ? null
            : items.map((item, index) => (
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

CharacterItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      item_name: PropTypes.string,
      item_type: PropTypes.string,
      item_description: PropTypes.string,
      item_abilities: PropTypes.string
    })
  )
};
