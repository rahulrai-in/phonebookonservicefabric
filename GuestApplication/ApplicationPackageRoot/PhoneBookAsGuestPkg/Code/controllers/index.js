(function (controllers) {
    var homeController = require("./homeController");
    controllers.init = function (app) {
        homeController.init(app);
    };
})(module.exports);