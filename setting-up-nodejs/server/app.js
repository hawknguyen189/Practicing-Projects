var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var bodyParser = require('body-parser');
let request = require("request");
const http = require("http");
// const url = require("url");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get("/url", (req, res, next) => {
  console.log("here is the get response");
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
app.post('/login', (req, res, next) => {
  console.log(req.body);
  var user_name = req.body.headers;
  var password = req.body.method;
  console.log("User name = " + user_name + ", password is " + password);
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
  // res.end("yes");
});


//work as proxy server
let getPostData = request => {
  return new Promise((resolve, reject) => {
    let post = "";
    console.log("get post data",request.method);
    if (request.method === "POST") {
      let body = "";
      request.on("data", data => {
        body += data;
      });
      
      request.on("end", () => {
        post = JSON.parse(body);
        console.log("resolve post data", post);
        resolve(post);
      });
    }
  });
};
app.post('/api', (req, res, next) => {
  console.log("Server running on port ");
  let targetUrl = req.query.url;
  console.log(`Reuest to: ${req.query.url}`);
  // console.log(`query is ${query}`);
  
  getPostData(req).then(body => {
    console.log(body);
    let options = {
      uri: targetUrl,
      headers: body.headers,
      method: body.method || "GET"
    };


    let proxyCallback = (proxyErr, proxyRes, proxyBody) => {
      if (proxyErr) {
        console.log(proxyErr);
        res.statusCode = 500;
        res.write(proxyErr);
      } else {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        res.write(proxyBody);
      }
      res.end();
    };
    request(options, proxyCallback);
  }).catch(err => { console.log("foo", err)});
});

// *******************************
const googleTrends = require("google-trends-api");
// import googleTrends from "./google-trends-api-master/src/index";

app.get('/trends', (req, res, next) => {
  console.log("start api requesting");
  googleTrends
    .interestOverTime({ keyword: "bitcoin" })
    .then(function (results) {
      // console.log(results);
      res.json(results);
    })
    .catch(function (err) {
      // console.error(err);
      res.json(err);
    });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
