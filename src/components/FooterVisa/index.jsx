import { Img } from "../Img";
import { Text } from "../Text";
import PropTypes from "prop-types";
import logo from "../../assets/logo-white.png";

export default function FooterVisa({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex bg-dark-0 rounded-[28px] py-3 px-3`}
    >
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row w-full items-center justify-between">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center">
              {" "}
              {/* <Img
                src="images/img_footer_logo.png"
                alt="Footer Logo"
                className="h-14 w-56 object-contain"
              /> */}
              <Img
                src={logo}
                alt="Footer Logo"
                className="w-16 ps-2 object-contain"
              />
            </div>
            <div className="flex justify-between items-center gap-5 md:w-full flex-col md:flex-row">
              <div className="flex w-full items-center gap-3">
                <Text as="p" className="!text-white-2">
                  Email:
                </Text>
                <Text as="p" className="!text-white-0">
                  info@iopn.io
                </Text>
              </div>
              <div className="flex w-full items-center justify-center gap-3">
                <Text as="p" className="!text-white-2">
                  Social:
                </Text>
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://www.instagram.com/internet_of_people_/"
                    target="_blank"
                  >
                    <Img
                      src="images/img_info.svg"
                      alt="Info Icon"
                      className="h-[18px] w-[18px]"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/iopn/"
                    target="_blank"
                  >
                    <Img
                      src="images/img_link.svg"
                      alt="Link Icon"
                      className="h-[20px]"
                    />
                  </a>
                  <a href="https://x.com/IOPn_io" target="_blank">
                    <Img
                      src="images/img_airplane.svg"
                      alt="Airplane Icon"
                      className="h-[16px] w-[16px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full self-stretch bg-white-a700_26 mt-3" />
        </div>
        <Text
          size="iopn_desktop_body_text_16"
          as="p"
          className="mb-6 !text-white-2"
        >
          ©2024 IOPn. All right reserved
        </Text>
      </div>
    </footer>
  );
}

FooterVisa.propTypes = {
  className: PropTypes.string,
};
