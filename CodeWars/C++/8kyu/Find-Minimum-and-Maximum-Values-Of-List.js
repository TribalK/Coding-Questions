/*
  Solution by TribalK
*/
#include <vector>
using namespace std;

int min(vector<int> list){
    int minimum = list[0];
    int listSize = list.size();

    for(int i=1; i<listSize; i++) {
      minimum = min(list[i],minimum);
    }

    return minimum;
}

int max(vector<int> list){
    int maximum = list[0];
    int listSize = list.size();

    for(int i=1; i<listSize; i++) {
      maximum = max(list[i],maximum);
    }

    return maximum;
}
