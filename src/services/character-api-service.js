import config from '../config';
// import tokenService

const CharApiService = {
  getRoster() {
    return fetch(`${config.API_ENDPOINT}/characters`, {
      headers: {}
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getCharacter(characterId) {
    return fetch(`${config.API_ENDPOINT}/characters/${characterId}`, {
      headers: {}
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postCharacter(
    charName,
    Title,
    charClass,
    race,
    background,
    alignment,
    charLevel,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma
  ) {
    // do stuff
  },

  patchCharacter(data, id) {
    return fetch(`${config.API_ENDPOINT}/characters/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        char_name: data.charName,
        title: data.title,
        char_class: data.charClass,
        race: data.race,
        background: data.background,
        alignment: data.alignment,
        char_level: data.charLevel,
        strength: data.strength,
        dexterity: data.dexterity,
        constitution: data.constitution,
        intelligence: data.intelligence,
        wisdom: data.wisdom,
        charisma: data.charisma,
        user_id: 1
      })
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getCharacterItems(characterId) {
    return fetch(`${config.API_ENDPOINT}/characters/${characterId}/items`, {
      headers: {}
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postItem(characterId, itemName, itemType, itemDescription, itemAbilities) {
    return fetch(`${config.API_ENDPOINT}/items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        item_name: itemName,
        item_type: itemType,
        item_description: itemDescription,
        item_abilities: itemAbilities,
        character_id: characterId
      })
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteItem(itemId) {
    return fetch(`${config.API_ENDPOINT}/items/${itemId}`, {
      method: 'DELETE'
    });
  }
};

export default CharApiService;
