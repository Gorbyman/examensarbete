let app = global.expressApp;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/examensarbete', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (e) => {
  console.error(e);
});
db.once('open', () => {
  console.info('db connected');
});

const bodyParser = require('body-parser');

let express = require('express');

const expressSession = require('express-session')

const connectMongo = require('connect-mongo')(expressSession);
const session = expressSession({
  secret: 'big fancy secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000
  },
  // Spara session i databasen, lever i 30 dagar
  store: new connectMongo({ mongooseConnection: mongoose.connection, ttl: 30 * 24 * 60 * 60 })
})

const nodemailer = require('nodemailer');


const User = require('./classes/User.class');


// Some example data for the Todo app
app.get('/todo-list-example-data',(req, res) => {
  res.json([
    {
      "id": 0.14890674152580785,
      "todo": "Create a project with React Warp Core",
      "done": true
    },
    {
      "id": 0.7582486745257166,
      "todo": "Run star wars",
      "done": true
    },
    {
      "id": 0.4867703766375038,
      "todo": "Continue testing",
      "done": false
    },
    {
      "id": 0.6641145526555352,
      "todo": "Understand the code"
    },
    {
      "id": 0.3006365270288174,
      "todo": "Build something awesome"
    },
    {
      "id": 0.6973592500276979,
      "todo": "Start testing the Todo app",
      "done": true
    }
  ]);
});

// Answer hello world on all routes
app.all('*', (req, res) => {
  res.json({
    message: 'Hello world!',
    method: req.method,
    url: req.url
  });
});

app.post('/users', async (req, res) => {
  const userResult = await User.findOne({ username: req.body.username });
  const emailResult = await User.findOne({ email: req.body.email });
  if (!userResult && !emailResult) {
    new User({
      username: req.body.username,
      email: req.body.email
    }).save().then(user => {
      //req.session.userId = user._id;
      res.json({ success: true, user: user })

    })
  } else {
    res.json({ success: false, userResult: userResult, emailResult: emailResult });
  }
});
