/*
  Write a function to find the longest common prefix string amongst an array of strings.

  If there is no common prefix, return an empty string "".

  Solution by TribalK
*/

class Solution {
    public String longestCommonPrefix(String[] strs) {
        String curLongestCommonPrefix = "";

        Set<String> commonPrefixSet = new HashSet<String>();
        int shortestStrLen = Integer.MAX_VALUE;

        for(int i=0; i<strs.length; i++) {
            if(strs[i].length() < shortestStrLen) {
                shortestStrLen = strs[i].length();
            }
        }

        for(int i=1; i<=shortestStrLen; i++) {
            for(int j=0; j<strs.length; j++) {
                if(!commonPrefixSet.contains(strs[j].substring(0,i))) {
                    commonPrefixSet.add(strs[j].substring(0,i));
                }
            }

            if(commonPrefixSet.size() > 1) {
                commonPrefixSet.clear();
                break;
            }

            curLongestCommonPrefix = strs[0].substring(0,i);
            commonPrefixSet.clear();
        }

        return curLongestCommonPrefix;
    }
}
