const express = require("express")
const router = express.Router()

const db = require("../data/db")

router.use("/blogs/:blogid", function(req, res,){
    res.render("users/blog-details")
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