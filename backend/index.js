const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors({
    origin: "http://localhost:4200"
}))
app.use(express.json())

//POST Request
app.post("/", (req,res) =>{
    console.log(req.body)
    res.json({
        message: "Success"
    })
})

app.listen(3000,() => {console.log("Server started on port 3000")})