import img1 from '../../assets/OPNChain/nanotechnology.png';
import img2 from '../../assets/OPNChain/digital-currency.png';
import img3 from '../../assets/OPNChain/logo-sdk 1.png';
import CheckMark from '../../assets/OPNChain/CheckMark.png';

const cardData = [
  {
    name: 'Bitcoin Security',
    benefits: [
      'Advanced encryption techniques',
      'Resistant to censorship & attacks',
      'Immutable Ledger',
      'Preventing double-spending',
    ],
    gradient: 'from-gray-900 to-gray-700',
    logo: img1,
  },
  {
    name: 'EVM Compatibility',
    benefits: [
      'Advanced encryption techniques',
      'Resistant to censorship & attacks',
      'Immutable Ledger',
      'Preventing double-spending',
    ],
    gradient: 'from-gray-900 to-gray-800',
    logo: img2,
  },
  {
    name: 'Cosmos SDK',
    benefits: [
      'Advanced encryption techniques',
      'Resistant to censorship & attacks',
      'Immutable Ledger',
      'Preventing double-spending',
    ],
    gradient: 'from-indigo-500 to-indigo-400',
    logo: img3,
  },
];

const OPNChainExploreSection = () => {
  return (
    <div className="px-4 max-w-screen-2xl mx-auto relative mt-16">
      <h4 className="text-4xl">OPNChain</h4>
      <p className="mt-4 mb-12 text-xl text-[#7f8c8d] max-w-screen-md">
        Explore an ecosystem where technology serves humanity & empowers people.
      </p>
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b h-full ${card.gradient} text-white-0 p-4 md:p-8 rounded-2xl shadow-lg w-full`}>
            <div className="flex justify-center">
              <img src={card.logo} className="h-10" />
            </div>

            <div className="text-3xl text-center font-semibold my-6 ">
              {card.name}
            </div>
            <ul className="space-y-4">
              {card.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="font-normal flex items-center gap-5 bg-white-0/20 px-5 py-4 rounded-md">
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
