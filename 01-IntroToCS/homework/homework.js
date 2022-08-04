'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var sum = 0;
  var nroReverse = num.split('').reverse().join('');
  for (let i = 0; i < nroReverse.length; i++) {
    sum = sum + nroReverse[i]*2**[i];    
  }
  return(sum);
}

function DecimalABinario(num) {
  // tu codigo aca
  /*var resto = 0;
  var binario = [];
  while (num !== 0) {
    resto = num%2;    
    binario.unshift(Math.floor(resto));
    num = Math.trunc(num/2);
  }
  return(binario.join(''));*/

  var res = '';
  while (num !== 0) {
    res = num%2 + res;
    num = Math.floor(num/2);
  }
  console.log(res);
  return res;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}