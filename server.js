require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    console.log('Connected to db');
});

app.listen(3000, () => console.log("lisening on 3000"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/quotes', (req, res) => {
    console.log(req.body);
});
