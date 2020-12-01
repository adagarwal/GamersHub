const axios = require("axios");
module.exports = function getFeaturedStreams() {
    var today = new Date();
    var weekback = new Date();
    weekback.setDate(today.getDate() - 7);
    var t_dd = String(today.getDate()).padStart(2,'0');
    var t_mm = String(today.getMonth() + 1).padStart(2,'0');
    var t_yyyy = today.getFullYear();
    var y_dd = String(weekback.getDate()).padStart(2,'0');
    var y_mm = String(weekback.getMonth() + 1).padStart(2,'0');
    var y_yyyy = weekback.getFullYear();

    today = t_yyyy + '-' + t_mm + '-' + t_dd;
    weekback = y_yyyy + '-' + y_mm + '-' + y_dd;

    console.log("TODAY: " + today + " WEEKBACK: " + weekback);

    const url = "http://www.gamespot.com/api/games/?" +
        "api_key=3739e3a36fc24cc399071eb6167ad847f29af8a0&" +
        "filter=release_date:"+weekback+"|"+today+"&format=JSON"
    const resp = axios
        .get(url)
    return resp;
};
