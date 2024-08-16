import React from "react";

const ProblemExplanation = () => {
  return (
    <div className="bg-[#FEFFFF] min-h-screen text-[#17252A]">
      <div className="container mx-auto px-6 py-10 max-w-4xl">
        <div className="relative overflow-hidden">
          {/* Top Line */}
          <div className="absolute inset-x-0 top-0 flex justify-center">
            <hr className="border-t-4 border-[#2B7A78] w-full" />
            <hr className="border-t-2 border-[#3AAFA9] w-full" />
          </div>

          <div className="container mx-auto px-6 py-10 max-w-4xl relative z-10">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold text-[#2B7A78] mb-4">
                Minimum Path Sum
              </h1>
              <p className="text-xl font-semibold text-[#3AAFA9] mb-6">
                LeetCode Problem
              </p>
              <a
                href="https://leetcode.com/problems/minimum-path-sum/description/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B7A78] hover:underline text-lg"
              >
                View Problem Statement
              </a>
            </header>
          </div>

          {/* Bottom Line */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <hr className="border-t-4 border-[#2B7A78] w-full" />
            <hr className="border-t-2 border-[#3AAFA9] w-full" />
          </div>
        </div>

        <div className="space-y-8">
          {/* Problem Explanation Section */}
          <div className="bg-[#FEFFFF] p-12 rounded-lg text-[#17252A] shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Problem Explanation
            </h2>
            <p className="mb-6">
              The problem is to find the minimum path sum from the top of a
              triangle to the base. You can only move to adjacent numbers in the
              row below. The goal is to compute the path that minimizes the sum
              of all the numbers along its way.
            </p>

            {/* Example 1 */}
            <div className="bg-[#DEF2F1] p-6 rounded-lg mb-6 text-[#17252A] shadow-md hover:bg-[#3AAFA9] hover:text-[#FEFFFF] transition-colors duration-300">
              <h3 className="text-3xl font-bold mb-4">Example 1:</h3>
              <p className="mb-4">
                <strong>Input:</strong>
                <pre className="bg-[#2B7A78] p-4 rounded-lg text-[#FEFFFF] overflow-auto">
                  {`[[2],
 [3,4],
 [6,5,7],
 [4,1,8,3]]`}
                </pre>
              </p>
              <p className="mb-4">
                <strong>Output:</strong> <span className="font-bold">11</span>
              </p>
              <p>
                <strong>Explanation:</strong> The minimum path sum is{" "}
                <span className="font-bold">2 → 3 → 5 → 1</span>, which gives
                a total sum of 11.
              </p>
            </div>

            {/* Example 2 */}
            <div className="bg-[#DEF2F1] p-6 rounded-lg mb-6 text-[#17252A] shadow-md hover:bg-[#3AAFA9] hover:text-[#FEFFFF] transition-colors duration-300">
              <h3 className="text-3xl font-bold mb-4">Example 2:</h3>
              <p className="mb-4">
                <strong>Input:</strong>
                <pre className="bg-[#2B7A78] p-4 rounded-lg text-[#FEFFFF] overflow-auto">
                  {`[[-10]]`}
                </pre>
              </p>
              <p className="mb-4">
                <strong>Output:</strong> <span className="font-bold">-10</span>
              </p>
            </div>

            {/* Constraints Section */}
            <div className="bg-[#DEF2F1] p-6 rounded-lg text-[#17252A] shadow-md hover:bg-[#3AAFA9] hover:text-[#FEFFFF] transition-colors duration-300">
              <h3 className="text-3xl font-bold mb-4">Constraints:</h3>
              <p className="mb-4">
                <code className="bg-[#2B7A78] text-[#FEFFFF] px-2 rounded">
                </code>
                <br />
                <code className="bg-[#2B7A78] text-[#FEFFFF] px-2 rounded">
                  triangle[i].length == i + 1
                </code>
                <br />
                <code className="bg-[#2B7A78] text-[#FEFFFF] px-2 rounded">
                </code>
              </p>
            </div>

            {/* Topics Section */}
            <div className="bg-[#FEFFFF] p-6 rounded-lg text-[#17252A] shadow-md">
              <h3 className="text-3xl font-bold mb-4">Topics</h3>
              <ul className="list-disc list-inside">
                <li>Array</li>
                <li>Dynamic Programming</li>
                <li>Triangle</li>
              </ul>
            </div>
          </div>
{/* Algorithm Explanation Section */}
<div className="bg-[#FEFFFF] p-12 rounded-lg text-[#17252A] shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">Algorithm Explanation</h2>
            <div className="space-y-8">
              {/* Initialization Section */}
              <div className="p-6 rounded-lg shadow-md bg-[#3AAFA9] text-[#FEFFFF] hover:bg-[#DEF2F1] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4">Initialization:</h3>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>DP Table:</strong> Create a 2D array dp where each entry dp[i][j] will store the minimum path sum from the current cell (i, j) to the bottom of the triangle.
                  </li>
                  <li>
                    <strong>Base Case:</strong> The last row of the dp table is initialized with the values of the last row of the triangle, because the minimum path sum from any cell in the last row to the bottom is the value of the cell itself.
                  </li>
                </ul>
              </div>

              {/* Filling the DP Table Section */}
              <div className="p-6 rounded-lg shadow-md bg-[#3AAFA9] text-[#FEFFFF] hover:bg-[#DEF2F1] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4">Filling the DP Table:</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Start from the second-to-last row and move upwards.
                  </li>
                  <li>
                    For each cell (i, j), calculate the minimum path sum by considering the minimum path sums of the cells directly below and diagonally below-right. Add the current cell's value to this minimum.
                  </li>
                </ul>
                <pre className="bg-[#2B7A78] p-4 rounded-lg text-[#FEFFFF] overflow-auto">
                  {`dp[i][j] = triangle[i][j] + min(dp[i+1][j], dp[i+1][j+1])`}
                </pre>
              </div>

              {/* Result Section */}
              <div className="p-6 rounded-lg shadow-md bg-[#3AAFA9] text-[#FEFFFF] hover:bg-[#DEF2F1] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4">Result:</h3>
                <p>
                  The top cell of the dp table will contain the minimum path sum from the top to the bottom of the triangle.
                </p>
              </div>
            </div>
          </div>
          {/* Code Section */}
          <div className="bg-[#FEFFFF] p-12 rounded-lg text-[#17252A] shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">Code</h2>
            <pre className="bg-[#2B7A78] p-6 rounded-lg text-[#FEFFFF] overflow-auto">
              {`class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int n = triangle.size();
        
        // Create a dp table to store minimum path sums
        vector<vector<int>> dp(n, vector<int>(n, 0));
        
        // Initialize the last row of dp table with values from the triangle
        for (int j = 0; j < n; ++j) {
            dp[n-1][j] = triangle[n-1][j];
        }
        
        // Fill the dp table from bottom to top
        for (int i = n - 2; i >= 0; --i) {
            for (int j = 0; j <= i; ++j) {
                // Calculate minimum path sum for cell (i, j)
                dp[i][j] = triangle[i][j] + min(dp[i+1][j], dp[i+1][j+1]);
            }
        }
        
        // The top element contains the minimum path sum
        return dp[0][0];
    }
};`}
            </pre>
          </div>

          {/* Code Explanation Section */}
          <div className="bg-[#FEFFFF] p-12 rounded-lg text-[#17252A] shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">Code Explanation</h2>
            <div className="space-y-8">
              {/* Grid Dimensions Section */}
              <div className="p-6 rounded-lg shadow-md bg-[#3AAFA9] text-[#FEFFFF] hover:bg-[#DEF2F1] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4">Grid Dimensions:</h3>
                <p className="mb-4">
                  Get the number of rows in the triangle (n).
                </p>
              </div>

              {/* DP Table Initialization Section */}
              <div className="p-6 rounded-lg shadow-md bg-[#3AAFA9] text-[#FEFFFF] hover:bg-[#DEF2F1] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4">DP Table Initialization:</h3>
                <p className="mb-4">
                  Create a dp table with dimensions n x n.
                </p>
                <p className="mb-4">
                  Initialize the last row of the dp table with the values of the last row of the triangle.
                </p>
              </div>

              {/* Filling the DP Table Section */}
              <div className="p-6 rounded-lg shadow-md bg-[#3AAFA9] text-[#FEFFFF] hover:bg-[#DEF2F1] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4">Filling the DP Table:</h3>
                <p className="mb-4">
                  Iterate from the second-to-last row to the top of the triangle.
                </p>
                <p className="mb-4">
                  For each cell (i, j), calculate the minimum path sum by considering the minimum of the two cells directly below it and add the current cell's value.
                </p>
                <pre className="bg-[#2B7A78] p-4 rounded-lg text-[#FEFFFF] overflow-auto">
                  {`dp[i][j] = triangle[i][j] + min(dp[i+1][j], dp[i+1][j+1])`}
                </pre>
              </div>

              {/* Returning the Result Section */}
              <div className="p-6 rounded-lg shadow-md bg-[#3AAFA9] text-[#FEFFFF] hover:bg-[#DEF2F1] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4">Returning the Result:</h3>
                <p className="mb-4">
                  The minimum path sum from the top of the triangle to the bottom is stored in dp[0][0].
                </p>
              </div>
            </div>
          </div>

          {/* Time and Space Complexity Section */}
          <div className="bg-[#FEFFFF] p-12 rounded-lg text-[#17252A] shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">Complexity Analysis</h2>
            <div className="space-y-8">
              {/* Time Complexity Section */}
              <div className="p-6 rounded-lg shadow-md bg-[#3AAFA9] text-[#FEFFFF] hover:bg-[#DEF2F1] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4">Time Complexity:</h3>
                <p className="mb-4">
                  Time Complexity: <span className="font-bold">O(n^2)</span>
                </p>
                <p className="mb-4">
                  We iterate over each cell in the triangle once, filling the dp table, which results in O(n^2) complexity.
                </p>
              </div>

              {/* Space Complexity Section */}
              <div className="p-6 rounded-lg shadow-md bg-[#3AAFA9] text-[#FEFFFF] hover:bg-[#DEF2F1] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4">Space Complexity:</h3>
                <p className="mb-4">
                  Space Complexity: <span className="font-bold">O(n^2)</span>
                </p>
                <p className="mb-4">
                  We use a dp table of size n x n to store the minimum path sums, which results in O(n^2) space complexity.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-[#FEFFFF] p-12 rounded-lg text-[#17252A] shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">Conclusion</h2>
            <p className="mb-4">
              This tabulation approach avoids recursion and builds the solution in a bottom-up manner. It is efficient and straightforward for beginners to understand. The time complexity of O(n^2) is manageable for reasonably sized triangles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemExplanation;
