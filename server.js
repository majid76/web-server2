var express = require('express'); 
var app = express();
var PORT = 3000;

var middleWare = require('./middleWare.js');
// var middleWare = {

// 	requireAuthentication : function(req,res,next){

// 		console.log("private route hit");
// 		next();
// 	},
// 	logger: function(req,res,next){
// 		// var currentDate = new Date().toString();
// 		console.log(req.hostname+' '+req.method+' '+req.url +' '+new Date().toString());
// 		next();
// 	}

// };

app.use(middleWare.logger);


app.get('/',function(req,res){
	res.send('Hello Express!:');


});

app.get('/about',middleWare.requireAuthentication,function(req,res){
	res.send('About Us!!!');

});


// console.log(__dirname);
app.use(express.static(__dirname+'/public'));

app.listen(PORT,function(){

	console.log('Express server started on PORT: !'+PORT);
});
