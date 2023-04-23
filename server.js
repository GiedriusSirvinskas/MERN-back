const mongoose = require("mongoose");
const app = require("./app");
require('dotenv').config()


const mongoURI = process.env.MONGO_URL

mongoose.connect(mongoURI).then(console.log("DB connection established."));

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
