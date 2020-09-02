import config from '../config';
// import tokenService

const CharApiService = {
  getCharacters() {
    return fetch(`${config.API_ENDPOINT}/charsheets`, {
      headers: {}
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getCharacter(characterId) {
    return fetch(`${config.API_ENDPOINT}/${characterId}`);
  }
};

export default CharApiService;
