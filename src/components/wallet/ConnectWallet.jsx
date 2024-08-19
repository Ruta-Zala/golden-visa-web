import React,{useEffect} from "react";
import { WagmiProvider, useAccount } from "wagmi";
import { Account } from "./Account";
import { WalletOptions } from "./WalletOptions";

export default function ConnectWallet() {
  const { isConnected } = useAccount();
  useEffect(() => {
    console.log(isConnected);
  }, [isConnected]);
  if (isConnected) return <Account />;
  return <WalletOptions />;
}
