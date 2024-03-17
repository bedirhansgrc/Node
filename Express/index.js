const express = require("express")

const app = express()

app.use(function(req, res,next){
    console.log("middleware 1")
    next()
})
app.use(function(req, res,next){
    console.log("middleware 2")
    next()
})
app.use(function(req, res){
    console.log("middleware 3")
    res.send("<h1>Homepage</h1>")
    res.end()
})

app.listen(3000, function(){
    console.log("listening on port 3000")
})