const axios = require("axios");

module.exports = function getTopGames() {
  const resp = axios
  .get("https://api.twitch.tv/helix/games/top",
  {headers: {'Client-ID':'d2qvua62wbnmd2falukeg1lqdvefpq','Authorization':'Bearer qklfbxj29hza6ghl7jd742ufjmu1lj'}});
  console.log("RESPONSE: " + resp);
  return resp;
}