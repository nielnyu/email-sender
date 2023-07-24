const express = require("express")
const app = express()
const db = require("./database")

const cors = require("cors")
app.use(cors({
    origin: "http://localhost:4200"
}))
app.use(express.json())

//POST Request
app.post("/",  (req,res) =>{
    //const {email} = (req.body)
    if (req.body.emailAddress){
        try{
            db.promise().query("INSERT INTO EMAILS(email) value(?)", [req.body.emailAddress])
            res.json({message : "Email Added"})
        }
        catch(err){
            console.log(err)
        }
    }
    console.log(email)
    console.log("req", req.body.emailAddress)


})

app.listen(3000,() => {console.log("Server started on port 3000")})