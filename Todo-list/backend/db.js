const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin1:root1@cluster0.4ys3vxo.mongodb.net/todo-list');

const listSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    status:{
        type: Boolean,
        required: true
    }
});

const List = mongoose.model("List",listSchema);

module.exports = List;