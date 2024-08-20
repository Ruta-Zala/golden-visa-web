import { useState } from 'react';
import icon1 from '../../assets/AI_Icon.png';
import icon2 from '../../assets/Brain_Icon.png';
import icon3 from '../../assets/Cognitive_Icon.png';
import icon4 from '../../assets/Enabling_Icon.png';

const IcognativeAboutSection2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionItems = [
    {
      icon: icon1,
      title: 'AI-Enhanced User Experience',
      description:
        'Delivers personalized and intuitive interactions by leveraging AI to understand user behavior, preferences, and context, resulting in tailored experiences and increased user satisfaction.',
    },
    {
      icon: icon2,
      title: 'Intelligent Assistants & Personalization',
      description:
        'Advanced AI-powered assistants designed to cater to personalized user needs, enhancing productivity and user engagement.',
    },
    {
      icon: icon3,
      title: 'Cognitive Services',
      description:
        'Offering a range of AI-driven cognitive services that support complex decision-making and automate routine tasks.',
    },
    {
      icon: icon4,
      title: 'Enabling New AI-Powered Capabilities',
      description:
        'Unlocking new AI-powered functionalities and capabilities that push the boundaries of innovation within the ecosystem.',
    },
  ];

  return (
    <div className="goldenvisa-main max-w-screen-2xl mx-auto px-4 mt-28 flex flex-col md:flex-row items-stretch">
      <div className="goldenvisacard1 w-full md:w-1/2 pr-4 flex flex-col justify-between">
        <div className="opnchain-pb-text">
          <div className="headline mb-0">
            <h1 className="w-full text-4xl font-medium text-[#08122A]">
              About iCognative
            </h1>
            <p className="opnchain-pb-text-p golden-visa-p opacity-50 text-lg pt-4">
              iCognative serves as the Cognitive pillar of the IOPn Web3
              Ecosystem, focusing on leveraging artificial intelligence and
              machine learning technologies to enhance decision-making processes
              and data analysis within the network.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion w-full md:w-1/2 mt-8 md:mt-0 flex flex-col">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="accordion-item mb-4 flex flex-col flex-grow">
            <div
              className={`accordion-header flex items-center justify-between p-4 rounded-lg shadow-md cursor-pointer ${
                activeIndex === index ? 'bg-gray-50' : 'bg-white'
              }`}
              onClick={() => toggleAccordion(index)}>
              <span className="font-semibold text-lg">{item.title}</span>
              <div className="flex items-center">
                <div
                  className={`icon-container w-12 h-12 flex items-center justify-center rounded-lg ${
                    activeIndex === index ? 'bg-white' : 'bg-gray-50'
                  }`}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/32';
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className={`accordion-content mt-2 p-4 rounded-lg ${
                activeIndex === index ? 'block' : 'hidden'
              }`}>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IcognativeAboutSection2;
