const express = require("express");
const morgan = require("morgan"); //'Morgan' is a third party middleware to console log messages 
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes");

//express app
const app = express();

//connect to mongodb
const dbURI = "mongodb+srv://hasnat123:Piano5267!@cluster0.if9ge.mongodb.net/Web-dev?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) //Second parameter: object used to stop 'deprecation' warnings in terminal (doesn't affect code)
    .then(function(result) { app.listen(3000); }) //The 'connect' function is asynchronous so the 'then' function is used to execute a callback function once connected to database. 'result' var is returned by 'connect' function
    .catch(function(err) { console.log(err); }) //If there is an error it is 'caught' and logged to console

//register 'ejs' as view engine
app.set("view engine", "ejs");


//listen for request in port 3000 (automatically connects to localhost)
//app.listen(3000);

//Middleware
app.use(express.static("nodePractice/public")); //The Express 'Static' middleware specifies what folders can be made public to the browser for access
app.use(express.urlencoded({ extended: true })); //Passes all url encoded data from POST request into object that can be used on 'request' object (req.body)
app.use(morgan("dev"));

app.get("/add-blog", function(req, res)
{
    const blog = new Blog(
        {
            title: "new cxcxcxcblog 9000",
            snippet: "about my new blog",
            body: "more about my new blog"
        }
    );

    //Saving new blog document to 'blogs' collection in database using an asynchronous model function 
    blog.save()
        .then(function(result) { res.send(result); }) //Sending back new document saved in collection
        .catch(function(err) { console.log(err); })
})

app.get("/all-blogs", function(req, res)
{
    Blog.find() //Retreives all documents inside 'blogs' collection
        .then(function(result) { res.send(result); })
        .catch(function(err) { console.log(err); })
})

app.get("/single-blog", function(req, res)
{
    Blog.findById("60eb2ba056ff5a32dc275a11")
        .then(function(result) { res.send(result); })
        .catch(function(err) { console.log(err); })
})

//routes

app.get("/", function(req, res)
{
    //res.send("<p>home page</p>"); //Different from 'write' function as it automatically sets header and status code
    //res.sendFile("./views/index.html", { root: __dirname }); //Setting the root as a 'relative path' instead of the default 'absolute path'
    
    // const blogs = 
    // [
    //     {title: "Zelda is trapped!", snippet: "Zelda get's trapped in Ganon's castle"},
    //     {title: "Link awakens", snippet: "Link wakes up in the shrine of resurrection after 100 years"},
    //     {title: "Link is victorious", snippet: "Link defeats Ganon and saves princess Zelda"}
    // ];
    
    // res.render(__dirname + "/views/index.ejs", { title: "Home", blogs }); //The 'render' function used to send views to the browser

    res.redirect("/blogs");
})

app.get("/about", function(req, res)
{
    res.render(__dirname + "/views/about.ejs", { title: "About"});
})

//Redirects

app.get("/about-us", function(req, res)
{
    res.redirect("/about");
})

//blog routes
app.use("/blogs", blogRoutes);

//404 page
app.use(function(req, res) //This function only executes if the request makes it to this point in the code without executing the other functions (similar to defualt case in switch statement)
{
    res.status(404).render(__dirname + "/views/404.ejs", { title: "404"}); //the 'status' function returns the 'res' object so can insert it like so
})