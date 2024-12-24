# Subtle Bug in Euclidean Algorithm Implementation

This repository demonstrates a subtle bug in a JavaScript implementation of the Euclidean algorithm for determining if two numbers are mutually divisible (i.e., their greatest common divisor is greater than 1). The algorithm's logic is largely correct, but there's a flaw in the base case handling that leads to incorrect results in certain scenarios.

## Bug Description

The provided JavaScript code attempts to check whether two numbers (a and b) are mutually divisible using the Euclidean algorithm. However, it has an issue with the base case. The Euclidean algorithm should return true if the remainder is 0, implying that the numbers are mutually divisible.  But there is a problem when one number becomes zero. 

## Bug Solution

The solution corrects the base case to correctly handle scenarios where one number is zero or they are equal.