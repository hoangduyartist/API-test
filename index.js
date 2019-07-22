const express = require('express');
const app = express();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const config = require('./configs/config');
const webAPI = require('./routers/webAPI');

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.json()); //using bodypaser as middleWave
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', webAPI);
app.all("/api/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    return next();
});

app.get('/', (req,res)=>res.render("index"))
app.get('/test', (req,res)=>res.send({status: "status of response : 1 (expected); 0 (unexpected)", message:"message of response", data:"retrieve data if it exist"}))

server.listen(config.PORT, () => {
    console.log("server listen on port " + config.PORT + " with host " + config.HOST);
});

//connectDB

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
    .then(connectResult => console.log('connected DataBase MongGo'))
    .catch(connectError => console.log(connectError));