const express=require();
const app=express();


app.use(express.json());
//route import
const categories= require("./routes/categoriesRoute")
 
app.use("/api",categories)



module.exports=app;