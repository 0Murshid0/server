const mongoose=require("mongoose");

const connectDatabase=()=>{
  mongoose.connect(process.env.DB_URL,()=>{
    console.log("connected to mongo db");
  })
  .then((data)=>{
    console.log(`mongo connected with server:${data.connection.host}`)
  })//data mai data download hoga jo wo show hoga clg mai
  .catch((err)=>{
    console.log(err)
}
});
module.exports=connectDatabase;
