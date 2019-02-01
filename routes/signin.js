let express =require('express');
//let router = express.Router();
// let jwt = require('jsonwebtoken')
// var bodyParser = require('body-parser');
// var {mongoose} = require('../db/mongoose');
 var session = require('express-session');
 var users = require('../models/users');

let app =express();

//app.use(bodyParser.json());
//app.use(session({secret:'brio43ta3f'}));

// router.get('/',function(req,res){
//
// 	// Check if an e-mail address is set in the session.
// 	// If it is, we will redirect to the admin page.
// 	if(req.session.email) {
// 	    res.end('already logged inn');
// 	}
// 	else {
// 	    res.end('not logged inn');
// 	}
// });




signin = function(req , res){

    //let Email = req.body.Email;

    users.findOne({
        $and:[
            {'Email':req.body.Email},{'Password':req.body.Password}
        ]
    }).then((todo) =>{

    if(!todo){
        return res.status(401).json({
            title:'Not Authenticated',
            error : {message : 'Invalid login credentials'},

        })
    }
    else {
    //let token = jwt.sign({user : user},'secret',{expiresIn:900});
    //return res.status(500).json({
    //title:'Successful',
    //error : {message:"Login Successful"},
    req.session.email = req.body.email;
	req.session.password = req.body.pass;
  console.log(session.email);
	res.end('done');
//  })
}
 })
}

// router.get('/logout',function(req,res){
//
// 	// if the user logs out, destroy all of their individual session
// 	// information
// 	req.session.destroy(function(err) {
// 		if(err) {
// 			console.log(err);
// 		} else {
// 			res.end('loged out');
// 		}
// 	});
//
// });

// app.listen(3000, () => {
//   console.log('Started on port 3001');
// });

module.exports = signin;
