import React, { Component } from 'react';
import NewCharacterForm from '../../components/NewCharacterForm/NewCharacterForm';

export default class CreatePage extends Component {
  render() {
    return (
      <div>
        <h2>Create a New Character!</h2>
        <NewCharacterForm />
      </div>
    );
  }
}
