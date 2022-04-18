/*
  In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all

  Solution by TribalK
*/
function DNAStrand(dna){
  return dna.split('').map(char => {
    switch(char) {
        case 'A': {
          return 'T';
        }
        case 'T': {
          return 'A';
        }
        case 'C': {
          return 'G';
        }
        case 'G': {
          return 'C';
        }
    }
  }).join('');
}
