// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "./5_TestInterfaces1.sol";

interface ICalculator2 {
    function add(uint256 a, uint256 b) external pure returns (uint256);
}


contract CalculatorUser {
    // Hardcoded address of the deployed Calculator contract
    ICalculator public calculator;

    function useAdd(uint256 a, uint256 b) public view returns (uint256) {
        return calculator.add(a, b);
    }
}