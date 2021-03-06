//DECELARATION
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var login = require('./controller/login');
var admin = require('./controller/admin');
var employee = require('./controller/employee');
var logout = require('./controller/logout');

var app = express();

//Configuration
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser());
app.use(cookieParser());

app.use('/Login', login);
app.use('/Admin', admin);
app.use('/Employee', employee);
app.use('/Logout', logout);


//SERVER STARTUP
app.listen(3001, () => {
    console.log('express server started at 3000');
});