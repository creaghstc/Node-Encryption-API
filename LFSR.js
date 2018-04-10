module.exports = {

  GenerateKeyStream: function(seed, taps, size) {
    let keyStream = "";
    let nextBit = "0";
    while (true) {
      for (t of taps) {
        //XOR taps
        nextBit += parseInt(seed[t - 1]);
      }

      if (nextBit % 2 === 0) {
        nextBit = "0";
      } else {
        nextBit = "1";
      }
      //Shift to right
      seed = seed.substring(0, seed.length - 1);
      seed = nextBit + seed;
      nextBit = "0"; //reset bextBit
      keyStream += seed;
      //Once correct size break
      if (keyStream.length >= size) {
        return keyStream;
        break;
      }
    } //end while loop
  }, //end GenerateKeyStream

  encrypt: function(message,keyStream){
    let keyPlace = 0;
    let result = "";
    message = message.split(" ");

    for(let i = 0; i < message.length; i++){
      for(let j = 0; j <message[i].length; j++){
        let bit = parseInt(message[i][j]) + parseInt(keyStream[keyPlace]);
        if(bit % 2 === 0){
          result += "0";
        }
        else{
          result += "1";
        }
        keyPlace ++;
      }
      result += " ";
    }
    return result;
  }
} // end exports
