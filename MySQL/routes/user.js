const express = require("express")
const router = express.Router()

const db = require("../data/db")

router.use("/blogs/:blogid", function(req, res,){
    res.render("users/blog-details")
})
router.use("/blogs", function(req, res,){
    db.execute("select * from blog where onay=1")
    .then(result => {
        db.execute("select * from category")
            .then(sonuc => (
                res.render("users/blogs", {
                    title: "Tüm Kurslar",
                    blogs: result[0],
                    categories: sonuc[0]
                })
            ))
            .catch(err => console.log(err))
        
    })
    .catch(err => {
        console.log(err)
    })
})
router.use("/", function(req, res,){
    db.execute("select * from blog where onay=1 and anasayfa=1")
        .then(result => {
            db.execute("select * from category")
                .then(sonuc => (
                    res.render("users/index", {
                        title: "Popüler Kurslar",
                        blogs: result[0],
                        categories: sonuc[0]
                    })
                ))
                .catch(err => console.log(err))
            
        })
        .catch(err => {
            console.log(err)
        })
    
})

module.exports = router