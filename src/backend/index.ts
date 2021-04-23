import express from "express";
import path from "path";
const app = express();

/*
npm i dayjs express ts-node 

tsconfig.sv.json

axios フロントのライブラリ
*/

app.use(express.static(__dirname +'/speechtotext'));

app.get("/",(req,res)=>{
    console.log("Hello"+__dirname);
    res.sendFile(path.join(__dirname + '/speechtotext/main.html'));
    
});

app.listen(3001,()=>{
    console.log("Node server start");
});