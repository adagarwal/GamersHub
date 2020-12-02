const axios = require("axios");

module.exports = function getFeaturedStreams() {
  const resp = axios
  .get("https://api.twitch.tv/helix/streams/", 
      {headers: {'Client-ID':'d2qvua62wbnmd2falukeg1lqdvefpq','Authorization':'Bearer qklfbxj29hza6ghl7jd742ufjmu1lj'}})
  return resp;
};