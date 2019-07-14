const express = require('express');
const app = express();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const config = require('./configs/config');
const webAPI = require('./routers/webAPI');

app.use(bodyParser.json()); //using bodypaser as middleWave
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', webAPI);

app.get('/', (req,res)=>res.send("welcome to API test server"))

server.listen(config.PORT, () => {
    console.log("server listen on port " + config.PORT + " with host " + config.HOST);
});

//connectDB
let urlMongo = process.env.MONGODB_URI || "mongodb+srv://hoangduy:hoangduy@cluster0-a0ada.mongodb.net/testAPI?retryWrites=true";
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(urlMongo, { useNewUrlParser: true })
    .then(connectResult => console.log('connected DataBase MongGo'))
    .catch(connectError => console.log(connectError));