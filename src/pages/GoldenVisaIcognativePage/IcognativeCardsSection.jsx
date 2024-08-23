import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import feature10 from '../../assets/Feature10.png';
import feature11 from '../../assets/Feature11.png';
import feature12 from '../../assets/Feature12.png';
import feature13 from '../../assets/Feature13.png';
import feature14 from '../../assets/Feature14.png';
import feature15 from '../../assets/Feature15.png';

import icon1 from '../../assets/Analysis.png';
import icon2 from '../../assets/Language.png';
import icon3 from '../../assets/Automated.png';
import icon4 from '../../assets/Learn.png';
import icon5 from '../../assets/nanotechnology.png';

const cardsData = [
  {
    icon: icon1,
    image: feature10,
    title: 'Predictive analytics',
    description:
      'Seamlessly connect different blockchains, expanding the ecosystem and enabling cross-chain interactions.',
  },
  {
    icon: icon2,
    image: feature11,
    title: 'Natural language processing',
    description:
      'Protect assets and user data with advanced cryptographic protocols and robust consensus mechanisms.',
  },
  {
    icon: icon3,
    image: feature12,
    title: 'Automated decision support',
    description:
      'Run Ethereum-based smart contracts and applications on the blockchain, expanding developer and user base.',
  },
  {
    icon: icon4,
    image: feature13,
    title: 'Continuous learning',
    description:
      'Run Ethereum-based smart contracts and applications on the blockchain, expanding developer and user base.',
  },
  {
    icon: icon5,
    image: feature14,
    title: 'Integration with other pillars',
    description:
      'Run Ethereum-based smart contracts and applications on the blockchain, expanding developer and user base.',
  },
  {
    icon: icon1,
    image: feature15,
    title: 'AI-driven insights',
    description:
      'Handle more transactions: process a higher volume of transactions without sacrificing speed or security.',
  },
];

const IcognativeCardsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="px-4 max-w-screen-2xl mx-auto mt-28 relative">
      <div className="relative">
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
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper">
          {cardsData.map((card, index) => (
            <SwiperSlide key={index} className="flex items-stretch">
              <div className="flex flex-col items-stretch p-3 gap-2.5 rounded-2xl features-card relative z-0 overflow-hidden flex-1">
                <img
                  src={card.image}
                  alt=""
                  className="w-80 h-80 object-contain absolute -top-20 -right-24"
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
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-30 h-[100px] w-[100px] rounded-full bg-[#fff] hidden md:flex items-center justify-center">
          <button
            ref={prevRef}
            className="swiper-button-prev p-3 after:content-['prev'] after:text-[16px] after:text-slate-900 rounded-full"
          />
          <button
            ref={nextRef}
            className="swiper-button-next p-3 after:content-['next'] after:text-[16px] after:text-slate-900 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default IcognativeCardsSection;
