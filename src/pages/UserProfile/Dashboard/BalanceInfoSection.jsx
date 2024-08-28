import React, { useState, useEffect } from "react";
import { Text } from "../../../components/TextGenz";
import Icon1 from "../../../assets/profile/referrals/referral2.svg";
import Icon2 from "../../../assets/profile/referrals/referral3.svg";
import { getGenzUserDetails, getWeb3UserDetails } from "../../../utils/helper";

function BalanceInfoSection() {
  const [genzStakeBalance, setGenzStakeBalance] = useState(0);
  const [genzUnstakeDate, setGenzUnstakeDate] = useState("");
  const [web3StakeBalance, setWeb3StakeBalance] = useState(0);
  const [web3UnstakeDate, setWeb3UnstakeDate] = useState("");
  function addYearsToTimestamp(timestamp, years) {
    const daysPerYear = 365.25;
    const secondsPerDay = 86400;
    const secondsInYears = years * daysPerYear * secondsPerDay;
    return timestamp + secondsInYears;
  }

  const fetchGenzStakedBalance = async () => {
    const genzUserDetails = await getGenzUserDetails();
    console.log('first', genzUserDetails)
    console.log('bahar wala',genzUserDetails)
    const genzStakedBalanceInHex = genzUserDetails[1].length === 0 ? "0x00" : genzUserDetails[1][0];
    const genzStakedBalanceInDecimal = Number(genzStakedBalanceInHex) / 1e18;
    console.log(
      "Staked Balance in proper decimals",
      genzStakedBalanceInDecimal
    );
    setGenzStakeBalance(genzStakedBalanceInDecimal);
  };
  const fetchGenzUnstakeDate = async () => {
    const genzUserDetails = await getGenzUserDetails();
    const stakedDateUnixTimestamp = genzUserDetails[2][0];
    console.log('stakedDateUnixTimestamp', stakedDateUnixTimestamp)
    if (Number(stakedDateUnixTimestamp) === 0 || stakedDateUnixTimestamp === undefined) {
      setGenzUnstakeDate("-");
    } else {
      const unstakeDateUnixTimestamp = addYearsToTimestamp(
        Number(stakedDateUnixTimestamp),
        3
      );
      const unstakeDay = new Date(unstakeDateUnixTimestamp * 1000);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const unstakeDate = unstakeDay.getDate();
      const unstakeMonth = monthNames[unstakeDay.getMonth()];
      const unstakeYear = unstakeDay.getFullYear();
      const formatedUnstakeDay = `${unstakeDate} ${unstakeMonth} ${unstakeYear}`;
      setGenzUnstakeDate(formatedUnstakeDay);
    }
  };

  const fetchWeb3StakedBalance = async () => {
    const web3UserDetails = await getWeb3UserDetails();
    console.log('web3UserDetails', web3UserDetails)
    const web3StakedBalanceInHex = web3UserDetails[0];
    const web3StakedBalanceInDecimal = Number(web3StakedBalanceInHex) / 1e18;
    setWeb3StakeBalance(web3StakedBalanceInDecimal);
  };

  const fetchWeb3UnstakeDate = async () => {
    const web3UserDetails = await getWeb3UserDetails();
    const web3StakedUnixTimestamp = web3UserDetails[1];
    if (Number(web3StakedUnixTimestamp) == 0) {
      setWeb3UnstakeDate("-");
    } else {
      const web3UnstakedUnixTimeStamp = addYearsToTimestamp(
        web3StakedUnixTimestamp,
        3
      );
      const web3UnstakeDay = new Date(web3UnstakedUnixTimeStamp * 1000);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const unstakeDate = web3UnstakeDay.getDate();
      const unstakeMonth = monthNames[web3UnstakeDay.getMonth()];
      const unstakeYear = web3UnstakeDay.getFullYear();
      const formatedUnstakeDay = `${unstakeDate} ${unstakeMonth} ${unstakeYear}`;
      setWeb3UnstakeDate(formatedUnstakeDay);
    }
  };

  useEffect(() => {
    console.log(genzStakeBalance);
    console.log(web3UnstakeDate);

    console.log("genzUnstakeDate", genzUnstakeDate);

    fetchGenzStakedBalance();
    fetchGenzUnstakeDate();
    fetchWeb3StakedBalance();
    fetchWeb3UnstakeDate();
  });

  return (
    <div className="flex flex-col gap-4" id="Stacked-Balance">
      <div className="mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl font-medium text-dark-0">
          Staked Balance Information
        </h1>
        <p className="opacity-50 text-sm md:text-lg my-4 w-full md:w-3/4 text-justify">
          The live price of Tether OPN Token is $ 1.000715 per (OPN / USD) with
          a current market cap of $ 115.72B USD. 24-hour trading volume is $
          45.77B USD. USDT to OPN price is updated in real-time.
        </p>
      </div>
      <div className="flex gap-8 max-[1050px]:flex-col mb-10 sm:mb-20">
        <div className="relative flex w-full flex-col gap-[40px] rounded-[20px] bg-light_base max-[550px]:gap-[30px] min-[765px]:p-10 p-5 sm:py-10 sm:px-8">
          <img
            src={Icon1}
            alt="Icon1"
            className="absolute md:top-[-80px] top-[-40px] right-[15px] md:right-[-3px] lg:right-[3px] md:w-[230px] sm:w-[150px] md:h-[230px] sm:h-[150px] h-[120px] w-[80px] scale-[1.2] md:scale-[1.1] lg:scale-[1]"
          />
          <div className="flex flex-col items-start gap-3.5 relative z-50">
            <Text
              size="visa_desktop_headers_h3"
              as="p"
              className="text-2xl md:text-3xl"
            >
              Web3 Talent <br />
              Program
            </Text>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="w-full text-[16px] lg:text-[20px] leading-[140%] !text-dark-1 max-[550px]:text-[14px]"
            >
              Get additional entry by paying 1000 <br /> OPN from the staked
              balance
            </Text>
          </div>
          <hr className="my-[-20px]" />
          <div className="flex justify-between w-full min-[1040]:px-10">
            <div className="w-1/2">
              <h3 className="w-full text-[16px] lg:text-[20px] leading-[140%] max-[550px]:text-[14px]">
                My stakes
              </h3>
              <h1 className="text-xl md:text-2xl text-[#2573C0]">
                {`${genzStakeBalance}`}
              </h1>
            </div>
            <div className="w-1/2">
              <h3 className="w-full text-[16px] lg:text-[20px] leading-[140%] max-[550px]:text-[14px]">
                Unstake date
              </h3>
              <h1 className="text-xl md:text-2xl">{`${genzUnstakeDate}`}</h1>
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-col gap-[40px] rounded-[20px] bg-light_base max-[550px]:gap-[30px] min-[765px]:p-10 py-10 px-8">
          <img
            src={Icon2}
            alt="Icon1"
            className="absolute lg:top-[-50px] top-[-20px] -sm:right-[6px] -md:right-[6px] -lg:right-[10px] xl:right-[-15px] right-[3px] lg:w-[180px] lg:h-[180px] md:h-[150px] sm:h-[120px] h-[90px] md:w-[150px] sm:w-[120px] w-[80px] md:scale-[1.2] lg:scale-[1]"
          />
          <div className="flex flex-col items-start gap-3.5 relative z-50">
            <Text
              size="visa_desktop_headers_h3"
              as="p"
              className="text-2xl md:text-3xl"
            >
              Web3 Entrepreneur <br /> Program
            </Text>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="w-full text-[16px] lg:text-[20px] leading-[140%] !text-dark-1 max-[550px]:text-[14px]"
            >
              Get additional entry by paying 1000 <br /> OPN from the staked
              balance
            </Text>
          </div>
          <hr className="my-[-20px]" />
          <div className="flex w-full min-[1040]:px-10">
            <div className="w-1/2">
              <h3 className="w-full text-[16px] lg:text-[20px] leading-[140%] max-[550px]:text-[14px]">
                My stakes
              </h3>
              <h1 className="text-xl md:text-2xl text-[#2573C0]">
                {`${web3StakeBalance}`}
              </h1>
            </div>
            <div className="w-1/2">
              <h3 className="w-full text-[16px] lg:text-[20px] leading-[140%] max-[550px]:text-[14px]">
                Unstake date
              </h3>
              <h1 className="text-xl md:text-2xl">{`${web3UnstakeDate}`}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceInfoSection;
