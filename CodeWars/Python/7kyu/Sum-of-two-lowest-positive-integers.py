# Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
# Solution by TribalK

import sys

def sum_two_smallest_numbers(numbers):
    first_smallest_number = sys.maxsize
    second_smallest_number = sys.maxsize

    for i in range(len(numbers)):
        if numbers[i] < first_smallest_number:
            second_smallest_number = first_smallest_number
            first_smallest_number = numbers[i]
        elif numbers[i] < second_smallest_number:
            second_smallest_number = numbers[i]

    return first_smallest_number + second_smallest_number
