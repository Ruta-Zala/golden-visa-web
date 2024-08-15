const Partnership = () => {
  return (
    <div className="px-4 max-w-screen-2xl mx-auto mt-28">
      <div className="flex flex-col lg:flex-row h-[650px] md:h-auto justify-end md:justify-between items-end px-4 py-6 md:p-14 lg:p-20 lg:pt-72 gap-2.5 rounded-2xl partner-main w-full">
        <div className="max-w-full md:text-center lg:text-left lg:max-w-3xl text-white-0">
          <div className="tagline">
            <p className="inline-block px-3 py-2 bg-[#fff] !text-black-0 rounded-2xl text-sm mb-2.5 font-extralight">
              Strategic Partnership
            </p>
          </div>
          <h2 className="text-4xl mb-4 font-medium line-clamp-3">
            Internet of People (IOPn) Partners with RAK DAO and Commits $100
            Million Investment to Boost Web3 Innovation in Ras al Khaimah
          </h2>
          <p className="opacity-90 line-clamp-3">
            Thanks to our unique partnership with RAK DAO, IOPn brings a
            life-changing opportunity to people all over the world. By simply
            joining the IOPn Community, you can take part in the monthly Golden
            Visa draw and start a brand new life in the UAE.
          </p>
        </div>
        {/* <a href="#" className="learn-more-button font-medium">
          Learn More
        </a> */}
        <div className="learn-more-button link-pb w-full lg:w-auto justify-between">
          <li className="font-medium flex-1 text-center">Learn More</li>
          <div className="link-pb-arrow rotate-[-45deg]">→</div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
