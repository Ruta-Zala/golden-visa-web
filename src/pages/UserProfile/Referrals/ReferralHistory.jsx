import React, { useState } from "react";
import TransactionIcon from "../../../../public/images/transaction_icon.svg";
import { DatePicker } from "../../../components/DatePicker";

const tabs = [
  { name: "All" },
  { name: "OPN Token and Minting" },
  { name: "Web3 Entrepreneur Program" },
  { name: "Web3 Entrepreneur Program" },
];

const ReferralHistory = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
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
      <div className="bg-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6">
        {/* Tabs */}
        <div className="flex space-x-4 border-b mt-[30px] overflow-x-auto">
          {tabs.map((tab, i) => (
            <a
              key={`subtab_${i}`}
              className={`py-2 px-4 text-center text-[18px] font-medium cursor-pointer ${
                activeTabIndex === i
                  ? "border-b-2 border-blue-500 text-gray-900"
                  : "text-gray-500"
              }`}
              onClick={(event) => {
                setActiveTabIndex(i);
              }}
            >
              {tab.name}
            </a>
          ))}
        </div>
        <div className="bg-white-0 rounded-xl md:rounded-2xl m-4 md:m-6">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-6 p-4 space-y-4 md:space-y-0">
           <DatePicker placeholder="Sort by date"/>
          </div>

          {/* Transaction Table */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg md:rounded-xl shadow-sm text-sm md:text-base">
              <thead className="bg-slate-200 rounded-[20px] text-left">
                <tr>
                  <th className="px-4 md:px-6 py-3 md:py-4">Transaction</th>
                  <th className="px-4 md:px-6 py-3 md:py-4">Amount</th>
                  <th className="px-4 md:px-6 py-3 md:py-4">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <div className="flex items-center">
                      <img
                        src={TransactionIcon}
                        alt="Transaction Icon"
                        className="w-4 h-4 mr-2"
                      />
                      Purchase
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4">675 OPN</td>
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <div className="inline-block">12 August, 2024</div>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <div className="flex items-center">
                      <img
                        src={TransactionIcon}
                        alt="Transaction Icon"
                        className="w-4 h-4 mr-2"
                      />
                      Purchase
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4">1 500 OPN</td>
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <div className="inline-block">12 August, 2024</div>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <div className="flex items-center">
                      <img
                        src={TransactionIcon}
                        alt="Transaction Icon"
                        className="w-4 h-4 mr-2"
                      />
                      Transfer
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4">2 150 OPN</td>
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <div className="inline-block">8 August, 2024</div>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <div className="flex items-center">
                      <img
                        src={TransactionIcon}
                        alt="Transaction Icon"
                        className="w-4 h-4 mr-2"
                      />
                      Purchase
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4">750 OPN</td>
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <div className="inline-block">6 August, 2024</div>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <div className="flex items-center">
                      <img
                        src={TransactionIcon}
                        alt="Transaction Icon"
                        className="w-4 h-4 mr-2"
                      />
                      Purchase
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4">1 205 OPN</td>
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <div className="inline-block">2 August, 2024</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralHistory;
