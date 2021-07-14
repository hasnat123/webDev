const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer(function(req, res)
{
    //console.log(req.url, req.method);

    //lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(function greet()
    {
        console.log("greet");
    });

    greet();
    greet();

    //Set header to tell browser what type of data is coming from sever
    res.setHeader("Content-Type", "text/html");

//ROUTING
    let path = "nodePractice/views/";

    //Checking the url and depending on what it is, setting the 'path' variable to a specific html file to be returned to user
    switch(req.url)
    {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-us":
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            res.end();
            break;
        default: 
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    //Data sent to browser
    fs.readFile(path, function(err, data)
    {
        if (err) 
        {
            console.log(err);
            res.end();
        }
        else
        {
            res.write(data); 
            res.end();
        }

    });
});

server.listen(3000, "localhost", function() //Server listening to port 3000 on the 'localhost' for requests
{
    console.log("listening for requests on port 3000");
})