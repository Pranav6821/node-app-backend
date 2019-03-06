let express =require('express');
//let router = express.Router();
let jwt = require('jsonwebtoken')
// var bodyParser = require('body-parser');
// var {mongoose} = require('../db/mongoose');
 var session = require('express-session');
 var users = require('../models/users');

let app =express();

//app.use(bodyParser.json());
app.use(session({secret:'brio43ta3f'}));
const secret = 'secret'
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

// function createToken(){
//   let expirationDate = Math.floor(Date.now()/1000)+30
//   var token = jwt.sign({userID : user.Email ,exp :expirationDate}. secret)
// }


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
      let token = jwt.sign({todo :todo},'secret',{expiresIn:90000000});
      //res.end('token')
      return res.status(500).json({
        title:'Successful',
        token: token,
        userId: todo._id,
        //error : {message:token},
        //error : {message:userid},
    //req.session.email = req.body.email;
	  //req.session.password = req.body.pass;
    //console.log(token);
//  })
//}
 })
}
});
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

module.exports = signin ;
