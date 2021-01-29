// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

/**
 * @title Vault
 * @author Mikhail Lazarev
 * @notice This vault contract accepts tokens & eth from user to pool pair.
           It also emit events which is read on Substrate node.
 * @dev This implementation is th POC of the system. Do not usein mainnet.
 */
contract Vault is Ownable {
    /// @dev Token address of pair
    address private _tokenAddress;

    /// @dev Emitted when sender deposit token on the contract, after successful
    /// transferring
    event DepositToken(address indexed sender, uint256 amount);

    /// @dev Emitted when sender deposited ETH to contract
    event DepositETH(address indexed sender, uint256 amount);

    /// @dev Emitted when sender asks to withdraw token to manage Substrate node
    /// the process of withdrawing
    /// If the amount would be greater, Substrate node returns correct quantity
    event WithdrawETH(address indexed sender, uint256 amount);

    /// @dev Emitted when sender asks to withdraw token to manage Substrate node
    /// the process of withdrawing
    /// If the amount would be greater, Substrate node returns correct quantity
    event WithdrawToken(address indexed sender, uint256 amount);

    // Swap operations
    event SwapToToken(address indexed sender, uint256 amount);
    event SwapToETH(address indexed  sender, uint256 amount);

    // Liquidity pool
    event AddLiquidity(address indexed sender, uint256 amount);
    event RemoveLiquidity(address indexed sender, uint256 amount);

    constructor(address tokenAddress) public {
        _tokenAddress = tokenAddress;
    }

    function depositToken(uint256 amount) external {
        ERC20(_tokenAddress).transferFrom(msg.sender, address(this), amount);
        emit DepositToken(msg.sender, amount);
    }

    function depositEth() external payable {
        emit DepositETH(msg.sender, msg.value);
    }

    function withdrawEth(uint256 amount) external {
        emit WithdrawETH(msg.sender, amount);
    }


    function withdrawToken(uint256 amount) external  {
        emit WithdrawToken(msg.sender, amount);
    }

    function swapToToken(uint256 amount) external {
        emit SwapToToken(msg.sender, amount);
    }

    function swapToEth(uint256 amount) external {
        emit SwapToETH(msg.sender, amount);
    }

    function addLiquidity(uint256 amount) external {
        emit AddLiquidity(msg.sender, amount);
    }

    function removeLiquidity(uint256 amount) external {
        emit RemoveLiquidity(msg.sender, amount);
    }
}
