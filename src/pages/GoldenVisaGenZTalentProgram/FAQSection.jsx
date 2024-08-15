import { Text } from "../../components/TextGenz/index";
import { Img } from "../../components/ImgGenz/index";
import { Heading } from "../../components/HeadingGenz/index";
import { Button } from "../../components/ButtonGenz/index";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const accordionData = [
  {
    questionText: "What is the Monthly Draw?",
  },
  {
    questionText: "How can I participate?",
  },
  {
    questionText: "When is the deadline for entry?",
  },
  {
    questionText: "How are winners selected?",
  },
  {
    questionText: " Can I participate multiple times?",
  },
];

export default function FAQSection() {
  return (
    <>
      {/* f a q section */}
      <div className="mt-[180px] flex justify-center self-stretch">
        <div className="container-xs flex items-start justify-center gap-4 max-[1440px]:px-5 max-[1050px]:flex-col max-[1050px]:px-5">
          <div className="flex w-[42%] flex-col gap-[130px] self-center rounded-[20px] bg-light_base px-14 py-16 max-[1440px]:gap-[97px] max-[1440px]:py-8 max-[1050px]:w-full max-[1050px]:gap-[97px] max-[1050px]:p-5 max-[550px]:gap-[65px] max-[550px]:p-4">
            <div className="flex flex-col items-start gap-[30px]">
              <Button
                size="sm"
                color="undefined_undefined"
                className="flex rounded-[18px] border border-solid border-dark-0 p-1.5"
              >
                FAQ
              </Button>
              <Text
                size="visa_desktop_headers_h3"
                as="p"
                className="w-full leading-[105%] !text-dark-0 max-[1440px]:text-[48px] max-[550px]:text-[35px] max-[550px]:leading-[100%]"
              >
                Frequent<br/> Questions
              </Text>
            </div>
            <div className="flex items-center gap-2.5">
              <Heading
                size="iopn_desktop_navigation_button"
                as="h2"
                className="!text-accent-black"
              >
                More questions
              </Heading>
              <Button
                size="xs"
                variant="fill"
                shape="circle"
                className="w-[36px] !rounded-[18px] bg-slate-900"
              >
                <Img src="images/img_arrowleft_white_0.svg" />
              </Button>
            </div>
          </div>
          <Accordion
            preExpanded={[0]}
            className="flex flex-1 flex-col gap-4 max-[1050px]:w-full max-[1050px]:self-stretch"
          >
            {accordionData.map((d, i) => (
              <AccordionItem uuid={i} key={`questions${i}`}>
                <div className="flex flex-1 flex-col gap-3 rounded-[20px] border border-solid border-gray-300 bg-white-0 px-4 py-2 shadow-lg">
                  <AccordionItemHeading className="w-full">
                    <AccordionItemButton>
                      <AccordionItemState>
                        {(props) => (
                          <>
                            <div className="flex flex-wrap items-center justify-between gap-5 py-2.5">
                              <Heading
                                size="visa_desktop_headers_h5"
                                as="h3"
                                className="!text-dark-0 max-[550px]:text-[18px]"
                              >
                                {d.questionText}
                              </Heading>
                              {props?.expanded ? (
                                <Img
                                  src="images/img_icon.svg"
                                  alt="Expand Icon"
                                  className="h-[20px] w-[20px]"
                                />
                              ) : (
                                <Img
                                  src="images/img_plus.svg"
                                  alt="Plus Icon"
                                  className="h-[20px] w-[20px]"
                                />
                              )}
                            </div>
                          </>
                        )}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="flex">
                      <Text
                        size="visa_desktop_body_text_20"
                        as="p"
                        className="!text-dark-1 max-[550px]:text-[16px]"
                      >
                        The Monthly Draw is a chance for all users to win
                        exciting prizes every month.
                      </Text>
                    </div>
                  </AccordionItemPanel>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
