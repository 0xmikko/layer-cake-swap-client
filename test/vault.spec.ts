import { depositToken } from './../client/src/store/contract/actions';
import { TokenMock } from "./../types/ethers-v5/TokenMock.d";
import { Vault } from "./../types/ethers-v5/Vault.d";
import { Deployer } from "./../scripts/deployer";
import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

const chai = require("chai");

chai.use(solidity);
const { expect } = chai;

describe("Vault", () => {
  let deployer: Deployer;
  let vault: Vault;
  let tokenMock: TokenMock;
  let depolyerAccount: SignerWithAddress;
  let userAccount: SignerWithAddress;

  beforeEach(async () => {
    deployer = new Deployer();
    vault = await deployer.getVault();
    tokenMock = await deployer.getTokenMock();
    depolyerAccount = (await ethers.getSigners())[0];
    userAccount = (await ethers.getSigners())[1];
  });

  it("should transfer tokens when deposit tokens", async () => {
    await expect(tokenMock.transfer(userAccount.address, 2000))
      .to.emit(tokenMock, "Transfer")
      .withArgs(depolyerAccount.address, userAccount.address, 2000);

    expect(await tokenMock.balanceOf(userAccount.address)).to.be.equal(2000);

    await tokenMock.connect(userAccount).approve(vault.address, 1000);

    await expect(vault.connect(userAccount).depositToken(1000)).to.emit(
      tokenMock,
      "Transfer"
    );

    expect(await tokenMock.balanceOf(userAccount.address)).to.be.equal(1000);
  });

  it("should emit DepositToken event when deposit token", async () => {
    await tokenMock.approve(vault.address, 1000);
    await expect(vault.depositToken(1000))
      .to.emit(vault, "DepositToken")
      .withArgs(depolyerAccount.address, 1000);
  });
});
