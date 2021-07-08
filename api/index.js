const express = require('express');
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const authRoute = require("./Routes/Auth");
dotenv.config();
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(console.log("Connected")).catch((err)=> {console.log(err)});

// app.use("/", (req, res) => {
//     console.log("Hey This is Arvind singh")
app.use("/api/auth", authRoute);

app.listen(port, () => {
    console.log("Server is running at port", port);
});

