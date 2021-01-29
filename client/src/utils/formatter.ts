import { BigNumber, BigNumberish } from "ethers";

export function formatBN(num?: BigNumberish, decimals?: number): string {
  if (!num) return "-";

  console.log(BigNumber.from(num).toString());

  return (
    BigNumber.from(num)
      .div(BigNumber.from(10).pow((decimals || 18) - 4))
      .toNumber() / 10000
  ).toFixed(4);
}

export function toBN(num: number, decimals?: number): BigNumber {
  return BigNumber.from(num).mul(BigNumber.from(10).pow(decimals || 18));
}

export function shortAddress(address?: string): string {
  return address === undefined
    ? ""
    : `${address.substr(0, 6)}...${address.substr(38, 4)}`;
}
