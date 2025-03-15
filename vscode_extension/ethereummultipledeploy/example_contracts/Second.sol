// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./First.sol";


interface ISecond {
    function add(uint256 a, uint256 b) external pure returns (uint256);
}

contract Second {
    IFirst public first;

    function getFirstAddress() public view returns (address) {
        return address(first);
    }
}