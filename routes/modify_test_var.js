
const express = require('express');
const ModifyTestVar = express.Router();

ModifyTestVar.use(express.json());

let myInteger = 10;

ModifyTestVar.post('/modify_test_var', (req, res) => {
    // Perform any necessary actions here
    // let  newText  = req.body;
    // myInteger = parseInt(newText, 10); // Parse the text as an integer
    myInteger = 0;
    const { newVar } = req.body;
    myInteger = newVar;
    // myInteger++;
    // Send a response indicating the action is completed
    console.log(`CONSOLE: Variable is changed to ${myInteger}`);
    res.status(200).send(`Variable is changed to ${myInteger}`);
  });

  module.exports = myInteger;
  module.exports = ModifyTestVar;