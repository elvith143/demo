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
            res.json({
                status: "error",
            })
        }
    },

    getById: async (req,res)=>{
        try{
            const {id} = req.params
            const [rows, fields] = await pool.query("select * from posts where id = ?",[id])
            res.json({
                message: "get post by id",
                data: rows
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error",
            })
        }
    },
    create:async (req,res)=>{
        try{
            const {title,content} = req.body
            const sql = "insert into posts (title,content) values (?,?)"
            const [rows, fields] = await pool.query(sql,[title,content])

            res.json({
                message: "added one record",
                data: rows
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error",
            })
        }
    },
    update:async (req,res)=>{
        try{
            const {id} = req.params
            const {title,content} = req.body
            const sql = "update posts set title=?,content=?  where id=?"
            const sql1 = "insert into posts (title,content) values (?,?)"
            const [rows, fields] = await pool.query(sql,[title,content,id])

            res.json({
                message: "updated one record",
                data: rows
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error",
            })
        }
    },
    delete:async (req,res)=>{
        try{
            const {id} = req.params
            const [rows, fields] = await pool.query("delete from posts where id = ?",[id])

            res.json({
                message: "deleted one record",
                data: rows
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error",
            })
        }
    }

}

module.exports = postscontroller