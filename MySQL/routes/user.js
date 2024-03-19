const express = require("express")
const router = express.Router()

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
    res.render("users/blogs",data)
})
router.use("/", function(req, res,){
    res.render("users/index", data)
})

module.exports = router