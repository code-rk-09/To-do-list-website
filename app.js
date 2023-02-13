// jshit esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");


const app = express();

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
var items = ["By Food", "Cook Food", "Eat Food"];

app.get("/", function (req, res) {

    var today = new Date();
    var currDay = today.getDay();
    

    var options = {
        weekday : "long",
        day : "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-IN",options);

    
    
    res.render("list", { day: day, newListItems:items });

})

app.post("/",function(req,res){
    var item = req.body.newItem;
    
    items.push(item)
    
    res.redirect("/");
})



app.listen(3000, function () {
    console.log("Server started at port: 3000")
})