// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./CalculatorUser.sol";


interface ICalculator3 {
    function add(uint256 a, uint256 b) external pure returns (uint256);
}


contract CalculatorAgent {
    // Hardcoded address of the deployed Calculator contract
    ICalculator public calculator = ICalculator(0xC3Ba5050Ec45990f76474163c5bA673c244aaECA);

    function useAdd(uint256 a, uint256 b) public view returns (uint256) {
        return calculator.add(a, b);
    }
}