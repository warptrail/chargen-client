import React from 'react';
import './CharacterSheet.css';

function CharacterSheet({ character }) {
  return (
    <section className="character_card">
      <div>
        <h2>{character.char_name}</h2>
      </div>

      <p>{character.title}</p>
      <p>Class: {character.char_class}</p>
      <p>Race: {character.race}</p>
      <p>Background: {character.background}</p>
      <p>Alignment: {character.alignment}</p>
      <p>User: {character.user.user_name}</p>
      <p>Number of Items: {character.number_of_items}</p>
      <h3>Stats</h3>
      <table>
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
      </table>
    </section>
  );
}

export default CharacterSheet;
