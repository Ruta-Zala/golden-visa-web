import * as React from 'react'
import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()
console.log('connectorsconnectors', connectors);
const filteredConnectors = connectors.filter(
  (connector) => connector.name === 'MetaMask'
);

  return filteredConnectors.map((connector) => (
    <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
    />
  ))
}

function WalletOption({
  connector,
  onClick,
}) {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])

  return ready ? (
    <button disabled={!ready} onClick={onClick}>
      {`Connect ${connector.name}`}
    </button>
  ) : null
}