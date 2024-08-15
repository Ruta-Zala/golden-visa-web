import { Button } from "../../components/ButtonGenz";
import { Img } from "../../components/ImgMint";
import { Heading } from "../../components/HeadingMint";
import { Text } from "../../components/Text";
import { Input } from "../../components/InputGenz";
import React from "react";

export default function PurchaseSection() {
  return (
    <>
      {/* purchase section */}
      <div className="mt-[180px] flex justify-center self-stretch">
        <div className="container-xs flex items-start justify-center max-[1440px]:px-5 max-[1050px]:flex-col max-[1050px]:px-5">
          <div className="flex w-full flex-col">
            <div className="flex flex-col items-start gap-[18px]">
              <Button
                size="xs"
                className="min-w-[170px] rounded-[18px] font-medium uppercase border border-dark-0"
              >
                Purchase token
              </Button>
              <Text
                size="visa_desktop_headers_h2"
                as="p"
                className="text-[72px]"
              >
                Purchase Tokens
              </Text>
            </div>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-1 w-[80%] leading-[140%] !text-dark-2 max-[1440px]:w-full max-[1050px]:w-full"
            >
              Our token&#39;s minting journey spans 500 days, ensuring a steady
              and controlled release into the market. This gradual approach
              helps maintain price stability and prevents market manipulation.
            </Text>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-5 w-[80%] leading-[140%] max-[1440px]:w-full max-[1050px]:w-full"
            >
              <span>Act fast! Only&nbsp;</span>
              <span className="font-medium">
                120.75K OPN tokens remain for today&#39;s mint. Don&#39;t miss
                out on this opportunity. Daily cap enforced for fairness.
              </span>
            </Text>
          </div>
          <div className="relative h-[720px] w-full self-center rounded-[20px] bg-light_base">
            <Img
              src="images/img_icon_star_glossy_glass_style_442x384.png"
              alt="Star Image"
              className="absolute right-0 top-0 m-auto h-[442px] w-[52%] object-contain opacity-50"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-6 px-12 max-[1050px]:px-5 max-[550px]:px-4">
              <div className="flex flex-col items-start gap-2">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h2"
                  className="!text-grey"
                >
                  Your name
                </Heading>
                <Input
                  shape="round"
                  name="Name Input"
                  placeholder={`John Doe`}
                  className="self-stretch max-[1050px]:text-[20px]"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h3"
                  className="!text-grey"
                >
                  You email
                </Heading>
                <Input
                  shape="round"
                  type="email"
                  name="Email Input"
                  placeholder={`johndoe@gmail.com`}
                  className="self-stretch max-[1050px]:text-[20px]"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h4"
                  className="!text-grey"
                >
                  OPN amount to stake
                </Heading>
                <Input
                  shape="round"
                  name="Amount Input"
                  placeholder={`OPN 12.780`}
                  suffix={
                    <Img
                      src="images/img_ellipse_362.png"
                      alt="Ellipse 362"
                      className="h-[26px] w-[32px]"
                    />
                  }
                  className="gap-4 self-stretch max-[1050px]:text-[20px]"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Heading
                  size="visa_desktop_body_label_16"
                  as="h5"
                  className="!text-grey"
                >
                  Current usd Value
                </Heading>
                <Input
                  color="white_1"
                  shape="round"
                  name="Value Input"
                  placeholder={`\\$ 150.700`}
                  suffix={
                    <Img
                      src="images/img_ellipse_362_26x32.png"
                      alt="Ellipse 362"
                      className="h-[26px] w-[32px]"
                    />
                  }
                  className="gap-4 self-stretch max-[1050px]:text-[20px]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  variant="gradient"
                  shape="round"
                  color="blue_700_blue_800_01"
                  rightIcon={
                    <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                      <Img
                        src="images/img_arrowleft_accent_blue.svg"
                        alt="Arrow Left"
                        className="h-[18px] w-[18px]"
                      />
                    </div>
                  }
                  className="gap-[34px] self-stretch font-medium capitalize bg-gradient5 text-white-0"
                >
                  Stake tokens
                </Button>
                <Button
                  color="accent_dark_blue"
                  shape="round"
                  rightIcon={
                    <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-accent-dark_blue">
                      <Img
                        src="images/img_arrowleft_white_0.svg"
                        alt="Arrow Left"
                        className="h-[18px] w-[18px]"
                      />
                    </div>
                  }
                  className="gap-[34px] self-stretch font-medium capitalize"
                >
                  Buy Boost
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
