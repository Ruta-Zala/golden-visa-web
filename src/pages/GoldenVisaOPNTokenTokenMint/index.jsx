import { Helmet } from "react-helmet";
import { Button } from "../../components/Button/index";
import { Img } from "../../components/ImgMint/index";
import { Text } from "../../components/Text/index";
import { Input } from "../../components/Input/index";
import { Heading } from "../../components/HeadingMint/index";
import Header from "../../components/Header";
import RewardInfo from "../../components/RewardInfo";
import OPNTokenOverviewSection from "./OPNTokenOverviewSection";
import TokenMintSection from "./TokenMintSection";
import React, { Suspense, useEffect, useState } from "react";
import { handleScrollToSection } from "../../utils/helper";
import Footer from "../../components/Footer/FooterEl";
import { useAccount } from "wagmi";
import { useLocation } from 'react-router-dom';
import { ethers } from "ethers";
import ConnectWallet from "../../components/wallet/ConnectWallet";

const referralRewardsList = [
  {
    rewardPercentage: "5%",
    rewardDescription: (
      <>
        For up to $1,000 worth of referrals.
      </>
    ),
  },
  {
    rewardPercentage: "7.5%",
    rewardDescription: (
      <>
        For referrals from $1,001 to $9,999.
      </>
    ),
  },
  {
    rewardPercentage: "10%",
    rewardDescription: (
      <>
        For referrals from $10,000 onwards.
      </>
    ),
  },
];

