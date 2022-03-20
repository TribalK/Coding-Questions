/*
  Solution by TribalK
*/
function validParentheses(parens) {
  const parenStack = [];
  const parensChars = parens.split('');

  // '(' means push onto stack
  // ')' means pull last char pushed, if any

  for(let paren of parensChars) {
    if(paren === ')') {
      const mostRecentChar = parenStack[parenStack.length-1];

      //If there are no open parentheses in the stack we know that the parentheses are not valid
      if(mostRecentChar === '(') {
        parenStack.pop();
      } else {
        return false;
      }
    } else {
      parenStack.push(paren);
    }
  }

  return parenStack.length === 0;
}
