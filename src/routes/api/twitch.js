const express = require("express");
const router = express.Router();

const getFeaturedStreams = require("../../twitch/twitchfeatured");

router.get("/featuredstreams", (req,res) => {
  getFeaturedStreams()
  .then(data => {res.data=data.data;return res.status(200).json(res.data)})
  .catch(err=>console.log(err))
});
module.exports = router;
