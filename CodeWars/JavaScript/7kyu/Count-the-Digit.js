/*
  Solution by TribalK
*/
function nbDig(n, d) {
    const squaredNumbers = [];
    let onesCounter = 0;

    for(let k=0; k<=n; k++) {
      squaredNumbers.push((k**2).toString());
    }

    //Brute Force
    squaredNumbers.forEach(num => {
      const splitDigits = num.split('').filter(getDs => Number(getDs) === d);

      onesCounter += splitDigits.length;
    });

  return onesCounter;
}
