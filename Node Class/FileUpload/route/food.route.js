/* ALL FOOD RELATED API  */
const express=require('express');
// use multer :
const multer=require('multer');

// seeting up multer :
const fileStorage=multer.diskStorage({
       filename:(file,data,cb)=>{
              cb(null,Date.now()+'.jpg')
       },
       destination:'public/uploads/'
});

// Attached the multer config. 
const uploadObj=multer({
       storage:fileStorage
})

// consuming cinnection string :
const con =require('../db/db_connect');
// consume base url :
const base_url=require('../urls/base_url');

const foodRouter=express.Router();





// Get all food item :
foodRouter.get('/foods',(req,res)=>{
       // res.status(200).json({'info':'all foods '});
       var SQL=`select * from foods`;
       con.query(SQL,(error,result)=>{
              if(error) throw error;
              else{
                     res.status(200).json(result);
              }
       });
});

// Create a post req :

foodRouter.post('/food',uploadObj.single('avatar'),(req,res)=>{
    //    res.status(200).json({'data':req.file.filename});
    var SQL=`insert into foods (food_name,food_desc,food_price,food_image)
    values(
       '${req.body.food_name}',
       '${req.body.food_desc}',
       '${req.body.food_price}',
       '${base_url+'/uploads/'}${req.file.filename}'
      ) `;
    // now post to mysql :
    con.query(SQL,(error,result)=>{
       if(error) throw error
       else{
              // res.status(200).json({'info':result});
              if(result.affectedRows){
                     res.status(200).json({'info':'one item added'})
              }else{
                     res.status(200).json({'message':'something went wrong'})
              }
       }
    })
});


module.exports=foodRouter;
console.log('Food router is ready to use');