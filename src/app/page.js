'use client';

import styles from '../styles/Landing.module.css';
import { connectWallet } from '../lib/wallet';
import { useState } from 'react';

// export const metadata = {
//   title: 'Crypto Wallet | Trust Wallet Integration',
//   description: 'A crypto-only wallet powered by Trust Wallet',
// };

// ✅ Server-side component using async function
export default async function LandingPage() {

  const [walletAddress, setWalletAddress] = useState(null);

  const handleConnect = async () => {
    try {
      const address = await connectWallet();
      setWalletAddress(address);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const res = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd',
    { next: { revalidate: 6 } } // Cache for 60 seconds
  );
  const prices = await res.json();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>CryptoWallet</div>
        <button onClick={handleConnect} className={styles.connectButton}>
          {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
        </button>
      </header>

      <section className={styles.hero}>
        <h1>Secure Your Crypto with Trust Wallet</h1>
        <p>No signup, no fiat. Just you and your wallet.</p>
        <button className={styles.cta}>Get Started</button>
      </section>

      <section className={styles.features}>
        <h2>Features</h2>
        <ul>
          <li>✅ Non-custodial — you own your keys</li>
          <li>✅ No KYC, no fiat — 100% crypto</li>
          <li>✅ Send & receive instantly</li>
          <li>✅ Built for Trust Wallet & WalletConnect</li>
        </ul>
      </section>

      <section className={styles.prices}>
        <h2>Live Prices</h2>
        <div className={styles.priceList}>
          <div>ETH: ${prices.ethereum.usd}</div>
          <div>BTC: ${prices.bitcoin.usd}</div>
          <div>BNB: ${prices.binancecoin.usd}</div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} CryptoWallet</span>
        <nav>
          <a href="#">Privacy</a>
          <a href="#">GitHub</a>
        </nav>
      </footer>
    </main>
  );
}
