const express = require('express');
const app = express();

const port = 5000;
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(console.log("Connected")).catch((err)=> {console.log(err)});

app.use("/", (req, res) => {
    console.log("Hey This is Arvind singh")
})
app.listen(port, () => {
    console.log("Server is running at port", port);
})