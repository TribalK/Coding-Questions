/*
  We define subsequence as any subset of an array. We define a subarray as a contiguous subsequence in an array.

  Given an array, find the maximum possible sum among:

  all nonempty subarrays.
  all nonempty subsequences.
  Print the two values as space-separated integers on one line.

  Note that empty subarrays/subsequences should not be considered.
*/
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'maxSubarray' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts INTEGER_ARRAY arr as parameter.
     *
     * Solution by TribalK
     */

    public static List<Integer> maxSubarray(List<Integer> arr) {
    // Write your code here
        List<Integer> result = new ArrayList<Integer>();
        int arrLen = arr.size();

        int[] subseqList = new int[arrLen];
        int[] subarrList = new int[arrLen];
        subseqList[0] = arr.get(0);
        subarrList[0] = arr.get(0);
        int subseqTotal = arr.get(0);
        int subarrTotal = arr.get(0);

        for(int i=1; i<arrLen; i++) {
            subseqList[i] = Math.max(arr.get(i),Math.max(subseqList[i-1]+arr.get(i),subseqList[i-1]));

            if(subseqList[i] > subseqTotal) {
                subseqTotal = subseqList[i];
            }

            subarrList[i] = Math.max(subarrList[i-1]+arr.get(i),arr.get(i));

            if(subarrList[i] > subarrTotal) {
                subarrTotal = subarrList[i];
            }
        }

        result.add(subarrTotal);
        result.add(subseqTotal);

        return result;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int t = Integer.parseInt(bufferedReader.readLine().trim());

        IntStream.range(0, t).forEach(tItr -> {
            try {
                int n = Integer.parseInt(bufferedReader.readLine().trim());

                List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                    .map(Integer::parseInt)
                    .collect(toList());

                List<Integer> result = Result.maxSubarray(arr);

                bufferedWriter.write(
                    result.stream()
                        .map(Object::toString)
                        .collect(joining(" "))
                    + "\n"
                );
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        bufferedReader.close();
        bufferedWriter.close();
    }
}
