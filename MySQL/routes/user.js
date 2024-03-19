const express = require("express")
const router = express.Router()

const db = require("../data/db")

const data = {
    title: "Popüler Kurslar",
    categories: ["Web Geliştirme", "Programlama", "Mobil Uygulamalar", "Veri Analizi", "Ofis Uygulamaları"],
    blogs: [
        {
            blogid:1,
            baslik:"Komple Uygulamalı Web Geliştirme",
            aciklama:"Web Geliştirme",
            resim:"1.jpeg",
            anasayfa: true,
            onay: true
        },
        {
            blogid:2,
            baslik:"Phyton Programlama",
            aciklama:"Phyton Geliştirme",
            resim:"2.jpeg",
            anasayfa: true,
            onay: false
        },
        {
            blogid:3,
            baslik:"Javascript Programlama",
            aciklama:"JS Geliştirme",
            resim:"3.jpeg",
            anasayfa: false,
            onay: true
        },
        {
            blogid:4,
            baslik:"Phyton Programlama",
            aciklama:"Phyton Geliştirme",
            resim:"2.jpeg",
            anasayfa: false,
            onay: true
        }
    ]
}

router.use("/blogs/:blogid", function(req, res,){
    res.render("users/blog-details")
})
router.use("/blogs", function(req, res,){
    db.execute("select * from blog where onay=1")
        .then(result => {
            res.render("users/blogs", {
                title: "Tüm Kurslar",
                blogs: result[0],
                categories: data.categories
            })
        })
        .catch(err => {
            console.log(err)
        })
})
router.use("/", function(req, res,){
    db.execute("select * from blog where onay=1 and anasayfa=1")
        .then(result => {
            res.render("users/index", {
                title: "Popüler Kurslar",
                blogs: result[0],
                categories: data.categories
            })
        })
        .catch(err => {
            console.log(err)
        })
    
})

module.exports = router