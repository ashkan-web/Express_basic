const express = require('express');
const logger = require('morgan');

// invoking express will return a express "app" object
const app = express();

const PORT = 3000;
const DOMAIN = 'localhost';

// app.set accepts 2 arguments:
// 1) a configuration key: this is a string of the configuration that you want to set
// 2) the value you want the config to be
app.set('view engine', 'ejs'); // telling express to use ejs as the view engine

// We need to set the views directory

// Initialize morgan 
app.use(logger('dev'));





// recieves at least 2 arguments:
// 1) PATH of the resource
// 2) A callback: the callback has two parameters
//   a) request: Represents a HTTP Request
//   b) response: Represents a HTTP Response

// Route to handle GET "/hello_world"
app.get("/hello_world", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

// Make a route to handle GET "/survey"
app.get("/survey", (req, res) => {
  res.send("<h5>Survey Page</h15>");
});

// app.listen is used to start your express server. It tells express to start listening for requests at a given url

// app.listen accepts 3 arguments
// 1) PORT
// 2) DOMAIN
// 3) Callback
app.listen(PORT, DOMAIN, () => {
  console.log(`Express listening on ${DOMAIN}:${PORT}`);
});
