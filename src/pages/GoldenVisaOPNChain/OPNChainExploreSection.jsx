import img1 from "../../assets/OPNChain/nanotechnology.png";
import img2 from "../../assets/OPNChain/digital-currency.png";
import img3 from "../../assets/OPNChain/logo-sdk 1.png";
import cradsBg from "../../assets/OPNChain/cards-bg.png";
import CheckMark from "../../assets/OPNChain/CheckMark.png";
import './opnChain.css'

const cardData = [
  {
    name: "Bitcoin Security",
    benefits: [
      "Advanced encryption techniques",
      "Resistant to censorship & attacks",
      "Immutable Ledger",
      "Preventing double-spending",
    ],
    logo: img1,
    className: "mb-[85px]"
  },
  {
    name: "EVM Compatibility",
    benefits: [
      "Advanced encryption techniques",
      "Resistant to censorship & attacks",
      "Immutable Ledger",
      "Preventing double-spending",
    ],
    logo: img2,
    className: "mt-5"
  },
  {
    name: "Cosmos SDK",
    benefits: [
      "Advanced encryption techniques",
      "Resistant to censorship & attacks",
      "Immutable Ledger",
      "Preventing double-spending",
    ],
    logo: img3,
    className: "mt-[85px]"
  },
];

const OverlappingCards = () => {
  return (
    <div className="hidden lg:flex justify-around items-center h-[600px] relative opn-chain-explore-card-bg rounded-2xl mb-[120px]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ease-in-out  text-white-0  transform hover:scale-105 bg-transparent p-4 md:p-2 xl:p-8 ${card.className || ''} `}
            style={{
              zIndex: cardData.length - index,
            }}
          >
            <div className="flex justify-center">
              <img src={card.logo} className="h-10" />
            </div>

            <div className="text-3xl md:text-2xl lg:text-3xl text-center font-semibold my-6 ">
              {card.name}
            </div>
            <ul className="space-y-4">
              {card.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="font-normal flex items-center gap-5 bg-white-0/20 md:px-2 xl:px-5 py-4 rounded-md"
                >
                  <img src={CheckMark} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

const OPNChainExploreSection = () => {
  return (
    <div className="px-4 max-w-screen-2xl mx-auto relative mt-16">
      <h4 className="text-4xl">OPNChain</h4>
      <p className="mt-4 mb-12 text-xl text-[#7f8c8d] max-w-screen-md">
        Explore an ecosystem where technology serves <br /> humanity & empowers
        people.
      </p>
      
      <OverlappingCards/>
      <div className="flex lg:hidden flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-4 lg::space-x-8 relative">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={` h-full opn-card${index+1} text-white-0 p-4 md:p-2 lg:p-8 rounded-2xl shadow-lg w-full self-stretch z-10`}
          >
            <div className="flex justify-center">
              <img src={card.logo} className="h-10" />
            </div>

            <div className="text-3xl md:text-2xl lg:text-3xl text-center font-semibold my-6 ">
              {card.name}
            </div>
            <ul className="space-y-4">
              {card.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="font-normal flex items-center gap-5 bg-white-0/20 px-5 py-4 rounded-md"
                >
                  <img src={CheckMark} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OPNChainExploreSection;
