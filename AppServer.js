"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var server = new App_1.App().expressApp;
server.listen(process.env.PORT || 4000, function () {
    console.log("Listening to port 4000 or Azure port");
});
