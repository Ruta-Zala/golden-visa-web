import { handleScrollToTop } from "../../utils/helper";
import "./productbig.css";
const Productbig = () => {
  return (
    <div className="main-porductbig max-w-screen-2xl mx-auto px-4 mt-28">
      <div className="opnchain-pb">
        <div className="opnchain-pb-textblock">
          <div className="opnchain-pb-text">
            <div className="headline mb-0">
              <div className="tagline">
                <p className="inline-block px-3 py-2 bg-[#070b0f] text-white-0 rounded-2xl text-sm mb-2.5 font-extralight">
                  Decentralised
                </p>
              </div>
              <h1 className="w-full text-4xl font-medium text-[#08122A]">
                OPNChain
              </h1>
              <p className="opnchain-pb-text-p text-lg opacity-70 mt-5">
                Experience a high-performance blockchain that prioritizes
                censorship resistance, environmental sustainability, and user
                empowerment.
              </p>
            </div>
            <a
              className="link-pb cursor-pointer"
              href="/#/OPNChain"
              onClick={handleScrollToTop}
            >
              <li className="font-medium">Learn More</li>
              <div className="link-pb-arrow rotate-[-45deg] text-2xl">→</div>
            </a>
          </div>
        </div>
      </div>

      <div className="metverse-icognitive">
        <div className="im-minicards pt-[100px] md:pt-[60px]">
          <div className="minibox-text justify-end md:justify-center">
            <div className="headline">
              <div className="tagline mb-6">
                <p className="inline-block px-3 py-2 bg-[#fff] !text-black-0 rounded-2xl text-sm mb-2.5 font-extralight">
                  Cognitive
                </p>
              </div>
              <h1 className="openchanh1 w-full text-4xl font-medium">
                iCognative
              </h1>
              <p className="opnchain-pb-text-p2 text-lg opacity-80 pt-4 max-w-[350px] md:min-h-[200px]">
                Ignite your creativity with iCognative, where anyone can build
                astonishing applications using no-code tools and modular
                compo-nents. Enriched with AI, iCognative is where your ideas
                come to life.
              </p>
            </div>
            <a
              className="link-pb cursor-pointer"
              href="/#/Icognative"
              onClick={handleScrollToTop}
            >
              <li className="li2 font-medium">Learn More</li>
              <div className="link-pb-arrow arr2 rotate-[-45deg] text-2xl">
                →
              </div>
            </a>
          </div>
        </div>

        <div className="im-minicards im-minicards-2 pt-[100px] md:pt-[60px]">
          <div className="minibox-text justify-end md:justify-center">
            <div className="headline">
              <div className="tagline mb-6">
                <p className="inline-block px-3 py-2 bg-[#fff] !text-black-0 rounded-2xl text-sm mb-2.5 font-extralight">
                  Spatial
                </p>
              </div>
              <h1 className="openchanh1 w-full text-4xl font-medium">
                OPNVerse
              </h1>
              <p className="opnchain-pb-text-p2 text-lg opacity-80 pt-4 max-w-[350px] md:min-h-[200px]">
                Step into an immersive experience with OPNVerse, where the
                boundaries between digital and physical blur, offering dynamic,
                interconnected spaces for play, work, and exploration.
              </p>
            </div>
            <a
              className="link-pb cursor-pointer"
              href="/#/OPNVerse"
              onClick={handleScrollToTop}
            >
              <li className="li2 font-medium">Learn More</li>
              <div className="link-pb-arrow arr2 rotate-[-45deg] text-2xl">
                →
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productbig;
