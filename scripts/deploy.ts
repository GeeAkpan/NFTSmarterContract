import { ethers } from "hardhat"

async function main() {
  
  const GNifty = await ethers.getContractFactory("GNifty");
  const deployGNifty = await GNifty.deploy();
  await deployGNifty.deployed();
  console.log(`The NFT has been deployed to ${deployGNifty.address}`);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});