const express =require("express");
const app=express();


// let port =8080;

// app.listen(port,()=>{
//     console.log(`app is listening on port ${port}`);

// });
// app.get("/",(req,res)=>{
//     res.send("you contacted root path");
// });

// app.get("/:username/:id",(req,res)=>{
//     let{username,id}=req.params;
//  let htmlstr='<h1>hello this is a string</h1>';
//  res.send(htmlstr);

// });
// app.get("/search",(req,res)=>{
//     let {q}=req.query;
//     if(!q){
//         res.send('<h1>nothing searched</h1>');
//     }

//     res.send(`search results for query is ${q}`);
// })






// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// });
// app.get("/orange",(req,res)=>{
//     res.send("you contacted changed orange path");
// });
// app.get("*",(req,res)=>{
//    res.send("this path doesnot exist");
// });
// app.use((req,res)=>{
//     console.log("request recieved");
//    let code="<h1>Fruits</h1> <ul> <li>apple</li> <li>orange</li> </ul>";
//    res.send(code);
// });