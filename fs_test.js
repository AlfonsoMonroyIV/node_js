const fs= require('fs');

fs.writeFile('./text.txt','lorem impsun lalala ',function (err){
	if (err) {
		console.log(err);
	}
	console.log('Archivo creado exitosamente.');

});


console.log('Ejecucion asincrona, ultima linea de codigo');


fs.readFile('./text.txt',function(err, data){
	if (err) {
		console.log(err);
	}
	console.log(data.toString());
});