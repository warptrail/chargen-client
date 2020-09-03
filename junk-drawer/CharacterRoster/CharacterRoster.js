import React, { Component } from 'react';
import config from '../../config';
import CharApiService from '../../services/character-api-service';

//* import components
// import Table from '../Table/Table';
import CharacterCard from '../CharacterCard/CharacterCard';
import RosterContext from '../../contexts/CharacterContext';

export default class CharacterRoster extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     characters: [],
  //     isFetching: false
  //   };
  // }

  static contextType = RosterContext;

  componentDidMount() {
    // this.getCharacterData();
    this.context.clearError();
    CharApiService.getRoster()
      .then(this.context.setRoster)
      .catch(this.context.setError);
  }

  // getCharacterData = () => {
  //   this.setState({ isFetching: true });
  //   fetch(`${config.API_ENDPOINT}/characters`, { headers: {} })
  //     .then((res) =>
  //       !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  //     )
  //     .then((roster) => {
  //       console.table(roster);
  //       console.log('component did mount!');
  //       this.setState({
  //         roster,
  //         isFetching: false
  //       });
  //     })
  //     .catch((error) => {
  //       this.setState({ isFetching: false });
  //       console.log(error);
  //     });
  // };

  render() {
    // const { characters } = this.state;
    // console.log('render', characters);
    // console.log(new Date());

    // if (this.state.isFetching) {
    //   return <div>Loading...</div>;
    // }

    // if (this.state.characters.length === 0) {
    //   return <div>No character sheets found</div>;
    // }

    return (
      <div>
        {/* {this.state.characters.map((char, index) => (
          <CharacterCard key={index} character={char} />
        ))} */}
        {/* <Table data={this.state.characters} /> */}
      </div>
    );
  }
}
