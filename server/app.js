const express = require("express");
const app = express();

const PORT = 5000;

app.get("/",(req,res)=>{
    res.send("home route");
})

app.listen(PORT,()=>{
    console.log(`server is listing on port ${PORT}`);
})