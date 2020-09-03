import React from 'react';

function CharacterItems({ items = [] }) {
  return (
    <ul className="SingleCharacterPage__item_list">
      {items.map((item) => (
        <li key={item.id} className="SingleCharacterPage__item">
          <h3>{item.item_name}</h3>
          <p>Type: {item.item_type}</p>
          <p>Description: {item.item_description}</p>
          <p>Abilities: {item.item_abilities}</p>
          <p>Created By: {item.user.user_name}</p>
        </li>
      ))}
    </ul>
  );
}

export default CharacterItems;
