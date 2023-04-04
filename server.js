require("express-async-errors");
const dotenv = require("dotenv");
const express = require("express");

const app = express();
dotenv.config();

app.use(express.json());

const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

app.get("/", (req, res) => {
  res.send("Send Email");
});
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
