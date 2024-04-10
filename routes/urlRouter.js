const express = require("express");
const urlController = require('./../controllers/urlController');
const router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   // res.render("index", { title: "Express" });
//   res.send("Hello");
// });


router.post('/', urlController.createUrl);

router.get('/:id', urlController.getLongUrl)


module.exports = router;
