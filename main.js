const express = require('express');
const app = express()
const routerStarsign = require('./routerStarsign');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.listen(3000);

app.use(bodyParser.json());
app.use(cors());
app.use('/starsign', routerStarsign);


mongoose.connect(
    'tap your connection URL'
).then(() => {
    console.log('Sucessful');
}).catch(err => {
    console.log(err);
});

