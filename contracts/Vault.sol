// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title Vault
 * @author Mikhail Lazarev
 * @notice This vault contract accepts tokens & eth from user to pool pair.
           It also emit events which is read on Substrate node. 
 * @dev This implementation is th POC of the system. Do not usein mainnet.
 */
contract Vault is Ownable{
    
    /// @dev Token address of pair
    address private _tokenAddress;

    /// @dev Emitted when sender deposit token on the contract, after successful 
    /// transferring
    event DepositToken(address sender, uint256 amount);

    /// @dev Emitted when sender deposited ETH to contract
    event DepositETH(address sender, uint256 amount);

    /// @dev Emitted when sender asks to withdraw token to manage Substrate node
    /// the process of withdrawing
    /// If the amount would be greater, Substrate node returns correct quantity
    event WithdrawToken(address sender, uint256 amount);
    event SwapToToken(address sender, uint256 amount);
    event SwapToETH(address sender, uint256 amount);
    event AddLiquidity(address sender, uint256 amount);
    event WithdrawLiquidity(address sender, uint256 amount);


    constructor (address tokenAddress) public {
        _tokenAddress = tokenAddress;
    }

    function depositToken(address sender, uint256 amount) external{
        IERC20 token = IERC20(_tokenAddress);
        token.transferFrom(sender, address(this), amount);
        emit DepositToken(sender, amount);
    }

    function depositEth() external payable {
        emit DepositETH(msg.sender, msg.value);
    }



}