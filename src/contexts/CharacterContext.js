import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const nullCharacter = {
  author: {},
  tags: [],
  user: {
    user_name: ''
  }
};

export const nullItems = [
  {
    user: {
      user_name: ''
    }
  }
];

const CharacterContext = React.createContext({
  character: nullCharacter,
  items: nullItems,
  error: null,
  setError: () => {},
  clearError: () => {},
  setCharacter: () => {},
  clearCharacter: () => {},
  setItems: () => {},
  addItem: () => {}
});

export default CharacterContext;

export class CharacterProvider extends Component {
  static defaultProps = {
    children: {}
  };

  state = {
    character: nullCharacter,
    items: nullItems,
    error: null
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setCharacter = (character) => {
    this.setState({ character });
  };

  setItems = (items) => {
    this.setState({ items });
  };

  clearCharacter = () => {
    this.setCharacter(nullCharacter);
    this.setItems(nullItems);
  };

  addItem = (item) => {
    const { items } = this.state;
    this.setItems([...items, item]);
  };

  // deleteItem = (item) => {
  //   const items = this.state.items.filter((itm) => itm.id !== item.id);
  //   this.setItems([items]);
  //   console.log(item.id, 'deletingItem Check');
  // };

  render() {
    const { character, items, error } = this.state;
    const value = {
      character,
      items,
      error,
      setError: this.setError,
      clearError: this.clearError,
      setCharacter: this.setCharacter,
      clearCharacter: this.clearCharacter,
      setItems: this.setItems,
      addItem: this.addItem,
      deleteItem: this.deleteItem
    };

    const { children } = this.props;
    return (
      <CharacterContext.Provider value={value}>
        {children}
      </CharacterContext.Provider>
    );
  }
}

CharacterProvider.propTypes = {
  children: PropTypes.object
};
