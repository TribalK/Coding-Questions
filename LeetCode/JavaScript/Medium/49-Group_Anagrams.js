/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
   Solution by TribalK
*/

var groupAnagrams = function(strs) {
    let grpAnagrams = [];
    const alphaMap = new Map();

    for(let i=0; i<strs.length; i++) {
        let charArr = Array.from(strs[i]);
        charArr.sort();
        let curStr = charArr.join('');

        if(!alphaMap.has(curStr)) {
            alphaMap.set(curStr,strs[i]);
        } else {
            alphaMap.set(curStr,alphaMap.get(curStr)+","+strs[i]);
        }
    }

    for (let [key, value] of alphaMap) {
        console.log(key + " = " + value);
        let lstAnagrams = value.split(',');
        grpAnagrams.push(lstAnagrams);
    }


    return grpAnagrams;
};
