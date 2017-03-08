(function (database) {
    var Connection = require("tedious").Connection;
    var config = {
        userName: "rahulrai",
        password: "Sql@1234",
        server: "nodephonebook.database.windows.net",
        options: {
            database: "phonebook",
            encrypt: true,
            rowCollectionOnDone: true
        }
    };

    database.getDirectory = function (next) {
        var connection = new Connection(config);
        connection.on("connect", function (err) {
            if (err) {
                next(err, null);
            } else {
                var Request = require("tedious").Request;
                var request = new Request("select PersonName, PhoneNumber from Directory", function (err, rowCount, rows) {
                    if (err) {
                        next(err, null);
                    }
                }).on("doneInProc", function (rowCount, more, rows) {
                    var jsonArray = [];
                    rows.forEach(function (columns) {
                        var rowObject = {};
                        columns.forEach(function (column) {
                            rowObject[column.metadata.colName] = column.value;
                        });

                        jsonArray.push(rowObject);
                    });

                    next(null, jsonArray);
                });

                connection.execSql(request);
            }
        });
    }
})(module.exports);