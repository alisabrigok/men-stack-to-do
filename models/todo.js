var mongoose = require("mongoose");

var ToDoSchema = new mongoose.Schema({
    title: String,
    isDone: {
        type: Boolean,
        default: false
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Todo", ToDoSchema);