const http = require("http"); //Storing 'HTTP' library inside variable
const fs = require("fs"); //Library used to read files (HTML, JS, etc) to be sent to user nodes from server
const port = 3000; //Port that server will be listening to

const server = http.createServer(function(request, response) //This function called when user requests something from server
{
    response.writeHead(200, { "Content-Type": "text/json" })//This is sent to the browser. Parameter1: status code, 200 meaning that everything went okay. Parameter 2: Different headers to be set with values. 
    fs.readFile("orders.json", function(error, data)
    {
        if (error)
        {
            response.writeHead(404); //Sent to browser
            response.write("Error: File Not Found"); //Printed onto screen for user to see
        } 
        else response.write(data); //Sending file data to user node(s) connected to server
        response.end(); //End of repsonse to nodes
    })

});

server.listen(port, function(error) //Server listening to port 3000 on the 'localhost' for requests
{
    if (error) console.log("Something went wrong. Error: ", error);
    else console.log("server is listening to port " + port);
})