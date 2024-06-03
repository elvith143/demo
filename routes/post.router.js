const express = require("express")

const router = express.Router()

const postscontroller = require("../controller/postscontroller")

router.get("/",postscontroller.getAll)
router.get("/:id",postscontroller.getById)
router.post("/",postscontroller.create)
router.put("/:id",postscontroller.update)
router.delete("/:id",postscontroller.delete)

module.exports = router