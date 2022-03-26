function outed(meet, boss){
  let total = 0;
  let totalKeys = 0;
  for(let key in meet) {
    if(key === boss) {
      total += meet[key] * 2;
    } else {
      total += meet[key];
    }
    totalKeys++;
  }
  return ((total/totalKeys).toFixed(2) <= 5 ? 'Get Out Now!' : 'Nice Work Champ!');
}
