import React, { forwardRef, useState } from "react";
import TransactionIcon from "../../../../public/images/transaction_icon.svg";
import { DatePicker } from "../../../components/DatePicker";
import downArrow from "../../../assets/profile/referrals/downArrow.svg";
import Select from "../../../components/Select";
import { SingleValue } from "react-select/animated";

const tabs = [
  "Minting",
  "Web3 Talent Program",
  "Web3 Entrepreneur Program",
  "Referral rewards",
];

const transactions = [
  {
    type: "Purchase",
    amount: "675 OPN",
    date: "12 August, 2024",
    status: "Processing",
    hash: "0x1234567890ABCDEF123...",
  },
  {
    type: "Purchase",
    amount: "1 500 OPN",
    date: "12 August, 2024",
    status: "Completed",
    hash: "0x1234567890ABCDEF123...",
  },
  {
    type: "Transfer",
    amount: "2 150 OPN",
    date: "8 August, 2024",
    status: "Completed",
    hash: "0x1234567890ABCDEF123...",
  },
  {
    type: "Purchase",
    amount: "750 OPN",
    date: "6 August, 2024",
    status: "Completed",
    hash: "0x1234567890ABCDEF123...",
  },
  {
    type: "Purchase",
    amount: "1 205 OPN",
    date: "2 August, 2024",
    status: "Completed",
    hash: "0x1234567890ABCDEF123...",
  },
];

const statusOptions = [
  { value: "processing", label: "Processing" },
  { value: "completed", label: "Completed" },
];

const transectionOptions = [
  { value: "purchase", label: "Purchase" },
  { value: "transfer", label: "Transfer" },
];

const tableHeader = ["Transaction", "Amount", "Date", "Status", "Code"];
const TransactionSection = () => {
  const [startDate, setStartDate] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);


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
        <div className="flex flex-nowrap space-x-4 md:space-x-6 border-b border-gray-300 mb-6 px-4 sm:p-4 md:px-6 md:py-0 overflow-x-auto">
          {tabs.map((item, index) => (
            <>
              <button
                key={`transection-tab-${index}`}
                onClick={() => {
                  setActiveTabIndex(index);
                }}
                className={`py-2 flex-1 md:flex-none text-nowrap text-sm md:text-base ${index === activeTabIndex ? "text-blue-600 border-b-2 border-blue-600" : " text-gray-600 hover:text-blue-600"}`}
              >
                {item}
              </button>
            </>
          ))}
        </div>
        <div className="bg-white-0 rounded-xl md:rounded-2xl m-4 md:m-4 md:mb-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between p-4 space-y-4 md:space-y-0 gap-1">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-1/2">
              <Select
                options={transectionOptions}
                styles={{
                  control: {
                    borderRadius: "50px",
                    padding: "12px 20px",
                    border: "1px solid transparent",
                    backgroundColor: "rgb(241 245 249)",
                    "&:hover": {
                      border: "1px solid transparent",
                    },
                  },
                  placeholder: {
                    color: "#000",
                  },
                }}
                placeholder={
                  <div>
                    <p className="text-[12px] text-slate-400 text-left">
                      Transaction type
                    </p>
                    All
                  </div>
                }
                isClearable
              />
              <Select
                options={statusOptions}
                styles={{
                  control: {
                    borderRadius: "50px",
                    padding: "12px 20px",
                    border: "1px solid transparent",
                    backgroundColor: "rgb(241 245 249)",
                    "&:hover": {
                      border: "1px solid transparent",
                    },
                  },
                  placeholder: {
                    color: "#000",
                  },
                }}
                placeholder={
                  <div>
                    <p className="text-[12px] text-slate-400 text-left">
                      Status
                    </p>
                    All
                  </div>
                }
                isClearable
              />
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

          {/* Transaction Table */}
          <div className="overflow-x-auto p-3">
            <table className="w-full bg-white rounded-lg md:rounded-xl text-sm md:text-base">
              <thead className="bg-light_base text-left rounded-xl text-slate-400">
                <tr>
                  {tableHeader.map((item, index) => (
                    <th
                      key={index}
                      className={`font-normal px-4 py-3 md:py-4 ${index === 0 && "rounded-l-lg"} ${index === tableHeader.length - 1 && "rounded-r-lg"}`}
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className={index !== 0 && "border-t"}>
                    <td className="px-4 py-3 md:py-4">
                      <div className="flex items-center">
                        <span className="bg-stroke mr-2 rounded-full w-6 h-6">
                          <img
                            src={TransactionIcon}
                            alt="Transaction Icon"
                            className="w-4 h-4 m-1"
                          />
                        </span>
                        {transaction.type}
                      </div>
                    </td>
                    <td className="px-4 py-3 md:py-4 text-nowrap">
                      {transaction.amount}
                    </td>
                    <td className="px-4 py-3 md:py-4">
                      <div className="inline-block text-nowrap">
                        {transaction.date}
                      </div>
                    </td>
                    <td className="px-4 py-3 md:py-4">
                      <div
                        className={`px-2 py-1 md:px-4 md:py-2 rounded-sm inline-block ${statusStyles[transaction.status]}`}
                      >
                        {transaction.status}
                      </div>
                    </td>
                    <td className="px-4 py-3 md:py-4 text-ellipsis overflow-hidden whitespace-nowrap max-w-[100px]">
                      {transaction.hash}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionSection;
