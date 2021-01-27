import * as fs from "fs";
// @ts-ignore
import { ethers } from "hardhat";
import { Deployer } from "./deployer";

export async function deploy() {
  const accounts = await ethers.getSigners();
  const deployer = new Deployer(true);
  const vault = await deployer.getVault();
  const tokenMock = await deployer.getTokenMock();

  const envFile = `REACT_APP_BACKEND_ADDR=http://localhost:8000
REACT_APP_VAULT_ADDRESS=${vault.address}
REACT_APP_TOKEN_ADDRESS=${tokenMock.address}
REACT_APP_CHAIN_ID=1337`;

  console.log("Deployer:", accounts[0].address);
  await tokenMock
    .connect(accounts[0])
    .transfer(
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      "1000000000000000000"
    );

  fs.writeFileSync("./client/.env.local", envFile);

  // await vault.depositToken(100);
  await vault.depositEth({ value: "10000000000" });
}

deploy()
  .then(() => {
    console.log("Ok");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
