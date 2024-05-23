const express = require("express")
const router = express.Router()

const postscontroller = require("../controller/postscontroller")

router.get("/",postscontroller.getAll)
router.get("/:id",postscontroller.getById)

module.exports = router