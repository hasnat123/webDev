const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        title: {type: String, required: true},
        snippet: {type: String, required: true},
        body: {type: String, required: true}
    },
    { timestamps: true }
);

//Creating model for 'blogSchema'
const Blog = mongoose.model("Blog", blogSchema); //Mongoose will look for a data collection with the same name as the model but with the plural form. e.g. Blogs instead of Blog

module.exports = Blog;