// TODO: Add token key

export default {
  // API_ENDPOINT: 'http://localhost:8000/api',
  // API_ENDPOINT: 'https://thawing-earth-87534.herokuapp.com/api',
  API_ENDPOINT:
    process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api',
  TOKEN_KEY: 'chargen-client-auth-token'
};
