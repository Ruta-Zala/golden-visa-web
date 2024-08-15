import { Img } from "../Img";
import { Heading } from "../Heading";
import PropTypes from "prop-types";

IndustryInnovationProfile.propTypes = {
  className: PropTypes.string,
  industryImage: PropTypes.string,
  careerGrowthText: PropTypes.string,
  accessTopTierText: PropTypes.any,
};

export default function IndustryInnovationProfile({
  industryImage = "images/img_industry_innova.svg",
  careerGrowthText = "Career Growth",
  accessTopTierText = "Access top tier infrastructure and secure high level positions",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col justify-center w-full gap-20 px-12 py-[46px] lg:gap-20 md:gap-[60px] md:p-5 sm:gap-10 sm:p-4 border-blue-900_1e border border-solid bg-gradient shadow-xs rounded-[20px]`}
    >
      <Img
        src={industryImage}
        alt="Industry Image"
        className="h-[100px] w-[100px]"
      />
      <div className="flex flex-col items-start gap-4 self-stretch">
        <Heading size="visa_body_label_16" as="p" className="!text-dark-1">
          {careerGrowthText}
        </Heading>
        <Heading
          size="visa_headers_h4"
          as="p"
          className="w-full leading-[120%]"
        >
          {accessTopTierText}
        </Heading>
      </div>
    </div>
  );
}
