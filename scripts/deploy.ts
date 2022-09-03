import { ethers } from "hardhat";

async function main() {

  const Veronica = await ethers.getContractFactory("Veronica");
  const veronica = await Veronica.deploy();

  await veronica.deployed();

  console.log(`My nft was deployed to ${veronica.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// goerli deployed to: 0x951fAa8B5E040DdC3f0489D00CF1E66be2355b25
// rinkeby deployed : 0xFea77f177Bd28D45d434b2B35A548AC6D650EdC2