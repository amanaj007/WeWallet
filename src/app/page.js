import WalletHeader from './WalletHeader';
import LivePrices from './LivePrices';
import styles from '../styles/Landing.module.css';

export const metadata = {
  title: 'Crypto Wallet | Trust Wallet Integration',
};

export default async function LandingPage() {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd',
    { next: { revalidate: 10 } }
  );

  const prices = await res.json();

  return (
    <main className={styles.container}>
      <WalletHeader /> {/* client component */}
      <section className={styles.hero}>
        <h1>Secure Your Crypto with Trust Wallet</h1>
        <p>No signup, no fiat. Just you and your wallet.</p>
      </section>
      <LivePrices prices={prices} /> {/* pure component */}
    </main>
  );
}
