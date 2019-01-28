let app = global.expressApp;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/examensarbete', { useNewUrlParser: true });

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const User = require('./classes/User.class');
const Question = require('./classes/Question.class');

const db = mongoose.connection;

db.on('error', (e) => {
  console.error(e);
});
db.once('open', () => {
  console.info('db connected');
});

let express = require('express');

const expressSession = require('express-session')

const connectMongo = require('connect-mongo')(expressSession);
const session = expressSession({
  secret: 'big fancy secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 14 * 24 * 60 * 60 * 1000
  },
  store: new connectMongo({ mongooseConnection: mongoose.connection, ttl: 14 * 24 * 60 * 60 })
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session);

app.post('/addUser', async (req, res) => {
  console.log('i adduser: ', req.body.email);
  const emailResult = await User.findOne({ email: req.body.email });
  if (!emailResult) {
    console.log('in i new user med ', req.body.email);
    new User({
      username: req.body.username,
      email: req.body.email,
      questNr: 0
    }).save().then(user => {
      req.session.userEmail = req.body.email;
      res.json({ success: true, user: user })
      console.log('req.session.userEmail ', req.session.userEmail);
    })
  } else {
    res.json({ success: false, emailResult: emailResult });
  }
  console.log('nu är du här och fixar i adduser: ', req.session.userEmail);
});

app.get('/isUserRegistered', async (req, res) => {
  let result = await User.findOne( { email: req.session.userEmail } )
    .then(user => {
      if (user) {
        console.log('yes här nu', user.username, user.email, user.questNr);
        res.json({ loggedIn: true, name: user.username, mail: user.email, currentQuestNr: user.questNr });
      } else {
        res.json({ loggedIn: false })
      }
    }).catch(err => {
      console.log("login err", err);
    })
    console.log('resultat i isuserregistered: ', result);
});

app.post('/addQuestion', async (req, res) => {
  new Question({
    number: req.body.number,
    imgPath: req.body.imgPath,
    text: req.body.text,
    weight: req.body.weight,
    correctAnswer: req.body.correctAnswer,
    tip: req.body.tip
  }).save()
    .then(
      res.json({ success: true})
    )
});

app.put('/updateQuestion/:_id', async (req, res) => {
  let updateResult = await Question.findOneAndUpdate(
    { number: req.params._id },
    { $set: { text: req.body.text, weight: req.body.weight, correctAnswer: req.body.correctAnswer, tip: req.body.tip, imgPath: undefined } }
  )
})

app.put('/updateQuestNr/:_id', async (req, res) => {
  let result = await User.findOneAndUpdate(
    { email: req.params._id },
    { $set: { questNr: req.body.questNr } }
  );
});

app.put('/users/:_id', async (req, res) => {
  let result = await User.findOneAndUpdate(
    { email: req.params._id },
    { $set: { points: req.body.score } }
  )
});

app.get('/getQuestions', (req, res) => {
  Question.find().then(questions => res.json(questions));
});

app.get('/getScores', async (req, res) => {
  let result = await User.find().sort( { points: -1, date: 1 } ).limit(20).then(user => res.json(user));
});

const nodemailer = require('nodemailer');
app.post('/result', async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tjatt.info@gmail.com',
      pass: 'tj@tt@WUMA17'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: '"Klimatsmart"<noreply@klimatsmart.se',
    to: `${req.body.mail}`,
    subject: 'Tack för din medverkan!',
    html: `
     <h2>Här är resultatet efter din medverkan i "Hur klimatsmart är du?</h2>
     <p>${req.body.tips}</p>
     <p>Vi tackar för din medverkan!</p>
     `
  };

  transporter.sendMail(mailOptions, (error, info, res) => {
    if (error) {
      return console.log(error);
    }
  });
});