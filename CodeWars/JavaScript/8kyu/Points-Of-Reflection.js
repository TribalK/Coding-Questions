/*
  Solution by TribalK
*/
function symmetricPoint(p, q) {
  let t = [];

  t.push(2 * q[0] - p[0], 2 * q[1] - p[1]);
  return t;
}
