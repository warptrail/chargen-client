/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class NewCharacterForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" />

        <label htmlFor="title">Title</label>
        <input name="title" type="text" />

        <label htmlFor="class">Class</label>
        <input name="class" type="text" />

        <label htmlFor="race">Race</label>
        <input name="race" type="text" />

        <label htmlFor="alignment">Alignment</label>
        <input name="alignment" type="text" />

        <label htmlFor="background">Background</label>
        <input name="background" type="text" />

        <label htmlFor="level">Level</label>
        <input name="level" type="number" />

        <h4>Base Stats</h4>

        <label htmlFor="strength">strength</label>
        <input name="strength" type="number" />
        <label htmlFor="dexterity">dexterity</label>
        <input name="dexterity" type="number" />
        <label htmlFor="constitution">constitution</label>
        <input name="constitution" type="number" />
        <label htmlFor="intelligence">intelligence</label>
        <input name="intelligence" type="number" />
        <label htmlFor="wisdom">wisdom</label>
        <input name="wisdom" type="number" />
        <label htmlFor="charisma">charisma</label>
        <input name="charisma" type="number" />
      </form>
    );
  }
}

// This form is going to be the centerpiece of the whole app
// Give it a lot of love
// Use nested components for selectors
// Program random number generators to roll proper dice to calculate stats
// Brainstorm the details on that
