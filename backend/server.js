const app = require('express')();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');
const routes = require('./routes/routes');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/todos', routes);

mongoose.connect(config.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})

app.listen(config.APP_PORT, () => {
    console.log(`now listening on port: ${config.APP_PORT}`)
})

module.exports = app;