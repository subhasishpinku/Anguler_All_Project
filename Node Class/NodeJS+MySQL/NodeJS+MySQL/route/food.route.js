/*-------------ALL FOOD RELATED API ENDPONTS--------------------*/
const express=require('express');

// Create a router service of Express :
const foodRouter=express.Router();
//consuming gobal data conection :
const con=require('../dbConnection/dbCon');

// Get all data from data base : 
foodRouter.get('/foods',(req,res)=>{
       var SQL=`select * from foods`;
       // use con :
       con.query(SQL,(error,result)=>{
              if(error) throw error;
              else
              res.status(200).json({'info':result});
       });
});

// Get perticular food Data :
foodRouter.get('/food/:id',(req,res)=>{
       // let food_id=req.params.id;
       var SQL=`select * from foods where food_id=${req.params.id}`;
       // data base connection :
       con.query(SQL,(error,foodInfo)=>{
              if(error){
                     res.status(200).json({'error':error.sqlMessage});
              }
              else{
              // res.status(200).json({'foodIfo':foodInfo});
              if(!foodInfo.length){
                     res.status(200).json({'message':'No such record found'})
              }else{
                     // res.status(200).json(foodInfo);
                   foodInfo.forEach((food)=>{
                     res.status(200).json(food);
                   });   
              }
              }
       });
});

// Adding new food item : food_id
foodRouter.post('/food',(req,res)=>{
       var SQL=`insert into foods(food_name,food_desc,food_price)
       values('${req.body.food_name}','${req.body.food_desc}',${req.body.food_price})
       `;
       // data base connection :
      
       con.query(SQL,(error,foodData)=>{
              if(error){
                     
                     res.status(200).json({'message':error.sqlMessage});
              }else{
                     // res.status(200).json({'info':foodData});
                     if(foodData.affectedRows==1){
                            res.status(200).json({'message':'One food item added successfully ..!'});
                     }
                     else
                     res.status(200).json({'message':'Something went wrong...!'});
              }
       });
});

// Delete perticular item :
foodRouter.delete('/food/:id',(req,res)=>{
       var SQL=`delete from foods where food_id=${req.params.id}`;
       // now connect
       con.query(SQL,(error,result)=>{
              if(error){
                     res.status(200).json({'message':error.sqlMessage});
              }else{
                 if(result.affectedRows==1){
                     res.status(200).json({'message':'One item delete successfull'});
                 }  
                 else
                 res.status(200).json({'message':'Something went wrong ...!'});   
              }
       })
});


// update food item :
foodRouter.all('/food/:id',(req,res)=>{
       if(req.method=='PUT' || req.method=='PATCH'){
       var SQL=`update foods 
                set 
                food_name='${req.body.food_name}',
                food_desc='${req.body.food_desc}',
                food_price='${req.body.food_price}'
                where food_id='${req.params.id}' 
        `;
       // connect data base : 
       con.query(SQL,(error,result)=>{
              if(error){
                     res.status(200).json({'message':error.sqlMessage})
              }else{
              //   res.status(200).json(result);   
                if(result.affectedRows==1){
                     res.status(200).json({'message':'One item update successfully'});
                }else
                res.status(200).json({'message':'Something went wrong ..!'});  
              }
       });

       }else{
         res.status(200).json({'message':`${req.method} method does't support ...!`})     
       }
});







// Make foodRouter available to entire application :
module.exports=foodRouter;
console.log('Food router is ready to use...');