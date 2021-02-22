"use strict";
exports.__esModule = true;
exports.logRequest = void 0;
function logRequest(tokens, req, res) {
    //Push logs to database here
    return [
        tokens.status(req, res),
        tokens.method(req, res),
        tokens.url(req, res),
        new Date().toLocaleTimeString(),
    ].join(' ');
}
exports.logRequest = logRequest;
