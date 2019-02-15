const Math={};
function add(a, b){
	return a + b;
}
function subtract(a ,b){
	return a-b;
}
function multiply(a,b){
	return a*b;
}
function divide(a,b){
	if (b == 0 || b == undefined) {
		console.log('No se puede dividir entre cero.');
	}
	else{
		return a/b;
	}
}

/*exports.add=add;
exports.subtract=subtract;
exports.multiply=multiply;
exports.divide=divide;
*/
Math.add=add;
Math.subtract=subtract;
Math.multiply=multiply;
Math.divide=divide;

module.exports = Math;


