import Referral2 from '../../../assets/profile/referrals/referral2.svg';
import Referral3 from '../../../assets/profile/referrals/referral3.svg';

import React from 'react';
import { Text } from '../../../components/TextGenz';

function BalanceInfoSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 max-[1050px]:flex-col">
        <div className="flex w-full flex-col gap-[60px] rounded-[20px] bg-light_base p-10 max-[550px]:gap-[30px] max-[550px]:p-4">
          <div className="flex flex-col items-start gap-3.5">
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
          <hr />
          <div className="flex justify-between w-full">
            <div>
              <h3 className="w-full text-[16px] lg:text-[20px] leading-[140%] max-[550px]:text-[14px]">
                My stakes
              </h3>
              <h1 className="text-xl md:text-2xl lg:text-3xl text-[#2573C0]">
                2 750 OPN
              </h1>
            </div>
            <div>
              <h3 className="w-full text-[16px] lg:text-[20px] leading-[140%] max-[550px]:text-[14px]">
                My stakes
              </h3>
              <h1 className="text-xl md:text-2xl lg:text-3xl text-[#2573C0]">
                2 750 OPN
              </h1>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[60px] rounded-[20px] bg-light_base p-10 max-[550px]:gap-[30px] max-[550px]:p-4">
          <div className="flex flex-col items-start gap-3.5">
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
          <hr />
        </div>
      </div>
    </div>
  );
}

export default BalanceInfoSection;
