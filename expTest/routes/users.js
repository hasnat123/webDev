var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/databaseName");
var schema = mongoose.Schema;

//Blueprint for model
var userDataSchema = new schema(
  {
    title: {type: String, required: true},
    name: String
  }
);

var userData = mongoose.model("userData", userDataSchema); //Creating model using schema (blueprint)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/get-data", function(req, res, next)
{
  userData.find() //Getting all data from userData model
    .then(function(doc)
    {
      res.render("users", {items: doc});
    });
});

router.post("/insert", function(req, res, next)
{
  var item =
  {
    title: req.body.title,
    name: req.body.name
  };

  var data = new userData(item);
  data.save();

  res.redirect("/");
});

router.post("/update", function(req, res, next)
{
  var id = req.body.id;

  userData.findById(id, function(err, doc)
  {
    if (err) {console.error("Error, no entry found");}
    doc.title = req.body.title;
    doc.name = req.body.name;
    doc.save();
  })
  res.redirect("/");
});

router.post("/delete", function(req, res, next)
{
  var id = req.body.id;
  userData.findByIdAndRemove(id).exec();
  res.redirect("/");
});

module.exports = router;
