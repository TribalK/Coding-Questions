/*
  Solution by TribalK
*/
function deleteNth(arr,n){
  if(n === 0) {
    return [];
  }

  //Creating a map to represent a key-value pair
  //The key is the ID number of the location
  //The value is the number of times they have been at that location.
  let mapOfNs = new Map();
  let reducedArr = [];

  for(let i=0; i<arr.length; i++) {
    //Find if key is already present in the map
    if(mapOfNs.has(arr[i])) {
      let val = mapOfNs.get(arr[i]);

      //Determine if we have already reached our maximum in the counter
      if(val < n) {
        //Overwrite existing value
        mapOfNs.set(arr[i],++val);
        reducedArr.push(arr[i]);
      }
    } else {
      //Add new record to map
      mapOfNs.set(arr[i], 1);
      reducedArr.push(arr[i]);
    }
  }

  return reducedArr;
}
