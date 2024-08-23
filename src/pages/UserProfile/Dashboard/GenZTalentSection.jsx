import React from "react";
import GenZEntryLogo from "../../../assets/profile/genz-entry-logo.png";
import GenZCalLogo from "../../../assets/profile/genz-cal-logo.png";
import { Text } from "../../../components/Text";
import { handleScrollToSection } from "../../../utils/helper";
import DaysCounter from "../../../components/DaysCounter";

function GenZTalentSection() {
  const cardList = [
    {
      rewardPercentage: "Number of entries",
      rewardDescription: "10",
      img: GenZEntryLogo,
    },
    {
      rewardPercentage: "Next draw",
      rewardDescription: "14 August, 2024",
      img: GenZCalLogo,
    },
  ];

  const timeCounterList = [
    { daysButton: "Days", fourButton: "02" },
    { daysButton: "Hours", fourButton: "01" },
    { daysButton: "Minutes", fourButton: "22" },
    { daysButton: "Seconds", fourButton: "17" },
  ];

  return (
    <>
      <div
        className="relative w-full bg-light_base rounded-[20px] bg-cover bg-no-repeat"
        id="genz-talent-program"
      >
        <div className="relative w-full p-[16px] md:p-[18px] lg:p-[10px] xl:p-[24px] z-10 my-16">
          <h1 className="text-2xl md:text-3xl font-medium text-[#08122A] mb-4 ">
            Web3 Talent Program
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">
            {cardList.map((d, index) => (
              <div
                key={`reward_info_${index}`}
                className={`flex max-[550px]:flex-row items-center gap-7 p-7 bg-white-0 flex-1 rounded-[16px] max-[550px]:items-center`}
              >
                <div>
                  <img
                    className="h-[48px] w-[48px]"
                    src={d.img}
                    alt="Reward Logo"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Text
                    size="visa_desktop_headers_h3"
                    as="p"
                    className="w-full leading-[140%] !text-slate-400 sm:text-[14px] text-[12px] uppercase"
                  >
                    {d.rewardPercentage}
                  </Text>
                  <Text
                    size="visa_desktop_body_text_18"
                    as="p"
                    className="w-full font-normal xl:text-[26px] lg:text-[20px] sm:text-[28px] text-[18px]"
                  >
                    {d.rewardDescription}
                  </Text>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-full rounded-[24px] px-8 lg:px-2 xl:px-8 py-10 max-[1440px]:h-auto max-[1440px]:py-8 max-[1050px]:h-auto max-[1050px]:p-5 max-[550px]:p-4 overflow-hidden bg-white-0">
          <div className="genz-talent-bg"></div>
            <div className="flex gap-4 max-[1050px]:flex-col h-full items-center">
              <Text
                size="visa_desktop_headers_h3"
                as="p"
                className="text-4xl font-medium w-full leading-[105%] max-[1440px]:w-[56%] max-[1440px]:text-[32px] max-[1050px]:w-full max-[550px]:text-[24px] relative"
              >
                Time left until <br /> next draw
              </Text>
              <div className="ml-4 flex relative gap-4 max-[1050px]:ml-0 max-[1050px]:w-full flex-col md:flex-row">
                {timeCounterList.map((d, index) => (
                  <DaysCounter {...d} key={"daysList" + index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-20">
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <div className="profile-card1 im-minicards-2 h-1/2">
            <div className="minibox-text justify-end md:justify-center h-full">
              <div className="headline">
                <h1 className="openchanh1 w-full text-4xl font-medium">
                Web3 Talent Program
                </h1>
                <p className="opnchain-pb-text-p2 text-lg opacity-80 pt-4 max-w-[350px] ">
                  Welcome to the UAE GoldenVisa Portal
                </p>
              </div>
              <button
                className="learn-more-button link-pb w-full lg:w-auto justify-between"
                onClick={(event) => handleScrollToSection(event, "mintToken")}
              >
                <li className="font-medium flex-1 text-center">
                  Join Now
                </li>
                <div className="link-pb-arrow rotate-[-45deg]">→</div>
              </button>
            </div>
          </div>
          <div className="profile-card2 im-minicards-2 h-1/2">
            <div className="minibox-text justify-end md:justify-center h-full">
              <div className="headline">
                <h1 className="openchanh1 w-full text-4xl font-medium">
                  Web3 Entrepreneur Program
                </h1>
                <p className="opnchain-pb-text-p2 text-lg opacity-80 pt-4 max-w-[350px] ">
                  Unlock Your Future with OPN Tokens!
                </p>
              </div>
              <button
                className="learn-more-button link-pb w-full lg:w-auto justify-between"
                onClick={(event) => handleScrollToSection(event, "mintToken")}
              >
                <li className="font-medium flex-1 text-center">
                  Join Now
                </li>
                <div className="link-pb-arrow rotate-[-45deg]">→</div>
              </button>
            </div>
          </div>
        </div>
        <div className="profile-card3 im-minicards-2 w-full md:w-1/2">
          <div className="minibox-text justify-end md:justify-center h-full">
            <div className="headline">
              <h1 className="openchanh1 w-full text-4xl font-medium">
                Unlock Your Future <br /> with OPN Tokens!
              </h1>
              <p className="opnchain-pb-text-p2 text-lg opacity-80 pt-4 max-w-[350px] md:min-h-[200px]">
                Join the IOPn ecosystem and power the Web3 Talent Program.
                Purchase OPN tokens for your chance at a UAE Golden Visa!
              </p>
            </div>
            <button
              className="learn-more-button link-pb w-full lg:w-auto justify-between"
              onClick={(event) => handleScrollToSection(event, "mintToken")}
            >
              <li className="font-medium flex-1 text-center">
                Mint OPN Tokens Now
              </li>
              <div className="link-pb-arrow rotate-[-45deg]">→</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GenZTalentSection;
