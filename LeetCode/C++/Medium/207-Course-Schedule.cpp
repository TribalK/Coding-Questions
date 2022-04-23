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
class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<int> *courseList;

        courseList = new vector<int>[numCourses];
        int prereqCount = prerequisites.size();
        bool validSchedule = true;

        for(int i=0; i<prereqCount; i++) {
            int toTake = prerequisites[i][0];
            int mustHave = prerequisites[i][1];

            courseList[toTake].push_back(mustHave);
        }

        for(int i=0; i<numCourses; i++) {
            validSchedule = DFSUtility(courseList,i,numCourses);

            if(!validSchedule) {
                break;
            }
        }

        return validSchedule;
    }

    bool DFSUtility(vector<int>* courseList, int courseIdx,int numCourses) {
        bool visited[numCourses];

        for(int i=0; i<numCourses; i++) {
            visited[i] = false;
        }

        bool valid = DFS(courseList, courseIdx, courseIdx, visited);

        return valid;
    }

    bool DFS(vector<int> *courseList, int courseIdx, int matchID, bool visited[]) {
        visited[courseIdx] = true;
        bool validCourse = true;

        for(int elem : courseList[courseIdx]) {
            if(elem == matchID) {
                return false;
            } else {
                if(!visited[elem]) {
                   validCourse = DFS(courseList, elem, matchID, visited);

                   if(!validCourse) {
                       break;
                   }
                }
            }
        }

        return validCourse;
    }
};
