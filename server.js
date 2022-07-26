import express from "express";
import mongoose from "mongoose";
const connection_url = 'mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
import Cards from "./dbCards.js";
import Person from "./person.js";
import Cruelty from "./cruelty.js";
import Cors from 'cors';
const app = express();
const port = process.env.PORT || 8001

app.use(express.json());
app.use(Cors());
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.get('/',(req,res)=>res.status(200).send("hello world"));

app.post('/cards',(req,res)=>{
    const dbCard = req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)}
            else{
                res.status(201).send(data)
            }
        
    })
});
app.post('/person',(req,res)=>{
    const person = req.body;
    Person.create(person,(err,data)=>{
        if(err){
            res.status(500).send(err)}
            else{
                res.status(201).send(data)
            }
        
    })
});
app.post('/cruelty',(req,res)=>{
    const cruelty = req.body;
    Cruelty.create(cruelty,(err,data)=>{
        if(err){
            res.status(500).send(err)}
            else{
                res.status(201).send(data)
            }
        
    })
});
app.get('/person',(req,res)=>{
    
    Person.find((err,data)=>{
        if(err){
            res.status(500).send(err)}
            else{
                res.status(200).send(data)
            }
        
    })
});
app.get('/cruelty',(req,res)=>{
    
    Cruelty.find((err,data)=>{
        if(err){
            res.status(500).send(err)}
            else{
                res.status(200).send(data)
            }
        
    })
});
app.get('/cards',(req,res)=>{
    
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)}
            else{
                res.status(200).send(data)
            }
        
    })
});

app.listen(port,()=>console.log(`listening on localhost: ${port}`));