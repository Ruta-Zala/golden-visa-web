import partner7 from "/src/assets/parternes/apex.png";
import partner6 from "/src/assets/parternes/chainlink.png";
import partner5 from "/src/assets/parternes/dubai-wtc.png";
import partner4 from "/src/assets/parternes/dmcc.png";
import partner3 from "/src/assets/parternes/rak-tda.png";
import partner2 from "/src/assets/parternes/phoenix.png";
import partner1 from "/src/assets/parternes/rak-dao.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
const Partners = () => {
  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
  ];
  return (
    <Swiper
      slidesPerView={2} // Initial view for mobile
      spaceBetween={16} // Gap equivalent to gap-4
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 16, // Gap equivalent to gap-4
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16, // Gap equivalent to gap-4
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 16, // Gap equivalent to gap-4
        },
      }}
      modules={[Autoplay]}
      className="mySwiper w-full max-w-screen-2xl pt-4 mx-auto"
    >
      {partners.map((partner, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col justify-center items-center p-5 gap-2.5 bg-[#F1F5F9] rounded-2xl w-full"
        >
          <img
            src={partner}
            alt={`Partner ${index + 1}`}
            className="w-20 h-14 object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Partners;
