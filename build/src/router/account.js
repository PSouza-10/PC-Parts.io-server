"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var controller_1 = require("../controller");
var passport_1 = __importDefault(require("passport"));
var router = express_1.Router();
router.get('/google', passport_1["default"].authenticate('google', { scope: 'profile', session: false }));
router.get('/google/callback', passport_1["default"].authenticate('google', { session: false }), controller_1.account.authenticate);
exports["default"] = router;
