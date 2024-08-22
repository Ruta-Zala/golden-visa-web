
import { Helmet } from "react-helmet";
import IcognativeAboutSection from "./IcognativeAboutSection";
import IcognativeHeroSection from "./IcognativeHeroSection";
import IcognativeProductsCard from "./IcognativeProductsCard";
import IcognativeAboutSection2 from "./IcognativeAboutSection2";
import IcognativeCardsSection from "./IcognativeCardsSection";
import IcognativeFeatureSection from "./IcognativeFeatureSection";
import IcognativeUsecaseSection from "./IcognativeUsecaseSection";
// import IcognativeSupportSection from "./IcognativeSupportSection";
import Footer from "../../components/Footer/FooterEl";

const GoldenVisaIcognativePage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="IOPn pioneers a decentralized Web3 ecosystem, empowering users with digital sovereignty through AI and spatial technologies."
        />
        <meta name="keywords" content="IOPn, Web3 Ecosystem, Golden Visa, RAKDAO" />
      </Helmet>
      <IcognativeHeroSection />
      <IcognativeAboutSection />
      <IcognativeCardsSection />
      <IcognativeProductsCard />
      <IcognativeAboutSection2 />
      <IcognativeFeatureSection />
      {/* <IcognativeUsecaseSection /> */}
      {/* <IcognativeSupportSection /> */}
      <Footer />
    </>
  );
};
export default GoldenVisaIcognativePage;
