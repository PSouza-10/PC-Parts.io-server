"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var product_1 = __importDefault(require("./product"));
var account_1 = __importDefault(require("./account"));
var router = express_1.Router();
router.use('/account', account_1["default"]);
router.use('/product', product_1["default"]);
exports["default"] = router;
