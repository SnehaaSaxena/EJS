const express=require("express"); // requiring express 
const app=express();
const port=8080;
app.set("view engine","ejs"); // view basically shows template ,no need to require ejs as express internally require it(by default)
app.get("/",(req,res)=>{
   // res.send("this is home");
    res.render("./views/home.ejs");
});
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});