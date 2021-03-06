var express = require('express');
var pg = require('pg');

// export DATABASE_URL=postgres:///$(whoami)

// db.connect('mongodb://localhost/shortly'); // connect to mongo database named shortly

// pg.connect(process.env.DATABASE_URL + '?ssl=true', function(err, client) {
//   if (err) throw err;
//   console.log('Connected to postgres! Getting schemas...');

//   client
//     .query('SELECT table_schema,table_name FROM information_schema.tables;')
//     .on('row', function(row) {
//       console.log(JSON.stringify(row));
//     });
// });

var app = express();

app.set('port', (process.env.PORT || 5001));
// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express);

// export our app for testing and flexibility, required by index.js

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;


/* Walkthrough of the server

  Express, mongoose, and our server are initialzed here
  Next, we then inject our server and express into our config/middleware.js file for setup.
    We also exported our server for easy testing

  middleware.js requires all express middleware and sets it up
  our authentication is set up there as well
  we also create individual routers for are two main features, links and users
  each feature has its own folder with a model, controller, and route file
    the respective file is required in middleware.js and injected with its mini router
    that route file then requires the respective controller and sets up all the routes
    that controller then requires the respective model and sets up all our endpoints which respond to requests

*/
