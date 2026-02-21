const express = require("express")
const controller = require("../controller/authors.controller.js")
const router = express.Router()

router.post("/",controller.createAuthor)
router.get("/", controller.getAllAuthors)
router.get("/:id",controller.getAuthorById)
router.delete("/:id",controller.deleteBookById)
router.get("/:id/books",controller.getAllAuthorBooks)
module.exports = router