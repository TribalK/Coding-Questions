/*
  Solution by TribalK
*/
function meeting(x, need){
  if(need == 0) {
    return 'Game On';
  }

  const availableChairs = x.map(a => a[1]-a[0].length >= 0 ? a[1]-a[0].length : 0);

  let chairsFound = 0;
  let cutValue = availableChairs.length;
  for(let i=0; i<availableChairs.length; i++) {

    //We don't need to search rooms if we found the chairs we need.
    if(need-chairsFound == 0) {
      cutValue = i;
      break;
    } //take all of the chairs from this room
    else if(need-chairsFound >= availableChairs[i]) {
      chairsFound += availableChairs[i];
    }
    // take only what's needed
    else if(need-chairsFound < availableChairs[i]) {
      availableChairs[i] = need-chairsFound;
      chairsFound += need-chairsFound;
    }
  }

  return chairsFound === need ? availableChairs.slice(0,cutValue) : 'Not enough!';
}
