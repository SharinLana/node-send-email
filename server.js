require("express-async-errors");
const dotenv = require("dotenv");
const express = require("express");

const app = express();
dotenv.config();


const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Send Email")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})