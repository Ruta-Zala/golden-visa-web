import { Helmet } from "react-helmet";
import IcognativeAboutSection from "./IcognativeAboutSection";
import IcognativeHeroSection from "./IcognativeHeroSection";
import IcognativeProductsCard from "./IcognativeProductsCard";
import IcognativeAboutSection2 from "./IcognativeAboutSection2";
import IcognativeCardsSection from "./IcognativeCardsSection";
import IcognativeFeatureSection from "./IcognativeFeatureSection";
import footerImg from "../../assets/icognative_footer.png";
// import IcognativeUsecaseSection from "./IcognativeUsecaseSection";
// import IcognativeSupportSection from "./IcognativeSupportSection";
import Footer from "../../components/Footer/FooterEl";
import { Button } from "../../components/Button";

const GoldenVisaIcognativePage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="IOPn pioneers a decentralized Web3 ecosystem, empowering users with digital sovereignty through AI and spatial technologies."
        />
        <meta
          name="keywords"
          content="IOPn, Web3 Ecosystem, Golden Visa, RAKDAO"
        />
      </Helmet>
      <IcognativeHeroSection />
      <IcognativeAboutSection />
      <IcognativeCardsSection />
      <IcognativeProductsCard />
      <IcognativeAboutSection2 />
      <IcognativeFeatureSection />
      {/* <IcognativeUsecaseSection /> */}
      {/* <IcognativeSupportSection /> */}
      <Footer
        footerImg={footerImg}
        title="Get Started with iCognative"
        summary="Building the future of Web3 together. We'd love to hear from developers, creators, and anyone passionate about a more open internet. Feel free to reach out with any questions, feedback, or collaboration ideas."
        footerButton={
          <button className="flex justify-center  w-full xl:w-3/4 bg-gradient3 items-center gap-2.5 border-blue-900_1e border border-solid  text-white-0 rounded-[36px] p-1 md:p-3 bg-white-0">
            Join the AI-Powered Web3 Revolution
            <div
              className="w-[36px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium text-sm px-2 py-2 rounded-3xl max-w-64"
              style={{
                backgroundColor: "white",
                padding: "12px",
              }}
            >
              <img
                src="images/img_arrowleft_blue_800.svg"
                alt="testImg"
                loading="lazy"
              />
            </div>
          </button>
        }
      />
    </>
  );
};
export default GoldenVisaIcognativePage;
