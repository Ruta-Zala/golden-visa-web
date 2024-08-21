import React from 'react';
import GenZEntryLogo from '../../../assets/profile/genz-entry-logo.png';
import GenZCalLogo from '../../../assets/profile/genz-cal-logo.png';
import { Text } from '../../../components/Text';

function GenZTalentSection() {
  const cardList = [
    {
      rewardPercentage: 'Number of entries',
      rewardDescription: '10',
      img: GenZEntryLogo,
    },
    {
      rewardPercentage: 'Nex draw',
      rewardDescription: '14 August, 2024',
      img: GenZCalLogo,
    },
  ];
  return (
    <div
      className="relative w-full bg-gray-100 rounded-[20px] bg-cover bg-no-repeat"
      id="genz-talent-program">
      <div className="relative w-full p-[24px] z-10 xl:p-[24px] lg:p-[20px] md:p-[18px] sm:p-[16px] my-12">
        <h1 className="text-2xl md:text-3xl font-medium text-[#08122A] mb-4 ">
          GenZ Talent Program
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {cardList.map((d, index) => (
            <div
              index={`reward_info_${index}`}
              className={`flex max-[550px]:flex-row items-center gap-7 p-7 bg-white-0 flex-1 rounded-[16px] max-[550px]:items-center`}>
              <div>
                <img
                  class="h-[48px] w-[48px]"
                  src={d.img}
                  alt="Arrow Left"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Text
                  size="visa_desktop_headers_h3"
                  as="p"
                  className="w-full leading-[140%] !text-slate-400 sm:text-[14px] text-[12px] uppercase">
                  {d.rewardPercentage}
                </Text>
                <Text
                  size="visa_desktop_body_text_18"
                  as="p"
                  className="w-full font-normal xl:text-[26px] lg:text-[20px] sm:text-[28px] text-[26px]">
                  {d.rewardDescription}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GenZTalentSection;
