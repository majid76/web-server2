var middleWare = {

requireAuthentication : function(req,res,next){

		console.log("Private route hit!");
		next();
},

logger : function(req,res,next){
	console.log("Route info: "+req.hostname+' '+req.method+' '+req.url+' '+new Date().toString());
	next();

}  


};

module.exports = middleWare;