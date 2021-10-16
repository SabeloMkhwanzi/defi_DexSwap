/* eslint-disable no-undef */
const Token = artifacts.require("Token");
const DexSwap = artifacts.require("DexSwap");

 module.exports = async function(deployer) {
  // DEPLOY TOKEN
  await deployer.deploy(Token);
  const token = await Token.deployed()

  // DEPLOY DEXSWAP
  await  deployer.deploy(DexSwap, token.address);
  const dexSwap = await DexSwap.deployed()

  // Transfer all Token to DexSwap (1 million)
  await token.transfer(dexSwap.address, "1000000000000000000000000")
};
