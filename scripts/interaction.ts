import { ethers } from "hardhat";

async function main() {

  const goerliAddress = "0x951fAa8B5E040DdC3f0489D00CF1E66be2355b25"
  const rinkebyContract = "0xFea77f177Bd28D45d434b2B35A548AC6D650EdC2"
  const userAdderss = "0x311350f1c7Ba0F1749572Cc8A948Dd7f9aF1f42a"

  const metadata = "https://gateway.pinata.cloud/ipfs/QmZQbznPFeGmfcxnANHL389dT1oYch9WCbzv3bUJ7V2f8F"

  const Inft = await ethers.getContractAt("Inft", rinkebyContract);
  const res = await Inft.safeMint(userAdderss, metadata);

  console.log("res----", res);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
