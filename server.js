const app=require("./app");



const dotenv=require("dotenv");
const connectDatabase = require("./config/database");

//cofig
dotenv.config({path:"config/config.env"});

//connecting to DB
connectDatabase();



app.listen(process.env.PORT,()=>{
  console.log(`server is working on port http://:${process.env.PORT}`);
})