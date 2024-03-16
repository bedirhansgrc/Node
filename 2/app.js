var http = require("http")

var server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write(`
        <html>
            <head>
                <title>Ana Sayfa</title>
            </head>
            <body>
                <h1>Anasayfa</h1>
            </body>
        </html>`)
        res.end()
    } else if (req.url == "/blogs") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write(`
        <html>
            <head>
                <title>Blogs</title>
            </head>
            <body>
                <h1>Blogs</h1>
            </body>
        </html>`)
        res.end()
    }else{
        res.writeHead(404, { "Content-Type": "text/html" })
        res.write(`
        <html>
            <head>
                <title>404 Not Found</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Aradığınız Kaynak Bulunamadı</h1>
            </body>
        </html>`)
        res.end()
    }


})

server.listen(3000)

console.log("node.js server at port 3000")