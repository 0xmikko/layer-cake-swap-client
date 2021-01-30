import {Asset, AssetType} from "../../core/asset";
import {BigNumber} from "ethers";
import {useToken} from "../token/hook";
import {useWeb3} from "../web3/hook";
import {useSubstrate} from "../substrate/hook";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import actions from "../actions";
import {ICONS} from "../../config";

export function useAssets(asset: AssetType): Asset {
  const token = useToken();
  const web3 = useWeb3();
  const substrate = useSubstrate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token.infoLoaded) {
      dispatch(actions.token.getTokenInfo());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.infoLoaded]);

  switch (asset) {
    case "eth":
      return {
        name: "Ethereum",
        symbol: "Eth",
        address: "",
        decimals: 18,
        mainBalance: BigNumber.from(web3.balance || 0),
        l2Balance: BigNumber.from(substrate.ethBalance || 0),
        allowance: BigNumber.from(0),
        icon: ICONS[asset]
      };
    case "token":
      return {
        name: token.name,
        symbol: token.symbol,
        address: token.address || "",
        decimals: token.decimals,
        mainBalance: BigNumber.from(token.balance || 0),
        l2Balance: BigNumber.from(substrate.tokenBalance || 0),
        allowance: BigNumber.from(token.allowance || 0),
        icon: ICONS[asset]
      };
  }
}
