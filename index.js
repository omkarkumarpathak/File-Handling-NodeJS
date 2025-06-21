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


//append text at the end of file

app.get('/file/append',(req,res)=>{
    fs.appendFile('./omkar.txt', '\n Greatest King in the World',(err)=>{
        if(err){
            return res.status(500).json({message:err});
        }  
        res.sendFile(__dirname + '/omkar.txt');
    })
})

app.get('/file/delete',(req,res)=>{
    if(fs.existsSync('file.txt')){
        fs.unlink('file.txt',(err)=>{
            if(err) return res.status(500).json({error:err});
            return res.status(200).json({message:"File deleted"});
        })
    }
})


app.listen(4000,()=>{
    console.log("Server is running");
})