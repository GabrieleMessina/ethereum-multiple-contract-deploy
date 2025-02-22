// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

interface ICalculator {
    function add(uint256 a, uint256 b) external pure returns (uint256);
}


contract CalculatorUser {
    ICalculator public calculator;

    function useAdd(uint256 a, uint256 b) public view returns (uint256) {
        return calculator.add(a, b);
    }
}