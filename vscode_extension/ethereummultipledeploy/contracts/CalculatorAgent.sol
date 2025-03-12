// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./CalculatorUser.sol";


interface ICalculator3 {
    function add(uint256 a, uint256 b) external pure returns (uint256);
}


contract CalculatorAgent {
    // Hardcoded address of the deployed Calculator contract
    ICalculator public calculator = ICalculator(0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47);

    function getCalculatorAddress() public view returns (address) {
        return address(calculator);
    }
}