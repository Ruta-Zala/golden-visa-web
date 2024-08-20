import logo from '../../assets/header-logo.png';
const OPNChainFooterSection = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center p-0 gap-4 mt-28 mb-5 w-full max-w-screen-2xl mx-auto px-4">
      <footer className="flex flex-col items-center p-0 bg-[#e2e8f0] rounded-2xl w-full">
        <div className="flex flex-col md:flex-row justify-between p-9 w-full border-b border-[#08122A26]">
          <div className="flex flex-1 flex-col items-start p-0">
            <div className="logoimg mb-6">
              <img src={logo} alt="" />
            </div>
            <p className="max-w-2xl w-full text-base font-normal opacity-50 text-[#08122a]">
              Embrace the future of Web3 with IOPn. Whether you&apos;re looking
              to innovate, participate to life changing opportunities, or simply
              explore, our ecosystem is where your digital aspirations become
              reality.
            </p>
          </div>
          <div className="flex flex-2 flex-col lg:flex-row justify-end items-center gap-4 h-fit mt-2">
            {/* <a href="/#/golden-visa" onClick={handleLinkClick} >
                                <span className="text-base font-normal w-30 tracking-wide text-[#08122a] cursor-pointer hover:underline hover:text-[#0073e6] ">
                                    UAE Golden Visa
                                </span>
                            </a> */}
            <a href="/#/OPNChain" onClick={handleLinkClick}>
              <span className="text-base font-normal w-30 tracking-wide text-[#08122a] cursor-pointer hover:underline hover:text-[#0073e6]">
                OPNChain
              </span>
            </a>
            <span className="text-base font-normal w-30 tracking-wide text-[#08122a] cursor-pointer hover:underline hover:text-[#0073e6]">
              iCognative
            </span>
            {/* <span className="text-base font-normal w-30 tracking-wide text-[#08122a] cursor-pointer hover:underline hover:text-[#0073e6]">
                                OPN Token
                            </span> */}
            {/* <span className="text-base font-normal w-30 tracking-wide text-[#08122a] cursor-pointer hover:underline hover:text-[#0073e6]">
                                GenZ Talent Program
                            </span> */}
            <span className="text-base font-normal w-30 tracking-wide text-[#08122a] cursor-pointer hover:underline hover:text-[#0073e6]">
              OPNVerse
            </span>
            <span>
              <button className="font-medium flex flex-row justify-center items-center gap-4 border border-[#08122a] rounded-3xl transition-all ease-linear duration-100 px-1 ps-5 py-1 group hover:bg-[#003366] hover:text-white-0">
                Join Now
                <div className="flex flex-row justify-center items-center rotate-[-45deg] text-white-0 bg-[#08122a] rounded-[50%] p-0 w-8 h-8 group-hover:bg-white-0 group-hover:text-[#08122a]">
                  →
                </div>
              </button>
            </span>
          </div>
        </div>
        <p className="text-sm py-5 opacity-50 text-[#08122a]">
          ©2024 IOPn. All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default OPNChainFooterSection;
