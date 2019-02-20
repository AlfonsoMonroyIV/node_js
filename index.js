const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./routes');
const routesApi = require('./routes_api');
app.use(morgan('common'));
app.use(function(req,res, next){
	console.log("Url request: "+req.url);
	next();
});
app.set('view engine','ejs');
app.set('views','');


app.use(routes);
app.use('/api',routesApi);
app.get('*',function (req,res){
	res.end('Page not found	');
});


app.listen(3000, () =>{
	console.log('Listening on port 3000 :)');
});