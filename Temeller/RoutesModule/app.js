const http = require("http")
const routes = require("./routes")
const routeHandler = require("./routes")
var server = http.createServer(routeHandler)

server.listen(3000)

console.log("node.js server at port 3000")