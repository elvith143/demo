const cors = require('cors');
const express = require("express")
const app = express()

app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    headers: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
  }))

require("dotenv").config()

const pool = require("./database/index")
const postRouter = require("./routes/post.router") 

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/api/v1/posts",postRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT,() =>{
    console.log("Server running.on...http://localhost:5000/api/v1/posts")
})
