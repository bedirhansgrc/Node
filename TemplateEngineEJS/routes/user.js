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
            resim:"1.jpeg"
        },
        {
            blogid:2,
            baslik:"Phyton Programlama",
            aciklama:"Phyton Geliştirme",
            resim:"2.jpeg"
        },
        {
            blogid:3,
            baslik:"Javascript Programlama",
            aciklama:"JS Geliştirme",
            resim:"3.jpeg"
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