const express = require("express")
const app = express()
const db = require("./database")
const nodemailer = require("nodemailer")

const cors = require("cors")
const { authSchema } = require("./validate_schema")
app.use(cors({
    origin: "http://localhost:4200"
}))
app.use(express.json())

//POST Request
app.post("/",  async (req,res) =>{

    
    

    //if email has been added 
        try{
            const result = await authSchema.validateAsync(req.body)
            //add email to MySQL Database
            db.promise().query("INSERT INTO EMAILS(email) value(?)", [req.body.emailAddress])
            res.json({message : "Email Added"})

            // Generate SMTP service account
            nodemailer.createTestAccount((err, account) => {
                if (err) {
                    console.error('Failed to create a testing account. ' + err.message);
                    return process.exit(1);
                }

                console.log('Credentials obtained, sending message...');

                // SMTP transporter object
                let transporter = nodemailer.createTransport({
                    host: account.smtp.host,
                    port: account.smtp.port,
                    secure: account.smtp.secure,
                    auth: {
                        user: account.user,
                        pass: account.pass
                    }
                });

                // Email Message 
                let message = {
                    from: '"Email System" <email-system@example.com>', // sender address
                    to: `${req.body.emailAddress}`, // list of receivers
                    subject: "Hello", // Subject line
                    text: "Your email " + req.body.emailAddress + " has been save", // plain text body
                };

                transporter.sendMail(message, (err, info) => {
                    if (err) {
                        console.log('Error occurred. ' + err.message);
                        return process.exit(1);
                    }

                    //for test email
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                });
            });
        }
        //error handling
        catch(err){
            res.json({message: " Please Enter Valid Email"})
        }
    }


)

app.listen(3000,() => {console.log("Server started on port 3000")})