//loading Http moudel:
const Http=require('http'); 
//Define a port
const port=3000;
//Create a Basic server
// Http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type' : 'text/html'});
//     res.write('<h1>Welcome To Node.Js  </h1>');
//     res.end('');
// }).listen(port);
// Define a static json array :
const foodList = [
    {'food_id':'1001','food': 'Chicken Biriyani', 'Price': 100},
    {'food_id':'1002','food': 'Alu Biriyani', 'Price': 90},
    {'food_id':'1003','food': 'Egg Roll', 'Price': 40},
    {'food_id':'1004','food': 'Chicken Biriyani', 'Price': 100},
];
Http.createServer((req,res)=>{
  if(req.url=='/'){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('<h1>Welcome To Node.Js  </h1>');
    res.end('');
  }
  else if(req.url=='/api/foods'){
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Credentials', 'true'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
    res.setHeader('Content-Type' , 'application/json'); 
    let foodData = JSON.stringify(foodList);
    res.write(foodData);
    res.end('');

  }
}).listen(port)
console.log(`Server has Started at ${port}`);