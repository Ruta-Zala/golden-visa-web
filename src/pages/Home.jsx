import Herosections from "../components/herosection/herosections";
import Features from "../components/features/features";
import Partnership from "../components/partership/partnership";
import Productscard from "../components/productscard/productscard";
import Productbig from "../components/products-big/productbig";
import Goldernvisa from "../components/golden-visa-cta/goldernvisa";
import Roadmap from "../components/roadmap/roadmap";
import Footer from "../components/Footer/FooterEl";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="IOPn pioneers a decentralized Web3 ecosystem, empowering users with digital sovereignty through AI and spatial technologies."
        />
        <meta name="keywords" content="IOPn, Web3 Ecosystem, Golden Visa, RAKDAO" />
      </Helmet>
      <Herosections />
      <Features />
      <Partnership />
      <Productscard />
      <Productbig />
      <Goldernvisa />
      {/* <Team /> */}
      <Roadmap />
      <Footer />
    </>
  );
};
export default Home;
