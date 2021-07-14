const Blog = require("../models/blog");

const path = require("path");

function blog_index(req, res)
{
    Blog.find().sort({ createdAt: -1 }) //Sorting blogs by data created in descending order
    .then(function(result)
    {
        res.render(path.join(__dirname, "..", "views", "blogs", "index.ejs"), { title: "All blogs", blogs: result });
    })
    .catch(function(err) { console.log(err); })
}

function blog_details(req, res)
{
    const id = req.params.id; //'params.id' used to get the 'id' route parameter specified above
    Blog.findById(id)
        .then(function(result)
        {
            res.render(path.join(__dirname, "..", "views", "blogs", "details.ejs"), { title: "Blog details", blog: result });
        })
        .catch(function(err) { res.status(404).render(path.join(__dirname, "..", "views", "404.ejs"), { title: "Blog not found" }) })
}

function blog_create_get(req, res)
{
    res.render(path.join(__dirname, "..", "views", "blogs", "create.ejs"), { title: "Create a new blog"});
}

function blog_create_post(req, res)
{
    const blog = new Blog(req.body); //Creating blog with data from blog form
    blog.save()
        .then(function(result)
        {
            res.redirect("/blogs");
        })
        .catch(function(err) { console.log(err); })
}

function blog_delete(req, res)
{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(function(result) { res.json({ redirect: "/blogs" }); })//Can't use 'redirect' response as request is a fetch (ajax request), so need to send json data containing a redirect property back to the browser ('details.ejs' script)
        .catch(function(err) { console.log(err); })
}

module.exports =
{
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}