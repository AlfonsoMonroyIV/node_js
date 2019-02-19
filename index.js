const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('common'));
app.use(function(req,res, next){
	console.log("Url request: "+req.url);
	next();
});
app.set('view engine','ejs');
app.set('views','');
app.get('/', (req, res) =>{
	res.render('./views/index.ejs');
});
app.get('/login', (req, res) =>{
	res.render('./views/login.ejs');
});
app.get('*',function (req,res){
	res.end('Page not found	');
});

app.listen(3000, () =>{
	console.log('Listening on port 3000 :)');
});