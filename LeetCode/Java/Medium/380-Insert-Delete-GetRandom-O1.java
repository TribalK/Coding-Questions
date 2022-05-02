/*
  Implement the RandomizedSet class:

  RandomizedSet() Initializes the RandomizedSet object.
  bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
  bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
  int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
  You must implement the functions of the class such that each function works in average O(1) time complexity.

  Constraints:
    -231 <= val <= 231 - 1
    At most 2 * 105 calls will be made to insert, remove, and getRandom.
    There will be at least one element in the data structure when getRandom is called.

  Solution by TribalK
*/
class RandomizedSet {

    private ArrayList<Integer> uniqueArr;
    private Map<Integer,Integer> randomizedSet;

    public RandomizedSet() {
        uniqueArr = new ArrayList<Integer>();
        randomizedSet = new HashMap<Integer,Integer>();
    }

    public boolean insert(int val) {
        int arrLen = uniqueArr.size();
        // Determine if already value is contained in our set
        if(!randomizedSet.containsKey(val)) {
            uniqueArr.add(val);
            randomizedSet.put(val,arrLen);
            return true;
        }
        return false;
    }

    public boolean remove(int val) {
        int arrLen = uniqueArr.size();
        // Determine if value is already contained in our set
        if(randomizedSet.containsKey(val)) {

            // [1, 2, 3, 4] => remove 2, swap with 4
            // [1, 4, 3]

            // Get index (values) from map with key
            int indexOfValueToRemove = randomizedSet.get(val);

            // Get value to remove out of arraylist using index, and value we will swap with in it's place
           // int valueToRemove = uniqueArr.get(indexOfValueToRemove); // uniqueArr.get(2)
            int lastElem = uniqueArr.get(arrLen-1);

            // Swap the two values above, and swap the index of the last element in the map
            uniqueArr.set(indexOfValueToRemove,lastElem);
            uniqueArr.set(arrLen-1,val);
            randomizedSet.put(lastElem,indexOfValueToRemove);


            // Remove key from Map, remove last index from ArrayList
            uniqueArr.remove(arrLen-1);
            randomizedSet.remove(val);
            return true;
        }
        return false;
    }

    public int getRandom() {
        int arrLen = uniqueArr.size();

        // Get random number
        int randomNum = (int) Math.floor(Math.random() * arrLen);
        return uniqueArr.get(randomNum);
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
