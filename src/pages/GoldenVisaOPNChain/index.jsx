import { Helmet } from "react-helmet";
import OPNChainDeveloperSection from "./OPNChainDeveloperSection";
import OPNChainUseCaseSection from "./OPNChainUseCaseSection";
import OPNChainHeroSection from "./OPNChainHeroSection";
import OPNChainFeatureSection from "./OPNChainFeatureSection";
import OPNChainExploreSection from "./OPNChainExploreSection";
import Footer from "../../components/Footer/FooterEl";

export default function GoldenVisaOPNChainPage() {
  return (
    <>
      <Helmet>
        <title>
          OPN Chain - Unlock Your Future with Golden Visa Chances
        </title>
        <meta
          name="description"
          content="Join the IOPn ecosystem and mint OPN tokens for a chance to win a UAE Gloden Visa. Invest in your future with exclusive access and global recognition. Act now and be part of the GenZ Talent Program."
        />
        <meta
          name="description"
          content="Unlock endless opportunities with a UAE Gloden Visa"
        />
        <meta name="keywords" content="IOPn, OPN Token, Minting, Fair Minting" />
      </Helmet>
      <OPNChainHeroSection />
      <OPNChainFeatureSection />
      <OPNChainExploreSection />
      {/* <OPNChainUseCaseSection /> */}
      <OPNChainDeveloperSection />
      <Footer />
    </>
  );
}
