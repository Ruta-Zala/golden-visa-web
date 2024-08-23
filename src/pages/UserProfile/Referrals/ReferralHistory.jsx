import React, { forwardRef, useState } from "react";
import Avatar from "../../../assets/profile/referrals/Avatar.png";
import downArrow from "../../../assets/profile/referrals/downArrow.svg";
import { DatePicker } from "../../../components/DatePicker";

const tabs = [
  { name: "All" },
  { name: "OPN Token and Minting" },
  { name: "Web3 Entrepreneur Program" },
  { name: "Web3 Entrepreneur Program" },
];

const rewards = {
  mint_referrals: {
    label: "Mint and Referral Rewards",
    className: "bg-[#2573C01A] text-[#2573C0]",
  },
  web3_talent: {
    label: "Web3 Talent Program",
    className: "bg-[#8C25C01A] text-[#A75FCB]",
  },
  web3_entrepreneur: {
    label: "Web3 Entrepreneur Program",
    className: "bg-[#253FC01A] text-[#4A60C9]",
  },
};

const tableData = [
  {
    name: "Wade Gill",
    profile_img: Avatar,
    reward: 2000,
    date: "12 August, 2024",
    rewardType: "mint_referrals",
  },
  {
    name: "Ian Briggs",
    profile_img: Avatar,
    reward: 750,
    date: "8 August, 2024",
    rewardType: "web3_talent",
  },
  {
    name: "Alana Meyer",
    profile_img: Avatar,
    reward: 15000,
    date: "4 August, 2024",
    rewardType: "web3_talent",
  },
  {
    name: "Natalia Morales",
    profile_img: Avatar,
    reward: 54000,
    date: "3 August, 2024",
    rewardType: "mint_referrals",
  },
  {
    name: "Khalil Brown",
    profile_img: Avatar,
    reward: 100000,
    date: "27 July, 2024",
    rewardType: "web3_entrepreneur",
  },
];

const ReferralHistory = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [startDate, setStartDate] = useState(null);

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

  return (
    <div className="w-full" id="referralHistory">
      {/* Header */}
      <h6 className="text-2xl font-semibold text-gray-800 mb-4">
        Referrals history
      </h6>
      <p className="text-gray-600 text-[18px] mb-9">
        The live price of Tether OPN Token is $ 1.000715 per (OPN / USD) with a
        current market cap of $ 115.72B USD. 24-hour trading volume is $ 45.77B
        USD. USDT to OPN price is updated in real-time.
      </p>
      <div className="bg-slate-100 rounded-xl md:rounded-2xl p-4 xl:p-6">
        {/* Tabs */}
        <div className="flex space-x-4 border-b overflow-x-auto">
          {tabs.map((tab, i) => (
            <button
            key={`referral-tab-${i}`}
            onClick={() => {
              setActiveTabIndex(i);
            }}
            className={`py-2 px-2 flex-1 md:flex-none text-nowrap text-sm md:text-base ${i === activeTabIndex ? "text-blue-600 border-b-2 border-blue-600" : " text-gray-600 hover:text-blue-600"}`}
          >
            {tab.name}
          </button>
          ))}
        </div>
        <div className="bg-white-0 rounded-xl md:rounded-2xl mt-4 md:mt-6">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between p-5 pt-6 md:space-y-0 referral-date-picker">
            <DatePicker
              placeholder="Date"
              className="border border-solid border-slate-200 rounded-full px-5 py-3 w-full md:w-1/2 lg:w-1/4"
              selected={startDate}
              isClearable={!!startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<CustomInput placeholder="Date" />}
            />
          </div>

          {/* Transaction Table */}
          <div className="p-6 md:p-4 xl:p-6 overflow-x-auto">
            <table className="w-full bg-white rounded-lg md:rounded-xl shadow-sm text-sm md:text-base">
              <thead className="bg-slate-100 text-left">
                <tr>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-slate-400 font-normal text-[18px] rounded-l-[20px] min-w-[117px]">
                    Invited
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-slate-400 font-normal text-[18px] min-w-[117px]">
                    Reward
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-slate-400 font-normal text-[18px] rounded-r-[20px] min-w-[360px]">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-hidden">
                {tableData?.map((data) => {
                  const {label, className} = rewards[data?.rewardType || "mint_referrals"]
                  return (
                  <tr className="border-b">
                    <td className="px-4 md:px-6 py-3 md:py-4 text-[16px]">
                      <div className="flex items-center">
                        <img
                          src={data?.profile_img}
                          alt={data?.name}
                          className="w-8 h-8 mr-2 rounded-full"
                        />
                        {data?.name}
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-[16px]">
                      {data?.reward} OPN
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-[16px]">
                      <div className="text-slate-400">{data?.date}</div>
                      <div className={`px-3 py-1.5 ${className}`}>
                        {label}
                      </div>
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralHistory;
