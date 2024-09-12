const express = require("express");
const List = require('./db');
const app = express();

app.use(express.json());

app.post("/create-todo", async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const status = false;
    
    const newTodo = await List.create({
        title: title,
        description: description,
        status: status
    })
    
    res.status(200).json({
        id: newTodo._id
    })
})

app.delete("/delete-todo/:id", async (req,res)=>{
    const userId = req.params.id;
    const result = await List.findByIdAndDelete(userId);

    if(result){
        return res.status(200).send("Element Deleted");
    }else{
        return res.status(404).send("User not found");
    }
})

app.put("/update-todo/:id", async (req,res)=>{
    const id = req.params.id;
    const todo = await List.findOne({_id: id});

    if(todo){
        await List.updateOne({_id:id},
        {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status
        })

        res.status(200).json({
            message: 'Todo Updated'
        })
    }else{
        res.send(404).send("Todo not found")
    }
})

app.get("/get-todo/:id", async (req,res)=>{
    const id = req.params.id;
    const todo = await List.findOne({_id: id});

    if(todo){
        res.status(400).json({
            title: todo.title,
            description: todo.description,
            status: todo.status
        })
    }else{
        res.status(404).send("Todo not found")
    }
})

app.get("/get-todos", async (req,res)=>{
    const todos = await List.find({});
    res.status(200).json(todos);
})



app.listen(3000);