"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserFields = {
    watching: {
        type: [mongoose_1.Schema.Types.ObjectId],
        required: false,
        "default": []
    },
    googleId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
};
var UserSchema = new mongoose_1.Schema(UserFields);
exports["default"] = mongoose_1.model('user', UserSchema);
