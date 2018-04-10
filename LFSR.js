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
  } //end GenerateKeyStream
} // end exports
