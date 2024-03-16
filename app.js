var http = require("http")

function requestListener(request, response){
    response.end()
}

var server = http.createServer(requestListener)
server.listen(3000)

console.log("node.js server at port 3000")