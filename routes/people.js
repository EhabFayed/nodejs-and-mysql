const express = require ("express");
const Router =express.Router();
const mysqlConnection = require("../connection");


Router.get("/", (req, res)=>{

mysqlConnection.query("SELECT * from PEOPLE", (err,rows,fileds)=>{
    if(!err)
      {
        res.send (rows);
      }
    else {
      console.log('error connecting: ' + err.stack);
      console.log(err);
    }
  })

})

module.exports = Router;
