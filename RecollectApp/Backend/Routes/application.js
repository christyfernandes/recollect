var express = require('express');
var router = express.Router();

const User  = require("../models/user");

const Note  = require("../models/notedata");

const jwt = require("jsonwebtoken");

var bcrypt = require('bcryptjs');






router.get('/user',(req,res,next)=>{
   res.send("Hello login -User!");
   next();

 
});




//addNew Note start--------------
 

router.post("/addNewNote" , (req,res,next) => {
	console.log(' signup method .. 1');
	 
   const noteData = new Note({
      userId: req.body.userId,
      indexPosition: req.body.indexPosition,
      title: req.body.title,
      details: req.body.details,
      placeholderTitle: req.body.placeholderTitle,
      placeholder: req.body.placeholder 
   
  });
  console.log(' signup method  occured.. 2');
  noteData.save().
  then (result => 
  {
	    console.log(' signup method  --- Start 3');
		res.status(201).json({
									message: "Note added successfully",
									result : result
							});
  })
  .catch( err => { 
  
	console.log('Error occured.. '+ err);
	
	res.status(500).json({ message: err.toString()});
  
  });	
 
	
});

//add New Note End ------------------

//signup
router.post("/signup" , (req,res,next) => {
	console.log(' signup method .. 1');
	
	bcrypt.hash(req.body.password, 10).
	then( 
	hash =>
	{
		console.log(' signup method hash : '+ hash);
		
		const userData = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			password: hash,
			email: req.body.email,
			contactNumber: req.body.contactNumber,
			address: req.body.address 
   
  });
  console.log(' signup method  occured.. 2');
  userData.save().
  then (result => 
  {
	    console.log(' signup method  --- Start 3');
		res.status(201).json({
									message: "User added successfully",
									result : result
							});
  })
  .catch( err => { 
  
	console.log('Error occured.. '+ err);
	
	res.status(500).json({ message: err.toString()});
  
  });	
});
	
});


//login method

router.post("/loginOne", (req, res) => {
   console.log('**** loginOne *** start ');
   console.log('**** loginOne *** start ', req.body.password);
   
   let fetchedUser;
   User.findOne({ email : req.body.email })
   .then(user => {
   if (!user) {
   return res.status(401).json({
   message: "Invalid username or passowrd !"
   });
   }
   fetchedUser = user;
   console.log('***fetchedUser***',fetchedUser);
   console.log('***fetchedUser***',req.body.password);
   return bcrypt.compare(req.body.password, user.password);
   })
   .then(result => {
   if (!result) {
   return res.status(401).json({
   message: "Invalid username or passowrd !"
   });
   }
   const token = jwt.sign(
   { email: fetchedUser.email  },
   "secret_this_should_be_longer",
   { expiresIn: "5m" }
   );
   return  res.status(200).json({
   token: token,
   user : fetchedUser,
   expiresIn : 3600
   
   /*,
   "expiresIn": 3600  */
   
   });
   })
   .catch(err => {
   res.status(401).json({
   message: "Invalid username or passowrd !"
   });
   });
   });



   router.get("/getAllNoteData")


   
module.exports = router;
