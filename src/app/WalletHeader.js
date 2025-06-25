'use client';
import { useState } from 'react';
import { connectWallet } from '../lib/wallet';

export default function WalletHeader() {
  const [walletAddress, setWalletAddress] = useState(null);

  const handleConnect = async () => {
    try {
      const address = await connectWallet();
      setWalletAddress(address);
    } catch (err) {
      console.error("Wallet connection failed", err);
    }
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <div>CryptoWallet</div>
      <button onClick={handleConnect}>
        {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
      </button>
    </header>
  );
}
