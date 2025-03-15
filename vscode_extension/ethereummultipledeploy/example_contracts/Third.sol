// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./First.sol";

contract Third {
    IFirst public first;

    function getFirstAddress() public view returns (address) {
        return address(first);
    }
}