require("express-async-errors");
const dotenv = require("dotenv");
const express = require("express");

const app = express();
dotenv.config();

app.use(express.json());

const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

app.get("/", (req, res) => {
  res.send('<h2>Send Email Project</h2> <a href="/send">send</a>');
});
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
