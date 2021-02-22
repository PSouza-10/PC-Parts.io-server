"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var passport_google_oauth2_1 = require("passport-google-oauth2");
var User_1 = __importDefault(require("./model/User"));
var G_ID = process.env.GOOGLE_CLIENT_ID;
var G_SECRET = process.env.GOOGLE_CLIENT_SECRET;
var URL = process.env.NODE_ENV === 'production'
    ? 'https://pc-parts-server.herokuapp.com'
    : 'http://localhost:5000';
exports["default"] = new passport_google_oauth2_1.Strategy({
    clientID: G_ID,
    clientSecret: G_SECRET,
    callbackURL: URL + '/account/google/callback',
    passReqToCallback: true
}, function (request, accessToken, refreshToken, profile, done) {
    var userObj = {
        googleId: profile.id,
        name: profile.displayName,
        picture: profile.picture
    };
    User_1["default"].findOneAndUpdate({ googleId: profile.id }, userObj, { upsert: true, "new": true, setDefaultsOnInsert: true }, function (err, user) {
        return done(err, user, { message: 'Error on auth' });
    });
});
