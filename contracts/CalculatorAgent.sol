// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./CalculatorUser.sol";


interface ICalculator3 {
    function add(uint256 a, uint256 b) external pure returns (uint256);
}


contract CalculatorAgent {
    // Hardcoded address of the deployed Calculator contract
    ICalculator public calculator = ICalculator(0xd9145CCE52D386f254917e481eB44e9943F39138);

    function getCalculatorAddress() public view returns (address) {
        return address(calculator);
    }
}