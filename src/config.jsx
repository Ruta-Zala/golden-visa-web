import { http, createConfig } from "wagmi";
import { mainnet, base, sepolia } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";



export const config = createConfig({
  chains: [mainnet, base],
  connectors: [metaMask()],
  transports: {
    [sepolia.id]: http(),
  },
});
