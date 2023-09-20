import express  from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port=3000;
const app=express();
const API_URL="https://secrets-api.appbrewery.com/random"

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",async(req,res)=>{
    try{
const result=await axios.get("https://secrets-api.appbrewery.com/random")

res.render("index.ejs",{
    secret: result.data.secret,
    user: result.data.username,});
    }
    catch(error){
console.error("the request has not been processed ",error.message);
res.render("index.ejs",{content:error.message})}
})

app.listen(port,()=>{
console.log(`the app is running at ${port}`)
})