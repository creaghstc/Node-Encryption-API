const LFSR = require('./LFSR');

let messageSize = 512;
let key = LFSR.GenerateKeyStream("01100100", [8, 6, 5, 4], messageSize);
console.log(key);
