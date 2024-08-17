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
    benefitQuestion: "What is the Web3 Entrepreneur Program?",
    benefitAnswer:
      "The Web3 Entrepreneur Program is an initiative designed to attract and support blockchain and cryptocurrency entrepreneurs seeking residence in UAE, offering them opportunities to establish and grow their businesses in a supportive and innovative environment.",
  },
  {
    benefitQuestion:
      "What are the key benefits of participating in the program?",
    benefitAnswer: (
      <>
        <Text size="visa_desktop_body_text_20" as="p" className="!text-dark-1">
          Participants receive numerous benefits including:
        </Text>
        <br/>
        <ul className="list-disc px-5">
          <li>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="!text-dark-1"
            >
              Eligibility for a 10-year UAE Golden Visa.
            </Text>
          </li>
          <li>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="!text-dark-1"
            >
              Business license or Freelancer permit.
            </Text>
          </li>
          <li>
            {" "}
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="!text-dark-1"
            >
              Healthcare coverage.
            </Text>
          </li>
        </ul>
      </>
    ),
  },
  {
    benefitQuestion: "How do I participate in the program?",
    benefitAnswer:
      "To participate, you need to acquire and stake required OPN tokens through the program portal, lock them up for three years, and then you will be eligible for the benefits including the UAE Golden Visa.",
  },
  {
    benefitQuestion: "What is the process for staking OPN tokens?",
    benefitAnswer:
      "The staking process involves using a decentralized smart contract system to lock up your tokens securely for a three-year period.",
  },
  {
    benefitQuestion: "What happens after the three-year staking period?",
    benefitAnswer:
      "After the three-year staking period, you will receive back your staked OPN tokens.",
  },
  {
    benefitQuestion: "Can my family also benefit from the UAE Golden Visa?",
    benefitAnswer:
      "Yes, the UAE Golden Visa can be extended to direct family members and dependents, providing long-term stability and security for your family.",
  },
  {
    benefitQuestion: "What advantages does the UAE Golden Visa provide?",
    benefitAnswer:
      "The UAE Golden Visa offers long-term stability, the ability to live, work, and study without a national sponsor, flexible entry and exit from the UAE, and can be extended to family members.",
  },
  {
    benefitQuestion: "What is RAK DAO and how does it relate to the program?",
    benefitAnswer:
      "RAK DAO is the world's first Free Zone with Common Law features for digital assets companies, partnering with IOPn to position Ras al Khaimah as a global Web3 hub. The collaboration aims to create a thriving ecosystem for Web3 professionals in the UAE.",
  },
  {
    benefitQuestion: "Is healthcare coverage included in the program?",
    benefitAnswer:
      "Yes, healthcare coverage is provided to ensure entrepreneurs can focus on their ventures without worrying about medical expenses.",
  },
];

export default function FAQSection() {
  return (
    <>
      {/* f a q section */}
      <div className="mt-[80px] md:mt-[100px] xl:mt-[180px] flex justify-center self-stretch">
        <div className="container-xs flex justify-center gap-4 max-[1440px]:px-5 max-[1050px]:flex-col max-[1050px]:px-5">
          <div className="flex w-[42%] max-h-[500px] flex-col items-start gap-5 rounded-[20px] bg-light_base py-12 pl-16 pr-14 max-[1440px]:pl-8 max-[1050px]:w-full max-[1050px]:p-5 max-[550px]:p-4">
            <Button
              size="xs"
              className="mt-3.5 min-w-[64px] rounded-[18px] font-medium uppercase border border-dark-0"
            >
              FAQ
            </Button>
            <Text
              size="visa_headers_h2"
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
                <div className="flex flex-1 flex-col gap-[30px] rounded-[20px] border border-solid border-gray-300 bg-white-0 p-5 shadow-lg">
                  <AccordionItemHeading className="w-full">
                    <AccordionItemButton>
                      <AccordionItemState>
                        {(props) => (
                          <>
                            <div className="flex items-center justify-between gap-5 py-2.5">
                              <Heading
                                size="visa_desktop_headers_h5_bold"
                                as="h2"
                              >
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
                    <div className="mb-[34px] flex flex-col">
                      {typeof d.benefitAnswer === "string" ? (
                        <Text
                          size="visa_desktop_body_text_20"
                          as="p"
                          className="!text-dark-1"
                        >
                          {d.benefitAnswer}
                        </Text>
                      ) : (
                        d.benefitAnswer
                      )}
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
