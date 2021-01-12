import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { Web3Actions } from "./index";
import { CONTRACT_ADDRESS, CHAIN_ID } from "../../config";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

export const connectWeb3 = (): ThunkAction<
  void,
  RootState,
  unknown,
  Web3Actions
> => async (dispatch) => {
  if (window.ethereum) {
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const networkId = await provider.detectNetwork();

    if (networkId.chainId !== CHAIN_ID) {
      dispatch({
        type: "WEB3_FAILED",
        payload: { error: "WRONG_NETWORK_ERROR" },
      });
      return;
    }

    const addressRepository = (await ethers.ContractFactory.getContract(
      CONTRACT_ADDRESS,
      addressRepositoryJson.abi,
      signer
    )) as unknown as AddressRepository;

    const gameAddress = await addressRepository.getGameService();
    const game = (await ethers.ContractFactory.getContract(
      gameAddress,
      gameJson.abi,
      signer
    )) as unknown as SpaceTradersGame;

    const planetRepositoryAddress = await addressRepository.getPlanetRepository();

    const planetRepository = (await ethers.ContractFactory.getContract(
      planetRepositoryAddress,
      planetRepositoryJson.abi,
      signer
    )) as unknown as PlanetRepository;

    const starshipRepositoryAddress = await addressRepository.getStarshipRepository();
    const starshipRepository = (await ethers.ContractFactory.getContract(
      starshipRepositoryAddress,
      starshipRepositoryJson.abi,
      signer
    )) as unknown as StarshipRepository;

    const goldTokenAddress = await addressRepository.getGoldToken();
    const goldToken = (await ethers.ContractFactory.getContract(
      goldTokenAddress,
      resourceTokenJson.abi,
      signer
    )) as unknown as ResourceToken;

    const ironTokenAddress = await addressRepository.getIronToken();
    const ironToken = (await ethers.ContractFactory.getContract(
      ironTokenAddress,
      resourceTokenJson.abi,
      signer
    )) as unknown as ResourceToken;

    const oilTokenAddress = await addressRepository.getOilToken();
    const oilToken = (await ethers.ContractFactory.getContract(
      oilTokenAddress,
      resourceTokenJson.abi,
      signer
    )) as unknown as ResourceToken;

    await dispatch({
      type: "WEB3_CONNECTED",
      payload: {
        account: await signer.getAddress(),
        signer,
        networkId: networkId.chainId,
        game,
        planetRepository,
        starshipRepository,

        goldToken,
        ironToken,
        oilToken,

        goldTokenAddress,
        ironTokenAddress,
        oilTokenAddress,
      },
    });
    dispatch(getPlanetsList());
  } else {
    dispatch({ type: "WEB3_FAILED", payload: { error: "CONNECTION_ERROR" } });
  }
};
