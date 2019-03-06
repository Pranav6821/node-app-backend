var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/briota',{ useNewUrlParser:true});

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
var add_activityRouter = require('./routes/activity_user');
var add_diary2Router = require('./routes/add_diary2');
var add_diary1Router = require('./routes/add_diary1');

var add_dailyMedicinePreventiveRouter = require('./routes/daily_medicine_preventive');
var add_dailyMedicineRescueRouter = require('./routes/daily_medicine_rescue');

var add_dailyAllergiesRouter = require('./routes/daily_allergies');
var add_dailyTriggersRouter = require('./routes/daily_triggers');
var add_dailySymptomsRouter = require('./routes/daily_symptoms');

var daily_medication_rescue_graphRouter = require('./routes/daily/daily_medication_rescue_graph');
var daily_medication_preventive_graphRouter = require('./routes/daily/daily_medication_preventive_graph');
var daily_medication_rescueRouter = require('./routes/daily/daily_medication_rescue');
var daily_medication_preventiveRouter = require('./routes/daily/daily_medication_preventive');
var daily_AllergiesRouter = require('./routes/daily/daily_allergies');
var daily_SymptomsRouter = require('./routes/daily/daily_symptoms');
var daily_TriggersRouter = require('./routes/daily/daily_triggers');
var daily_Allergies_graphRouter = require('./routes/daily/daily_allergies_graph');
var daily_Symptoms_graphRouter = require('./routes/daily/daily_symptoms_graph');
var daily_Triggers_graphRouter = require('./routes/daily/daily_triggers_graph');
var count_daily_allergiesRouter = require('./routes/daily/daily_allergies_count');
var count_daily_triggersRouter = require('./routes/daily/daily_triggers_count');
var count_daily_symptomsRouter = require('./routes/daily/daily_symptoms_count')

var weekly_medication_rescue_graphRouter = require('./routes/weekly/weekly_medicine_rescue_graph');
var weekly_medication_preventive_graphRouter = require('./routes/weekly/weekly_medicine_preventive_graph');
var weekly_medication_rescueRouter = require('./routes/weekly/weekly_medicine_rescue');
var weekly_medication_preventiveRouter = require('./routes/weekly/weekly_medicine_preventive');
var weekly_allergiesRouter = require('./routes/weekly/weekly_allergies');
var weekly_symptomsRouter = require('./routes/weekly/weekly_symptoms');
var weekly_triggersRouter = require('./routes/weekly/weekly_triggers');
var weekly_symptoms_graphRouter = require('./routes/weekly/weekly_symptoms_graph');
var weekly_triggers_graphRouter = require('./routes/weekly/weekly_triggers_graph');
var weekly_allergies_graphRouter = require('./routes/weekly/weekly_allergies_graph');
var weekly_allergies_countRouter = require('./routes/weekly/weekly_allergies_count');
var weekly_symptoms_countRouter = require('./routes/weekly/weekly_symptoms_count');
var weekly_triggers_countRouter = require('./routes/weekly/weekly_triggers_count');

var monthly_medication_rescue_graphRouter = require('./routes/monthly/monthly_medicine_rescue_graph');
var monthly_medication_preventive_graphRouter = require('./routes/monthly/monthly_medicine_preventive_graph');
var monthly_medication_rescueRouter = require('./routes/monthly/monthly_medicine_rescue');
var monthly_medication_preventiveRouter = require('./routes/monthly/monthly_medicine_preventive');
var monthly_allergiesRouter = require('./routes/monthly/monthly_allergies');
var monthly_symptomsRouter = require('./routes/monthly/monthly_symptoms');
var monthly_triggersRouter = require('./routes/monthly/monthly_triggers');
var monthly_allergies_countRouter = require('./routes/monthly/monthly_allergies_count');
var monthly_symptoms_countRouter = require('./routes/monthly/monthly_symptoms_count');
var monthly_triggers_countRouter = require('./routes/monthly/monthly_triggers_count');
var monthly_allergies_graphRouter = require('./routes/monthly/monthly_allergies_graph');
var monthly_symptoms_graphRouter = require('./routes/monthly/monthly_symptoms_graph');
var monthly_triggers_graphRouter = require('./routes/monthly/monthly_triggers_graph');

