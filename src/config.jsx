import { http, createConfig } from "wagmi";
import { mainnet, base, sepolia } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, base, sepolia],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(
      "https://smart-tiniest-seed.quiknode.pro/8bde6619034dce511ce47c91c1abff0eaa4a9aa0"
    ),
    [sepolia.id]: http(),
  },
});
