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
              The problem is to find the minimum path sum from the top-left
              corner to the bottom-right corner of a grid. You are only allowed
              to move right or down at any step. The task is to compute the path
              that minimizes the sum of all the numbers along its way.
            </p>

            {/* Example 1 */}
            <div className="bg-[#DEF2F1] p-6 rounded-lg mb-6 text-[#17252A] shadow-md hover:bg-[#3AAFA9] hover:text-[#FEFFFF] transition-colors duration-300">
              <h3 className="text-3xl font-bold mb-4">Example 1:</h3>
              <p className="mb-4">
                <strong>Input:</strong>
                <pre className="bg-[#2B7A78] p-4 rounded-lg text-[#FEFFFF] overflow-auto">
                  {`[[1,3,1],
 [1,5,1],
 [4,2,1]]`}
                </pre>
              </p>
              <p className="mb-4">
                <strong>Output:</strong> <span className="font-bold">7</span>
              </p>
              <p>
                <strong>Explanation:</strong> Because the path{" "}
                <span className="font-bold">1 → 3 → 1 → 1 → 1</span> minimizes
                the sum.
              </p>
            </div>

            {/* Example 2 */}
            <div className="bg-[#DEF2F1] p-6 rounded-lg mb-6 text-[#17252A] shadow-md hover:bg-[#3AAFA9] hover:text-[#FEFFFF] transition-colors duration-300">
              <h3 className="text-3xl font-bold mb-4">Example 2:</h3>
              <p className="mb-4">
                <strong>Input:</strong>
                <pre className="bg-[#2B7A78] p-4 rounded-lg text-[#FEFFFF] overflow-auto">
                  {`[[1,2,3],
 [4,5,6]]`}
                </pre>
              </p>
              <p className="mb-4">
                <strong>Output:</strong> <span className="font-bold">12</span>
              </p>
            </div>

            {/* Constraints Section */}
            <div className="bg-[#DEF2F1] p-6 rounded-lg text-[#17252A] shadow-md hover:bg-[#3AAFA9] hover:text-[#FEFFFF] transition-colors duration-300">
              <h3 className="text-3xl font-bold mb-4">Constraints:</h3>
              <p className="mb-4">
                <code className="bg-[#2B7A78] text-[#FEFFFF] px-2 rounded">
                  m == grid.length
                </code>
                <br />
                <code className="bg-[#2B7A78] text-[#FEFFFF] px-2 rounded">
                  n == grid[i].length
                </code>
              </p>
            </div>

            {/* Topics Section */}
            <div className="bg-[#FEFFFF] p-6 rounded-lg text-[#17252A] shadow-md">
              <h3 className="text-3xl font-bold mb-4">Topics</h3>
              <ul className="list-disc list-inside">
                <li>Array</li>
                <li>Dynamic Programming</li>
                <li>Matrix</li>
              </ul>
            </div>
          </div>

          {/* Algorithm Section */}
          <div className="bg-[#FEFFFF] p-12 rounded-lg text-[#17252A] shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">Approach</h2>
            <p className="mb-8">
              In this solution, we employ{" "}
              <span className="font-bold">
                dynamic programming with tabulation
              </span>
              . This technique involves solving the problem by building a
              solution incrementally from smaller subproblems up to the final
              solution, rather than solving it recursively. We construct a 2D{" "}
              <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">
                dp
              </code>{" "}
              array where each cell{" "}
              <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">
                dp[i][j]
              </code>{" "}
              holds the minimum path sum to reach the cell located at{" "}
              <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">
                (i, j)
              </code>{" "}
              starting from the top-left corner of the grid.
            </p>
          </div>

          {/* Algorithm Breakdown Section */}
          <div className="bg-[#2B7A78] p-12 rounded-lg text-[#FEFFFF] shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Algorithm Breakdown
            </h2>
            <div className="space-y-8">
              {/* Initialization Section */}
              <div className="p-6 rounded-lg shadow-md bg-[#3AAFA9] text-[#FEFFFF] hover:bg-[#DEF2F1] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4">Initialization:</h3>
                <p className="mb-4">
                  We start by initializing the cell at the top-left corner of
                  the{" "}
                  <code className="bg-[#FEFFFF] text-[#2B7A78] px-2 rounded">
                    dp
                  </code>{" "}
                  array with the value from the grid at{" "}
                  <code className="bg-[#FEFFFF] text-[#2B7A78] px-2 rounded">
                    grid[0][0]
                  </code>
                  . This is because this cell represents the starting point of
                  our path, and hence its minimum path sum is simply its own
                  value.
                </p>
                <p className="mb-4">
                  For the first row, since we can only move to the right, each
                  cell’s value is computed by adding the value of the grid cell
                  to the value of the previous cell in the{" "}
                  <code className="bg-[#FEFFFF] text-[#2B7A78] px-2 rounded">
                    dp
                  </code>{" "}
                  array. Essentially, each cell in the first row accumulates the
                  sum of all values from the left.
                </p>
                <p className="mb-4">
                  Similarly, for the first column, since movement is restricted
                  to downward only, each cell’s value is calculated by adding
                  the value of the grid cell to the value of the cell directly
                  above it in the{" "}
                  <code className="bg-[#FEFFFF] text-[#2B7A78] px-2 rounded">
                    dp
                  </code>{" "}
                  array. Each cell in the first column accumulates the sum of
                  all values from above.
                </p>
                <p className="mb-4">
                  This initialization step ensures that we have correctly set up
                  the boundaries of our dynamic programming table, which is
                  crucial for correctly calculating path sums for the rest of
                  the grid.
                </p>
                <p>
                  The boundaries in the dynamic programming table act as anchors
                  for the computation, allowing the algorithm to build up the
                  solution from these starting values effectively.
                </p>
              </div>

              {/* Filling the DP Table Section */}
              <div className="p-6 rounded-lg shadow-md bg-[#DEF2F1] text-[#2B7A78] hover:bg-[#3AAFA9] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4">
                  Filling the DP Table:
                </h3>
                <p className="mb-4">
                  For cells beyond the first row and first column, we calculate
                  the minimum path sum by considering the smaller of two
                  possible paths: from the cell directly above (
                  <code className="bg-[#FEFFFF] text-[#2B7A78] px-2 rounded">
                    dp[i-1][j]
                  </code>
                  ) or from the cell to the left (
                  <code className="bg-[#FEFFFF] text-[#2B7A78] px-2 rounded">
                    dp[i][j-1]
                  </code>
                  ). We then add the value from the current cell in the grid to
                  this minimum value.
                </p>
                <p className="mb-4">
                  This method ensures that each cell in the{" "}
                  <code className="bg-[#FEFFFF] text-[#2B7A78] px-2 rounded">
                    dp
                  </code>{" "}
                  array represents the minimum path sum required to reach that
                  cell from the top-left corner, taking into account the optimal
                  paths from both adjacent cells.
                </p>
                <p className="mb-4">
                  By filling in the{" "}
                  <code className="bg-[#FEFFFF] text-[#2B7A78] px-2 rounded">
                    dp
                  </code>{" "}
                  table in this manner, we efficiently compute the minimum path
                  sums for all cells, leveraging previously computed results to
                  build the solution incrementally.
                </p>
                <p className="mb-4">
                  This approach is efficient because it reduces redundant
                  calculations by using previously computed results, making the
                  overall process much faster compared to a naive recursive
                  approach.
                </p>
              </div>

              {/* Result Section */}
              <div className="p-6 rounded-lg shadow-md bg-[#3AAFA9] text-[#FEFFFF] hover:bg-[#2B7A78] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4">Result:</h3>
                <p className="mb-4">
                  The final result, which is the minimum path sum from the
                  top-left to the bottom-right of the grid, is stored in the
                  bottom-right cell of the{" "}
                  <code className="bg-[#FEFFFF] text-[#2B7A78] px-2 rounded">
                    dp
                  </code>{" "}
                  array (
                  <code className="bg-[#FEFFFF] text-[#2B7A78] px-2 rounded">
                    dp[m-1][n-1]
                  </code>
                  ).
                </p>
                <p className="mb-4">
                  This value represents the optimal path that minimizes the sum
                  of values from the starting point to the destination. It
                  incorporates all possible paths and selects the one with the
                  minimum sum.
                </p>
                <p>
                  The final value in{" "}
                  <code className="bg-[#FEFFFF] text-[#2B7A78] px-2 rounded">
                    dp[m-1][n-1]
                  </code>{" "}
                  gives us the answer to the problem, reflecting the most
                  efficient path to traverse the grid based on the given
                  constraints.
                </p>
              </div>
            </div>
          </div>

          {/* Code Section */}
          <div className="bg-[#3AAFA9] p-12 rounded-lg text-[#FEFFFF] shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">Code</h2>
            <pre className="bg-[#DEF2F1] p-6 rounded-lg overflow-auto text-[#17252A] mb-8">
              {`class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        // Get the dimensions of the grid
        int m = grid.size();
        int n = grid[0].size();

        // Create a dp array to store the minimum path sum up to each cell
        vector<vector<int>> dp(m, vector<int>(n, 0));

        // Initialize the dp array
        dp[0][0] = grid[0][0];

        // Fill the first row
        for (int j = 1; j < n; j++) {
            dp[0][j] = dp[0][j - 1] + grid[0][j];
        }

        // Fill the first column
        for (int i = 1; i < m; i++) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }

        // Fill the rest of the dp array
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = grid[i][j] + min(dp[i - 1][j], dp[i][j - 1]);
            }
        }

        // The result is in the bottom-right corner of the dp array
        return dp[m - 1][n - 1];
    }
};`}
            </pre>
          </div>
          {/* Code Explanation (Block by Block) Section */}
          <div className="bg-[#DEF2F1] p-12 rounded-lg text-[#17252A] shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Code Explanation (Block by Block)
            </h2>
            <div className="space-y-8">
              <div className="p-6 rounded-lg shadow-md hover:bg-[#D4E9E2] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4 text-[#00796B]">
                  Grid Dimensions:
                </h3>
                <p className="mb-4">
                  We first determine the dimensions of the grid (m rows and n
                  columns). This helps in creating our dp array.
                </p>
                <p>
                  This step ensures that the dp array is correctly sized to
                  handle all possible paths through the grid.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow-md hover:bg-[#C1E6E3] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4 text-[#004D40]">
                  DP Array Initialization:
                </h3>
                <p className="mb-4">
                  We initialize a 2D dp array of size m x n with all values
                  initially set to 0. The value of dp[0][0] is set to the value
                  of grid[0][0] because the top-left corner is the starting
                  point of our path.
                </p>
                <p>
                  Initializing the dp array this way sets up the base case for
                  dynamic programming, which is crucial for building the
                  solution iteratively.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow-md hover:bg-[#A8D5E2] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4 text-[#003D33]">
                  First Row Initialization:
                </h3>
                <p className="mb-4">
                  For the first row, since we can only move right, the value of
                  each cell is simply the sum of the values from the cells to
                  its left. We iterate from left to right and update the dp
                  array accordingly.
                </p>
                <p>
                  This step ensures that all possible paths from the start to
                  each cell in the first row are considered, accumulating the
                  minimum path sum.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow-md hover:bg-[#9CC9E8] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4 text-[#002F2F]">
                  First Column Initialization:
                </h3>
                <p className="mb-4">
                  For the first column, since we can only move down, the value
                  of each cell is the sum of the values from the cells above. We
                  iterate from top to bottom and update the dp array
                  accordingly.
                </p>
                <p>
                  This step ensures that all possible paths from the start to
                  each cell in the first column are considered, accumulating the
                  minimum path sum.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow-md hover:bg-[#8EC7D8] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4 text-[#002B2B]">
                  Filling the DP Table:
                </h3>
                <p className="mb-4">
                  For the rest of the grid, we fill the dp array by taking the
                  minimum of the value from the cell above (dp[i-1][j]) and the
                  cell to the left (dp[i][j-1]), then adding the value from the
                  current grid cell (grid[i][j]).
                </p>
                <p>
                  This process ensures that for each cell, the minimum path sum
                  is computed by considering the optimal paths from both the top
                  and left cells.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow-md hover:bg-[#7FB6B4] transition-colors duration-300">
                <h3 className="text-3xl font-bold mb-4 text-[#001B1B]">
                  Returning the Result:
                </h3>
                <p className="mb-4">
                  The bottom-right corner (dp[m-1][n-1]) holds the minimum path
                  sum, which we return as the result.
                </p>
                <p>
                  This final value represents the minimum path sum from the
                  top-left to the bottom-right of the grid, encompassing all
                  possible optimal paths.
                </p>
              </div>
            </div>
          </div>

          <footer className="mt-16 text-center">
            <p className="text-xl text-[#17252A]">
              If you found this explanation helpful, please upvote! Your support
              motivates me to continue writing clear and detailed explanations
              for the LeetCode community 😊.
            </p>
            <div className="flex justify-center mt-8 space-x-6">
              {" "}
              <a
                href="https://github.com/reallywasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B7A78] text-4xl hover:opacity-75 transition duration-300 ease-in-out"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/m-wasi-4a5825242/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B7A78] text-4xl hover:opacity-75 transition duration-300 ease-in-out"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProblemExplanation;
