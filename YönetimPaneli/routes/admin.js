const express = require("express")
const router = express.Router()

const db = require("../data/db")

router.use("/admin/blog/create",async function(req, res,){
    try{
        const [categories, ]= await db.execute("select * from category")
        res.render("admin/blog-create", {
            title: "add blog",
            categories: categories
        })
    }
    catch(err){
        console.log(err)
    }
})
router.use("/admin/blogs/:blogid", function(req, res,){
    res.render("admin/blog-edit")
})
router.use("/admin/blogs", function(req, res,){
    res.render("admin/blog-list")
})

module.exports = router