const http = require('http');
const colors= require('colors');



const server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	res.write('<h1>Hello World from NodeJS </h1>');
	res.end();
});


server.listen(3000,function(){
	console.log('Server on port 3000'.green);
});