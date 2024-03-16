var http = require("http")
var fs = require("fs")
const { error } = require("console")

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
    }
    else if (req.url == "/create" && req.method == "POST") {
        fs.appendFile("blogs.txt", "deneme", (err) => {
            if (err) {
                console.log(err)
            } else {
                res.statusCode = 302
                res.setHeader("Location", "/")
                res.end()
            }
        })
    }
    else if (req.url == "/create") {
        fs.readFile("create.html", (error, html) => {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(html)
            res.end()
        })
    }
    else {
        fs.readFile("404.html", (error, html) => {
            res.writeHead(404, { "Content-Type": "text/html" })
            res.write(html)
            res.end()
        })
    }


})

server.listen(3000)

console.log("node.js server at port 3000")