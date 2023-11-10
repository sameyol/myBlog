const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    name: String,
    comment: String,
})

const commentModel = mongoose.model("comments", commentSchema)
module.exports = commentModel