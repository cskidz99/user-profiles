var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var app = express();

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);
app.use(bodyParser.json());
app.use(cors());
var corsOptions = {
  origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.friendList);



app.listen(3000, function(){
  console.log("I'm listening, go on...");
});
