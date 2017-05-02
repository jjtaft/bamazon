var mysql = require("mysql");
var inquirer = require("inquirer");

var config = require('./config.js');
var dbConnection = mysql.createConnection(config);

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
});

var purchaseItem = function() {

        inquirer.prompt([{
                type: "input",
                name: "idRequest",
                message: "Please enter the product ID of the item you wish to purchase"
            }, {
                type: "input",
                name: "amountRequest",
                message: "How many would you like to purchase?"
            }]).then(function(answers) {

                    var chosenItem;
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].item_id == answer.item_selection) {
                            chosenItem = results[i];
                        }
                    }

                    if (chosenItem.stock_quantity < parseInt(answer.amountRequest) || chosenItem.stock_quantity == 0) {
                        console.log("Insufficient quantity! There's only " + chosenItem.stock_quantity + " available. Please try again.");
                        userSelectProduct();
                    } else {

                        var newStockAmount = chosenItem.stock_quantity - answer.units;

                        connection.query("UPDATE products SET ? WHERE ?", [{

                            stock_quantity: newStockAmount

                        }, {

                            item_id: chosenItem.item_id
                        }], function(error) {
                            if (error) throw err;
                            console.log("Stock Updated");

                        });
