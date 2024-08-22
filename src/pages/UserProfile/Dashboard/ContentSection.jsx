import React, { useState } from 'react';
import ArrowIcon from '../../../assets/img_arrow.svg';
import TransactionIcon from '../../../../public/images/transaction_icon.svg';
import BtcIcon from '../../../assets/btc_icon.png';
import BnbIcon from '../../../assets/bnb_icon.png';
import XrpIcon from '../../../assets/xrp_icon.png';
import EthIcon from '../../../assets/eth_icon.png';
import SlnIcon from '../../../assets/sln_icon.png';
import { handleScrollToSection } from '../../../utils/helper';

const tabs = [
  { name: 'Token Balances', href: 'Token Balances' },
  { name: 'GenZ Talent Program', href: 'genz-talent-program' },
  { name: 'Stacked Balance', href: 'Stacked-Balance' },
  { name: 'IOPn Socials', href: 'IOPn Socials' },
  { name: 'Social Media Posting', href: 'Social Media Posting' },
  { name: 'History', href: 'History' },
];

const currencyData = [
  { currency: "USD", value: "$ 1.000510" },
  { currency: "EUR", value: "€ 1.000510" },
  { currency: "AED", value: "د.إ1.000510" },
  { currency: "INR", value: "₹ 1.000510" },
  { currency: "BRL", value: "R$ 1.000510" }
]
const transactions = [
  { toAmount: "1.125 BTC", toIcon: BtcIcon },
  { toAmount: "1.125 BNB", toIcon: BnbIcon },
  { toAmount: "1.125 XRP", toIcon: XrpIcon },
  { toAmount: "1.125 ETH", toIcon: EthIcon },
  { toAmount: "1.125 SLN", toIcon: SlnIcon }
];


function ContentSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <>
      <div className="w-full">
        {/* Tab Navigation */}
        <div className="flex sm:mb-6 border-b w-full  overflow-x-auto">
          {tabs.map((tab, i) => (
            <a
            className={`py-2 px-4 flex-1 text-center md:text-[13px] xl:text-[18px] font-medium cursor-pointer ${
              activeTabIndex === i
                ? "border-b-2 border-blue-500 text-gray-900"
                : "text-gray-500"
            }`}
              onClick={(event) => {
                setActiveTabIndex(i);
                handleScrollToSection(event, tab.href);
              }}>
              {tab.name}
            </a>
          ))}
        </div>
      </div>
      <div
        className="bg-light_base rounded-xl md:rounded-2xl p-4 md:p-6 mt-6"
        id="Token Balances">
        <div className="mb-4 md:mb-6">
          <h1 className="text-2xl md:text-3xl font-medium text-dark-0 mt-3">
            OPN Token real time balance updates
          </h1>
          <p className="opacity-50 text-sm md:text-lg mt-2">
            The live price of Tether OPN Token is $ 1.000715 per (OPN / USD)
            with a current market cap of $ 115.72B USD. 24-hour trading volume
            is $ 45.77B USD. USDT to OPN price is updated in real-time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-white-0 rounded-xl md:rounded-2xl p-4 md:p-6 md:pb-2 flex-1 overflow-x-auto">
            <h1 className="text-2xl font-medium text-dark-0 w-full mb-4">
              In major currencies
            </h1>
            <div>
              <table className="w-full bg-white rounded-lg md:rounded-xl text-sm md:text-base">
                <tbody>
                  {currencyData.map((item, index) => (
                    <tr key={index} className={`border-t ${index === 0 ? '' : 'text-grey'}`}>
                      <td className="px-4 md:px-0 py-3 md:py-4">
                        {`1 OPN to ${item.currency}`}
                      </td>
                      <td className="py-3 md:py-4 flex justify-end">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white-0 rounded-xl md:rounded-2xl p-4 md:p-6 md:pb-2 flex-1 overflow-x-auto">
            <h1 className="text-2xl font-medium text-dark-0 mb-4">
              Conversion rates
            </h1>
            <div>
              <table className="w-full bg-white rounded-lg md:rounded-xl text-sm md:text-base">
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 md:px-0 py-3 md:py-2">
                        <div className="flex items-center text-grey text-nowrap">
                          <span className="bg-stroke mr-2 rounded-full h-6 w-6">
                            <img
                              src={TransactionIcon}
                              alt="Transaction Icon"
                              className="w-4 h-4 m-1"
                            />
                          </span>
                          1.000 OPN
                        </div>
                      </td>
                      <td className="px-4 md:px-0 py-3 md:py-4">
                        <div className="flex items-center">
                          <img
                            src={ArrowIcon}
                            alt="Arrow Icon"
                            className="w-6 h-4 mr-2"
                          />
                        </div>
                      </td>
                      <td className="px-4 md:px-0 py-3 md:py-4 text-nowrap">
                        <div className="flex items-center font-medium justify-end">
                          <img
                            src={transaction.toIcon}
                            alt="Destination Icon"
                            className="w-5 h-5 mr-2"
                          />
                          {transaction.toAmount}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContentSection;
