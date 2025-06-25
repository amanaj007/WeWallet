export default function LivePrices({ prices }) {
  if (!prices?.ethereum || !prices?.bitcoin || !prices?.binancecoin) {
    return <div>Unable to fetch prices.</div>;
  }

  return (
    <section style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Live Prices</h2>
      <p>ETH: ${prices.ethereum.usd.toLocaleString()}</p>
      <p>BTC: ${prices.bitcoin.usd.toLocaleString()}</p>
      <p>BNB: ${prices.binancecoin.usd.toLocaleString()}</p>
    </section>
  );
}
