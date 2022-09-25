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
    'mongodb+srv://forcontest:forcontest@cluster0.mv6hmhz.mongodb.net/test'
).then(() => {
    console.log('Sucessful');
}).catch(err => {
    console.log(err);
});

