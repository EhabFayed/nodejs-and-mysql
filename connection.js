const mysql = require("mysql");
var mysqlConnection = mysql.createConnection ({
  host  : "localhost",
  user : "ehab",
  password :"Eh@b12345678",
  database :"edureka",
  multipleStatements :true
});
mysqlConnection.connect((err)=>{
  if(!err)
  {
    console.log("connected");
  }
  else
  {
    console.log('error connecting: ' + err.stack);
    console.log( "connection failed ");
  }

});
module.exports = mysqlConnection;
