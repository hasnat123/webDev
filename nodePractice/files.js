// const name = "hasnat";
// console.log(name);

var os = require("os");
console.log(os.platform());

var fs = require("fs");

//READ FILES

// fs.readFile("nodePractice/docs/test.txt", function(err, data)
// {
//     if (err)
//     {
//         console.log(err);
//     } 
//     console.log(data.toString());
// })

//WRITE FILES

// fs.writeFile("nodePractice/docs/test2.txt", "hello world", function()
// {
//     console.log("file was written");
// });

//DELETING FILES

if (fs.existsSync("nodePractice/docs/test.txt"))
{
    fs.unlink("nodePractice/docs/test.txt", function(err)
    {
        if (err) console.log(err);
        console.log("file deleted");
    })
}

//CREATE AND DELETE FOLDERS

// if(!fs.existsSync("nodePractice/assets"))
// {
//     fs.mkdir("nodePractice/assets", function(err)
//     {
//         if (err) console.log(err);
//         console.log("folder created");
//     })
// }
// else fs.rmdir("nodePractice/assets", function(err)
// {
//     if (err) console.log(err);
//     console.log("folder deleted");
// })


