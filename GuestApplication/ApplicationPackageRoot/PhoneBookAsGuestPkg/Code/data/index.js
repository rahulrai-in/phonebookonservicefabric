(function (data) {
    var database = require("./database");
    data.getDirectory = function(next) {
        database.getDirectory(next);
    };
})(module.exports);