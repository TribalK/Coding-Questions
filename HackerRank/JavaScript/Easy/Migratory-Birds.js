/*
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example : arr = [1,1,2,2,3]

There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

Function Description

Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):

int arr[n]: the types of birds sighted
Returns

int: the lowest type id of the most frequently sighted birds
Input Format

The first line contains an integer, , the size of .
The second line describes  as  space-separated integers, each a type number of the bird sighted.

Constraints
5 <= n <= 2 x 10^5

It is guaranteed that each type is 1, 2, 3, 4, or 5.

*/
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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

 /*
   Output by TribalK
 */

function migratoryBirds(arr) {
    // Write your code here
    let highestFrequency = 0;
    let highestFreqType = 0;

    const birdMap = new Map();

    for(let birdType of arr) {
        if(birdMap.has(birdType)) {
            let typeCount = birdMap.get(birdType);
            birdMap.set(birdType, ++typeCount);
        } else {
            birdMap.set(birdType, 1);
        }
    }

    birdMap.forEach((count, birdType) => {
        if(count > highestFrequency) {
            highestFrequency = count;
            highestFreqType = birdType;
        } else if(count == highestFrequency && parseInt(birdType)<parseInt(highestFreqType)) {
            highestFreqType = birdType;
        }
    });

    return highestFreqType;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
