const express = require('express');
const server = express();
server.get('/',function(req,res){
	res.send('<h1>Using express</h1>');
	res.end();
});
server.listen(3000,function(){
	console.log("server on port 3000 by express");
});