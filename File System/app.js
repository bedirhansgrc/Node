var http = require("http")
var fs = require("fs")

var server = http.createServer((req, res) => {

    if (req.url == '/') {
        fs.readFile("index.html", (error, html) => {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(html)
            res.end()
        })
    } else if (req.url == "/blogs") {
        fs.readFile("blogs.html", (error, html) => {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(html)
            res.end()
        })
    } else {
        fs.readFile("404.html", (error, html) => {
            res.writeHead(404, { "Content-Type": "text/html" })
            res.write(html)
            res.end()
        })
    }


})

server.listen(3000)

console.log("node.js server at port 3000")