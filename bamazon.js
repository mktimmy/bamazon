var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  getProducts();
});

//on screen load, show chart w all products available, and prompt asking what youd like to purchase 

//After selecting item, ensure it's a valid item, ask what quantity

//check to see if that quantity availavle

//if so, make a purchase

//function to get products and display

function getProducts(){
    //query db and get all prudcts
    connection.query("SELECT * FROM inventory", function(err, res){
        if(err)throw err;
        console.table(res)
        start(res)
    })

    //move to next step
}

    //function to ask for item id to purchase

    // function which prompts the user for what action they should take

    function start(inventory) {
    inquirer
      .prompt({
        name: "itemID",
        type: "input",
        message: "What is the item ID of the item you'd like to purchase?",
      })
      .then(function(answer) {
          console.log(inventory)
        for (i=0;i<inventory.length;i++){
            if (parseInt(answer.itemID)===inventory[i].id){
               var chosenItem=inventory[i]
                if (chosenItem.quantity===0){
                    console.log("There are none!")
                    //note to self: add function to ask user if want to try agian
                }
                else {
                    console.log("Moving to next step")
                    //note to self: add ask for quantity function
                }
            }
            else {
                console.log("That is not a valid item!")
                //Note to self: add fn to ask user if want to try AGAIN.
            }
        }
      });
  }

  




    //fn to ask for quantity
    //fn to make a purchase
    //fn to check if they want to continue: want to try again?