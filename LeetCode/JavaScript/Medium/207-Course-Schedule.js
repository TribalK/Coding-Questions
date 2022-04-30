/*
  There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

  For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
  Return true if you can finish all courses. Otherwise, return false.

  Constraints:
  1 <= numCourses <= 105
  0 <= prerequisites.length <= 5000
  prerequisites[i].length == 2
  0 <= ai, bi < numCourses
  All the pairs prerequisites[i] are unique.

  Solution by TribalK
  Brute Force DFS approach
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const prereqLen = prerequisites.length;

    if(prereqLen == 0) {
        return true;
    }

    let allCourses = [];
    let llAllValid = true;

    for(let i=0; i<numCourses; i++) {
        allCourses.push([]);
    }


    for(let i=0; i<prereqLen; i++) {
        allCourses[prerequisites[i][0]].push(prerequisites[i][1]);
    }

    for(let i=0; i<numCourses; i++) {
        const validCourse = BFSUtil(allCourses, i, numCourses);

        if(!validCourse) {
            llAllValid = false;
            break;
        }
    }

    return llAllValid;
};

function BFSUtil(allCourses, index, numCourses) {
    let arrChecked = [];

    for(let i=0; i<numCourses; i++) {
        arrChecked[i] = false;
    }
    return BFS(allCourses, arrChecked, index, index);
}

function BFS(allCourses, arrChecked, indexToFind, curValue) {
    const arrForCurrentCourse = allCourses[curValue];
    arrChecked[curValue] = true;
    let llCheckPass = true;

    for(let numCompare of arrForCurrentCourse) {   //[2 => 1] //[1 => 2] // [0 => 1]
        if(indexToFind === numCompare) {
            return false;
        } else if(!arrChecked[numCompare]) {
            llCheckPass = BFS(allCourses, arrChecked, indexToFind, numCompare);

            if(!llCheckPass) {
                break;
            }
        }
    }

    return llCheckPass;
}
