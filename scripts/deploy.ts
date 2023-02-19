import { ethers } from "hardhat"

async function main() {
  
    const [owner, acct1, acct2, acct3] = await ethers.getSigners();
    const Web3NFT = await ethers.getContractFactory("GNifty");
    const deployWeb3NFT = await Web3NFT.deploy("GNifty", "GNFT");
    await deployWeb3NFT.deployed();
    console.log(`GeeAkpan NFT has been deployed to ${deployWeb3NFT.address}`);

    // Successfully verified contract GNifty on Etherscan.
    // https://goerli.etherscan.io/address/0x3Df847c8dd4887bc097c630CffFB10F4A7b10f24#code

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});