const express = require('express');
const port=3000;
const foodList = [
    {'food_id':'1001','food': 'Chicken Biriyani', 'Price': 100},
    {'food_id':'1002','food': 'Alu Biriyani', 'Price': 90},
    {'food_id':'1003','food': 'Egg Roll', 'Price': 40},
    {'food_id':'1004','food': 'Chicken Biriyani', 'Price': 100},
];
//Create a instance of Express :

const app=express();

//Create a Landing Page:
app.get('/api/foods',(req,res)=>{
// res.send('<h1>Welcome to Express</h1>');
res.status(200).json(foodList);
});
app.listen(port,()=>{
    console.log(`Server has Started at ${port}`);
})