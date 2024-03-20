const express = require('express');
const server = express();
const data = require("./data.js");

server.get("/", (req, res) => {
    res.end("Hello Wolverine");
});

server.get("/urunler", (req, res) => {
    res.status(200).json(data);
});

server.get("/urunler/:id", (req, res) => {
    const { id } = req.params;
    const urun = data.find((urun) => urun.id === parseInt(id));
    if (urun) {
        res.status(200).json(urun);
    } else {
        res.status(404).send("Aradığınız Ürün Bulunmamaktadır");
    }
});

server.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
