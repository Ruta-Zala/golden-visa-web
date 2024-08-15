import { Text } from "../../components/TextGenz/index";
import { Img } from "../../components/ImgGenz/index";
import { Heading } from "../../components/HeadingGenz/index";
import DaysCounter from "../../components/DaysCounter";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const entryStatsList = [
  {
    userImage: "images/img_upload.svg",
    entryText: "Entry",
    opnCounterText: "50,000 OPN",
  },
  {
    userImage: "images/img_startup_streamline_core.svg",
    entryText: "Multiplier",
    opnCounterText: "Pay OPN",
  },
  {
    userImage: "images/img_ticket.svg",
    entryText: "Additional Benefits",
    opnCounterText: "Exciting Prizes",
  },
];
const timeCounterList = [
  { daysButton: "Days", fourButton: "04" },
  { daysButton: "Hours", fourButton: "13" },
  { daysButton: "Minutes", fourButton: "34" },
  { daysButton: "Seconds", fourButton: "56" },
];

export default function MetricsSection() {
  return (
    <>
      {/* metrics section */}
      <div className="mt-[180px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-[58px] max-[1440px]:px-5 max-[1050px]:px-5 max-[550px]:gap-[29px]">
          <div className="mx-[126px] flex flex-col items-center gap-6 px-14 max-[1050px]:mx-0 max-[1050px]:px-5 max-[550px]:px-4">
            <div className="flex rounded-[18px] border border-solid border-dark-0 p-1.5">
              <Heading
                size="visa_desktop_headers_subheader"
                as="h2"
                className="!text-dark-0 px-2"
              >
                Track key performance metrics
              </Heading>
            </div>
            <Text
              size="visa_desktop_headers_h3"
              as="p"
              className="text-3xl md:text-5xl"
            >
              Monthly Draw{" "}
            </Text>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 max-[1050px]:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {entryStatsList.map((d, index) => (
                  <UserProfile1 {...d} key={"statsList" + index} />
                ))}
              </Suspense>
            </div>
            <div className="h-[522px] bg-[url(/public/images/img_group_4533.svg)] bg-cover bg-no-repeat max-[1440px]:h-auto max-[1050px]:h-auto">
              <div className="flex flex-col gap-[54px] rounded-[24px] max-[550px]:gap-[27px]">
                <div className="ml-16 flex items-start justify-center max-[1050px]:ml-0 max-[1050px]:flex-col">
                  <Heading
                    size="visa_desktop_headers_h4"
                    as="h3"
                    className="self-end !text-dark-0 max-[1050px]:self-auto max-[1050px]:text-[26px] max-[550px]:text-[24px] max-[1050px]:ml-7 max-[1050px]:mt-4"
                  >
                    Monthly Draw Analytics
                  </Heading>
                  <div className="mb-10 flex flex-1 justify-end gap-[17px] max-[1050px]:self-stretch max-[1050px]:justify-between max-[1050px]:px-4 max-[550px]:justify-between max-[550px]:px-4">
                    <div className="flex w-fit items-center justify-center gap-3 rounded-[20px] bg-light_base p-3.5">
                      <div className="h-[12px] w-[12px] rounded-md border-[6px] border-solid border-gray-900 bg-light_base" />
                      <Heading
                        size="visa_desktop_headers_h6"
                        as="h4"
                        className="!text-dark-0"
                      >
                        Participants
                      </Heading>
                    </div>
                    <div className="flex w-fit items-center justify-center gap-3 rounded-[20px] bg-light_base p-3.5">
                      <div className="h-[12px] w-[12px] rounded-md border-[6px] border-solid border-blue-800 bg-light_base" />
                      <Heading
                        size="visa_desktop_headers_h6"
                        as="h5"
                        className="!text-dark-0"
                      >
                        Winners
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="mx-16 mb-12 flex justify-center gap-9 max-[1050px]:gap-1 max-[1050px]:mx-0 max-[550px]:gap-1 max-[550px]:mx-0">
                  <div className="flex flex-col items-end gap-[34px] max-[1050px]:mr-4 max-[550px]:mr-2">
                    <Text as="p">100</Text>
                    <Text as="p">80</Text>
                    <Text as="p">60</Text>
                    <Text as="p">40</Text>
                    <Text as="p">20</Text>
                    <Text
                      as="p"
                      className="mb-[22px] max-[1050px]:mb-0 max-[550px]:mb-0"
                    >
                      0
                    </Text>
                  </div>
                  <div className="flex flex-1 items-end justify-center px-5 max-[1050px]:px-0 max-[550px]:px-0">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <Img
                        src="images/img_frame_8.png"
                        alt="August Image"
                        className="h-[258px] object-contain"
                      />
                      <Text as="p">Aug</Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3 px-10 max-[1050px]:px-2 max-[550px]:px-2">
                      <Img
                        src="images/img_frame_9.png"
                        alt="September Image"
                        className="h-[258px] object-contain"
                      />
                      <Text as="p">Sep</Text>
                    </div>
                    <div className="mt-2 flex flex-1 flex-col items-end gap-3 px-10 max-[1050px]:px-2 max-[550px]:px-2">
                      <Img
                        src="images/img_frame_9.png"
                        alt="August Image"
                        className="h-[258px] object-contain"
                      />
                      <Text as="p">Oct</Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3 px-10 max-[1050px]:px-2 max-[550px]:px-2">
                      <Img
                        src="images/img_frame_12.png"
                        alt="August Image"
                        className="h-[258px] object-contain"
                      />
                      <Text as="p">Nov</Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3 px-10 max-[1050px]:px-2 max-[550px]:px-2">
                      <Img
                        src="images/img_frame_11.png"
                        alt="August Image"
                        className="h-[258px] object-contain"
                      />
                      <Text as="p">Dec</Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3 px-10 max-[1050px]:px-2 max-[550px]:px-2">
                      <Img
                        src="images/img_frame_12.png"
                        alt="August Image"
                        className="h-[258px] object-contain"
                      />
                      <Text as="p">Jan</Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3 px-10 max-[1050px]:px-2 max-[550px]:px-2">
                      <Img
                        src="images/img_frame_8.png"
                        alt="August Image"
                        className="h-[258px] object-contain"
                      />
                      <Text as="p">Feb</Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3 px-10 max-[1050px]:px-2 max-[550px]:px-2 max-[550px]:hidden">
                      <Img
                        src="images/img_frame_10.png"
                        alt="August Image"
                        className="h-[258px] object-contain"
                      />
                      <Text as="p">Mar</Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3 px-10 max-[1050px]:px-2 max-[550px]:px-2">
                      <Img
                        src="images/img_frame_12.png"
                        alt="August Image"
                        className="h-[258px] object-contain"
                      />
                      <Text as="p">Apr</Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3 px-10 max-[1050px]:px-2 max-[550px]:px-2 max-[550px]:hidden">
                      <Img
                        src="images/img_frame_8.png"
                        alt="August Image"
                        className="h-[258px] object-contain"
                      />
                      <Text as="p">May</Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3 px-10 max-[1050px]:px-2 max-[550px]:px-2 max-[550px]:hidden">
                      <Img
                        src="images/img_frame_9.png"
                        alt="August Image"
                        className="h-[258px] object-contain"
                      />
                      <Text as="p">Jun</Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-3 px-10 max-[1050px]:px-2 max-[550px]:px-2 max-[550px]:hidden">
                      <Img
                        src="images/img_frame_6.png"
                        alt="August Image"
                        className="h-[258px] object-contain"
                      />
                      <Text as="p">Jul</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[280px] rounded-[24px] bg-[url(/public/images/img_timer.png)] bg-cover bg-no-repeat px-14 py-16 max-[1440px]:h-auto max-[1440px]:py-8 max-[1050px]:h-auto max-[1050px]:p-5 max-[550px]:p-4">
              <div className="flex gap-4 max-[1050px]:flex-col">
                <Text
                  size="visa_desktop_headers_h3"
                  as="p"
                  className="w-[52%] leading-[105%] !text-white-0 max-[1440px]:w-[52%] max-[1440px]:text-[48px] max-[1050px]:w-full max-[550px]:text-[38px]"
                >
                  Stay Tuned For 1st<br/>
                  Monthly Draw
                </Text>
                <div className="ml-4 flex w-[48%] gap-4 max-[1050px]:ml-0 max-[1050px]:w-full max-[1050px]:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {timeCounterList.map((d, index) => (
                      <DaysCounter {...d} key={"daysList" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
