/* eslint-disable react/prop-types */
import React from 'react';
import './CharacterSheet.css';

function CharacterSheet({ character }) {
  return (
    <section className="character_card">
      <h2>{character.char_name}</h2>

      <p className="character_title">{character.title}</p>
      <p>Class: {character.char_class}</p>
      <p>Race: {character.race}</p>
      <p>Background: {character.background}</p>
      <p>Alignment: {character.alignment}</p>
      <p>User: {character.user.user_name}</p>
      <p>Number of Items: {character.number_of_items}</p>
      <h3>Stats</h3>
      <section className="stats">
        <div className="stat_box">
          <div className="stat_box_title">Strength</div>
          <p className>{character.strength}</p>
        </div>
        <div className="stat_box">
          <div className="stat_box_title">Dexterity</div>
          <p>{character.dexterity}</p>
        </div>
        <div className="stat_box">
          <div className="stat_box_title">Constitution</div>
          <p>{character.constitution}</p>
        </div>
        <div className="stat_box">
          <div className="stat_box_title">Intelligence</div>
          <p>{character.intelligence}</p>
        </div>
        <div className="stat_box">
          <div className="stat_box_title">Wisdom</div>
          <p>{character.wisdom}</p>
        </div>
        <div className="stat_box">
          <div className="stat_box_title">Charisma</div>
          <p>{character.charisma}</p>
        </div>
      </section>

      {/* <table>
        <thead>
          <tr>
            <th>Strength</th>
            <th>Dexterity</th>
            <th>Constitution</th>
            <th>Intelligence</th>
            <th>Wisdom</th>
            <th>Charisma</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{character.strength}</td>
            <td>{character.dexterity}</td>
            <td>{character.constitution}</td>
            <td>{character.intelligence}</td>
            <td>{character.wisdom}</td>
            <td>{character.charisma}</td>
          </tr>
        </tbody>
      </table> */}
    </section>
  );
}

export default CharacterSheet;
