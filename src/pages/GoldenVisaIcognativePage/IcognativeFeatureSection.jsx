import feature5 from "../../assets/img_avtar.png";
import feature4 from "../../assets/img_security.png";
import feature3 from "../../assets/img_test.png";
import feature2 from "../../assets/img_support.png";
import feature1 from "../../assets/img_brain.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const IcognativeFeatureSection = () => {
  const partners = [
    { image: feature1, title: "GenAI Integration" },
    { image: feature2, title: "Solidity Support" },
    { image: feature3, title: "TestCase Generation" },
    { image: feature4, title: "Security Audits" },
    { image: feature5, title: "Avatar & Digital Twin Creation" },
  ];

  return (
    <div className="Productscard-container max-w-screen-2xl mx-auto px-4 my-28">
      <div className="headline px-4 mb-0">
        <h1 className="w-full text-4xl font-medium text-[#08122A]">
          Features Highlight
        </h1>
        <p className="opacity-50 text-lg mt-4 mb-0">
          IOPn is the answer. We leverage blockchain, AI, and cutting-edge
          spatial computing to build a user-centric Web3 ecosystem.
          <br /> Own your data, experience immersive worlds, and leverage
          intelligent tools.
          <br /> Empowering 1 billion users with digital freedom.
        </p>
      </div>
      <Swiper
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper w-full max-w-screen-2xl pt-4 mx-auto"
      >
        {partners.map((partner, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-center items-center p-5 gap-2.5 bg-[#08122A] rounded-2xl w-full"
          >
            <div className="flex items-center">
              <img
                src={partner.image}
                alt={`Partner ${index + 1}`}
                className="w-40 h-14 object-contain"
              />
              <div className="ml-4 text-left">
                <p className="text-lg leading-tight text-[#F1F5F9]">
                  {partner.title.split(" ")[0]} <br />
                  <span className="text-white">
                    {partner.title.split(" ")[1]}
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IcognativeFeatureSection;
