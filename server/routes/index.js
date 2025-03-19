var express = require('express');
const AdminController = require('../controllers/AdminController');
var router = express.Router();

const controller = new AdminController()

/* GET home page. */

router.get("/admin/:id", controller.getInfo)
router.patch("/admin/:id", controller.updateInfo)

module.exports = router;
