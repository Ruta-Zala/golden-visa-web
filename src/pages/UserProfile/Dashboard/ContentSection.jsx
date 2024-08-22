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

function ContentSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <>
      <div className="w-full overflow-x-auto">
        {/* Tab Navigation */}
        <div className="flex space-x-4 border-b mt-[50px] mb-6">
          {tabs.map((tab, i) => (
            <a
              className={`py-2 px-4 flex-1 text-center text-[18px] font-medium cursor-pointer ${
                activeTabIndex === i
                  ? 'border-b-2 border-blue-500 text-gray-900'
                  : 'text-gray-500'
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
        className="bg-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6"
        id="Token Balances">
        <div className="mb-4 md:mb-6">
          <h1 className="text-2xl md:text-3xl font-medium text-[#08122A]">
            OPN Token real time balance updates
          </h1>
          <p className="opacity-50 text-sm md:text-lg mt-2">
            The live price of Tether OPN Token is $ 1.000715 per (OPN / USD)
            with a current market cap of $ 115.72B USD. 24-hour trading volume
            is $ 45.77B USD. USDT to OPN price is updated in real-time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-white-0 rounded-xl md:rounded-2xl p-4 md:p-6 flex-1">
            <h1 className="text-2xl md:text-3xl font-medium text-[#08122A] w-full mb-4">
              In major currencies
            </h1>
            <div>
              <table className="w-full bg-white rounded-lg md:rounded-xl shadow-sm text-sm md:text-base">
                <tbody>
                  <tr className="border-t">
                    <td className="py-3 md:py-4 font-medium">1 OPN to USD</td>
                    <td className="py-3 md:py-4 flex justify-end font-medium">
                      $ 1.000510
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 md:py-4">1 OPN to EUR</td>
                    <td className="py-3 md:py-4 flex justify-end">
                      € 1.000510
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 md:py-4">1 OPN to AED</td>
                    <td className="py-3 md:py-4 flex justify-end">1.000510</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 md:py-4">1 OPN to INR</td>
                    <td className="py-3 md:py-4 flex justify-end">
                      ₹ 1.000510
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 md:py-4">1 OPN to BRL</td>
                    <td className="py-3 md:py-4 flex justify-end">
                      R$ 1.000510
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white-0 rounded-xl md:rounded-2xl p-4 md:p-6 flex-1">
            <h1 className="text-2xl md:text-3xl font-medium text-[#08122A] mb-5">
              Conversion rates
            </h1>
            <div>
              <table className="w-full bg-white rounded-lg md:rounded-xl shadow-sm text-sm md:text-base">
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center">
                        <img
                          src={TransactionIcon}
                          alt="Transaction Icon"
                          className="w-4 h-4 mr-2"
                        />
                        1.000 OPN
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center">
                        <img
                          src={ArrowIcon}
                          alt="Arrow Icon"
                          className="w-4 h-4 mr-2"
                        />
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center font-medium justify-end">
                        <img
                          src={BtcIcon}
                          alt="BTC Icon"
                          className="w-5 h-5 mr-2"
                        />
                        1.125 BTC
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center">
                        <img
                          src={TransactionIcon}
                          alt="Transaction Icon"
                          className="w-4 h-4 mr-2"
                        />
                        1.000 OPN
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center">
                        <img
                          src={ArrowIcon}
                          alt="Arrow Icon"
                          className="w-4 h-4 mr-2"
                        />
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center font-medium justify-end">
                        <img
                          src={BnbIcon}
                          alt="BNB Icon"
                          className="w-5 h-5 mr-2"
                        />
                        1.125 BNB
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center">
                        <img
                          src={TransactionIcon}
                          alt="Transaction Icon"
                          className="w-4 h-4 mr-2"
                        />
                        1.000 OPN
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center">
                        <img
                          src={ArrowIcon}
                          alt="Arrow Icon"
                          className="w-4 h-4 mr-2"
                        />
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center font-medium justify-end">
                        <img
                          src={XrpIcon}
                          alt="XRP Icon"
                          className="w-5 h-5 mr-2"
                        />
                        1.125 XRP
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center">
                        <img
                          src={TransactionIcon}
                          alt="Transaction Icon"
                          className="w-4 h-4 mr-2"
                        />
                        1.000 OPN
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center">
                        <img
                          src={ArrowIcon}
                          alt="Arrow Icon"
                          className="w-4 h-4 mr-2"
                        />
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center font-medium justify-end">
                        <img
                          src={EthIcon}
                          alt="ETH Icon"
                          className="w-5 h-5 mr-2"
                        />
                        1.125 ETH
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center">
                        <img
                          src={TransactionIcon}
                          alt="Transaction Icon"
                          className="w-4 h-4 mr-2"
                        />
                        1.000 OPN
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center">
                        <img
                          src={ArrowIcon}
                          alt="Arrow Icon"
                          className="w-4 h-4 mr-2"
                        />
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div className="flex items-center font-medium justify-end">
                        <img
                          src={SlnIcon}
                          alt="SLN Icon"
                          className="w-5 h-5 mr-2"
                        />
                        1.125 SLN
                      </div>
                    </td>
                  </tr>
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
