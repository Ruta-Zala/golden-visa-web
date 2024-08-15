import { Button } from "../../components/ButtonGenz";
import { Img } from "../../components/ImgMint";
import { Heading } from "../../components/HeadingMint";
import { Text } from "../../components/Text";
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
    benefitQuestion: "What are the benefits of the program?",
  },
  {
    benefitQuestion: "How can I participate?",
  },
];

export default function FAQSection() {
  return (
    <>
      {/* f a q section */}
      <div className="mt-[180px] flex justify-center self-stretch">
        <div className="container-xs flex justify-center gap-4 max-[1440px]:px-5 max-[1050px]:flex-col max-[1050px]:px-5">
          <div className="flex w-[42%] flex-col items-start gap-5 rounded-[20px] bg-light_base py-12 pl-16 pr-14 max-[1440px]:pl-8 max-[1050px]:w-full max-[1050px]:p-5 max-[550px]:p-4">
            <Button
              size="xs"
              className="mt-3.5 min-w-[64px] rounded-[18px] font-medium uppercase"
            >
              FAQ
            </Button>
            <Text
              size="visa_desktop_headers_h2"
              as="p"
              className="max-[1440px]:text-[48px]"
            >
              Questions
            </Text>
          </div>
          <Accordion
            preExpanded={[0]}
            className="flex flex-1 flex-col gap-4 max-[1050px]:w-full max-[1050px]:self-stretch"
          >
            {accordionData.map((d, i) => (
              <AccordionItem uuid={i} key={`Questions Row${i}`}>
                <div className="flex flex-1 flex-col gap-[30px] rounded-[20px] border border-solid border-gray-300 bg-white-0 p-5 shadow-md">
                  <AccordionItemHeading className="w-full">
                    <AccordionItemButton>
                      <AccordionItemState>
                        {(props) => (
                          <>
                            <div className="flex items-center justify-between gap-5 py-2.5">
                              <Heading size="visa_desktop_headers_h5" as="h2">
                                {d.benefitQuestion}
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
                                  alt="Collapse Icon"
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
                    <div className="mb-[34px] flex">
                      <Text
                        size="visa_desktop_body_text_20"
                        as="p"
                        className="!text-dark-1"
                      >
                        Explore the various advantages of the Web3 Entrepreneur
                        Program
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
