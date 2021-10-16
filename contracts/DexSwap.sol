pragma solidity ^0.5.0;

import './Token.sol';

contract DexSwap {
   string public name = "DexSwap Instant Exchange";
   Token public token;
   uint public rate = 100;

  address payable owner;
  uint256 listingPrice = 0.035 ether;

   event TokensPurchased(
       address account,
       address token,
       uint amount,
       uint rate
   );

    event TokensSold(
       address account,
       address token,
       uint amount,
       uint rate
   );

   constructor(Token _token) public {
        token = _token;
   }

  // Buying Token function
   function buyTokens() public payable {
       // Calculate the number of token to buy
       uint tokenAmount = msg.value * rate;

        //Require that DexSwap has enough tokens
       require(token.balanceOf(address(this)) >= tokenAmount);

        // transfers tokens to the user 
       token.transfer(msg.sender, tokenAmount);

       //Emit an event
       emit TokensPurchased(msg.sender, address(token), tokenAmount, rate);
   }

   // Selling Tokens Function
   function sellTokens(uint _amount) public {
       //User can't sell more tokens than they have
       require(token.balanceOf(msg.sender) >= _amount);

       //Calculate the Amount of Ether to redeem
       uint etherAmount = _amount / rate;

       //Require that DexSwap has enough Ether
       require(address(this).balance >= etherAmount);

       //Perform sales
       token.transferFrom(msg.sender, address(this), _amount);
       msg.sender.transfer(etherAmount); 

       //Emit an event
       emit TokensSold(msg.sender, address(token), _amount, rate);
   }

  

}