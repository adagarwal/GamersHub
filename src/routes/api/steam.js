const express = require("express");
const router = express.Router();

const getFeaturedGames = require("../../steam/steamfeatured");

router.get("/featuredgames", (req,res) => {
    getFeaturedGames()
        .then(data => {res.data=data.data; console.log("Steam" + res.data); return res.status(200).json(res.data)})
        .catch(err=>console.log(err))
});

module.exports = router;
