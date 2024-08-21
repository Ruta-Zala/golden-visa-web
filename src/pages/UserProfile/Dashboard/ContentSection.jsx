import ArrowIcon from '../../../assets/img_arrow.svg';
import TransactionIcon from '../../../../public/images/transaction_icon.svg';
import BtcIcon from '../../../assets/btc_icon.png';
import BnbIcon from '../../../assets/bnb_icon.png';
import XrpIcon from '../../../assets/xrp_icon.png';
import EthIcon from '../../../assets/eth_icon.png';
import SlnIcon from '../../../assets/sln_icon.png';
import React, { Suspense } from 'react';
import Dashboard1 from '../../../assets/profile/dashboard1.svg';
import Dashboard2 from '../../../assets/profile/dashboard2.svg';
import { Text } from '../../../components/Text';
const cardList = [
  {
    rewardPercentage: 'Number of entries',
    rewardDescription: '10',
    img: Dashboard1,
  },
  {
    rewardPercentage: 'Nex draw',
    rewardDescription: '14 August, 2024',
    img: Dashboard2,
  },
];
function ContentSection() {
  return (
    <>
      <div>
        <div className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-6 border-b border-gray-300 mb-6">
          <button className="py-2 text-blue-600 border-b-2 border-blue-600 flex-1 md:flex-none text-sm md:text-base">
            Token Balances
          </button>
          <button className="py-2 text-gray-600 hover:text-blue-600 flex-1 md:flex-none text-sm md:text-base">
            GenZ Talent Program
          </button>
          <button className="py-2 text-gray-600 hover:text-blue-600 flex-1 md:flex-none text-sm md:text-base">
            Stacked Balance
          </button>
          <button className="py-2 text-gray-600 hover:text-blue-600 flex-1 md:flex-none text-sm md:text-base">
            IOPn Socials
          </button>
          <button className="py-2 text-gray-600 hover:text-blue-600 flex-1 md:flex-none text-sm md:text-base">
            Social Media Posting
          </button>
          <button className="py-2 text-gray-600 hover:text-blue-600 flex-1 md:flex-none text-sm md:text-base">
            History
          </button>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6">
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
      <div className="relative w-full bg-gray-100 rounded-[20px] bg-cover bg-no-repeat">
        <div className="relative w-full p-[24px] z-10 xl:p-[24px] lg:p-[20px] md:p-[18px] sm:p-[16px] my-12">
          <h1 className="text-2xl md:text-3xl font-medium text-[#08122A] mb-4 ">
            GenZ Talent Program
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
            {cardList.map((d, index) => (
              <div
                index={`reward_info_${index}`}
                className={`flex max-[550px]:flex-row justify-center items-center gap-7 p-3 bg-white-0 flex-1 rounded-[16px] max-[550px]:items-center`}>
                <div>
                  <img
                    class="h-[36px] w-[36px]"
                    src={d.img}
                    alt="Arrow Left"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Text
                    size="visa_desktop_headers_h3"
                    as="p"
                    className="w-[50%] leading-[140%] !text-slate-400 sm:text-[14px] text-[12px] uppercase">
                    {d.rewardPercentage}
                  </Text>
                  <Text
                    size="visa_desktop_body_text_18"
                    as="p"
                    className="w-[50%] font-normal xl:text-[26px] lg:text-[20px] sm:text-[28px] text-[26px]">
                    {d.rewardDescription}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ContentSection;
