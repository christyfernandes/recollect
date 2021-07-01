var express=require('express');
var app = express();
const appRoute = require("./Routes/application");



const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});





app.use('/apps',appRoute);
app.get('/first',function(req,res){
    res.send("first Hello World..!");
});
app.listen(3000,function(){
    console.log("express Server Listening at port 3000...");
});
//MongoDB
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);




mongoose.connect(
                'mongodb+srv://rutuja:rutuja@cluster0.cdwtb.mongodb.net/recollect'
				, { useUnifiedTopology: true,  useNewUrlParser: true} 
		  ).then( () => {
							console.log("Connected to MOngo DB Rutuja Database!");
						}
				).catch(
							(err) => {
								console.log("Connection failed!"+err);
							  }
						);