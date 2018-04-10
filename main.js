const LFSR = require('./LFSR');

let message = "Hello World";
let messageBin = "";
// let stdin = process.openStdin();

function toBinary(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += text[i].charCodeAt(0).toString(2) + " ";
  }
  return result;

}

function binaryToString(binary) {
  let binaryArr = binary.split(" ");
  let result = "";
  for (i = 0; i < binaryArr.length; i++) {
    result += String.fromCharCode((parseInt(binaryArr[i], 2)));
  }
  return result;
}

let messageSize = toBinary(message).length;
let binaryMessage = toBinary(message);

let key = LFSR.GenerateKeyStream("01100100", [8, 6, 5, 4], messageSize);
let cipherText = LFSR.encrypt(binaryMessage, key);

console.log("Encrypting 'Hello World'");
console.log("Un altered binary: " + binaryMessage);
console.log("------------------------------------------------------------------------------");
console.log("Encrypted Text: " + binaryToString(cipherText));
console.log("Encrypted Binary: " + cipherText);
console.log("------------------------------------------------------------------------------");
console.log("Decrypted Text: " + binaryToString(LFSR.encrypt(cipherText, key)));
// console.log(key);
