import React, { Suspense } from "react";
import Dashboard1 from "../../../assets/profile/dashboard1.svg";
import Dashboard2 from "../../../assets/profile/dashboard2.svg";
import Dashboard3 from "../../../assets/profile/dashboard3.svg";
import Dashboard4 from "../../../assets/profile/dashboard4.svg";
import { Text } from "../../../components/Text";
import { useState, useEffect } from "react";
import { showcaseTokenBalance } from "../../../utils/helper";

function TopSection() {
  const [daiBalance, setDaiBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0);
  const [usdcBalance, setUsdcBalance] = useState(0);
  const [opnBalance, setOpnBalance] = useState(0);

  const referralRewardsList = [
    {
      rewardPercentage: `${opnBalance}`,
      rewardDescription: "OPN TOKEN",
      img: Dashboard1,
    },
    {
      rewardPercentage: `${usdtBalance}`,
      rewardDescription: "TETHER",
      img: Dashboard2,
    },
    {
      rewardPercentage: `${usdcBalance}`,
      rewardDescription: "USD COIN",
      img: Dashboard3,
    },
    {
      rewardPercentage: `${daiBalance}`,
      rewardDescription: "MAKER DAO",
      img: Dashboard4,
    },
  ];

  useEffect(() => {
    const fetchBalance = async () => {
      const { usdcBalance, usdtBalance, daiBalance, opnBalance } =
        await showcaseTokenBalance();

      setUsdcBalance(Math.floor((usdcBalance / 1e6) * 100) / 100);
      setUsdtBalance(Math.floor((usdtBalance / 1e6) * 100) / 100);
      setDaiBalance(Math.floor((daiBalance / 1e18) * 100) / 100);
      setOpnBalance(Math.floor((opnBalance / 1e18) * 100) / 100);
    };
    fetchBalance();
  }, []);

  return (
    <>
      <div className="relative w-full bg-[url(./assets/profile/referrals/referral-bg.jpeg)] rounded-[20px] bg-cover bg-no-repeat">
        <div className="relative w-full p-[24px] z-10 xl:p-[24px] lg:p-[20px] md:p-[18px] sm:p-[16px] my-12">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
            <Suspense fallback={<div>Loading feed...</div>}>
              {referralRewardsList.map((d, index) => (
                <div
                  index={`reward_info_${index}`}
                  className={`flex max-[550px]:flex-row items-center gap-5 p-3 bg-white-0 flex-1 rounded-[16px] max-[550px]:items-center`}
                >
                  <div className="ml-3">
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
                      className="font-medium xl:text-[26px] lg:text-[20px] sm:text-[28px] text-[26px]"
                    >
                      {d.rewardPercentage}
                    </Text>
                    <Text
                      size="visa_desktop_body_text_18"
                      as="p"
                      className="w-[86%] leading-[140%] !text-slate-400 sm:text-[14px] text-[12px] uppercase font-medium"
                    >
                      {d.rewardDescription}
                    </Text>
                  </div>
                </div>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopSection;