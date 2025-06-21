const app=require('express')();
const fs=require('fs');

app.get('/',(req,res)=>{
    res.send("Hi");
})

app.get('/file',(req,res)=>{
    fs.readFile('./file.txt', (err,data)=>{
        res.json({data});
    });
});

app.listen(4000,()=>{
    console.log("Server is running");
})