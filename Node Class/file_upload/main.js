// load express :
const express=require('express');
const cors=require('cors');
const port =3000;
// consuming foodRouter :
const foodRouter=require('./route/food.route');

// create a instance of express :
const app=express();
app.use(express());
app.use(cors());

// let express to accept incoming post data :
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api',foodRouter);
// Allow express to share statuc resourses :ssr[server static resourses]
app.use(express.static('public'));

// create a basic landing page :

app.get('/',(req,res)=>{
       res.send('<h1> Welocome to Node.Js File upload </h1>');
});


// Binding the port no :
app.listen(port,()=>{
       console.log(`Server has started at ${port} `);
})