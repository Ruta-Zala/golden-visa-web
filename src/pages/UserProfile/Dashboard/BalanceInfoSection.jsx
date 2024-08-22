import React from 'react';
import { Text } from '../../../components/TextGenz';
import Icon1 from '../../../assets/profile/referrals/referral2.svg';
import Icon2 from '../../../assets/profile/referrals/referral3.svg';

function BalanceInfoSection() {
  return (
    <div className="flex flex-col gap-4" id="Stacked-Balance">
      <div className="mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl font-medium text-dark-0">
          Staked Balance Information
        </h1>
        <p className="opacity-50 text-sm md:text-lg my-4 w-full md:w-3/4 text-justify">
          The live price of Tether OPN Token is $ 1.000715 per (OPN / USD) with a current market cap of $ 115.72B USD. 24-hour trading volume is $ 45.77B USD. USDT to OPN price is updated in real-time.
        </p>
      </div>
      <div className="flex gap-4 max-[1050px]:flex-col mb-10 sm:mb-20">
        <div className="relative flex w-full flex-col gap-[40px] rounded-[20px] bg-light_base max-[550px]:gap-[30px] min-[765px]:p-10 p-5 sm:py-10 sm:px-8">
          <img
            src={Icon1}
            alt="Icon1"
            className="absolute md:top-[-80px] top-[-40px] md:right-[-40px] sm:right-[-20px] right-[3px] md:w-[250px] sm:w-[150px] md:h-[250px] sm:h-[150px] h-[120px] w-[80px]"
          />
          <div className="flex flex-col items-start gap-3.5 relative z-50">
            <Text
              size="visa_desktop_headers_h3"
              as="p"
              className="text-2xl md:text-3xl lg:text-4xl">
              GenZ Talent <br />
              Program
            </Text>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="w-full text-[16px] lg:text-[20px] leading-[140%] !text-dark-1 max-[550px]:text-[14px]">
              Get additional entry by paying 1000 <br /> OPN from the staked
              balance
            </Text>
          </div>
          <hr className="my-[-20px]" />
          <div className="flex justify-between w-full min-[1040]:px-10">
            <div className='w-1/2'>
              <h3 className="w-full text-[16px] lg:text-[20px] leading-[140%] max-[550px]:text-[14px]">
                My stakes
              </h3>
              <h1 className="text-xl md:text-2xl lg:text-3xl text-[#2573C0]">
                2 750 OPN
              </h1>
            </div>
            <div className='w-1/2'>
              <h3 className="w-full text-[16px] lg:text-[20px] leading-[140%] max-[550px]:text-[14px]">
                Unstake date
              </h3>
              <h1 className="text-xl md:text-2xl lg:text-3xl">25 August</h1>
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-col gap-[40px] rounded-[20px] bg-light_base max-[550px]:gap-[30px] min-[765px]:p-10 py-10 px-8">
          <img
            src={Icon2}
            alt="Icon1"
            className="absolute lg:top-[-50px] top-[-20px] -sm:right-[6px] -md:right-[6px] -lg:right-[10px] xl:right-[15px] right-[3px] lg:w-[180px] lg:h-[180px] md:h-[150px] sm:h-[120px] h-[90px] md:w-[150px] sm:w-[120px] w-[80px]"
          />
          <div className="flex flex-col items-start gap-3.5 relative z-50">
            <Text
              size="visa_desktop_headers_h3"
              as="p"
              className="text-2xl md:text-3xl lg:text-4xl">
              Web3 Entrepreneur <br /> Program
            </Text>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="w-full text-[16px] lg:text-[20px] leading-[140%] !text-dark-1 max-[550px]:text-[14px]">
              Get additional entry by paying 1000 <br /> OPN from the staked
              balance
            </Text>
          </div>
          <hr className="my-[-20px]" />
          <div className="flex w-full min-[1040]:px-10">
            <div className='w-1/2'>
              <h3 className="w-full text-[16px] lg:text-[20px] leading-[140%] max-[550px]:text-[14px]">
                My stakes
              </h3>
              <h1 className="text-xl md:text-2xl lg:text-3xl text-[#2573C0]">
                2 750 OPN
              </h1>
            </div>
            <div className='w-1/2'>
              <h3 className="w-full text-[16px] lg:text-[20px] leading-[140%] max-[550px]:text-[14px]">
                Unstake date
              </h3>
              <h1 className="text-xl md:text-2xl lg:text-3xl">25 August</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceInfoSection;
