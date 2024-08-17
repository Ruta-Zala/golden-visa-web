
import { Helmet } from "react-helmet";
import Footer from "../../components/FooterMint";
import IcognativeAboutSection from "./IcognativeAboutSection";
import IcognativeHeroSection from "./IcognativeHeroSection";
import IcognativeProductsCard from "./IcognativeProductsCard";
import IcongnativeAboutSection2 from "./IcongnativeAboutSection2";
import IcognativeCardsSection from "./IcognativeCardsSection";
import IcognativeFeatureSection from "./IcognativeFeatureSection";

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
      <IcongnativeAboutSection2 />
      <IcognativeFeatureSection />
      {/* <Footer />  */}
    </>
  );
};
export default GoldenVisaIcognativePage;
