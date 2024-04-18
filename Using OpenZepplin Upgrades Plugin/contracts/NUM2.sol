// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract NUM2 {
    uint private num;
    address[] private users;

    function update(uint256 _num) public {
        num = _num;
    }

      function increment() public {
        num = num + 1;
    }

    function addUsers(address _user) public{
        users.push(_user);
    }

    function getNum() public view returns(uint256) {
        return num;
    }

     function getUser() public view returns(address[] memory){
        return users;
    }
}
