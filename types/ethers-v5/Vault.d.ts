/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface VaultInterface extends ethers.utils.Interface {
  functions: {
    "addLiquidity(uint256)": FunctionFragment;
    "depositEth()": FunctionFragment;
    "depositToken(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeLiquidity(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "swapToEth(uint256)": FunctionFragment;
    "swapToToken(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawEth(uint256)": FunctionFragment;
    "withdrawToken(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositEth",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapToEth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapToToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapToEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapToToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "AddLiquidity(address,uint256)": EventFragment;
    "DepositETH(address,uint256)": EventFragment;
    "DepositToken(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RemoveLiquidity(address,uint256)": EventFragment;
    "SwapToETH(address,uint256)": EventFragment;
    "SwapToToken(address,uint256)": EventFragment;
    "WithdrawETH(address,uint256)": EventFragment;
    "WithdrawToken(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositETH"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapToETH"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapToToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawETH"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawToken"): EventFragment;
}

export class Vault extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: VaultInterface;

  functions: {
    addLiquidity(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addLiquidity(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    depositEth(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "depositEth()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    depositToken(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "depositToken(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    removeLiquidity(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeLiquidity(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    swapToEth(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapToEth(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapToToken(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapToToken(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawEth(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawEth(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawToken(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawToken(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addLiquidity(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  depositEth(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "depositEth()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  depositToken(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "depositToken(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  removeLiquidity(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeLiquidity(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  swapToEth(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapToEth(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapToToken(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapToToken(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawEth(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawEth(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawToken(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawToken(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addLiquidity(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositEth(overrides?: CallOverrides): Promise<void>;

    "depositEth()"(overrides?: CallOverrides): Promise<void>;

    depositToken(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositToken(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    removeLiquidity(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeLiquidity(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    swapToEth(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "swapToEth(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapToToken(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "swapToToken(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawEth(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "withdrawEth(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawToken(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawToken(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AddLiquidity(sender: string | null, amount: null): EventFilter;

    DepositETH(sender: string | null, amount: null): EventFilter;

    DepositToken(sender: string | null, amount: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    RemoveLiquidity(sender: string | null, amount: null): EventFilter;

    SwapToETH(sender: string | null, amount: null): EventFilter;

    SwapToToken(sender: string | null, amount: null): EventFilter;

    WithdrawETH(sender: string | null, amount: null): EventFilter;

    WithdrawToken(sender: string | null, amount: null): EventFilter;
  };

  estimateGas: {
    addLiquidity(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addLiquidity(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    depositEth(overrides?: PayableOverrides): Promise<BigNumber>;

    "depositEth()"(overrides?: PayableOverrides): Promise<BigNumber>;

    depositToken(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "depositToken(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeLiquidity(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeLiquidity(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    swapToEth(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "swapToEth(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapToToken(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapToToken(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawEth(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawEth(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawToken(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawToken(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addLiquidity(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    depositEth(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "depositEth()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    depositToken(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "depositToken(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeLiquidity(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    swapToEth(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapToEth(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapToToken(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapToToken(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawEth(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawEth(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawToken(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
