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
                  <Link to="/GenzTalentProgram">
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

          <div className="mt-[122px] flex flex-col items-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <img src="/images/img_group_292.svg" alt="" />
            </div>
            {/* bg-[url('/public/images/img_group_292.svg')] */}
            <div className="flex flex-col items-center gap-6 relative z-20">
              <div className="relative ml-[-100px]1 bg-cover bg-no-repeat p-14 lg:h-auto md:ml-0 md:h-auto md:self-stretch md:p-5 sm:p-4 filter">
                {/* <div className="ml-[260px] flex rounded-[18px] border border-solid border-dark-0 p-1.5 md:ml-0">
                  <Heading as="h4">How Does It Work?</Heading>
                </div> */}
                <Text
                  size="visa_headers_h2"
                  as="p"
                  className="text-center lg:text-[48px] my-40"
                >
                  <>
                    Learn the steps to
                    <br />
                    kickstart your journey
                  </>
                </Text>
              </div>
            </div>
            <div className="container-xs lg:px-5 md:px-5">
              <div className="relative h-[800px] content-center mt-[200px]">
                <div className="mx-auto flex flex-1 flex-col items-end px-[26px] sm:px-4">
                  <div className="z-[4] flex items-center justify-end self-stretch md:flex-col">
                    <div className="flex flex-1 items-center justify-end md:flex-col md:self-stretch">
                      <div className="absolute -left-[112px] xl:left-[20px] top-[-130px] z-[5] flex max-w-[400px] flex-col items-end gap-1.5 w-[90%]">
                        <Heading as="h2" className="!text-accent-blue">
                          [ 01 ]
                        </Heading>
                        <Heading
                          size="visa_headers_h4"
                          as="h3"
                          className="md:text-[26px] sm:text-[24px]"
                        >
                          Purchase OPN Coins
                        </Heading>
                        <Text
                          size="visa_body_text_18"
                          as="p"
                          className="w-[75%] text-right leading-[140%] !text-dark-2 xl:w-full"
                        >
                          Kickstart your journey by purchasing 10,000 OPN coins
                          from our program portal.
                        </Text>
                      </div>
                    </div>
                    <div className="absolute -top-[120px] -right-[22px] xl:right-[110px] flex w-[300px] flex-col items-start gap-1.5">
                      <Heading as="h5" className="!text-accent-blue">
                        [ 02 ]
                      </Heading>
                      <Heading
                        size="visa_headers_h4"
                        as="h6"
                        className="md:text-[26px] sm:text-[24px]"
                      >
                        Stake Your Coins
                      </Heading>
                      <Text
                        size="visa_body_text_18"
                        as="p"
                        className="w-[90%] leading-[140%] !text-dark-2 lg:w-full md:w-full"
                      >
                        Stake your OPN coins on our platform to secure
                        eligibility for 12 monthly draws.
                      </Text>
                    </div>
                  </div>
                </div>
                {/* <div className="relative mr-[92px] mt-[-196px] flex h-[1096px] w-[80%] items-end justify-center bg-[url(/public/images/img_group_2.svg)] bg-cover bg-no-repeat px-14 py-[216px] lg:h-auto lg:w-full lg:py-8 md:mr-0 md:h-auto md:w-full md:p-5 sm:p-4">
                    <div className="mt-[368px] flex w-[92%] flex-col items-start lg:w-full md:w-full">
                      <Heading as="p" className="ml-[354px] !text-grey md:ml-0">
                        [ 05 ]
                      </Heading>
                      <Text
                        size="visa_headers_h2"
                        as="p"
                        className="mt-6 lg:text-[48px]"
                      >
                        Monthly Visa Allocation
                      </Text>
                      <Text
                        size="visa_body_text_20"
                        as="p"
                        className="mt-2 self-stretch text-center leading-[140%] !text-dark-2"
                      >
                        <>
                          Each draw allocates a specific number of Golden Visas
                          <br />
                          and benefits to participants.
                        </>
                      </Text>
                      <Button
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
                      </Button>
                    </div>
                  </div> */}
                {/* bg-[url(/public/images/img_group_4.png)] */}
                <div className="absolute top-0 left-0 w-full z-10">
                  <img src="/images/img_group_4.png" alt="" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 z-[6] m-auto h-[712px] flex-1 bg-cover bg-no-repeat px-[26px] py-[98px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:p-4">
                  <div className="mb-[134px] flex flex-col gap-[120px] lg:gap-[90px] md:gap-[90px] sm:gap-[60px]">
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
                    <div className="absolute top-[215px] xl:top-[310px] -left-[5px] xl:left-[140px] justify-between gap-5 flex md:flex-col max-w-[280px]">
                      <div className="flex w-full flex-col items-end gap-1.5">
                        <Heading as="p" className="!text-grey">
                          [ 04 ]
                        </Heading>
                        <Heading
                          size="visa_headers_h4"
                          as="p"
                          className="md:text-[26px] sm:text-[24px]"
                        >
                          Boost Your Chances
                        </Heading>
                        <Text
                          size="visa_body_text_18"
                          as="p"
                          className="w-[85%] text-right leading-[140%] !text-dark-2 xl:w-full"
                        >
                          Increase your odds with exclusive boosters and
                          referral rewards system.
                        </Text>
                      </div>
                    </div>
                    <div className="absolute -right-[6px] xl:right-[130px] top-[215px] xl:top-[320px] max-w-[280px] flex flex-col items-start gap-1.5 md:w-full">
                      <Heading as="p" className="!text-grey">
                        [ 03 ]
                      </Heading>
                      <Heading
                        size="visa_headers_h4"
                        as="p"
                        className="md:text-[26px] sm:text-[24px]"
                      >
                        Join the Draw
                      </Heading>
                      <Text
                        size="visa_body_text_18"
                        as="p"
                        className="w-[90%] leading-[140%] !text-dark-2 lg:w-full md:w-full"
                      >
                        Every month, enter a decentralized draw for a chance to
                        win a UAE Golden Visa.
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_img.png"
                  alt="Image One"
                  className="absolute left-1/2 top-[-170px] z-50 -translate-x-1/2 m-auto h-[600px] xl:h-[674px] w-[32%] rounded-[24px] object-contain"
                />
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
                  <Link to="/OPNTokenMint">
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
