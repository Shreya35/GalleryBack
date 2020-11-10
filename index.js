const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRouter = require('./Router/bookRouter')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

mongoose.connect('mongodb://localhost:27017/ApiTest', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use('/book',bookRouter)

app.listen('4000',()=>{
    console.log('Lisenting on port no 4000')
})