const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const authRoute = require("./routes/Auth");
const userRoute = require("./routes/Users");

dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(console.log("Connected")).catch((err) => { console.log(err) });
  
// app.use("/", (req, res) => {
//     console.log("Hey This is Arvind singh")
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen(port, () => {
    console.log("Server is running at port", port);
});

