const express = require("express");
const bodyParser = require("body-parser");
const bookRouter = require("./routes/bookRoutes");
const userRouter = require("./routes/userRoutes");
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
    credentials: true
}


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);

module.exports = app;