export default function GoldenVisaOPNTokenTokenMintPage() {
  const location = useLocation();
  const { isConnected } = useAccount();

  const [referalUrl, setReferalUrl] = useState("");
  const [referalId, setReferalId] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const ref = queryParams.get("ref");
    setReferalId(ref);
  }, [location]);

  const handleGenerateReferal = async () => {
    const currentQuery = location.search;
    const params = new URLSearchParams(currentQuery);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
    params.set("ref", walletAddress);

    const newQueryString = params.toString();
    const newUrl = `${import.meta.env.VITE_REACT_APP_FRONTNED_BASE_URL}${location.pathname}?${newQueryString}${location.hash}`;

    setReferalUrl(newUrl);
  };

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(referalUrl)
      .then(() => {
        console.log("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy the link: ", err);
      });
  };
  return (
    <>
      <Helmet>
        <title>
          OPN Token Mint - Unlock Your Future with Golden Visa Chances
        </title>
        <meta
          name="description"
          content="Join the IOPn ecosystem and mint OPN tokens for a chance to win a UAE Golden Visa. Mint in your future with exclusive access and global recognition. Act now and be part of the Web3 Talent Program."
        />
        <meta
          name="description"
          content="Unlock endless opportunities with a UAE Golden Visa"
        />
        <meta
          name="keywords"
          content="IOPn, OPN Token, Minting, Fair Minting"
        />
      </Helmet>
      <div className="w-full bg-white-0">
        <div className="flex h-[1000px] items-start justify-center bg-[url(/public/images/img_hero_mint.png)] bg-cover bg-no-repeat py-4 max-[1440px]:h-auto max-[1050px]:h-auto">
          <div className="container-xs mb-[254px] flex justify-center px-14 max-[1440px]:px-5 max-[1050px]:px-5">
            <div className="flex w-[90%] flex-col gap-[186px] max-[1440px]:w-full max-[1440px]:gap-[139px] max-[1050px]:w-full max-[1050px]:gap-[139px] max-[550px]:gap-[93px]">
              <Header />
              <div className="mx-52 flex flex-col items-center gap-12 max-[1050px]:mx-0">
                <div className="flex flex-col items-center gap-[30px] self-stretch">
                  <Button
                    color="white_0"
                    size="sm"
                    className="min-w-[220px] rounded-[25px] font-medium uppercase text-sm"
                  >
                    OPN TOKEN
                  </Button>
                  <Text
                    size="visa_desktop_headers_h1"
                    as="p"
                    className="text-shadow-ts1 text-center !text-white-0 text-3xl md:text-6xl"
                  >
                    <>
                      Unlock Your Future
                      <br />
                      with OPN Tokens!
                    </>
                  </Text>
                </div>
                <Text
                  size="visa_desktop_body_text_20"
                  as="p"
                  className="text-shadow-ts text-center !text-white-0"
                >
                  Join the IOPn ecosystem and power the Web3 Talent Program.
                  Mint OPN
                  <br /> tokens for your chance at a UAE Golden Visa!
                </Text>
                <Button
                  color="white_0"
                  variant="fill"
                  shape="round"
                  rightIcon={
                    <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-dark-0">
                      <Img
                        src="images/img_arrowleft_white_0.svg"
                        alt="Arrow Left"
                        className="h-[18px] w-[18px]"
                      />
                    </div>
                  }
                  className="min-w-[268px] gap-4 font-medium capitalize"
                  onClick={(event) => handleScrollToSection(event, "mintToken")}
                >
                  Mint OPN Tokens Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* o p n token overview section */}
        <OPNTokenOverviewSection />

        {/* token mint section */}
        <TokenMintSection referralAddress={referalId} />
        <div id="refferralProgram" className="mb-1 mt-[118px] flex flex-col items-center">
          <div className="container-xs flex flex-col gap-[30px] max-[1440px]:px-5 max-[1050px]:px-5">
            <div className="relative h-[1186px] content-center max-[1440px]:h-auto max-[1050px]:h-auto">
              <div className="mx-auto flex flex-1 flex-col gap-4 relative">
                <div className="flex gap-4 max-[1050px]:flex-col">
                  <div className="flex w-full flex-col gap-[26px] rounded-[12px] bg-light_base p-12 max-[1050px]:p-5 max-[550px]:p-4">
                    <div className="flex flex-col items-start gap-6">
                      <Button
                        size="xs"
                        className="min-w-[134px] !text-slate-900 rounded-[18px] font-medium uppercase !border !border-slate-900 rounded-full"
                      >
                        OPN token
                      </Button>
                      <Text
                        size="visa_desktop_headers_h2"
                        as="p"
                        className="text-3xl md:text-7xl"
                      >
                        Referral Program
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {referralRewardsList.map((d, index) => (
                          <RewardInfo {...d} key={"featuresList" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[60px] rounded-[12px] bg-gradient5 p-12 shadow-xs max-[1050px]:p-5 max-[550px]:gap-[30px] max-[550px]:p-4">
                    <div className="flex flex-col items-start gap-[18px]">
                      <Text
                        size="visa_desktop_headers_h3"
                        as="p"
                        className="w-[86%] leading-[110%] !text-white-0 max-[1440px]:w-full max-[1050px]:w-full text-4xl"
                      >
                        <>
                          Amplify your earnings
                          <br />
                          with referrals
                        </>
                      </Text>
                      <Text
                        size="iopn_desktop_body_text_20"
                        as="p"
                        className="w-[86%] leading-[140%] !text-white-1 max-[1440px]:w-full max-[1050px]:w-full max-[550px]:text-[14px] lg:text-[20px]"
                      >
                        Copy this link and share it with your network to invite
                        others to join you on this exciting journey and earn
                        rewards along the way.
                      </Text>
                    </div>
                    <div className="mb-[70px] flex flex-col gap-4">
                      <Input
                        color="white_0"
                        size="xs"
                        shape="round"
                        name="Editable URL"
                        placeholder={`https://iopn.io/gkiyfujytdhtsrsytdr`}
                        value={referalUrl}
                        suffix={
                          <Button
                            onClick={handleCopyLink}
                            color="dark_0"
                            variant="fill"
                            shape="round"
                            rightIcon={
                              <div className="copy-link-button hidden md:flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                                <Img
                                  src="images/img_arrowleft.svg"
                                  alt="Arrow Left"
                                  className="h-[18px] w-[18px]"
                                />
                              </div>
                            }
                            className="hidden md:flex rounded-[18px] border border-solid border-dark-0 p-1.5 gap-5"
                          >
                            Copy Link
                          </Button>
                        }
                        className="!rounded-[34px] max-[550px]:text-[18px] max-[550px]:h-[50px] !pr-1"
                      />

                      <div className="flex flex-col gap-3">
                        <Button
                          onClick={handleCopyLink}
                          color="dark_0"
                          variant="fill"
                          shape="round"
                          rightIcon={
                            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[5px] mr-1">
                              <Img
                                src="images/img_arrowleft.svg"
                                alt="Arrow Left"
                                className="h-[18px] w-[18px]"
                              />
                            </div>
                          }
                          className="gap-[34px] py-4 self-stretch rounded-[40px] font-small capitalize max-[550px]:h-[50px] relative flex md:hidden"
                        >
                          Copy Link
                        </Button>
                        {isConnected ? (
                          <>
                            <Button
                              onClick={handleGenerateReferal}
                              color="white_0"
                              shape="round"
                              rightIcon={
                                <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[5px] mr-1">
                                  <Img
                                    src="images/img_arrowleft_blue_800.svg"
                                    alt="Arrow Left"
                                    className="h-[18px] w-[18px]"
                                  />
                                </div>
                              }
                              className="gap-[34px] py-4 rounded-[40px] self-stretch font-small capitalize max-[550px]:h-[50px] relative"
                            >
                              Generate referral link
                            </Button>
                          </>
                        ) : (
                          <div className="flex justify-center w-full max-[1440px]:w-full max-[1050px]:w-full items-center gap-2.5 border-blue-900_1e border border-solid  rounded-[36px] p-1 md:p-3 bg-white-0">
                            <h5 class="text-dark-0 font-outfit font-bold capitalize text-xl">
                              <ConnectWallet />
                            </h5>
                            <button
                              class="w-[36px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium text-sm px-2 py-2 rounded-3xl max-w-64"
                              style={{
                                backgroundColor: "black",
                                padding: "12px",
                              }}
                            >
                              <img
                                src="images/img_arrowleft_white_0.svg"
                                alt="testImg"
                                loading="lazy"
                              />
                            </button>
                          </div>
                        )}
                        {/* <Button
                          color="white_0"
                          shape="round"
                          rightIcon={
                            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[5px] mr-1">
                              <Img
                                src="images/img_arrowleft_blue_800.svg"
                                alt="Arrow Left"
                                className="h-[18px] w-[18px]"
                              />
                            </div>
                          }
                          className="gap-[34px] py-4 rounded-[40px] self-stretch font-small capitalize max-[550px]:h-[50px] relative"
                        >
                          Generate referral link
                        </Button> */}
                        <Text
                          size="visa_desktop_body_text_16"
                          as="p"
                          className="text-center leading-[130%] !text-white-2"
                        >
                          Don’t wait! Mint your OPN Tokens, join the IOPn Web3
                          Ecosystem today, and take the first step towards a
                          brighter future.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 max-[1050px]:flex-col">
                  <Img
                    src="images/img_rectangle_11 copy.png"
                    alt="Cta Image"
                    className="h-[340px] md:h-[582px] w-[50%] rounded-[12px] max-[1050px]:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start justify-start gap-20 rounded-[12px] border border-solid border-gray-300 bg-white-0 py-16 pl-16 pr-14 shadow-xs max-[1440px]:gap-20 max-[1440px]:py-12 max-[1440px]:pl-8 max-[1050px]:gap-[60px] max-[1050px]:self-stretch max-[1050px]:p-5 max-[550px]:gap-10 max-[550px]:p-4">
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="flex flex-col items-start gap-[30px]">
                        <Button
                          size="xs"
                          className="min-w-[134px] !text-slate-900 rounded-[18px] font-medium uppercase !border !border-slate-900 rounded-full"
                        >
                          Get started
                        </Button>
                        <Text
                          size="visa_desktop_headers_h2"
                          as="p"
                          className="w-full leading-[105%]  lg:!text-[48px] !text-[35px]"
                        >
                          <>
                            Ready to Participate in a Life Changing Opportunity?
                          </>
                        </Text>
                      </div>
                      <Text
                        size="iopn_desktop_body_text_20"
                        as="p"
                        className="leading-[140%] !text-dark-1 max-[550px]:text-[14px]"
                      >
                        Don’t wait! Join The Web3 Talent Program today and take
                        the first step towards a brighter future. Mint your OPN
                        Tokens now and enter the monthly draw for your chance to
                        win a UAE Golden Visa.
                      </Text>
                    </div>
                    <button
                      class="self-stretch capitalize w-full md:w-fit bg-[#2573C0] white flex flex-row items-center text-[#fff] cursor-pointer whitespace-nowrap rounded-[26px] px-3 py-2 text-md justify-between md:justify-start gap-0 md:gap-[34px]"
                      onClick={(event) =>
                        handleScrollToSection(event, "mintToken")
                      }
                    >
                      <div className="flex-1 text-center">
                        Mint OPN Tokens Now
                      </div>
                      <div class="flex h-[28px] w-[28px] items-center justify-center rounded-[50%] bg-white-0">
                        <img
                          class="h-[10px] w-[10px]"
                          src="images/img_arrowleft_blue_800.svg"
                          alt="Arrow Left"
                          loading="lazy"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[64px] w-[64px] rounded-br-[32px] rounded-tl-[32px] bg-blue-700" /> */}
            </div>
            <Footer hideUpperSection className="px-0 !mt-0"/>
          </div>
        </div>
      </div>
    </>
  );
}
