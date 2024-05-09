/*----------------------- Data Base connection related code here----------------- */
//Loading mySql library:
const mysql=require('mysql');

// create a mysql connection :
const con=mysql.createConnection({
       user:'root',
       password:'',
       database:'foodslist',
       host:'127.0.0.1'
})

// Now test the dataBase connection :
con.connect((error)=>{
       if(error) throw error;
       else{
        console.log('Mysql data base connected successfully...!');      
       }
})

//Make Gobal data base connection available entire application:
module.exports=con;
console.log('Gobal database connection is ready to Use ...');