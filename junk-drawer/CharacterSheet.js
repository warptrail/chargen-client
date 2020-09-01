import React, { Component } from 'react';
import config from '../../config';
import Table from '../Table/Table';

export default class CharacterSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      isFetching: false
    };
  }

  componentDidMount() {
    this.getCharacterData();
  }

  getCharacterData = () => {
    this.setState({ isFetching: true });
    fetch(`${config.API_ENDPOINT}/charsheets`, { headers: {} })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((characters) => {
        console.table(characters);
        console.log('component did mount!');
        this.setState({
          characters,
          isFetching: false
        });
      })
      .catch((error) => {
        this.setState({ isFetching: false });
        console.log(error);
      });
  };

  render() {
    const { characters } = this.state;
    console.log('render', characters);
    console.log(new Date());

    if (this.state.isFetching) {
      return <div>Loading...</div>;
    }

    if (this.state.characters.length === 0) {
      return <div>No character sheets found</div>;
    }

    return (
      <div>
        {this.state.characters.map((char) => char.char_name)}
        <Table data={this.state.characters} />
      </div>
    );
  }
}
