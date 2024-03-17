const express = require("express")
const path = require("path")

const app = express()
const userRoutes = require("./routes/user")
const adminRoutes = require("./routes/admin")

app.use("/libs",express.static(path.join(__dirname ,'node_modules')))
app.use("/static",express.static(path.join(__dirname ,'public')))

app.use(adminRoutes)
app.use(userRoutes)

app.listen(3000, function(){
    console.log("listening on port 3000")
})