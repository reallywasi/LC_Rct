import React from 'react';

const LeetCodeSolution = () => {
    return (
        <div className="font-roboto bg-[#1a1a1a] text-[#dcdcdc] m-0 p-0">
            <header className="text-center py-6 bg-[#292929] shadow-md">
                <h1 className="text-4xl font-bold">LeetCode</h1>
                <p className="text-lg mt-2">Two Sum - Problem #1</p>
            </header>

            <nav className="bg-[#292929] p-4 text-center shadow-md">
                <ul className="flex justify-center space-x-6">
                    <li><a href="#problem" className="text-[#f9a825] hover:text-[#ffeb3b] transition-colors duration-300 font-bold text-lg">Problem Statement</a></li>
                    <li><a href="#overview" className="text-[#f9a825] hover:text-[#ffeb3b] transition-colors duration-300 font-bold text-lg">Solution Overview</a></li>
                    <li><a href="#steps" className="text-[#f9a825] hover:text-[#ffeb3b] transition-colors duration-300 font-bold text-lg">Step-by-Step Explanation</a></li>
                    <li><a href="#algorithm" className="text-[#f9a825] hover:text-[#ffeb3b] transition-colors duration-300 font-bold text-lg">Algorithm</a></li>
                    <li><a href="#explanation" className="text-[#f9a825] hover:text-[#ffeb3b] transition-colors duration-300 font-bold text-lg">Detailed Explanation</a></li>
                    <li><a href="#video" className="text-[#f9a825] hover:text-[#ffeb3b] transition-colors duration-300 font-bold text-lg">Video Explanation</a></li>
                    <li><a href="#faq" className="text-[#f9a825] hover:text-[#ffeb3b] transition-colors duration-300 font-bold text-lg">FAQs</a></li>
                </ul>
            </nav>

            <section id="problem" className="mb-12 p-6 bg-[#212121] rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-[#f9a825] border-b-2 border-[#f9a825] pb-2 mb-6">Problem Statement</h2>
                <p>
                    Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
                    <br /><br />
                    You may assume that each input would have exactly one solution, and you may not use the same element twice.
                    <br /><br />
                    You can return the answer in any order.
                </p>
                <div className="mt-6">
                    <h3 className="text-2xl font-semibold">Example:</h3>
                    <pre className="mt-4 bg-[#1e1e1e] p-4 rounded-lg shadow-inner text-[#dcdcdc]">
                        <code>
                            Input: nums = [2,7,11,15], target = 9
                            Output: [0,1]
                            Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                        </code>
                    </pre>
                </div>
            </section>

            <section id="overview" className="mb-12 p-6 bg-[#212121] rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-[#f9a825] border-b-2 border-[#f9a825] pb-2 mb-6">Solution Overview</h2>
                <p>To solve the Two Sum problem, we can use a hashmap (also known as a dictionary or hash table) to keep track of the numbers we've seen and their indices. The key insight is that for each number, we can check if the complement (i.e., the difference between the target and the current number) already exists in the hashmap. If it does, we have found the solution. If not, we add the number and its index to the hashmap.</p>
            </section>

            <section id="steps" className="mb-12 p-6 bg-[#212121] rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-[#f9a825] border-b-2 border-[#f9a825] pb-2 mb-6">Step-by-Step Explanation</h2>
                <ol className="list-decimal list-inside space-y-4">
                    <li><strong>Initialize a hashmap:</strong> Create an empty hashmap to store the numbers we encounter and their indices.</li>
                    <li><strong>Iterate through the array:</strong> Loop through the array of numbers, keeping track of the current index.</li>
                    <li><strong>Calculate the complement:</strong> For each number, calculate the complement by subtracting the number from the target (i.e., <code>complement = target - nums[i]</code>).</li>
                    <li><strong>Check the hashmap:</strong> If the complement is already in the hashmap, we have found the two numbers that add up to the target. Return their indices.</li>
                    <li><strong>Add to the hashmap:</strong> If the complement is not in the hashmap, add the current number and its index to the hashmap.</li>
                    <li><strong>Return the result:</strong> Once the loop is complete, the solution has been found and returned.</li>
                </ol>
            </section>

            <section id="algorithm" className="mb-12 p-6 bg-[#212121] rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-[#f9a825] border-b-2 border-[#f9a825] pb-2 mb-6">Algorithm</h2>
                <pre className="bg-[#1e1e1e] p-4 rounded-lg shadow-inner text-[#dcdcdc] overflow-x-auto">
                    <code>
                        {`
function twoSum(nums, target) {
    // Step 1: Create an empty hashmap to store numbers and their indices
    const map = new Map();

    // Step 2: Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Step 3: Check if the complement exists in the hashmap
        if (map.has(complement)) {
            // Step 4: If found, return the indices
            return [map.get(complement), i];
        }

        // Step 5: If not found, add the number and its index to the hashmap
        map.set(nums[i], i);
    }

    // Step 6: Return an empty array if no solution is found (though the problem guarantees a solution)
    return [];
}
                        `}
                    </code>
                </pre>
            </section>

            <section id="explanation" className="mb-12 p-6 bg-[#212121] rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-[#f9a825] border-b-2 border-[#f9a825] pb-2 mb-6">Detailed Explanation</h2>
                <p>
                    The algorithm uses a hashmap to store each number's index as we iterate through the array. The key insight is that for each number <code>nums[i]</code>, we want to check if the complement (i.e., <code>target - nums[i]</code>) has already been seen in the array. If it has, then the pair of indices (i.e., the current index <code>i</code> and the index of the complement in the hashmap) form a solution.
                </p>
                <p className="mt-4">
                    This approach works in a single pass through the array, making it more efficient than the brute-force method, which would require checking each pair of numbers. The time complexity is O(n), where n is the number of elements in the array, and the space complexity is also O(n) because of the additional storage used by the hashmap.
                </p>
            </section>

            <section id="solution-code" className="mb-12 p-6 bg-[#212121] rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-[#f9a825] border-b-2 border-[#f9a825] pb-2 mb-6">Solution Code</h2>
                <pre className="bg-[#1e1e1e] p-4 rounded-lg shadow-inner text-[#dcdcdc] overflow-x-auto">
                    <code className="language-cpp">
                        {`
// Two Sum Solution in C++

#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> num_map;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (num_map.find(complement) != num_map.end()) {
            return {num_map[complement], i};
        }
        num_map[nums[i]] = i;
    }
    return {};
}
                        `}
                    </code>
                </pre>
            </section>

            <section id="video" className="mb-12 p-6 bg-[#212121] rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-[#f9a825] border-b-2 border-[#f9a825] pb-2 mb-6">Video Explanation</h2>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src="https://www.youtube.com/embed/WOegNHX8q7s"
                        title="Two Sum Problem Explained"
                        className="w-full h-full"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <section id="faq" className="mb-12 p-6 bg-[#212121] rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-[#f9a825] border-b-2 border-[#f9a825] pb-2 mb-6">FAQs</h2>
                <ul className="space-y-4">
                    <li><strong>Q: What is the time complexity of the solution?</strong> <br />
                    A: The time complexity is O(n), where n is the number of elements in the array.</li>
                    <li><strong>Q: What is the space complexity of the solution?</strong> <br />
                    A: The space complexity is O(n) due to the additional storage used by the hashmap.</li>
                </ul>
            </section>

            <footer className="text-center py-4 bg-[#292929]">
                <p>&copy; 2024 LeetCode Solution by reallywasi</p>
            </footer>
        </div>
    );
};

export default LeetCodeSolution;
