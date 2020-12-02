const express = require("express");
const router = express.Router();

const getTopGames = require("../../twitch/twitchtopgames");

router.get("/topgames", (req,res) => {
  getTopGames()
  .then(data=> {res.data=data.data;console.log(res.data);return res.status(200).json(res.data)})
  .catch(err=>console.log(err))
});

module.exports = router;
