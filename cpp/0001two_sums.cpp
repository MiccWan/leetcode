#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        unordered_map<int, int> m;
        for (int i = 0; i < nums.size(); ++i)
        {
            int n = nums[i];
            if (m.find(n) == m.end())
            {
                return vector()
            }
        }
    }
};