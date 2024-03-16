var http = require("http")

var server = http.createServer((req, res) => {
    // console.log(req.url, req.method)
    // console.log(res.statusCode)

    res.setHeader("Content-Type", "text/html")
    res.statusCode = 200
    res.statusMessage = "OK"

    res.write("<h1>Ana Sayfa</h1>")
    res.write("<p>Urunler</p>")



    res.end()
})

server.listen(3000)

console.log("node.js server at port 3000")