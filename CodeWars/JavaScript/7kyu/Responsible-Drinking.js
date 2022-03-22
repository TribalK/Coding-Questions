/*
  Solution by TribalK
*/
function hydrate(s) {
  const glassesOfWater = s.split(' ').map(elem => Number(elem)).filter(thisNum => (!isNaN(thisNum))).reduce((accum, number) => accum + number,0);
  return (glassesOfWater === 1 ? `${glassesOfWater} glass of water` : `${glassesOfWater} glasses of water`);
}
