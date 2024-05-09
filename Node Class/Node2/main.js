// Loading express Module :
const express=require('express');
// Loading CORS:
const cors=require('cors');
//Define a port :
const port=3000;
// Create a Static JSON arry :
 
const foodList=[
       {'food_id':'1001','food':'Chicken Biriyani','price':100},
       {'food_id':'1002','food':'Mutton Biriyani','price':200},
       {'food_id':'1003','food':'Alu Biriyani','price':90},
       {'food_id':'1004','food':'Egg Roll','price':40},
       {'food_id':'1005','food':'Chicken Egg Roll','price':50}
];
//Create a instance of Express :
const app=express();

//use cors :
app.use(cors());

// Let express to  accepts incoming post data :
app.use(express.urlencoded({extended:true}));  // Webclient-Angular/React
app.use(express.json());   // Mobile Client -Android ,IOS , etc

// Create a Landing page:
app.get('/',(req,res)=>{
       res.send('<h1>Welcome to Express </h1>');

});

//Get all foods :
app.get('/api/foods',(req,res)=>{
       res.status(200).json(foodList);
});
// Geeting Perticular food item :
app.get('/api/foods/:id',(req,res)=>{
       let foodId=req.params.id;
       let foodItem=foodList.find((item)=>{
              return (item.food_id==foodId)
       });
       // res.status(200).json(foodItem);
       if(!foodItem){
         res.status(200).json({
              'message':'No such Record found ..!'
         });
       }
       res.status(200).json(foodItem);
});

// Adding a new Record :
app.post('/api/foods',(req,res)=>{
       let foodItem={
          'food_id':2222,
          'food':req.body.food, // Front-end params
          'price':req.body.price
       }
       foodList.push(foodItem);
     res.status(200).json({'info':foodList});
       // res.status(200).json({'message':'One food item has been added'});
   });

   // Update foodItem depends on ID :
// app.put('/api/foods/:id',(req,res)=>{
 
//        let foodId=req.params.id;
//        let selectedFood=foodList.find((item)=>{
//           return item.food_id==foodId;
//        });  
//       selectedFood.food=req.body.food;
//       selectedFood.price=req.body.price;
//       res.status(200).json({'info':selectedFood});
   
//    });

  // Delete perticular foodItem :
app.delete('/api/foods/:id',(req,res)=>{
       let foodId=req.params.id;
       let selectFood=foodList.find((item)=>{
              return item.food_id==foodId;
       });
       foodList.pop(selectFood);
       res.status(200).json({
              'message':'One item deleted....!'
       });
});

// PUT And PATCH req .
app.all('/api/foods/:id',(req,res)=>{
       if(req.method=='PUT' || req.method=='PATCH'){
              let foodId=req.params.id;
              let selectedFood=foodList.find((item)=>{
                 return item.food_id==foodId;
              });  
             selectedFood.food=req.body.food;
             selectedFood.price=req.body.price;
             res.status(200).json({'info':selectedFood});
       }
       else{
              res.status(200).json(
                     {
                            'message':'Something went wrong',
                            'method':`${req.method} not supports ..!`
             
                     })
       }
});

 
// Binding a port :
app.listen(port,()=>{
       console.log(`Server has started at ${port}`);
})