/*
   Complete the function which converts a binary number (given as a string) to a decimal number.

   Solution by TribalK [not using parseInt(string, radix)]
*/
function binToDec(bin){
  const revArr = bin.split('').reverse();

  return revArr.reduce((accum,digit,index) => {
    accum += (parseInt(digit) === 1 ? 2 ** index : 0);

    return accum;
  },0);
}
