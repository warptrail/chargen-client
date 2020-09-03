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

  getCharacterItems(characterId) {
    return fetch(`${config.API_ENDPOINT}/characters/${characterId}/items`, {
      headers: {}
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postItem(
    characterId,
    item_name,
    item_type,
    item_description,
    item_abilities
  ) {
    return fetch(`${config.API_ENDPOINT}/items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        character_Id: characterId,
        item_name,
        item_type,
        item_description,
        item_abilities
      })
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  }
};

export default CharApiService;
