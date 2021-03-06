var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var db = require('./models');
var PORT = process.env.PORT || 3000;

var routes = require('./routes/index');
var users = require('./routes/users');
var services = require('./routes/services');
var poll = require('./routes/poll');
// Init App
var app = express();

// View Engine
var handlebars  = require('./helpers/handlebars.js')(exphbs);

app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



// BodyParser Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

//BreadCrumbs
var breadcrumbs = require('express-breadcrumbs');
app.use(breadcrumbs.init());

// Set Breadcrumbs home information
app.use(breadcrumbs.setHome());

app.use('/', breadcrumbs.setHome({
  name: 'Home',
  url: '/'
}));



app.use('/', routes);
app.use('/users', users);
app.use('/services', services);
app.use('/submitPoll', poll);

// Set Port
db.sequelize.sync({force:false}).then(function() {
  app.listen(PORT, function() {
    console.log("port listening on " + 3000);
  });
});
