import vaultContractABI from "../abis/vaultContractABI.json";
import web3StakeContractABI from "../abis/stakeWeb3ABI.json";
import stakeGenzContractABI from "../abis/stakeGenzContractABI.json";
import { ethers } from "ethers";
import ERC20BalanceOf from "../abis/ERC20balanceOf.json";
const vaultContractAddress = "0x829436b7a2a739d80f51e89947ee23959f531e57";
const web3StakeContractAddress = "0xd56e2c66009bc30bad7779cc89470a23d074b8e7";
const genzStakeContractAddress = "0x453023e3F6b6addB80E8eD219d79d4ac2f5b2940";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
// export const walletAddress = await signer.getAddress();


export const initialize = async () =>{

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const walletAddress = await signer.getAddress()
  return walletAddress

}

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

export const getBalance = async (address, setIsTokenBalance) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const walletAddress = await signer.getAddress();
  try {
    const tokenContract = new ethers.Contract(address, ERC20BalanceOf, signer);
    const balance = await tokenContract.balanceOf(walletAddress);
    const formatedBalance = balance.toNumber();
    if (address === paymentTokens[0].address) {
      // const x = 67889567212000000000000;
      const daiBalance = Math.floor((formatedBalance / 1e18) * 100) / 100;
      // const daiBalanceExample = Math.floor((x / 1e18) * 100) / 100;
      setIsTokenBalance(daiBalance);
    } else {
      // const x = 500000000;
      const usdtOrUsdcBalance = Math.floor((formatedBalance / 1e6) * 100) / 100;
      // const usdtOrUsdcBalanceTest = Math.floor((x / 1e6) * 100) / 100;
      setIsTokenBalance(usdtOrUsdcBalance);
    }
    return formatedBalance;
  } catch (error) {}
};

export const minter = new ethers.Contract(
  vaultContractAddress,
  vaultContractABI,
  signer
);

export const getOpnPrice = async () => {
  // const minter = new ethers.Contract(
  //   vaultContractAddress,
  //   vaultContractABI,
  //   signer
  // );

  const OPNPrice = await minter.calculateTodayPrice();
  const formatedOPNPrice = OPNPrice / 1e6;

  console.log(formatedOPNPrice);
  return formatedOPNPrice;
};

const getTokenInstance = (address) => {
  const tokenContract = new ethers.Contract(address, ERC20BalanceOf, signer);
  return tokenContract
};

export const showcaseTokenBalance = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const walletAddress = await signer.getAddress();
  try {
    const tokenInstanceUSDC = getTokenInstance(
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
    );
    const tokenInstanceUSDT = getTokenInstance(
      "0xdac17f958d2ee523a2206206994597c13d831ec7"
    );
    const tokenInstanceDAI = getTokenInstance(
      "0x6b175474e89094c44da98b954eedeac495271d0f"
    );
    const tokenInstanceOPN = getTokenInstance(
      "0xB83D65eC7fC71FC7c0C0280D99f433dff0a1bd51"
    );

    const usdcBalance = await tokenInstanceUSDC.balanceOf(walletAddress);
    const usdtBalance = await tokenInstanceUSDT.balanceOf(walletAddress);
    const daiBalance = await tokenInstanceDAI.balanceOf(walletAddress);
    const opnBalance = await tokenInstanceOPN.balanceOf(walletAddress);

    return { usdcBalance, usdtBalance, daiBalance, opnBalance };
  } catch (error) {}
};

export const getGenzUserDetails = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const walletAddress = await signer.getAddress();
  console.log('walletAddress',walletAddress)
  console.log('-----------------------------------------------')
  try {
    const genzContract = new ethers.Contract(
      genzStakeContractAddress,
      stakeGenzContractABI,
      signer
    );

    const genzStakingBalance = await genzContract.getUserData(
      walletAddress
    );
    console.log('genzStakingBalance', genzStakingBalance)
    return genzStakingBalance;
  } catch (error) {}
};

export const getWeb3UserDetails = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const walletAddress = await signer.getAddress();

  try {
    const web3StakeContract = new ethers.Contract(
      web3StakeContractAddress,
      web3StakeContractABI,
      signer
    );

    const web3StakingBalance = await web3StakeContract.userDetails(
      walletAddress
    );
    return web3StakingBalance;
  } catch (error) {}
};

export const getGenzEntries = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const walletAddress = await signer.getAddress();
  try {
    const genzContract = new ethers.Contract(
      genzStakeContractAddress,
      stakeGenzContractABI,
      signer
    );
    const draw = genzContract.draw();
    const listOfEntries = genzContract.getlength(draw);

    return listOfEntries;
  } catch (error) {}
};

export const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};

const paymentTokens = [
  {
    id: "1",
    symbol: "DAI",
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    name: "Dai Stablecoin (DAI)",
    logoURI:
      "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
    decimals: 18,
  },
  {
    id: "2",
    symbol: "USDT",
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    name: "Tether USD (USDT)",
    decimals: 6,
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
  },
  {
    id: "3",
    symbol: "USDC",
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    name: "USD Coin (USDC)",
    logoURI:
      "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
    decimals: 6,
  },
];

const setLocalStorage = (key, data) => {
  sessionStorage.setItem(key, data);
};

const getLocalStorage = (key) => {
  return sessionStorage.getItem(key);
};

const nullAddress = "0x0000000000000000000000000000000000000000";

export {
  vaultContractAddress,
  paymentTokens,
  web3StakeContractAddress,
  vaultContractABI,
  setLocalStorage,
  getLocalStorage,
  nullAddress,
  web3StakeContractABI,
};
