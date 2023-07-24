const mysql = require("mysql2")

module.exports = mysql.createConnection({
    port: ' localhost',
    user: "root",
    password: "password@12",
    database: "EmailSender",
})