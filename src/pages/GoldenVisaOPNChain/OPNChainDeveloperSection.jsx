import image1 from '../../assets/OPNChain/developerTools/image1.png';
import image2 from '../../assets/OPNChain/developerTools/image2.png';
import image3 from '../../assets/OPNChain/developerTools/image3.png';
import image4 from '../../assets/OPNChain/developerTools/image4.png';
import image5 from '../../assets/OPNChain/developerTools/image5.png';
import image6 from '../../assets/OPNChain/developerTools/image6.png';
import image7 from '../../assets/OPNChain/developerTools/image7.png';

const tools = [image1, image4, image2, image6, image3, image5, image7];

const OPNChainDeveloperSection = () => {
  return (
    <>
      <div className="px-4 max-w-screen-2xl mx-auto relative mt-16">
        <div className="flex gap-4 flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-2/3 border rounded-2xl px-5 py-7">
            <h1 className="w-full text-4xl font-medium text-[#08122A]">
              Developers Tools
            </h1>
            <p className="opacity-50 text-lg mt-4 mb-0">
              Here, you'll encounter the passionate builders and visionaries
              shaping the future of Web3 at IOPn.
            </p>

            <div className="mt-14 flex gap-3 flex-wrap">
              {tools.map((tool, index) => (
                <div key={index} className="bg-[#F1F5F9] p-3 rounded-xl">
                  <img src={tool} className="h-10 w-10" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 py-7 px-10 border rounded-2xl bg-gradient-to-r-blue text-white-0">
            <div className="text-3xl">Our documentation</div>
            <div className="mt-6 text-xl text-white-1">
              Ready to build? Explore our developer resources and join the
              OPNChain community today!
            </div>
            <button className="mt-6 font-medium flex flex-row justify-center items-center gap-4 rounded-3xl transition-all ease-linear duration-100 px-1 ps-5 py-2 group bg-white-0 hover:bg-white- hover:text-[#08122a] text-[#08122a] w-full">
              Open PDF
              <div className="flex flex-row justify-center items-center rotate-[-45deg] text-white-0 bg-white- rounded-[50%] p-0 w-8 h-8 group-hover:bg-[#08122a] group-hover:text-white-1 bg-[#08122a]">
                →
              </div>
            </button>
          </div>
          <div className="w-full lg:w-1/3 py-7 px-10 border rounded-2xl bg-gradient-to-r bg-[#08122A] text-white-0">
            <div className="text-3xl">GitHub repositories</div>
            <div className="mt-6 text-xl text-white-1">
              Access a rich collection of pre-built components to accelerate
              development.
            </div>
            <button className="mt-6 font-medium flex flex-row justify-center items-center gap-4 rounded-3xl transition-all ease-linear duration-100 px-1 ps-5 py-2 group bg-white-0 hover:bg-white- hover:text-[#08122a] text-[#08122a] w-full">
              To Github
              <div className="flex flex-row justify-center items-center rotate-[-45deg] text-white-0 bg-white- rounded-[50%] p-0 w-8 h-8 group-hover:bg-[#08122a] group-hover:text-white-1 bg-[#08122a]">
                →
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OPNChainDeveloperSection;