var multiple_daily_allergiesRouter = require('./routes/multiple_daily_allergies');

var pull_medicine_preventiveRouter = require('./routes/pull_medicine_preventive');
var pull_medicine_rescueRouter = require('./routes/pull_medicine_rescue');
var pull_allergiesRouter = require('./routes/pull_allergies');
var pull_triggersRouter = require('./routes/pull_triggers');
var pull_symptomsRouter = require('./routes/pull_symptoms');

var find_allergies_by_idRouter = require('./routes/find/find_allergies_by_id');
var find_triggers_by_idRouter = require('./routes/find/find_triggers_by_id');
var find_symptoms_by_idRouter = require('./routes/find/find_symptoms_by_id');

var dairy_percentageRouter = require('./routes/dairy_percentage');

app.use(bodyParser.json());
app.use(session({secret:'brio43ta3f',resave: false,saveUninitialized: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/update_profile1/:_id', update_profileRouter1);
app.use('/update_profile2/:_id', update_profileRouter2);
app.use('/find_activities', find_activitiesRouter);
app.use('/find_activity_users/:_id', find_activity_usersRouter);
app.use('/find_allergies', find_allergiesRouter);
app.use('/find_medicine_strength', find_medicine_strengthRouter);
app.use('/find_medicine_users/:_id', find_medicine_usersRouter);
app.use('/find_medicine', find_medicineRouter);
app.use('/find_symptoms_users/:_id', find_symptoms_usersRouter);
app.use('/find_symptoms', find_symptomsRouter);
app.use('/find_triggers', find_triggersRouter);
app.use('/find_users/:_id', find_usersRouter);
app.post('/add_activity/:_id', add_activityRouter );
app.post('/add_diary2/:_id', add_diary2Router );
app.post('/add_diary1/:_id', add_diary1Router );

app.post('/add_dailyMedicinePreventive/:_id', add_dailyMedicinePreventiveRouter );
app.post('/add_dailyMedicineRescue/:_id', add_dailyMedicineRescueRouter );

app.post('/add_dailyAllergies/:_id', add_dailyAllergiesRouter );
app.post('/add_dailyTriggers/:_id', add_dailyTriggersRouter );
app.post('/add_dailySymptoms/:_id', add_dailySymptomsRouter );

app.post('/dailyMedicationRescueGraph/:_id', daily_medication_rescue_graphRouter );
app.post('/dailyMedicationPreventiveGraph/:_id', daily_medication_preventive_graphRouter );
app.post('/dailyMedicationRescue/:_id', daily_medication_rescueRouter );
app.post('/dailyMedicationPreventive/:_id', daily_medication_preventiveRouter );
app.use('/dailyAllergies/:_id', daily_AllergiesRouter );
app.use('/dailyTriggers/:_id', daily_TriggersRouter );
app.use('/dailySymptoms/:_id', daily_SymptomsRouter );

app.use('/dailyAllergiesGraph/:_id', daily_Allergies_graphRouter );
app.use('/dailyTriggersGraph/:_id', daily_Triggers_graphRouter );
app.use('/dailySymptomsGraph/:_id', daily_Symptoms_graphRouter );

app.use('/dailyAllergiesCount/:_id', count_daily_allergiesRouter );
app.use('/dailyTriggersCount/:_id', count_daily_triggersRouter );
app.use('/dailySymptomsCount/:_id', count_daily_symptomsRouter );

app.use('/weeklyMedicationRescueGraph/:_id',weekly_medication_rescue_graphRouter);
app.use('/weeklyMedicationPreventiveGraph/:_id',weekly_medication_preventive_graphRouter);
app.use('/weeklyMedicationRescue/:_id',weekly_medication_rescueRouter);
app.use('/weeklyMedicationPreventive/:_id',weekly_medication_preventiveRouter);
app.use('/weeklyAllergies/:_id', weekly_allergiesRouter );
app.use('/weeklyTriggers/:_id', weekly_triggersRouter );
app.use('/weeklySymptoms/:_id', weekly_symptomsRouter );

app.use('/weeklyAllergiesGraph/:_id', weekly_allergies_graphRouter );
app.use('/weeklyTriggersGraph/:_id', weekly_triggers_graphRouter );
app.use('/weeklySymptomsGraph/:_id', weekly_symptoms_graphRouter );

app.use('/weeklyAllergiesCount/:_id', weekly_allergies_countRouter );
app.use('/weeklyTriggersCount/:_id', weekly_triggers_countRouter );
app.use('/weeklySymptomsCount/:_id', weekly_symptoms_countRouter );

app.use('/monthlyMedicationRescueGraph/:_id',monthly_medication_rescue_graphRouter);
app.use('/monthlyMedicationPreventiveGraph/:_id',monthly_medication_preventive_graphRouter);
app.use('/monthlyMedicationRescue/:_id',monthly_medication_rescueRouter);
app.use('/monthlyMedicationPreventive/:_id',monthly_medication_preventiveRouter);
app.use('/monthlyAllergies/:_id', monthly_allergiesRouter );
app.use('/monthlyTriggers/:_id', monthly_triggersRouter );
app.use('/monthlySymptoms/:_id', monthly_symptomsRouter );

app.use('/monthlyAllergiesCount/:_id', monthly_allergies_countRouter );
app.use('/monthlyTriggersCount/:_id', monthly_triggers_countRouter );
app.use('/monthlySymptomsCount/:_id', monthly_symptoms_countRouter );

app.use('/monthlyAllergiesGraph/:_id', monthly_allergies_graphRouter );
app.use('/monthlyTriggersGraph/:_id', monthly_triggers_graphRouter );
app.use('/monthlySymptomsGraph/:_id', monthly_symptoms_graphRouter );

//app.use('/multiple_daily_allergies/:id',multiple_daily_allergiesRouter);
app.post('/pull_medicine_rescue/:id',pull_medicine_rescueRouter);
app.post('/pull_medicine_preventive/:id',pull_medicine_preventiveRouter);
app.post('/pull_allergies/:id',pull_allergiesRouter);
app.post('/pull_symptoms/:id',pull_symptomsRouter);
app.post('/pull_triggers/:id',pull_triggersRouter);

app.use('/find_triggers_by_id', find_triggers_by_idRouter);
app.use('/find_allergies_by_id', find_allergies_by_idRouter);
app.use('/find_symptoms_by_id', find_symptoms_by_idRouter);

//var dairy_percentageRouter = require('./routes/dairy_percentage');
app.use('/dairy_percentage/:_id', dairy_percentageRouter );


app.post('/signup', function (req, res) {
  signupRouter.signup(req, res);
});

app.post('/signin', function (req, res) {
  signinRouter.signin(req, res);
});

app.post('/add_activity/:_id', function (req , res) {
  add_activityRouter.activity_user(req, res);
});

app.post('/add_diary2/:_id', function (req , res) {
  add_diary2Router.add_diary2(req, res);
});

app.post('/add_diary1/:_id', function (req , res) {
  add_diary1Router.add_diary1(req, res);
});

app.post('/add_dailyMedicinePreventive/:_id', function (req , res) {
  add_dailyMedicinePreventiveRouter.daily_medicines_preventive(req, res);
});

app.post('/add_dailyMedicineRescue/:_id', function (req , res) {
  add_dailyMedicineRescueRouter.daily_medicines_rescue(req, res);
});

app.post('/add_dailyAllergies/:_id', function (req , res) {
  add_dailyAllergiesRouter.daily_allergies(req, res);
});

app.post('/add_dailyTriggers/:_id', function (req , res) {
  add_dailyTriggersRouter.daily_triggers(req, res);
});

app.post('/add_dailySymptoms/:_id', function (req , res) {
  add_dailySymptomsRouter.daily_symptoms(req, res);
});

app.post('/multiple_daily_allergies/:_id', function (req , res) {
  multiple_daily_allergiesRouter.multiple_daily_allergies(req, res);
});

app.post('/update_profile1/:_id', function (req, res) {
  update_profileRouter1.update1(req, res);
});

app.post('/update_profile2/:_id', function (req, res) {
  update_profileRouter2.update2(req, res);
});

app.post('/pull_allergies/:_id', function (req, res) {
  pull_allergiesRouter.pull_daily_allergies(req, res);
});

app.post('/pull_triggers/:_id', function (req, res) {
  pull_triggersRouter.pull_daily_triggers(req, res);
});

app.post('/pull_symptoms/:_id', function (req, res) {
  pull_symptomsRouter.pull_daily_symptoms(req, res);
});

app.post('/pull_medicine_rescue/:_id', function (req, res) {
  pull_medicine_rescueRouter.pull_medicine_rescue(req, res);
});

app.post('/pull_medicine_preventive/:_id', function (req, res) {
  pull_medicine_preventiveRouter.pull_medicine_preventive(req, res);
});


app.get('/find_activities', function (req, res) {
  find_activitiesRouter.activity_list(req, res);
});

app.get('/find_activity_users/:_id', function (req, res) {
  find_activity_usersRouter.activity_users_list(req, res);
});

app.get('/find_allergies', function (req, res) {
  find_allergiesRouter.find_allergies_list(req, res);
});

app.get('/find_medicine_strength', function (req, res) {
  find_medicine_strengthRouter.medicine_strength_list(req, res);
});

app.get('/find_medicine_users/:_id', function (req, res) {
  find_medicine_usersRouter.medicine_users_list(req, res);
});

app.get('/find_medicine', function (req, res) {
  find_medicineRouter.medicine_list(req, res);
});

app.get('/find_symptoms_users/:_id', function (req, res) {
  find_symptoms_usersRouter.symptoms_users_list(req, res);
});


app.get('/find_symptoms', function (req, res) {
  find_symptomsRouter.symptoms_list(req, res);
});

app.get('/find_triggers', function (req, res) {
  find_triggersRouter.triggers_list(req, res);
});

app.get('/find_users/:_id', function (req, res) {
  find_usersRouter.users_list(req, res);
});

// app.get('/dailyMedicine/:_id', function (req, res) {
//   daily_MedicineRouter.daily_medicine(req, res);
// });


app.post('/dailyMedicationPreventive/:_id', function (req, res) {
  daily_medication_preventiveRouter.daily_medication_preventive(req, res);
});

app.post('/dailyMedicationRescue/:_id', function (req, res) {
  daily_medication_rescueRouter.daily_medication_rescue(req, res);
});

app.post('/dailyMedicationPreventiveGraph/:_id', function (req, res) {
  daily_medication_preventive_graphRouter.daily_medication_preventive_graph(req, res);
});

app.post('/dailyMedicationRescueGraph/:_id', function (req, res) {
  daily_medication_rescue_graphRouter.daily_medication_rescue_graph(req, res);
});

app.get('/dailyAllergies/:_id', function (req, res) {
  daily_AllergiesRouter.daily_allergies(req, res);
});

app.get('/dailyTriggers/:_id', function (req, res) {
  daily_TriggersRouter.daily_triggers(req, res);
});

app.get('/dailySymptoms/:_id', function (req, res) {
  daily_SymptomsRouter.daily_symptoms(req, res);
});

app.get('/dailyAllergiesCount/:_id', function (req, res) {
  daily_Allergies_graphRouter.daily_allergies_graph(req, res);
});

app.get('/dailyTriggersCount/:_id', function (req, res) {
  daily_Triggers_graphRouter.daily_triggers_graph(req, res);
});

app.get('/dailySymptomsCount/:_id', function (req, res) {
  daily_Symptoms_graphRouter.daily_symptoms_graph(req, res);
});

app.get('/dailyAllergiesCount/:_id', function (req, res) {
  count_daily_allergiesRouter.count_daily_allergies(req, res);
});

app.get('/dailySymptomsCount/:_id', function (req, res) {
  count_daily_symptomsRouter.count_daily_symptoms(req, res);
});

app.get('/dailyTriggersCount/:_id', function (req, res) {
  count_daily_triggersRouter.count_daily_triggers(req, res);
});

app.get('/weeklyMedicationRescueGraph/:_id', function (req, res) {
  weekly_medication_rescue_graphRouter.weekly_medicine_rescue_graph(req, res);
});

app.get('/weeklyMedicationPreventiveGraph/:_id', function (req, res) {
  weekly_medication_preventive_graphRouter.weekly_medicine_preventive_graph(req, res);
});

app.get('/weeklyMedicationRescue/:_id', function (req, res) {
  weekly_medication_rescueRouter.weekly_medicine_rescue(req, res);
});

app.get('/weeklyMedicationPreventive/:_id', function (req, res) {
  weekly_medication_preventiveRouter.weekly_medicine_preventive(req, res);
});

app.get('/weeklyAllergies/:_id', function (req, res) {
  weekly_allergiesRouter.weekly_allergies(req, res);
});

app.get('/weeklyTriggers/:_id', function (req, res) {
  weekly_triggersRouter.weekly_triggers(req, res);
});

app.get('/weeklySymptoms/:_id', function (req, res) {
  weekly_symptomsRouter.weekly_symptoms(req, res);
});

app.get('/weeklyAllergiesCount/:_id', function (req, res) {
  weekly_allergies_countRouter.weekly_allergies_count(req, res);
});

app.get('/weeklySymptomsCount/:_id', function (req, res) {
  weekly_symptoms_countRouter.weekly_symptoms_count(req, res);
});

app.get('/weeklyTriggersCount/:_id', function (req, res) {
  weekly_triggers_countRouter.weekly_triggers_count(req, res);
});

app.get('/weeklyAllergiesGraph/:_id', function (req, res) {
  weekly_allergies_graphRouter.weekly_allergies_graph(req, res);
});

app.get('/weeklySymptomsGraph/:_id', function (req, res) {
  weekly_symptoms_graphRouter.weekly_symptoms_graph(req, res);
});

app.get('/weeklyTriggersGraph/:_id', function (req, res) {
  weekly_triggers_graphRouter.weekly_triggers_graph(req, res);
});

app.post('/monthlyMedicationPreventiveGraph/:_id', function (req, res) {
  monthly_medication_preventive_graphRouter.monthly_medication_preventive_graph(req, res);
});

app.post('/monthlyMedicationRescueGraph/:_id', function (req, res) {
  monthly_medication_rescue_graphRouter.monthly_medication_rescue_graph(req, res);
});

app.get('/monthlyMedicationRescue/:_id', function (req, res) {
  monthly_medication_rescueRouter.monthly_medicine_rescue(req, res);
});

app.get('/monthlyMedicationPreventive/:_id', function (req, res) {
  monthly_medication_preventiveRouter.monthly_medicine_preventive(req, res);
});
app.get('/monthlyAllergies/:_id', function (req, res) {
  monthly_allergiesRouter.monthly_allergies(req, res);
});

app.get('/monthlyTriggers/:_id', function (req, res) {
  monthly_triggersRouter.monthly_triggers(req, res);
});

app.get('/monthlySymptoms/:_id', function (req, res) {
  monthly_symptomsRouter.monthly_symptoms(req, res);
});

app.get('/monthlyAllergiesCount/:_id', function (req, res) {
  monthly_allergies_countRouter.monthly_allergies_count(req, res);
});

app.get('/monthlySymptomsCount/:_id', function (req, res) {
  monthly_symptoms_countRouter.monthly_symptoms_count(req, res);
});

app.get('/monthlyTriggersCount/:_id', function (req, res) {
  monthly_triggers_countRouter.monthly_triggers_count(req, res);
});

app.get('/monthlyAllergiesGraph/:_id', function (req, res) {
  monthly_allergies_graphRouter.monthly_allergies_graph(req, res);
});

app.get('/monthlySymptomsGraph/:_id', function (req, res) {
  monthly_symptoms_graphRouter.monthly_symptoms_graph(req, res);
});

app.get('/monthlyTriggersGraph/:_id', function (req, res) {
  monthly_triggers_graphRouter.monthly_triggers_graph(req, res);
});


app.get('/find_allergies_by_id', function (req, res) {
  find_allergies_by_idRouter.find_allergies_by_idRouter(req, res);
});

app.get('/find_triggers_by_id/:_id', function (req, res) {
  find_triggers_by_idRouter.find_triggers_by_id(req, res);
});

app.get('/find_symptoms_by_id/:_id', function (req, res) {
  find_symptoms_by_idRouter.find_symptoms_by_id(req, res);
});

app.get('/dairy_percentage/:_id', function (req, res) {
  dairy_percentageRouter.dairy_percentage(req, res);
});
//app.use('/dairy_percentage/:_id', dairy_percentageRouter );

app.listen(3000 ,() => {
  console.log('started on port 3000');
});

module.exports = app;
