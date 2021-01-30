// @ts-ignore
import { waffle, ethers } from "hardhat";

import { Vault } from "../types/ethers-v5/Vault";
import { Vault__factory } from "../types/ethers-v5/factories/Vault__factory";
import { TokenMock } from "../types/ethers-v5/TokenMock";
import { TokenMock__factory } from "../types/ethers-v5/factories/TokenMock__factory";

export class Deployer {
  private _show: boolean;
  private _vault: Vault | undefined;
  private _tokenMock: TokenMock | undefined;
  private _token: string | undefined;

  constructor(show: boolean = false, token?: string) {
    this._show = show;
    this._token = token;
  }

  async getVault(): Promise<Vault> {
    if (this._vault) return this._vault;
    const vaultArtifact = (await ethers.getContractFactory(
      "Vault"
    )) as Vault__factory;
    if (this._show) console.log("Deploying vault");

    const tokenAddress = this._token || (await this.getTokenMock()).address;

    this._vault = (await vaultArtifact.deploy(tokenAddress)) as Vault;
    await this._vault.deployed();

    return this._vault;
  }

  async getTokenMock(): Promise<TokenMock> {
    if (this._tokenMock !== undefined) return this._tokenMock;

    const tokenMockArtifact = (await ethers.getContractFactory(
      "TokenMock"
    )) as TokenMock__factory;

    if (this._show) console.log("Deploying token mock contract");
    this._tokenMock = (await tokenMockArtifact.deploy()) as TokenMock;
    await this._tokenMock.deployed();

    return this._tokenMock;
  }
}
