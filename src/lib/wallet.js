import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

let provider;
let signer;

export async function connectWallet() {
  const wcProvider = new WalletConnectProvider({
    rpc: {
      1: "https://mainnet.infura.io/v3/your_infura_key",   // Ethereum Mainnet
      56: "https://bsc-dataseed.binance.org/",              // BSC
    },
    chainId: 1,
  });

  await wcProvider.enable(); // Opens QR code modal

  provider = new ethers.providers.Web3Provider(wcProvider);
  signer = provider.getSigner();

  const address = await signer.getAddress();
  return address;
}
