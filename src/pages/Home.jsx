import Herosections from "../components/herosection/herosections";
import Features from "../components/features/features";
import Partnership from "../components/partership/partnership";
import Productscard from "../components/productscard/productscard";
import Productbig from "../components/products-big/productbig";
import Goldernvisa from "../components/golden-visa-cta/goldernvisa";
import Roadmap from "../components/roadmap/roadmap";
import Footer from "../components/Footer/FooterEl";
const Home = () => {
  return (
    <>
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
