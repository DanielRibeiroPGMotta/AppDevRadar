const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.Server(app);
const {setupWebsocket} = require('./websocket');

mongoose.connect('mongodb+srv://obsrv7:obsrv777@cluster0-twzgi.mongodb.net/omni?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(55918);
