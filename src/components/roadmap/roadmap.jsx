const Roadmap = () => {
  const cardContent = [
    {
      quarter: "Q3 2023",
      subtitle: "Virtual World",
      details: [
        { title: "OPNChain", description: "Devnet Developmen" },
        { title: "OPNVerse", description: "Virtual World Development" },
        { title: "Auto Scaling", description: "" },
        { title: "Virtual And Augmented Reality Integration", description: "" },
      ],
    },
    {
      quarter: "Q4 2023",
      subtitle: "Blockchain",
      details: [
        { title: "OPNChain", description: "Devnet" },
        { title: "OPNWallet", description: "Development" },
        { title: "iCognative", description: "Conceptualisation" },
      ],
    },
    {
      quarter: "Q1 2024",
      subtitle: "Gen Al smart contract",
      details: [
        { title: "OPNChain", description: "Testnet Development" },
        { title: "OPNWallet", description: "Alpha Release" },
        { title: "iCognative", description: "Gen AI for Smart contracts" },
      ],
    },
    {
      quarter: "Q2 2024",
      subtitle: "Gen AI Voice Clones",
      details: [
        { title: "OPNChain", description: "Mainnet Development" },
        { title: "OPNVerse", description: "Native VR Apps for Oculus" },
        { title: "iCognative", description: "Gen AI for Voice Cloning" },
      ],
    },
    {
      quarter: "Q3 2024",
      subtitle: "Gen AI Videos",
      details: [
        { title: "OPNChain", description: "Mainnet Release" },
        {
          title: "OPNVerse",
          description: "Native Spatial Apps on Apple Vision Pro",
        },
        { title: "iCognative", description: "Gen AI for Video generation" },
      ],
    },
    {
      quarter: "Q4 2024",
      subtitle: "iCognative",
      details: [
        {
          title: "OPNVerse",
          description: "Integration of iCognative 3D objects",
        },
        { title: "iCognative", description: "Gen AI for 3D objects" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-start max-w-screen-2xl mx-auto mt-28 px-4">
      <div className="headline w-full px-4">
        <div className="tagline mb-4">
          <p className="inline-block px-3 py-2 bg-[#070b0f] text-white-0 rounded-2xl text-sm mb-2.5 font-extralight">
            Our Process
          </p>
        </div>
        <h1 className="w-full text-4xl font-medium text-[#08122A] ">Roadmap</h1>
      </div>
      <div className="roadmap-card-cont w-full overflow-x-auto pb-5">
        <div className="flex justify-start items-stretch flex-nowrap gap-5">
          {cardContent.map((item, index) => (
            <div
              className="bg-[#e7eff8] text-black-0 rounded-xl shadow-lg p-5 w-full max-w-80 flex-shrink-0 transition-all ease-linear duration-500 hover:bg-[#0d1b2a] hover:text-white-0 group"
              key={index}
            >
              <div className="flex justify-between items-center mb-2.5 text-lg text-black-0 bg-white-0 py-2.5 px-5 rounded-3xl">
                <span className="font-medium">{item.quarter}</span>
                <span className="text-base text-gray-400">{item.subtitle}</span>
              </div>
              <div className="text-sm">
                {item.details.map((itm, idx) => (
                  <p key={idx} className="mb-6">
                    <strong className="block text-black-0 font-medium text-xl pt-1 group-hover:text-white-0">
                      {itm.title}
                    </strong>
                    <span className="text-base text-gray-400">
                      {itm.description}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
