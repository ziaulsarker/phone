const express = require("express"),
      router = express.Router();


router.get("/", (req, res, next) => {
    res.render("index", {
        title: "Sana Tax Contacts "
    });
});


module.exports = router;