// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./First.sol";
import "./Second.sol";

contract Fourth {
    IFirst public first;
    ISecond public second;

    function getFirstAddress() public view returns (address) {
        return address(first);
    }

    function getSecondAddress() public view returns (address) {
        return address(second);
    }
}