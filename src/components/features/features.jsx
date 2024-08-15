import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";
import feature5 from "../../assets/feature5.png";

import icon1 from "../../assets/brain.png";
import icon2 from "../../assets/database.png";
import icon3 from "../../assets/immersive-vr.png";
import icon4 from "../../assets/nanotechnology.png";
import icon5 from "../../assets/nanotechnology.png";
import icon6 from "../../assets/globe.png";

const cardsData = [
  {
    icon: icon4,
    image: feature2,
    title: "Empowering Innovation",
    description:
      "Join IOPn's Web3 journey. Build, contribute, and shape the future in a user-driven, blockchain-powered ecosystem.",
  },
  {
    icon: icon2,
    image: feature3,
    title: "Your Data. Your Rules.",
    description:
      "IOPn prioritizes privacy. Secure, user-controlled data management keeps your information yours.",
  },
  {
    icon: icon6,
    image: feature1,
    title: "Own Your Digital World",
    description:
      "Control your identity and data in IOPn's decentralized space. Break free from big tech dominance.",
  },
  {
    icon: icon3,
    image: feature4,
    title: "Seamless Integration",
    description:
      "Experience the seamless integration of cutting-edge technologies, ensuring a smooth transition to Web3.",
  },
  {
    icon: icon1,
    image: feature5,
    title: "Future-Proof Solutions",
    description:
      "Stay ahead with future-proof solutions designed to adapt and scale with your evolving needs in the digital age.",
  },
];

const Features = () => {
  return (
    <div className="px-4 max-w-screen-2xl mx-auto mt-28">
      <div className="headline mb-12">
        <div className="tagline">
          <p className="inline-block px-3 py-2 bg-[#070b0f] text-white-0 rounded-2xl text-sm mb-2.5 font-extralight">
            The Broken Web A New Answer
          </p>
        </div>
        <h1 className="text-[#070b0f] text-4xl mb-4 font-medium">
          Big Tech dominates your digital life.
          <br />
          Imagine a web built around user sovereignty,
          <br />
          not corporate control
        </h1>
        <p className="text-lg text-[#7f8c8d] max-w-screen-md">
          IOPn is the answer. We leverage blockchain, AI, and cutting-edge
          spatial computing to build a user-centric Web3 ecosystem. Own your
          data, experience immersive worlds, and leverage intelligent tools.
          Empowering 1 billion users with digital freedom.
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index} className="flex items-stretch">
            <div className="flex flex-col items-stretch p-3 gap-2.5 rounded-2xl features-card relative z-0 overflow-hidden flex-1">
              <img
                src={card.image}
                alt=""
                className="w-64 h-80 object-contain absolute -top-20 -right-24"
              />
              <div className="features-card-icon-container">
                <div className="features-card-icon">→</div>
              </div>
              <div className="features-card-content flex flex-col justify-between h-full">
                <div className="features-card-content-text">
                  <img
                    src={card.icon}
                    alt=""
                    className="w-12 h-12 object-contain mb-8"
                  />
                  <h2 className="features-card-title text-lg md:text-2xl font-bold">
                    {card.title}
                  </h2>
                  <p className="features-card-description text-sm xl:text-base opacity-80">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features;
