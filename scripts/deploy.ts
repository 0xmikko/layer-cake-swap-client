import * as fs from "fs";
// @ts-ignore
import { ethers } from "hardhat";
import { Deployer } from "./deployer";

const deployToRopsten = true;
const erc20Address = '0xad6d458402f60fd3bd25163575031acdce07538d';

export async function deploy() {
  const accounts = await ethers.getSigners();

  const deployer = new Deployer(
    true,
    deployToRopsten ? erc20Address : undefined
  );
  const vault = await deployer.getVault();
  const tokenMock = deployToRopsten ? undefined : await deployer.getTokenMock();

  const envFile = `
REACT_APP_VAULT_ADDRESS=${vault.address}
REACT_APP_TOKEN_ADDRESS=${
    deployToRopsten
      ? erc20Address
      : tokenMock.address
  }
REACT_APP_CHAIN_ID=${deployToRopsten ? 3 : 1337}`;

  console.log("Deployer:", accounts[0].address);
  // await tokenMock
  //   .connect(accounts[0])
  //   .transfer(
  //     "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  //     "1000000000000000000"
  //   );

  fs.writeFileSync("./client/.env.local", envFile);

  // await vault.depositToken(100);
  // await vault.depositEth({ value: "10000000000" });
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
