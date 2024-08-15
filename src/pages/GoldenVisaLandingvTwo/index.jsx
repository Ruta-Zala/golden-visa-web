import { Helmet } from "react-helmet";
import ExclusivePerksSection from "./ExclusivePerksSection";
import GoldenVisaLandingSection from "./GoldenVisaLandingSection";
import GoldenVisaLandingSection1 from "./GoldenVisaLandingSection1";
import { Button } from "../../components/Button";
import { Img } from "../../components/Img";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import FooterVisa from "../../components/FooterVisa";
import HeaderVisa from "../../components/HeaderVisa";
import logoWhite from "../../assets/logo-white.png";
import Footer from "../../components/Footer/FooterEl";
import { Link } from "react-router-dom";

export default function GoldenVisaLandingvTwoPage() {
  return (
    <>
      <Helmet>
        <title>UAE Golden Visa Program - Unlock Your Future</title>
        <meta
          name="description"
          content="Join the GenZ Talent Program for a chance to win a UAE Golden Visa. Secure your future with career growth, global mobility, and entrepreneurial opportunities. Enter our monthly draw now!"
        />
      </Helmet>
      <div className="w-full bg-white-0">
        <div className="w-full">
          <div className="flex min-h-[860px] justify-center bg-[url(/public/images/img_hero.png)] bg-cover bg-no-repeat w-full py-3">
            <div className="max-w-screen-xl w-full px-4 mx-auto relative">
              <div className="flex w-full flex-col justify-between items-center gap-32">
                <HeaderVisa />
                <div className="flex flex-col items-center gap-5 w-full">
                  <div className="flex flex-col items-center gap-5 self-stretch w-[32vw] text-center mx-auto">
                    <Button
                      size="xs"
                      className="min-w-80 rounded-2xl uppercase"
                    >
                      JOIN THE IOPn TRAILBLAZER’S INITIATIVE
                    </Button>
                    <h1 className="text-shadow-ts !text-white-0 text-3xl md:text-6xl w-full text-center">
                      Shape Your Future <br /> with the IOPn <br />
                      Trailblazer’s Initiative!!
                      {/* Unlock Your <br />
                      Future With A <br />
                      UAE Golden Visa! */}
                    </h1>
                    <h5 className="text-white-0">
                      Join the IOPn Trailblazer’s Initiative and turn your
                      dreams into reality. Secure your spot in the innovative
                      draw for a life-changing UAE Golden Visa!
                      {/* Join the IOPn GenZ Talent Program and turn your dreams
                      into reality. Secure your spot in the monthly draw for a
                      life-changing UAE Golden Visa! */}
                    </h5>
                  </div>
                  <Link to="">
                    {/* <Link to="/GenzTalentProgram"> */}
                    <Button
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
                      className="min-w-[258px] gap-4 capitalize"
                    >
                      Enter the Draw now
                    </Button>
                  </Link>
                </div>
                <img
                  src={logoWhite}
                  className="logo-gv-hero absolute w-[50px] right-0 bottom-[15px]"
                />
              </div>
            </div>
          </div>
          <div className="relative golden-visa-landing-section1 w-full ">
            <div className=" max-w-screen-xl mx-auto px-4">
              <div className="z-10 flex items-start relative md:flex-col">
                <div className="relative flex flex-col items-center gap-5 py-10 md:py-20 text-center mx-auto">
                  <Button size="xs" className="min-w-80 uppercase">
                    ABOUT THE IOPn TRAILBLAZER’S INITIATIVE
                  </Button>
                  <h2 className="text-shadow-ts !text-white-0 !text-center md:text-left text-4xl md:text-6xl">
                    <span className="text-white-0">What is</span>
                    <br />
                    <span className="text-blue-400">
                      IOPn Trailblazer’s Initiative
                    </span>{" "}
                    ?
                  </h2>
                  <p className="w-full !text-center md:text-left !text-white-0 text-lg md:text-xl">
                    Imagine a future where the only limit is your ambition. IOPn
                    Trailblazer’s Initiative is a pioneering program designed to
                    empower exceptional talents from around the world. In
                    partnership with the visionary RAK Government this
                    initiative offers a unique pathway to the UAE’s Golden Visa.
                    Our mission is to nurture innovation and attract the world’s
                    best talent to the region to build the future.
                  </p>
                  {/* <p className="w-full !text-center md:text-left !text-white-0 text-lg md:text-xl">
                    Traditionally, securing a UAE Golden Visa requires a
                    significant investment, but the GenZ Talent Program is
                    changing the game. With just 10,000 OPN Tokens, currently
                    valued at $500, you can participate in our innovative Life
                    Changing Draw. This is your opportunity to join a community
                    of dreamers and achievers, and transform your life.
                  </p> */}
                </div>
              </div>
            </div>
            {/* {/* golden visa landing section } */}
          </div>

          <div className="h-[300px] md:h-[600px] w-full line-background overflow-hidden">
            <Img
              src="/public/images/Curveline.png"
              alt="Featured Image"
              className="h-full w-full object-left-top -rotate-[10deg] bg-[#4b4d5300]"
            />
          </div>
          <GoldenVisaLandingSection />
          {/* golden visa landing section */}
          <GoldenVisaLandingSection1 />

          <div className="md:mt-[122px] flex flex-col items-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <img src="/images/img_group_292.svg" alt="" />
            </div>
            {/* bg-[url('/public/images/img_group_292.svg')] */}
            <div className="flex flex-col items-center gap-6 relative z-20">
              <div className="flex flex-col items-center">
                <div className="sm:hidden flex rounded-[18px] border border-solid border-dark-0 p-1.5 md:ml-0">
                  <Heading as="h4">How Does It Work?</Heading>
                </div>
                <div className="relative bg-cover bg-no-repeat p-4 md:ml-0 md:self-stretch md:p-5 sm:p-4 filter">
                  <Text
                    size="visa_headers_h2"
                    as="p"
                    className="text-center 2xl:!text-[80px] xl:!text-[50px] sm:!text-[35px] !text-[30px] 2xl:my-20 md:my-10"
                  >
                    <>
                      Learn the steps to
                      <br />
                      kickstart your journey
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="container-xs lg:px-5 md:px-5 xl:mt-0 mt-10">
              <div className="relative 2xl:h-[900px] xl:h-[670px] md:h-[510px] h-[390px] 2xl:max-w-[1500px] xl:max-w-[1250px] md:max-w-[800px] mx-auto max-w-[620px] content-center xl:my-[200px] my-[100px] md:block hidden">
                <div className="absolute left-[20px] top-[-130px] z-[5] flex 2xl:max-w-[400px] xl:max-w-[380px] md:max-w-[220px] max-w-[180px] flex-col items-end gap-1.5 w-full">
                  <Heading
                    as="h2"
                    className="!text-accent-blue md:!text-[16px] !text-[13px]"
                  >
                    [ 01 ]
                  </Heading>
                  <Heading
                    size="visa_headers_h4"
                    as="h3"
                    className="2xl:!text-[26px] md:!text-[20px] !text-[18px]"
                  >
                    Purchase OPN Tokens
                  </Heading>
                  <Text
                    size="visa_body_text_18"
                    as="p"
                    className="text-right leading-[140%] !text-dark-2 w-full xl:!text-[15px] !text-[13px]"
                  >
                    Kickstart your journey by purchasing 10,000 OPN tokens from
                    our program portal.
                  </Text>
                </div>
                <div className="absolute -top-[120px] xl:right-[110px] right-[10px] flex 2xl:max-w-[300px] xl:max-w-[280px] md:max-w-[220px] max-w-[180px] w-full flex-col items-start gap-1.5">
                  <Heading
                    as="h5"
                    className="!text-accent-blue md:!text-[16px] !text-[13px]"
                  >
                    [ 02 ]
                  </Heading>
                  <Heading
                    size="visa_headers_h4"
                    as="h6"
                    className="2xl:!text-[26px] md:!text-[20px] !text-[18px]"
                  >
                    Stake Your Tokens
                  </Heading>
                  <Text
                    size="visa_body_text_18"
                    as="p"
                    className="leading-[140%] !text-dark-2 w-full xl:!text-[15px] !text-[13px]"
                  >
                    Stake your OPN tokens on our platform to secure eligibility
                    for 12 monthly draws.
                  </Text>
                </div>
                <div className="absolute  xl:right-[130px] right-[10px] 2xl:top-[320px] xl:top-[250px] md:top-[180px] top-[130px] 2xl:max-w-[280px] xl:max-w-[260px] md:max-w-[220px] max-w-[180px] flex flex-col items-start gap-1.5 md:w-full z-50">
                  <Heading
                    as="p"
                    className="!text-grey md:!text-[16px] !text-[13px]"
                  >
                    [ 03 ]
                  </Heading>
                  <Heading
                    size="visa_headers_h4"
                    as="p"
                    className="2xl:!text-[26px] md:!text-[20px] !text-[18px]"
                  >
                    Join the Draw
                  </Heading>
                  <Text
                    size="visa_body_text_18"
                    as="p"
                    className="leading-[140%] !text-dark-2 w-full xl:!text-[15px] !text-[13px]"
                  >
                    Every month, enter a decentralized draw for a chance to win
                    a UAE Golden Visa.
                  </Text>
                </div>
                <div className="absolute 2xl:top-[310px] xl:top-[250px] md:top-[180px] top-[130px] xl:left-[140px] left-[10px] justify-between gap-5 flex md:flex-col 2xl:max-w-[280px] xl:max-w-[260px] md:max-w-[220px] max-w-[180px] z-50">
                  <div className="flex w-full flex-col items-end gap-1.5">
                    <Heading
                      as="p"
                      className="!text-grey md:!text-[16px] !text-[13px]"
                    >
                      [ 04 ]
                    </Heading>
                    <Heading
                      size="visa_headers_h4"
                      as="p"
                      className="2xl:!text-[26px] md:!text-[20px] !text-[18px]"
                    >
                      Boost Your Chances
                    </Heading>
                    <Text
                      size="visa_body_text_18"
                      as="p"
                      className="text-right leading-[140%] !text-dark-2 w-full xl:!text-[15px] !text-[13px]"
                    >
                      Increase your odds with exclusive boosters and referral
                      rewards system.
                    </Text>
                  </div>
                </div>
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex w-full flex-col items-center justify-center">
                  <Heading
                    as="p"
                    className="!text-grey text-center md:!text-[16px] !text-[13px]"
                  >
                    [ 05 ]
                  </Heading>
                  <div className="2xl:my-0 xl:my-3 my-1">
                    <Text
                      size="visa_headers_h2"
                      as="p"
                      className="2xl:!text-[48px] xl:!text-[35px] md:!text-[30px] !text-[22px]"
                    >
                      Monthly Visa Allocation
                    </Text>
                  </div>
                  <Text
                    size="visa_body_text_20"
                    as="p"
                    className="2xl:mt-4 text-center leading-[140%] !text-dark-2 md:!text-[20px] !text-[16px]"
                  >
                    <>
                      Each draw allocates a specific number of Golden Visas
                      <br />
                      and benefits to participants.
                    </>
                  </Text>
                  {/* <Button
                    color="dark_0"
                    variant="fill"
                    shape="round"
                    rightIcon={
                      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                        <Img
                          src="images/img_arrowleft.svg"
                          alt="Arrow Left"
                          className="h-[18px] w-[18px]"
                        />
                      </div>
                    }
                    className="ml-[238px] mt-[30px] min-w-[270px] gap-[26px] capitalize md:ml-0"
                  >
                    Enter the Draw now
                  </Button> */}
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 2xl:w-full xl:w-[1074px] md:w-[800px] w-[600px] z-10">
                  <img src="/images/img_group_4.png" alt="" />
                </div>
                <Img
                  src="images/img_img.png"
                  alt="Image One"
                  className="absolute left-1/2 2xl:top-[-120px] xl:top-[-80px] top-[-50px] z-50 -translate-x-1/2 m-auto 2xl:max-w-[400px] xl:max-w-[270px] md:max-w-[200px] max-w-[160px] w-full rounded-[24px] object-contain"
                />
                {/* <div className="relative mr-[92px] mt-[-196px] flex h-[1096px] w-[80%] items-end justify-center bg-[url(/public/images/img_group_2.svg)] bg-cover bg-no-repeat px-14 py-[216px] lg:h-auto lg:w-full lg:py-8 md:mr-0 md:h-auto md:w-full md:p-5 sm:p-4">
                    
                  </div> */}
                {/* bg-[url(/public/images/img_group_4.png)] */}
                {/* <div className="absolute bottom-0 left-0 right-0 top-0 z-[6] m-auto flex-1 bg-cover bg-no-repeat px-[26px] py-[98px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:p-4">
                  <div className="mb-[134px] flex flex-col gap-[120px] lg:gap-[90px] md:gap-[90px] sm:gap-[60px]">
                  </div>
                </div> */}
                {/*<div className="mx-[90px] flex items-end justify-center gap-2.5 md:mx-0 md:flex-col">
                      <div className="h-[68px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[68px]" />
                      <div className="h-[52px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[52px]" />
                      <div className="h-[52px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[52px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[38px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[38px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[114px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[114px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[86px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[86px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[34px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[34px]" />
                      <div className="h-[44px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[44px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[40px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[40px]" />
                      <div className="h-[66px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[66px]" />
                      <div className="h-[50px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[50px]" />
                      <div className="h-[86px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[86px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[34px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[34px]" />
                      <div className="h-[44px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[44px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[114px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[114px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[52px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[52px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[38px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[38px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[34px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[34px]" />
                      <div className="h-[44px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[44px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[40px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[40px]" />
                      <div className="h-[66px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[66px]" />
                      <div className="h-[50px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[50px]" />
                      <div className="h-[86px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[86px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[34px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[34px]" />
                      <div className="h-[44px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[44px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[114px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[114px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[52px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[52px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[38px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[38px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[34px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[34px]" />
                      <div className="h-[44px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[44px]" />
                      <div className="h-[86px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[86px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[114px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[114px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[124px] w-[4px] self-center rounded-sm bg-dark-0 md:h-[4px] md:w-[124px]" />
                      <div className="h-[94px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[94px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[52px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[52px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                    </div> */}
              </div>
              <div className="md:hidden block px-5">
                <div className="h-[650px] mx-auto relative mb-[150px]">
                  <div className="absolute h-full top-0 left-0">
                    <img
                      src="/images/learn-sec-side-img.png"
                      className="h-full"
                      alt=""
                    />
                  </div>
                  <div className="pl-8">
                    <div className="flex flex-col items-start gap-1.5 w-full h-[176px]">
                      <Heading
                        as="h2"
                        className="!text-accent-blue md:!text-[16px] !text-[13px]"
                      >
                        [ 01 ]
                      </Heading>
                      <Heading
                        size="visa_headers_h4"
                        as="h3"
                        className="2xl:!text-[26px] md:!text-[20px] !text-[18px]"
                      >
                        Purchase OPN Tokens
                      </Heading>
                      <Text
                        size="visa_body_text_18"
                        as="p"
                        className="text-start leading-[140%] !text-dark-2 w-full xl:!text-[15px] !text-[13px]"
                      >
                        Kickstart your journey by purchasing 10,000 OPN tokens
                        from our program portal.
                      </Text>
                    </div>
                    <div className="flex w-full flex-col items-start gap-1.5 h-[155px]">
                      <Heading
                        as="h5"
                        className="!text-accent-blue md:!text-[16px] !text-[13px]"
                      >
                        [ 02 ]
                      </Heading>
                      <Heading
                        size="visa_headers_h4"
                        as="h6"
                        className="2xl:!text-[26px] md:!text-[20px] !text-[18px]"
                      >
                        Stake Your Tokens
                      </Heading>
                      <Text
                        size="visa_body_text_18"
                        as="p"
                        className="leading-[140%] !text-dark-2 w-full xl:!text-[15px] !text-[13px]"
                      >
                        Stake your OPN tokens on our platform to secure
                        eligibility for 12 monthly draws.
                      </Text>
                    </div>
                    <div className="flex flex-col items-start gap-1.5 w-full z-50 h-[155px]">
                      <Heading
                        as="p"
                        className="!text-grey md:!text-[16px] !text-[13px]"
                      >
                        [ 03 ]
                      </Heading>
                      <Heading
                        size="visa_headers_h4"
                        as="p"
                        className="2xl:!text-[26px] md:!text-[20px] !text-[18px]"
                      >
                        Join the Draw
                      </Heading>
                      <Text
                        size="visa_body_text_18"
                        as="p"
                        className="leading-[140%] !text-dark-2 w-full xl:!text-[15px] !text-[13px]"
                      >
                        Every month, enter a decentralized draw for a chance to
                        win a UAE Golden Visa.
                      </Text>
                    </div>
                    <div className="gap-5 flex md:flex-col h-[155px]">
                      <div className="flex w-full flex-col items-start gap-1.5">
                        <Heading
                          as="p"
                          className="!text-grey md:!text-[16px] !text-[13px]"
                        >
                          [ 04 ]
                        </Heading>
                        <Heading
                          size="visa_headers_h4"
                          as="p"
                          className="2xl:!text-[26px] md:!text-[20px] !text-[18px]"
                        >
                          Boost Your Chances
                        </Heading>
                        <Text
                          size="visa_body_text_18"
                          as="p"
                          className="leading-[140%] !text-dark-2 w-full xl:!text-[15px] !text-[13px]"
                        >
                          Increase your odds with exclusive boosters and
                          referral rewards system.
                        </Text>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-center">
                      <Heading
                        as="p"
                        className="!text-grey text-center md:!text-[16px] !text-[13px]"
                      >
                        [ 05 ]
                      </Heading>
                      <div className="2xl:my-0 xl:my-3 my-1">
                        <Text
                          size="visa_headers_h2"
                          as="p"
                          className="2xl:!text-[48px] xl:!text-[35px] md:!text-[30px] !text-[28px]"
                        >
                          Monthly Visa Allocation
                        </Text>
                      </div>
                      <Text
                        size="visa_body_text_20"
                        as="p"
                        className="2xl:mt-4 text-start leading-[140%] !text-dark-2 md:!text-[20px] !text-[16px]"
                      >
                        <>
                          Each draw allocates a specific number of Golden Visas
                          <br />
                          and benefits to participants.
                        </>
                      </Text>
                      {/* <Button
                    color="dark_0"
                    variant="fill"
                    shape="round"
                    rightIcon={
                      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                        <Img
                          src="images/img_arrowleft.svg"
                          alt="Arrow Left"
                          className="h-[18px] w-[18px]"
                        />
                      </div>
                    }
                    className="ml-[238px] mt-[30px] min-w-[270px] gap-[26px] capitalize md:ml-0"
                  >
                    Enter the Draw now
                  </Button> */}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-10">
                  <Link to="/GenzTalentProgram">
                    <Button
                      variant="fill"
                      shape="round"
                      rightIcon={
                        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-[white]">
                          <Img
                            src="images/img_arrowleft.svg"
                            alt="Arrow Left"
                            className="h-[18px] w-[18px]"
                          />
                        </div>
                      }
                      className="min-w-[258px] gap-4 !bg-dark-0 !text-[white] capitalize"
                    >
                      Enter the Draw now
                    </Button>
                  </Link>
                </div>
                <div className="mt-7">
                  <Img
                    src="images/img_img.png"
                    alt="Image One"
                    className="w-full rounded-[24px] object-cover h-[300px]"
                  />
                </div>
              </div>
            </div>

            {/* exclusive perks section */}
            <ExclusivePerksSection />
          </div>

          {/* testimonial section */}
          {/* <TestimonialSection /> */}
          <div className="mt-20 flex flex-col items-center">
            <div className="max-w-screen-2xl mx-auto w-full px-4">
              <div className="flex gap-4 flex-col md:flex-row mb-5">
                <Img
                  src="images/img_rectangle_11.png"
                  alt="Promo Image"
                  className="rounded-[20px] w-full md:w-1/2"
                />
                <div className="flex flex-col items-start justify-center gap-20 rounded-[20px] bg-gradient3 px-4 py-4">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col items-start gap-2 w-full">
                      <Button
                        size="xs"
                        className="min-w-[134px] rounded-[18px] uppercase"
                      >
                        Get started
                      </Button>
                      <Text
                        size="visa_headers_h2"
                        as="p"
                        className="w-full leading-[105%] text-white-0 text-2xl lg:text-[48px] break-words"
                      >
                        <>
                          Ready to Participate in a Life-Changing Opportunity
                          for
                          <br />
                          Your Future?
                        </>
                      </Text>
                    </div>
                    <Text
                      size="iopn_desktop_body_text_20"
                      as="p"
                      className="leading-[140%] text-white-1 break-words"
                    >
                      Don’t wait! Join the IOPn Trailblazer’s Initiative today
                      and take the first step towards a brighter future. Mint
                      your OPN Tokens now and enter the monthly draw for your
                      chance to win a UAE Golden Visa.
                    </Text>
                  </div>
                  <Link to="">
                    {/* <Link to="/OPNTokenMint"> */}
                    <Button
                      variant="fill"
                      shape="round"
                      rightIcon={
                        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-dark-0">
                          <Img
                            src="images/img_arrowleft_white_0.svg"
                            alt="Arrow Left"
                            className="h-[18px] w-[18px]"
                          />
                        </div>
                      }
                      className="w-full md:w-auto min-w-[200px] md:min-w-[334px] gap-4 capitalize text-xs sm:text-sm md:text-base lg:text-lg"
                    >
                      Mint Your OPN Tokens Now
                    </Button>
                  </Link>
                </div>
              </div>
              {/* <FooterVisa /> */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
