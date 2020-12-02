const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
'use strict';
const fs = require('fs');
const app = express();

//middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Header",
//     "Origin, X-Requested-With, Content-Type, Accept"
//     );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, DELETE, OPTIONS"
//   );
//   next();
// });

app.post("/api/posts", (req, res, next) => {
  const post = {
    [req.body.compName] : [ req.body.message ]
  }

  const data = JSON.stringify(post);

  let rawdata = fs.readFileSync('messages.json');
  let file = JSON.parse(rawdata);

  function checkKey(file) {
    for(let key in file){
      if (key == req.body.compName) {
        return true;
      }
    }
    return false;
  }

  var check = checkKey(file);
  if (check) {
    file[req.body.compName].push(req.body.message);
  } else {
    file[req.body.compName] = post[req.body.compName];
  }

  fs.writeFile('messages.json', JSON.stringify(file), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  res.status(201).json({
    message: "success",
    post:data
  });
});

app.get("/api/posts", (req, res, next) => {
  const post = {
    id: 1000,
    componentName: "X",
    message: "this is testing message"
  }
  res.status(200).json(post);
});

// Catch 404 errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Error handler function
app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status || 500;

  //respond to client
  res.status(status).json({
    error: {
      message: error.message
    }
  });

  //respond to developers
  console.error(err);
});

// Start the server
const port = app.get('port') || 2000;
app.listen(port, () => console.log('server is running on port :  ' + port));
