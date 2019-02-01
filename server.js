var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/AsthamaPro',{ useNewUrlParser:true});


//var {mongoose} = require('./db/mongoose');
//var {todo} = require('./models/todo');
//require('../models/users');


//var findRouter = require('./routes/find');
var signinRouter = require('./routes/signin');
var signupRouter = require('./routes/signup');
var update_profileRouter1 = require('./routes/update/update_profile1');
var update_profileRouter2 = require('./routes/update/update_profile2');
var find_activitiesRouter = require('./routes/find/find_activities');
var find_activity_usersRouter = require('./routes/find/find_activity_users');
var find_allergiesRouter = require('./routes/find/find_allergies');
var find_medicine_strengthRouter = require('./routes/find/find_medicine_strength');
var find_medicine_usersRouter = require('./routes/find/find_medicine_users');
var find_medicineRouter = require('./routes/find/find_medicine');
var find_symptoms_usersRouter = require('./routes/find/find_symptoms_users');
var find_symptomsRouter = require('./routes/find/find_symptoms');
var find_triggersRouter = require('./routes/find/find_triggers');
var find_usersRouter = require('./routes/find/find_users');

app.use(bodyParser.json());

// app.post('/todos',(req ,res)=>{
//   console.log(req.body);
// });

app.use(session({secret:'brio43ta3f',resave: false,saveUninitialized: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use('/findpersonal', findRouter);
app.use('/signin', signinRouter);
app.use('/Signup', signupRouter);
app.use('/update_profile1', update_profileRouter1);
app.use('/update_profile2', update_profileRouter2);
app.use('/find_activities', find_activitiesRouter);
app.use('/find_activity_users', find_activity_usersRouter);
app.use('/find_allergies', find_allergiesRouter);
app.use('/find_medicine_strength', find_medicine_strengthRouter);
app.use('/find_medicine_users', find_medicine_usersRouter);
app.use('/find_medicine', find_medicineRouter);
app.use('/find_symptoms_users', find_symptoms_usersRouter);
app.use('/find_symptoms', find_symptomsRouter);
app.use('/find_triggers', find_triggersRouter);
app.use('/find_users', find_usersRouter);

app.post('/signup', function (req, res) {
  signupRouter.signup(req, res);
});

app.post('/signin', function (req, res) {
  signinRouter.signin(req, res);
});

app.post('/update_profile1', function (req, res) {
  update_profileRouter1.update1(req, res);
});

app.post('/update_profile2', function (req, res) {
  update_profileRouter2.update2(req, res);
});

app.get('/find_activities', function (req, res) {
  find_activitiesRouter.activity_list(req, res);
});

app.get('/find_activity_users', function (req, res) {
  find_activity_usersRouter.activity_users_list(req, res);
});

app.get('/find_allergies', function (req, res) {
  find_allergiesRouter.find_allergies_list(req, res);
});

app.get('/find_medicine_strength', function (req, res) {
  find_medicine_strengthRouter.medicine_strength_list(req, res);
});

app.get('/find_medicine_users', function (req, res) {
  find_medicine_usersRouter.medicine_users_list(req, res);
});

app.get('/find_medicine', function (req, res) {
  find_medicineRouter.medicine_list(req, res);
});

app.get('/find_symptoms_users', function (req, res) {
  find_symptoms_usersRouter.symptoms_users_list(req, res);
});


app.get('/find_symptoms', function (req, res) {
  find_symptomsRouter.symptoms_list(req, res);
});

app.get('/find_triggers', function (req, res) {
  find_triggersRouter.triggers_list(req, res);
});

app.get('/find_users', function (req, res) {
  find_usersRouter.users_list(req, res);
});

app.listen(3000 ,() => {
  console.log('started on port 3000');
});

module.exports = app;
