const math=require('./matematicas.js');
const os=require('os');


console.log(math);
console.log(math.add(5,3));

console.log(os.arch());
console.log(os.platform());
console.log(os.release());
console.log('free mem: '+os.freemem());
console.log('Total mem: '+os.totalmem());

