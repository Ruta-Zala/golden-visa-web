import "./productscard.css";
// import cardimg1 from "/src/assets/productcard/card1.jpeg";
// import cardimg2 from "/src/assets/productcard/card2.jpeg";
// import cardimg3 from "/src/assets/productcard/card3.jpeg";

import cardimg1 from "/src/assets/productcard/card-1.png";
import cardimg2 from "/src/assets/productcard/card-2.png";
import cardimg3 from "/src/assets/productcard/card-3.png";

const Productscard = () => {
  const cardData = [
    {
      tag: "Decentralised",
      title: "OPNChain",
      description: [
        "Embraces Blockchain to enable digital sovereignty and permissionless innovation.",
        "Provides decentralized computing, storage, and identity solutions.",
        "Puts data ownership and control back into the hands of users.",
      ],
      // "A high-performance, environmentally sustainable blockchain that supports censorship-resistant and tamper-proof applications, offering a foundation for decentralized computing and digital asset transactions.",
      image: cardimg1,
    },
    {
      tag: "Cognitive",
      title: "iCognitive",
      description: [
        "Leverages artificial intelligence to enhance the user experience.",
        "Provides intelligent assistants, personalization, and cognitive services.",
        "Enables new AI-powered capabilities and applications within the IOPn ecosystem.",
      ],
      // "A platform enabling users to build applications without coding, leveraging modular components and AI-enhanced development tools.",
      image: cardimg2,
    },
    {
      tag: "Spatial",
      title: "OPNVerse",
      description: [
        "Utilizes Spatial technologies for user experience.",
        "Enables the creation of immersive, spatial virtual worlds.",
        "Allows users to experience and interact with digital environments in new ways.",
      ],
      // "A hyper-realistic, AI-empowered, dynamic and immersive platform revolutionizing Web3 experience, empowering entities, fostering community connectivity within a connected digital ecosystem.",
      image: cardimg3,
    },
  ];

  return (
    <div className="Productscard-container max-w-screen-2xl mx-auto px-4 mt-28">
      {/* <div className="headline px-4 mb-0">
        <div className="tagline mb-4">
          <p className="inline-block px-3 py-2 bg-[#070b0f] text-white-0 rounded-2xl text-sm mb-2.5 font-extralight">
            Pillars
          </p>
        </div>
        <h1 className="w-full text-4xl font-medium text-[#08122A]">
          Discover IOPn
        </h1>
        <p className="opacity-50 text-lg mt-4 mb-0">
          Explore an ecosystem where technology serves <br /> humanity &
          empowers people.
        </p>
      </div> */}
      <div className="headline px-4 mb-0">
        <div className="tagline mb-4">
          <p className="inline-block px-3 py-2 bg-[#070b0f] text-white-0 rounded-2xl text-sm mb-2.5 font-extralight">
            Pillars
          </p>
        </div>
      </div>
      <div className="card-main">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card-container card${index + 1}`}
            style={{
              // backgroundImage: `linear-gradient(180deg, #082186, #08218600), url(${card.image})`,
              backgroundImage: `url(${card.image})`,
            }}
          >
            <div className="card-content">
              <div className="tagline mb-0">
                <p className="inline-block px-3 py-2 bg-[#fff] !text-black-0 rounded-2xl text-sm mb-2.5 font-extralight">
                  {card.tag}
                </p>
              </div>
              <p className="card-description opacity-90 mt-6">
                <ul>
                  {card.description.map((element, index) => (
                    <li key={index} className="py-1 text-[20px]">
                      {element}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
            <div className="card-icon-container">
              <div className="card-icon">→</div>
            </div>
          </div>
        ))}
      </div>

      <div className="headline px-4 mb-0">
        <h1 className="w-full text-4xl font-medium text-[#08122A]">
          Discover IOPn
        </h1>
        <p className="opacity-50 text-lg mt-4 mb-0">
          Explore an ecosystem where technology serves <br /> humanity &
          empowers people.
        </p>
      </div>
    </div>
  );
};

export default Productscard;
