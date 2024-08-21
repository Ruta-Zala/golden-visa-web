import { Img } from '../../components/ImgMint/index';
import { Button } from '../../components/Button/index';

const IcognativeSupportSection = () => {
  return (
    <>
      <div className="px-4 max-w-screen-2xl mx-auto relative mt-16" id="joinNow">
        <div className="flex gap-4 flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-2/3 border rounded-2xl px-5 py-7">
            <h1 className="w-full text-4xl font-medium text-[#08122A]">
              Support channels
            </h1>
            <p className="opacity-50 text-lg mt-4 mb-16">
              Here, you'll encounter the passionate builders and visionaries
              shaping the future of Web3 at iOPN.
            </p>
            <button class="self-stretch capitalize w-full md:w-fit bg-[#2573C0] white flex flex-row items-center text-[#fff] cursor-pointer whitespace-nowrap rounded-[26px] px-3 py-2 text-md justify-between md:justify-start gap-0 md:gap-[34px]">
              <div className="flex-1 text-center">Join Now</div>
              <div class="flex h-[28px] w-[28px] items-center justify-center rounded-[50%] bg-white-0">
                <img
                  class="h-[10px] w-[10px]"
                  src="images/img_arrowleft_blue_800.svg"
                  alt="Arrow Left"
                  loading="lazy"
                />
              </div>
            </button>
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

export default IcognativeSupportSection;
