var fs = require("fs")

const routeHandler = (req, res) => {

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
        const data = []

        req.on("data", (chunk) => {
            data.push(chunk)
        })

        req.on("end", () => {
            const result = Buffer.concat(data).toString()
            const parsedData = result.split("=")[1]

            fs.appendFile("blogs.txt", parsedData, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    res.statusCode = 302
                    res.setHeader("Location", "/")
                    res.end()
                }
            })
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
}

module.exports = routeHandler