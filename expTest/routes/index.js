var express = require('express');
var router = express.Router(); //Router file stored in variable

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", function(request, response)  //Paramter 1: directory of file. 'index' is homepage so root diretory used here
{
    response.render("index", { title: "dssd" });
});

module.exports = router; //Router is exported to 'app.js' file and being mofified in this file
