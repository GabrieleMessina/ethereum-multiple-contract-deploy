// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

interface IFirst {
    function add(uint256 a, uint256 b) external pure returns (uint256);
}


contract First {
    IFirst public first;

    function useAdd(uint256 a, uint256 b) public view returns (uint256) {
        return first.add(a, b);
    }
}