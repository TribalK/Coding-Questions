'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

/*
  Output by TribalK
*/
function jumpingOnClouds(c) {

    let steps = 0;
    let curPos = 0;
    let lastElem = c.length-1;

    while(curPos < lastElem) {
        let diff = lastElem - curPos;

        if(diff < 2) {
            curPos++;
        }
        else {
            if(c[curPos+1] === 1 && c[curPos+2] === 0) {
                curPos += 2;
            }
            else if(c[curPos+1] === 0 && c[curPos+2] === 1) {
                curPos++;
            }
            else {
                curPos += 2;
            }
        }

        console.log(curPos);
        steps++;
    }

    return steps;

}
/*
  End of my Output
*/

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c);

    ws.write(result + '\n');

    ws.end();
}
