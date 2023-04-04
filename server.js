require("express-async-errors");
const dotenv = require("dotenv");
const express = require("express");

const app = express();
dotenv.config();

app.use(express.json());



app.get("/", (req, res) => {
    res.send("Send Email")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})