import "./goldenvisa.css";
const Goldernvisa = () => {
  return (
    <div className="goldenvisa-main max-w-screen-2xl mx-auto px-4 mt-28">
      <div className="goldenvisacard1">
        <div className="opnchain-pb-text">
          <div className="headline mb-0">
            <div className="tagline">
              <p className="inline-block px-3 py-2 bg-[#070b0f] text-white-0 rounded-2xl text-sm mb-2.5 font-extralight">
                About us
              </p>
            </div>
            <h1 className="w-full text-4xl font-medium text-[#08122A] ">
              An Integrated Web3 Ecosystem
            </h1>
            <p className="opnchain-pb-text-p golden-visa-p opacity-50 text-lg pt-4">
              We are pioneering a decentralized, cognitive, and spatial web3
              ecosystem. Our blockchain-based platform empowers users with
              digital sovereignty and data ownership. Leveraging AI, we offer
              intelligent assistants and personalized experiences. Through
              spatial technologies, we create immersive virtual worlds,
              revolutionizing how users interact with digital environments.
            </p>
          </div>
          <div className="link-pb">
            <li className="font-medium">Learn More</li>
            <div className="link-pb-arrow rotate-[-45deg]">→</div>
          </div>
        </div>
      </div>

      <div className="goldenvisaimg">
        {/* <img src={goldenimg} alt="" /> */}
      </div>
    </div>
  );
};

export default Goldernvisa;
