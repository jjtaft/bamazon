
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

    connection.query("INSERT INTO items SET ?", {
	type: answers.type,
	name: answers.name,
	bid: answers.bid
}, function(err, res) {});
    });

    if (err) throw err;
	console.log("Item has been listed");