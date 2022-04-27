/*
  The King organizes the jousting. You are a young human lady and your fiancé is an ogre. Today is his anniversary and he would love to visit the tournament, but it's forbidden for ogres to visit the Kingdom. So you decided to go there, to paint the exact moments of clash of cavalry and to present these paintings to your beloved.

  You are given the array / tuple (listField) of two strings of equal length. Each the string contains "$->" and "<-P"(knight with lance) respectively. The knights move towards each other and they can only take simultaneous steps of length vKnightLeft and vKnightRight. When the index of ">" is equal or more than the index of "<", return the array / tuple representing the knights' positions.

  "The knight "$->" always starts in the position 0 of the first string;
  "The knight "<-P" always starts in the last position of the second string;
  Velocity of knights can be different from 0 to 3 inclusive;
  Sometimes the collision can happen immediately;
  Sometimes there is no an immediate collision and velocitity of both knights is 0. At this case return an original array / tuple.

  Solution by TribalK
*/

function joust(listField, vKnightLeft, vKnightRight) {
  let knightLeftField = listField[0].split('');
  let knightRightField = listField[1].split('');

  let leftLancePos = knightLeftField.indexOf('>');
  let rightLancePos = knightRightField.indexOf('<');

  //Determine if there was an immediate collision or neither knight has any velocity.
  if(vKnightLeft === 0 && vKnightRight === 0) {
    return listField;
  }

  while(leftLancePos < rightLancePos) {
    for(let i=0; i<vKnightLeft; i++) {
      knightLeftField.unshift(' ');
      knightLeftField.pop();
    }
    for(let i=0; i<vKnightRight; i++) {
      knightRightField.push(' ');
      knightRightField.shift();
    }

    leftLancePos = knightLeftField.indexOf('>');
    rightLancePos = knightRightField.indexOf('<');
  }

  return [knightLeftField.join(''),knightRightField.join('')];
}
