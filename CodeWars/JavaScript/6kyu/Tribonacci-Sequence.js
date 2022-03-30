/*
  You need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

  Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL)

  Solution by TribalK
*/
function tribonacci(signature,n){
  for(let i=3; i<=n; i++) {
    signature[i] = signature[i-1] + signature[i-2] + signature[i-3];
  }

  return signature.slice(0,n);
}
