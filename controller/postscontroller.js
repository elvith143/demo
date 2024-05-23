const pool = require("../database/index")
const postscontroller = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from posts")
            res.json({
                message: "get all posts",
                data: rows
            })
        } catch (error) {
            console.log(error)
        }
    },

    getById: async (req,res)=>{
        try{
            const {id} = req.params
            const [rows, fields] = await pool.query("select * from posts where id = ?",[id])
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = postscontroller