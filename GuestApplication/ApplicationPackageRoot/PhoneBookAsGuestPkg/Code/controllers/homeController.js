(function (homeController) {
    var data = require("../data");
    homeController.init = function (app) {
        app.get("/", function (req, res) {
            data.getDirectory(function (err, results) {
                res.render("index", { title: "Tedious Phone Book", error: err, data: results });
            });
        });
    };
})(module.exports);