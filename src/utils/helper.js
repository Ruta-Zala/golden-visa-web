import vaultContractABI from "../abis/vaultContractABI.json";
import web3StakeContractABI from "../abis/stakeWeb3ABI.json"

export const handleScrollToSection = (event, sectionId) => {
  event.preventDefault(); // Prevent default anchor behavior
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};


const vaultContractAddress = "0xe457c9a88F47B166a196eC9EC4271227a1E2F1b1";
const web3StakeContractAddress = "0x6808aad97C9EE212b47668Dc54859AD83eE78c4a";
const paymentTokens = [
  {
    id: "1",
    symbol: "DAI",
    address: "0x93ea1Facd57F3cEC00a5e1Cf847c39458e91A974",
    name: "Dai Stablecoin (DAI)",
    logoURI: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
    decimals: 18,
  },
  {
    id: "2",
    symbol: "USDT",
    address: "0x9B7EA29E3FBa40e3962014Ffaf006150a21D8dfb",
    name: "Tether USD (USDT)",
    decimals: 6,
    logoURI: "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
  },
  {
    id: "3",
    symbol: "USDC",
    address: "0x7fd4fC182b9d6beC693394527E39AAb6AB46EfE2",
    name: "USD Coin (USDC)",
    logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
    decimals: 6,
  },
];


const setLocalStorage = (key, data) => {
  sessionStorage.setItem(key, data);
};

const getLocalStorage = (key) => {
  return sessionStorage.getItem(key);
};

const nullAddress = '0x0000000000000000000000000000000000000000';

export {
  vaultContractAddress,
  paymentTokens,
  web3StakeContractAddress,
  vaultContractABI,
  setLocalStorage,
  getLocalStorage,
  nullAddress,
  web3StakeContractABI
}