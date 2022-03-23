/*
  Solution by: TribalK and @JuleanRod
*/
var fireAndFury = function(tweet) {
  const string = tweet.replace(/FIRE/gm,'fire')
    .replace(/FURY/gm,'fury')
    .replace(/[A-Z]/gm,',')
    .replace(/e/gm,'e,')
    .replace(/y/gm,'y,')
    .replace(/,+/gm,',')
    .replace(/^,/gm,'')
    .replace(/,$/gm,'')
    .toUpperCase();

  let llBadLetters = false;

  for(let char of tweet) {
      if(char !== 'F' && char !== 'E' && char !== 'I' && char !== 'U' && char !== 'R' && char !== 'Y') {
        llBadLetters = true;
        break;
      }
  }

  console.log(tweet);

  if(llBadLetters || string == ',' || string == '') return 'Fake tweet.';

  const arr = string.split(",");
  let result = '';
  let flagModify = false;

  console.log(tweet);
  console.log(arr);

  for(let i = 0; i < arr.length; i++) {
    flagModify = false;

    //Modify the existing phrase rather than adding a new sentence.
    if(arr[i-1] === 'FIRE' && arr[i] === 'FIRE') {
      //Modify existing phrase
      let temp = result.lastIndexOf('are');
      result = result.slice(0, temp) + 'and you ' + result.slice(temp);
      flagModify = true;
    } else if(arr[i-1] === 'FURY' && arr[i] === 'FURY') {
      //Modify existing phrase
      let temp = result.lastIndexOf('furious');
      result = result.slice(0, temp) + 'really ' + result.slice(temp);
      flagModify = true;
    }

    //Add a new sentence rather than modifying an existing phrase.
    if(!flagModify) {
      if(arr[i] == 'FIRE') {
        result = result.concat('You are fired! ');
      } else {
        result = result.concat('I am furious. ');
      }
    }
  }
  return result.slice(0,-1);
}
