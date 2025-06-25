import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';

export async function connectWallet() {
  const wcProvider = new WalletConnectProvider({
    rpc: {
      1: 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY',
      56: 'https://bsc-dataseed.binance.org/',
    },
  });

  await wcProvider.enable();
  const provider = new ethers.providers.Web3Provider(wcProvider);
  const signer = provider.getSigner();
  const address = await signer.getAddress();

  return address;
}
