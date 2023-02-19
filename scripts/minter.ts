import { ethers } from "hardhat";

// This function deploys the NFT Project on the blockchain
// It should be run once 
async function main() {

    const [owner] = await ethers.getSigners();
    const cid = "QmdcJEH3TpbNmtnywstUo55toAwFjVS9AgSGy5YmM6xQYg";
    let uri = "ipfs://" + cid;
    const NFT_ADDRESS = "0x3Df847c8dd4887bc097c630CffFB10F4A7b10f24";


    const GNiftyy = await ethers.getContractAt("GNifty", "0x3Df847c8dd4887bc097c630CffFB10F4A7b10f24");
    console.log(await GNiftyy.safeMint(owner.address, uri));

    // Opensea Link: https://testnets.opensea.io/assets/goerli/0x3df847c8dd4887bc097c630cfffb10f4a7b10f24/6
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});