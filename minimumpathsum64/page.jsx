{/* Algorithm Section */}
<div className="bg-[#FEFFFF] p-12 rounded-lg text-[#17252A] shadow-lg">
  <h2 className="text-4xl font-bold mb-6">Algorithm</h2>
  <p className="mb-8">
    In this solution, we employ <span className="font-bold">dynamic programming with tabulation</span>. This technique involves solving the problem by building a solution incrementally from smaller subproblems up to the final solution, rather than solving it recursively. We construct a 2D <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">dp</code> array where each cell <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">dp[i][j]</code> holds the minimum path sum to reach the cell located at <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">(i, j)</code> starting from the top-left corner of the grid.
  </p>
</div>

{/* Algorithm Breakdown Section */}
<div className="bg-[#2B7A78] p-12 rounded-lg text-[#FEFFFF] shadow-lg">
  <h2 className="text-4xl font-bold mb-6">Algorithm Breakdown</h2>
  <div className="space-y-8">
    {/* Initialization Section */}
    <div className="p-6 rounded-lg shadow-md hover:bg-[#1E6F6E] transition-colors duration-300">
      <h3 className="text-3xl font-bold mb-4">Initialization:</h3>
      <p className="mb-4">
        We start by initializing the cell at the top-left corner of the <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">dp</code> array with the value from the grid at <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">grid[0][0]</code>. This is because this cell represents the starting point of our path and hence its minimum path sum is simply its own value.
      </p>
      <p className="mb-4">
        For the first row, since we can only move to the right, each cell’s value is computed by adding the value of the grid cell to the value of the previous cell in the <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">dp</code> array. Essentially, each cell in the first row accumulates the sum of all values from the left.
      </p>
      <p className="mb-4">
        Similarly, for the first column, since movement is restricted to downward only, each cell’s value is calculated by adding the value of the grid cell to the value of the cell directly above it in the <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">dp</code> array. Each cell in the first column accumulates the sum of all values from above.
      </p>
      <p className="mb-4">
        This initialization step ensures that we have correctly set up the boundaries of our dynamic programming table, which is crucial for correctly calculating path sums for the rest of the grid.
      </p>
      <p>
        The boundaries in the dynamic programming table act as anchors for the computation, allowing the algorithm to properly build up the solution from these starting values.
      </p>
    </div>

    {/* Filling the DP Table Section */}
    <div className="p-6 rounded-lg shadow-md hover:bg-[#1A9A8A] transition-colors duration-300">
      <h3 className="text-3xl font-bold mb-4">Filling the DP Table:</h3>
      <p className="mb-4">
        For cells beyond the first row and first column, we calculate the minimum path sum by considering the smaller of two possible paths: from the cell directly above (<code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">dp[i-1][j]</code>) or from the cell to the left (<code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">dp[i][j-1]</code>). We then add the value from the current cell in the grid to this minimum value.
      </p>
      <p className="mb-4">
        This method ensures that each cell in the <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">dp</code> array represents the minimum path sum required to reach that cell from the top-left corner, taking into account the optimal paths from both adjacent cells.
      </p>
      <p className="mb-4">
        By filling in the <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">dp</code> table in this manner, we efficiently compute the minimum path sums for all cells, leveraging previously computed results to build the solution incrementally.
      </p>
      <p className="mb-4">
        This approach is efficient because it reduces redundant calculations by using previously computed results, making the overall process much faster compared to a naive recursive approach.
      </p>
    </div>

    {/* Result Section */}
    <div className="p-6 rounded-lg shadow-md hover:bg-[#17A589] transition-colors duration-300">
      <h3 className="text-3xl font-bold mb-4">Result:</h3>
      <p className="mb-4">
        The final result, which is the minimum path sum from the top-left to the bottom-right of the grid, is stored in the bottom-right cell of the <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">dp</code> array (<code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">dp[m-1][n-1]</code>).
      </p>
      <p className="mb-4">
        This value represents the optimal path that minimizes the sum of values from the starting point to the destination. It incorporates all possible paths and selects the one with the minimum sum.
      </p>
      <p>
        The final value in <code className="bg-[#DEF2F1] text-[#17252A] px-2 rounded">dp[m-1][n-1]</code> gives us the answer to the problem, reflecting the most efficient path to traverse the grid based on the given constraints.
      </p>
    </div>
  </div>
</div>
