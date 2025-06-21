const app=require('express')();
const fs=require('fs');

app.get('/',(req,res)=>{
    res.send("Hi");
})


app.get('/file/write',(req,res)=>{ 
    fs.writeFile('./omkar.txt',"Omkar is King", (err)=>{
        if(err){
            return res.status(500).json({message:"Write failed"});
        }
        res.sendFile(__dirname + "/omkar.txt");
    })
});


app.listen(4000,()=>{
    console.log("Server is running");
})