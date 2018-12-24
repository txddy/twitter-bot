const twitterApp = {
  api_key: process.env.API_KEY,
  api_secret_key: process.env.APEI_SECRET_KEY,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
};

module.exports = {
  twitterApp,
  userName: process.env.USERNAME
};
