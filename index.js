const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get('/nameentry', (req, res) => {
  res.sendfile("index.html");
});

app.post('/combine',(req, res) => {
    var first=req.body.first;
    var last=req.body.last;
    console.log("First name = "+first+", Last name = "+last);
});

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`\n Running on port ${port}\n`))