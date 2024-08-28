import React, { forwardRef, useEffect, useState } from "react";
import TransactionIcon from "../../../../public/images/transaction_icon.svg";
import { DatePicker } from "../../../components/DatePicker";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import downArrow from "../../../assets/profile/referrals/downArrow.svg";
import { minter } from "../../../utils/helper";
import { ethers } from "ethers";
import { useRef } from "react";
import { initialize } from "../../../utils/helper";
const provider = new ethers.providers.Web3Provider(window.ethereum);

const TransactionSection = () => {
  // const [mintEvent, setMintEvent] = useState();
  // const [genzStakeEvent, setGenzStakeEvent] = useState();
  // const [web3StakeEvent, setWeb3StakeEvent] = useState();
  // const [referralRewardEvent, setreferralRewardEvent] = useState();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Minting",
    "GenZ Talent Program",
    "Web3 Entrepreneur Program",
    "Referral rewards",
  ];
  // const transactions = [
  //   {
  //     type: "Purchase",
  //     amount: "675 OPN",
  //     date: "12 August, 2024",
  //     status: "Processing",
  //     hash: "0x1234567890ABCDEF123...",
  //   },
  //   {
  //     type: "Purchase",
  //     amount: "1500 OPN",
  //     date: "12 August, 2024",
  //     status: "Completed",
  //     hash: "0x1234567890ABCDEF123...",
  //   },
  //   {
  //     type: "Transfer",
  //     amount: "2 150 OPN",
  //     date: "8 August, 2024",
  //     status: "Completed",
  //     hash: "0x1234567890ABCDEF123...",
  //   },
  //   {
  //     type: "Purchase",
  //     amount: "750 OPN",
  //     date: "6 August, 2024",
  //     status: "Completed",
  //     hash: "0x1234567890ABCDEF123...",
  //   },
  //   {
  //     type: "Purchase",
  //     amount: "1 205 OPN",
  //     date: "2 August, 2024",
  //     status: "Completed",
  //     hash: "0x1234567890ABCDEF123...",
  //   },
  // ];
  const tableHeader = ["Transaction", "Amount", "Date", "Status", "Tx Hash"];

  const checkIfEventExits = (event) => {
    if (!event || !Array.isArray(event) || event.length === 0) {
      console.log("no-data-found");
      setError(true);
      return;
    }
  };
  const { isConnected } = useAccount();
  useEffect(() => {
    console.log(isConnected);

  }, [isConnected]);


  const processEvents = async (type, event) => {
    let amount = null;
    let filteredEvents;
    let eventsArray = [];
    let walletAddress;
    if(isConnected){
      walletAddress = await initialize()
    }

    for (let i = 0; i < event.length; i++) {
      filteredEvents = event.filter(
        (event) =>
          event.args[0] === walletAddress /// dynamic address to be made... static was : "0x5b3767673c2d6740a1105Ae7Ebe1ECA5D6a41cB1"
      );
    }
     
    if(filteredEvents.length === 0){
      setError(true);
      return;
    }
    else{
      for (let i = 0; i < filteredEvents.length; i++) {
        const obj = {};
        const event = filteredEvents[i];
        const txHash = event.transactionHash;
        const txReceipt = await event.getTransactionReceipt();
        const status = txReceipt.status;
        const blockDetails = await provider.getBlock(txReceipt.blockNumber);
        const timestamp = new Date(blockDetails.timestamp * 1000);
        const day = timestamp.getDate();
        const month = timestamp.getMonth() + 1; // Months are zero-indexed, so we add 1
        const year = timestamp.getFullYear();
  
        switch (type) {
          case "purchase":
            // setAmount(Number(event.args[3]) / 1e18);
            amount = Number(event.args[3]) / 1e18;
            console.log("amount", Number(event.args[3]) / 1e18);
            break;
  
          case "genzStake":
          case "web3Stake":
            // setAmount(Number(event.args[1]) / 1e18);
            amount = Number(event.args[1]) / 1e18;
            console.log("New Amout ", amount);
            break;
  
          case "referralReward":
            // setAmount(Number(event.args[2]) / 1e18);
            amount = Number(event.args[2]) / 1e6;
            break;
  
          default:
            // setAmount(0); // or handle accordingly
            amount = 0;
            break;
        }
  
        obj.type = type;
        obj.amount = amount;
        obj.date = `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
        obj.status = status == 1 ? "Completed" : "Failed";
        obj.hash = txHash;
        console.log("amount", amount);
        eventsArray.push(obj);
      }
    }
    setAmount(amount);
    return eventsArray;
  };
  // console.log(transactions, "transactions");

  const mintingEvents = async (currentTab) => {
    try {
      setLoading(true);
      setError(false);

      const mintEvents = await minter.queryFilter(minter.filters.BUY());
      checkIfEventExits(mintEvents);

      console.log("mintEvents", mintEvents);
      const transactions = await processEvents("purchase", mintEvents);
      console.log("Data that i want------>", transactions);

      if (currentTab === activeTabRef.current) {
        console.log("transactions", transactions);
        setTransactions(transactions);
      }

      // setTransactions(transactions);
    } catch (error) {
      console.log("error", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const genzStakeEvents = async (currentTab) => {
    try {
      setLoading(true);
      setError(false);
      const genzStakeEvents = await minter.queryFilter(
        minter.filters.STAKEGENZ()
      );
      checkIfEventExits(genzStakeEvents);

      console.log("genzStakeEvents", genzStakeEvents);
      const transactions = await processEvents("genzStake", genzStakeEvents);
      console.log("transactions----genz", transactions);
      if (currentTab === activeTabRef.current) {
        console.log("transactions", transactions);
        setTransactions(transactions);
      }
      // setTransactions(transactions);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const web3StakeEvents = async (currentTab) => {
    try {
      const stakeWeb3Events = await minter.queryFilter(
        minter.filters.STAKEWEB3()
      );
      checkIfEventExits(stakeWeb3Events);
      console.log("stakeWeb3Events", stakeWeb3Events);
      const transactions = await processEvents("web3Stake", stakeWeb3Events);
      console.log("transactions", transactions);
      if (currentTab === activeTabRef.current) {
        console.log("transactions", transactions);
        setTransactions(transactions);
      }
      // setTransactions(transactions);
    } catch (error) {
      console.log("error", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const referralEvents = async (currentTab) => {
    try {
      setLoading(true);
      const referralRewardEvents = await minter.queryFilter(
        minter.filters.REWARD()
      );
      console.log("referralRewardEvents", referralRewardEvents);
      checkIfEventExits(referralRewardEvents);

      const transactions = await processEvents(
        "referralReward",
        referralRewardEvents
      );
      console.log("transactions", transactions);
      if (currentTab === activeTabRef.current) {
        console.log("transactions", transactions);
        setTransactions(transactions);
      }
      // setTransactions(transactions);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // new functions ----------------

  // Define your functions here
  const tabFunctions = [
    mintingEvents, // Reference to the function, not a call
    genzStakeEvents, // Reference to the function
    web3StakeEvents, // Reference to the function
    referralEvents, // Reference to the function
  ];

  const activeTabRef = useRef(0);

  // Call the first tab function when the component mounts
  useEffect(() => {
    activeTabRef.current = 0;
    tabFunctions[0](0);
  }, []);

  // Handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
    setTransactions([]);
    activeTabRef.current = index;
    // tabFunctions[index](); // Call the respective function
    tabFunctions[index](index);
  };  

  const CustomInput = forwardRef(({ value, onClick, placeholder }, ref) => (
    <button
      className="w-full flex justify-between items-center"
      onClick={onClick}
      ref={ref}
    >
      <div>
        <p className="text-[12px] text-slate-400 text-left">Sort by</p>
        {value || placeholder}
      </div>
      <img src={downArrow} alt="Arrow Down" loading="lazy" />
    </button>
  ));

  const statusStyles = {
    Processing: "bg-[#FFB3001F] text-[#EDA600]",
    Completed: "bg-green-100 text-green-500",
    Processing: "bg-[#FFB3001F] text-[#EDA600]",
    Completed: "bg-green-100 text-green-500",
  };

  return (
    <div className="pt-16 md:pb-4" id="History">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl font-medium text-[#08122A]">
          Transaction history
        </h1>
        <p className="opacity-50 text-sm md:text-lg mt-2">
          The live price of Tether OPN Token is $ 1.000715 per (OPN / USD) with
          a current market cap of $ 115.72B USD. 24-hour{" "}
          <br className="hidden md:block" /> trading volume is $ 45.77B USD.
          USDT to OPN price is updated in real-time.
        </p>
      </div>
      <div className="bg-light_base rounded-xl md:rounded-2xl py-4">
        {/* Tabs */}

        {/* <div className="flex flex-nowrap space-x-4 md:space-x-6 border-b border-gray-300 mb-6 px-4 sm:p-4 md:px-6 md:py-0 overflow-x-auto">
          {tabs.map((item, index) => (
            <>
              <button
                key={index}
                onClick={(e)=>{console.log('clicked')}}
                className={`py-2 flex-1 md:flex-none text-nowrap text-sm md:text-base ${index === 0 ? "text-blue-600 border-b-2 border-blue-600" : " text-gray-600 hover:text-blue-600"}`}
              >
                {item}
              </button>
            </>
          ))}
        </div> */}

        <div className="flex flex-nowrap space-x-4 md:space-x-6 border-b border-gray-300 mb-6 px-4 sm:p-4 md:px-6 md:py-0 overflow-x-auto">
          {tabs.map((item, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`py-2 flex-1 md:flex-none text-nowrap text-sm md:text-base ${
                index === activeTab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="bg-white-0 rounded-xl md:rounded-2xl m-4 md:m-4 md:mb-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between mb-4 p-4 space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 sm:w-1/2">
              <div className="bg-light_base rounded-full px-5 py-3 w-full flex justify-between items-center mb-1">
                <div>
                  <p className="text-[12px] text-slate-400 text-left">
                    Transaction type
                  </p>
                  All
                </div>
                <img
                  src={downArrow}
                  alt="Arrow Down"
                  loading="lazy"
                  className="h-2"
                />
              </div>

              <div className="bg-light_base rounded-full px-5 py-3 w-full flex justify-between items-center mb-1">
                <div>
                  <p className="text-[12px] text-slate-400 text-left">Status</p>
                  All
                </div>
                <img
                  src={downArrow}
                  alt="Arrow Down"
                  loading="lazy"
                  className="h-2"
                />
              </div>
            </div>
            <DatePicker
              placeholder="Date"
              className="border border-solid border-slate-200 rounded-full px-5 py-3 w-full md:w-1/2 lg:w-1/4"
              selected={startDate}
              isClearable={!!startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<CustomInput placeholder="Date" />}
            />
          </div>
          {/* {loading ? (
            <div className="p-4 text-center">Loading...</div>
          ) : error || (transactions.length === 0 )? (
            <div className="p-4 text-center">No Data</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    {tableHeader.map((header, index) => (
                      <th
                        key={index}
                        className="text-left text-sm md:text-base font-medium text-gray-500 px-6 py-3"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="px-6 py-4 text-sm md:text-base">
                        {transaction.type}
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base">
                        {transaction.amount}
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base">
                        {transaction.date}
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base">
                        <span
                          className={`px-3 py-1 inline-flex text-sm md:text-base leading-5 font-semibold rounded-full ${statusStyles[transaction.status]}`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base">
                        {transaction.hash}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )} */}
          {loading ? (
            <div className="p-4 text-center">Loading...</div>
          ) : error ? (
            <div className="p-4 text-center">
              No Data Found.  
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    {tableHeader.map((header, index) => (
                      <th
                        key={index}
                        className="text-left text-sm md:text-base font-medium text-gray-500 px-6 py-3"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="px-6 py-4 text-sm md:text-base">
                        {transaction.type}
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base">
                        {transaction.amount}
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base">
                        {transaction.date}
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base">
                        <span
                          className={`px-3 py-1 inline-flex text-sm md:text-base leading-5 font-semibold rounded-full ${statusStyles[transaction.status]}`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm md:text-base">
                        {transaction.hash}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionSection;
