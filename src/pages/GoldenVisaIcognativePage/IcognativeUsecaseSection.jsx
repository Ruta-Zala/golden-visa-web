import image from '../../assets/img_usecase.png';
const IcognativeUsecaseSection = () => {
  return (
    <>
      <div className="px-4 max-w-screen-2xl mx-auto relative mt-16">
        <div className="flex gap-4 flex-wrap lg:flex-nowrap">
          <div className="bg-[#F1F5F9] p-10 rounded-2xl w-full lg:w-1/3 flex flex-col">
            <h2 className="text-4xl mb-4">Use Cases</h2>
            <p className="text-gray-600 text-lg mb-3">
              See how OPNChain can benefit your case.
            </p>
            <div className="mt-auto md:flex space-x-2 mx-auto hidden">
              <span className="block h-2 w-12 bg-gray-300 rounded-full"></span>
              <span className="block h-2 w-12 bg-blue-500 rounded-full"></span>
              <span className="block h-2 w-12 bg-gray-300 rounded-full"></span>
              <span className="block h-2 w-12 bg-gray-300 rounded-full"></span>
              <span className="block h-2 w-12 bg-gray-300 rounded-full"></span>
            </div>
          </div>

          <div className="relative w-full lg:w-2/3 h-[600px] rounded-2xl overflow-hidden shadow-lg text-white-0">
            <img
              src={image}
              alt="Use Case"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black-0 bg-opacity-40 flex flex-col md:flex-row p-10 text-white justify-between">
              <div className="flex flex-col mt-auto w-full md:w-2/3 h-full">
              <h1 className="text-5xl opacity-60 font-bold">waverio</h1>
              <div className='flex-1 flex flex-col justify-end'>
                <h3 className="text-3xl mb-4 line-clamp-3">
                  OPNChain's robust infrastructure and interoperability enable
                  the creation of secure and scalable decentralized financial
                  applications
                </h3>
                <p className="text-xl font-normal line-clamp-3">
                  By leveraging OPNChain's capabilities, developers and
                  businesses can create groundbreaking solutions that transform
                  industries and redefine the way we interact with digital
                  assets.
                </p>
                </div>
              </div>
              <div className="md:mt-auto">
                <button className="mt-6 font-medium flex flex-row justify-center items-center gap-4 rounded-3xl transition-all ease-linear duration-100 px-1 ps-5 py-2 group bg-white-0 hover:bg-white- hover:text-[#08122a] text-[#08122a] w-full">
                  See Details
                  <div className="flex flex-row justify-center items-center rotate-[-45deg] text-white-0 bg-white- rounded-[50%] p-0 w-8 h-8 group-hover:bg-[#08122a] group-hover:text-white-1 bg-[#08122a]">
                    →
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IcognativeUsecaseSection;
