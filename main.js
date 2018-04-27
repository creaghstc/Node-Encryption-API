const LFSR = require('./LFSR');
const express = require('express');

let app = express();
let result = {};

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

app.get("/encryptBinary=:binary", function(req, res) {
  result.Method = req.method;
  let bin = req.params.binary;
  let size = bin.length;
  result.MessageBinary = bin;
  let Ebin = LFSR.encrypt(bin, LFSR.GenerateKeyStream("01100100", [8, 6, 5, 4], size));
  result.EncryptedBinary = Ebin;
  result["Date(UTC)"] = new Date();
  console.log(result);
  console.log("-----------------------------------------------------------")
  res.json(result);
});

app.get("/encryptString=:str", function(req, res) {
  result.Method = req.method;
  result.Message = req.params.str;
  let bin = toBinary(req.params.str);
  let size = bin.length;
  result.MessageBinary = bin;
  let Ebin = LFSR.encrypt(bin, LFSR.GenerateKeyStream("01100100", [8, 6, 5, 4], size));
  result.EncryptedBinary = Ebin;
  result["Date(UTC)"] = new Date();
  console.log(result);
  console.log("-----------------------------------------------------------")
  res.json(result);
});

var server = app.listen(8001, "192.168.178.30", function() {
  console.log("Listening on:", server.address());
});
