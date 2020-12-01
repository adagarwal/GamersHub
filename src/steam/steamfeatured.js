const axios = require("axios");
module.exports = function getFeaturedStreams(id) {
    console.log("ABC: "+id)
    const resp = axios
        .get("http://api.steamapis.com/market/app/"+id+"?api_key=G1CFiUqCgUW-713QRxNRkYEKGH4")
    return resp;
};
