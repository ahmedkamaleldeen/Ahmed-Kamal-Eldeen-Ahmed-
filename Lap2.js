const express = require("express");
const filesystem = require("fs");
const app = express();
app.use(express.json());

// app.get('/ahmed/:id', function (req, res) {
// //   res.send('<h1>Hello World</h1>' +"your id is :"+req.params.id);
// res.json({name :+req.params.id,number:123});
// })
app.get("/todo/:id",function(req,res){
const id=req.params.id;
const data=JSON.parse(filesystem.readFileSync("todo.json",{encoding:"utf-8"}));
data.find(function(todo){
    if(todo.id==id){
    res.json(todo);
    }
})

    // res.send("id: "+req.params.id);
})
app.patch("/todo/:id",function(req,res){
const data=JSON.parse(filesystem.readFileSync("todo.json",{encoding:"utf-8"}));
const id=req.params.id;
const todobody=req.body;
const todo= data.find(function(todo){
   if(todo.id==id){
    return todo;
   }

});
// console.log(todo);
todo.name=todobody.name;
// console.log(data);
filesystem.writeFileSync("todo.json",JSON.stringify(data));
res.json(todo);
})
app.get("/todo",function(req,res){
    const data=JSON.parse(filesystem.readFileSync("todo.json",{encoding:"utf-8"}));
    res.json(data);
})
app.post("/todo", function (req, res) {
  const todobody  = req.body;
  const data = JSON.parse(
    filesystem.readFileSync("./todo.json", {encoding: "utf-8",}));
//   const todo={name};
  data.push(todobody);
  filesystem.writeFileSync("./todo.json", JSON.stringify(data));
  res.json(todobody);
});

// app.get("/todo", function (req, res) {
//     res.json(req.body);
// });

app.listen(3000);
