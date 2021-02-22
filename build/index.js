"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require('dotenv').config();
var src_1 = __importDefault(require("./src"));
var PORT = process.env.PORT || 5000;
src_1["default"].listen(PORT, function () { return console.log("Server started on PORT: " + PORT); });
