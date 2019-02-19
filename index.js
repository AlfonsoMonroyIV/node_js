const express = require('express');

const app = express();

app.use(function(req,res, next){
	console.log("Url request: "+req.url);
	next();
});

app.get('/', (req, res) =>{
	res.end('Welcome');
});
app.get('*',function (req,res){
	res.end('Page not found	');
});

app.listen(3000, () =>{
	console.log('Listening on port 3000 :)');
});