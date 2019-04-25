const router = require("express").Router();
const booksController = require("../../controllers/bookscontroller");

// Landing page call
router.route("/")
	.post(booksController.create);

// Saved page calls
router.route("/saved")
  	.get(booksController.findAllSaved);

router.route("/delete/:id")
  	.delete(booksController.remove);

module.exports = router;
