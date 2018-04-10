function LFSR(){

  this.GenerateKeyStream = function(seed, taps, size){
    let keyStream = "";
    let nextBit = "0";
    while(true){
      for(t of taps){
        nextBit += parseInt(seed[t-1]);
      }
      if(nextBit % 2 === 0){
        nextBit = "0";
      }
      else{
        nextBit = "1";
      }
      seed = seed.substring(0, seed.length-1);
      seed = nextBit + seed;
      nextBit = "0";
      keyStream += seed;

      if(keyStream.length >= size){
        console.log(keyStream);
        return keyStream;
        break;
      }
    }
  }
}

let lfsr = new LFSR();
lfsr.GenerateKeyStream("01100100", [8,6,5,4], 1024);
