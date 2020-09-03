import React, { Component } from 'react';

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
    this.setComments([]);
  };

  addItem = (item) => {
    this.setItems([...this.state.items, item]);
  };

  render() {
    const value = {
      character: this.state.character,
      items: this.state.items,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCharacter: this.setCharacter,
      clearCharacter: this.clearCharacter,
      setItems: this.setItems,
      addItem: this.addItem
    };
    return (
      <CharacterContext.Provider value={value}>
        {this.props.children}
      </CharacterContext.Provider>
    );
  }
}
