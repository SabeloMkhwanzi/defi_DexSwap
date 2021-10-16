const { assert } = require('chai');


/* eslint-disable no-undef */
const Token = artifacts.require("Token");
const DexSwap = artifacts.require("DexSwap");

require('chai')
    .use(require('chai-as-promised'))
    .should()

function tokens(n) {
    return web3.utils.toWei(n, 'ether');
}    

contract("DexSwap", ([deployer, investor]) => {
    
   let token, dexSwap

    before(async () => {
        token = await Token.new()
        dexSwap = await DexSwap.new(token.address)

        // Transfer all Token to DexSwap (1 million)
        await token.transfer(dexSwap.address,  tokens('1000000'))
    })

 describe('Token deployment', async () => {
        it('contract has a name', async () => {
            const name = await token.name()
            assert.equal(name, 'DexSwap Token')
        })  
 })
    

 describe('DexSwap deployment', async () => {
        it('contract has a name', async () => {
            const name = await dexSwap.name()
            assert.equal(name, 'DexSwap Instant Exchange')
        })
     
     it('contract has token', async () => {
            let balance = await token.balanceOf(dexSwap.address)
            assert.equal(balance.toString(), tokens('1000000'))
        })
 })
    // Purchase tokens before each example
    describe('buyTokens()', async () => {
        let result

        before(async () => {
            
           result =  await dexSwap.buyTokens({from: investor, value: web3.utils.toWei('1', 'ether')})
        })
        it('Allows user to instantly purchase tokens from DexSwap for a fixed price', async () => {
            // check investor token balance after purchase
            let investorBalance = await token.balanceOf(investor)
            assert.equal(investorBalance.toString(), tokens('100'))
            // Check dexSwap balance after purchase
            let dexSwapBalance
            dexSwapBalance = await token.balanceOf(dexSwap.address)
            assert.equal(dexSwapBalance.toString(), tokens('999900'))
            dexSwapBalance = await web3.eth.getBalance(dexSwap.address)
            assert.equal(dexSwapBalance.toString(), web3.utils.toWei('1', 'Ether'))

            // Check logs to ensure event was emitted with correct data
            const event = result.logs[0].args
            assert.equal(event.account, investor)
            assert.equal(event.token, token.address)
            assert.equal(event.amount.toString(), tokens('100'.toString()))
            assert.equal(event.rate.toString(), '100')

        })
        
    })
 
    // Sell tokens
    describe('sellTokens()', async () => {
        let result

        before(async () => {
            
            //Investor must approve tokens before the purchase
            await token.approve(dexSwap.address, tokens('100'), { from: investor })
            // Investor sell tokens
            result = await dexSwap.sellTokens(tokens('100'), {from:investor})
        })
        it('Allows user to instantly Sell tokens to DexSwap for a fixed price', async () => {
            let investorBalance = await token.balanceOf(investor)
            assert.equal(investorBalance.toString(), tokens('0'))

            // Check dexSwap balance after purchase
            let dexSwapBalance
            dexSwapBalance = await token.balanceOf(dexSwap.address)
            assert.equal(dexSwapBalance.toString(), tokens('1000000'))
            dexSwapBalance = await web3.eth.getBalance(dexSwap.address)
            assert.equal(dexSwapBalance.toString(), web3.utils.toWei('0', 'Ether'))
             
            // Check logs  to ensure event was emitted with correct data
            const event = result.logs[0].args
            assert.equal(event.account, investor)
            assert.equal(event.token, token.address)
            assert.equal(event.amount.toString(), tokens('100'.toString()))
            assert.equal(event.rate.toString(), '100')

            // Failure: Investor can't sell more token than they have
            await dexSwap.sellTokens(tokens('500'), { from: investor }).should.be.rejected;

        })
        
 })  
    
      
})