const express = require("express")
const router = express.Router()

const db = require("../data/db")

router.use("/blogs/:blogid", async function(req, res,){
    const id = req.params.blogid
    try{
        const [blog, ] = await db.execute("select * from blog where blogid =?",[id])
        res.render("users/blog-details", {
            title: blog[0].baslik,
            blog: blog[0]
        })

    }
    catch(err){
        console.log(err)
    }
})
router.use("/blogs", async function(req, res,){

    try{
        const [blogs, ] = await db.execute("select * from blog where onay=1")
        const [categories, ] = await db.execute("select * from category")
        res.render("users/blogs", {
            title: "Tüm Kurslar",
            blogs: blogs,
            categories: categories
        })
    }

    catch(err){
        console.log(err)
    }
})
router.use("/", async function(req, res,){
    try{
        const [blogs, ] = await db.execute("select * from blog where onay=1 and anasayfa=1")
        const [categories, ] = await db.execute("select * from category")
        res.render("users/index", {
            title: "Popüler Kurslar",
            blogs: blogs,
            categories: categories
        })
    }

    catch(err){
        console.log(err)
    }
    
})

module.exports = router