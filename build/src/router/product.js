"use strict";
exports.__esModule = true;
var controller_1 = require("../controller");
var express_1 = require("express");
var middleware_1 = require("../middleware");
var router = express_1.Router();
router.get('/:category', controller_1.product.getCategory);
router.get('/sell', middleware_1.auth, controller_1.product.getByUser);
router.get('/search', controller_1.product.getByTerm);
router.get('/watchlist/:productId', middleware_1.auth, controller_1.product.setWatchList);
router.post('/sell', middleware_1.auth, controller_1.product.registerForSale);
router.post('/buy/:productId', middleware_1.auth, controller_1.product.buyProduct);
router.put('/', middleware_1.auth, controller_1.product.editSale);
router["delete"]('/sell', middleware_1.auth, controller_1.product.removeSale);
exports["default"] = router;
