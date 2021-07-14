const fs = require("fs");

const readStream = fs.createReadStream("nodePractice/docs/test.txt", { encoding: "utf8" }); //"setting 'encoding' to 'utf8' means data will be encoded in a readable format as it comes in
const writeStream = fs.createWriteStream("nodePractice/docs/test2.txt");

// //function executed everytime a buffer of data is received
// readStream.on("data", function(chunk) //'chubk' is the chunk of data received via buffer
// {
//     console.log("-----NEW CHUNK-----")
//     console.log(chunk);

//     writeStream.write("\nNEW CHUNK\n"); //This message is written to file for every new chunk of data
//     writeStream.write(chunk); //Data from read file written to another file
// })

//Piping
readStream.pipe(writeStream); //Transferring data from read stream to write stream (basically same as what's done above but with less code)