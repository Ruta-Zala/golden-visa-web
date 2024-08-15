import { Img } from "../../components/Img";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules"; // Import Navigation module
import { Swiper, SwiperSlide } from "swiper/react";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { useRef } from "react";
import PropTypes from "prop-types";

// import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export default function ExclusivePerksSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // const handlePrevSlide = () => {
  //   sliderRef.current.prev();
  // };

  // const handleNextSlide = () => {
  //   sliderRef.current.next();
  // };

  const perksArray = [
    {
      img: "images/img_car.svg",
      title: "Luxury Electric Cars",
    },
    {
      img: "images/img_home.svg",
      title: "Premium Accommodation",
    },
    {
      img: "images/img_car.svg",
      title: "Paid Utilities",
    },
    {
      img: "images/img_insurance.svg",
      title: "Comprehensive Insurance",
    },
    {
      img: "images/img_utility.svg",
      title: "Exclusive Discounts and Benefits",
    },
    {
      img: "images/img_airticket.svg",
      title: "UAE Air Ticket",
    },
    {
      img: "images/img_education.svg",
      title: "Education Opportunities",
    },
  ];

  return (
    <>
      {/* exclusive perks section */}
      <div className="relative z-20 mt-8 self-stretch">
        <div className="flex flex-col items-center gap-1.5 bg-light_base">
          <div className="max-w-screen-2xl mx-auto px-4 w-full">
            <div className="flex flex-col items-center gap-6 mt-20">
              <Button color="dark_0" size="xs" className="uppercase">
                Exclusive Perks and Prizes
              </Button>
              <Text
                size="visa_headers_h2"
                as="p"
                className="text-center text-3xl md:text-5xl"
              >
                <span className="text-dark-0 text-2xl sm:text-2xl md:text-4xl lg:text-5xl">
                  <>
                    Unlock a world of
                    <br />
                    benefits and prizes with
                    <br />
                  </>
                </span>
                <span className="bg-gradient3 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
                  the IOPn Trailblazer's Initiative!
                </span>
              </Text>
              {/* <p className="text-2xl text-dark-0 text-center">
                As a participant in the IOPn GenZ Talent Program, you're not
                just entering a draw – you're opening the door to a world of
                exclusive benefits and prizes!
              </p> */}
            </div>
          </div>
          <div className="relative h-[538px] self-stretch overflow-hidden">
            <div className="mt-40 px-10">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1440: {
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
                modules={[Autoplay, Navigation]} // Add Navigation module
                className="mySwiper"
              >
                {perksArray.map((perk, index) => (
                  <SwiperSlide key={index} className="flex items-stretch">
                    <Slide key={index} className="flex flex-col items-center">
                      <Img
                        src={perk.img}
                        alt="Slider Car Image"
                        className="h-20 w-20 object-cover"
                      />
                      <Heading
                        size="visa_headers_h5"
                        as="p"
                        className="text-center mt-2 text-lg md:text-xl lg:text-2xl"
                      >
                        {perk.title}
                      </Heading>
                    </Slide>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute top-1/2 left-[40%] md:left-[48%] transform flex items-center justify-center -translate-y-1/2 z-30 h-[100px] w-[100px] rounded-full bg-[#000] hidden md:flex">
                <button
                  ref={prevRef}
                  className="swiper-button-prev p-3 after:content-['prev'] after:text-[16px] after:text-[#fff] rounded-full"
                />
                <button
                  ref={nextRef}
                  className="swiper-button-next p-3 after:content-['next'] after:text-[16px] after:text-[#fff] rounded-full"
                />
              </div>
            </div>
            <FeaturedImage>
              <Img
                src="images/img_objects_1.png"
                alt="Featured Image"
                className="h-[538px] w-[86%] object-contain opacity-60"
              />
            </FeaturedImage>
          </div>
        </div>
      </div>
    </>
  );
}

const Card = ({ children, className }) => (
  <div
    className={`flex flex-col items-center gap-[60px] rounded-[24px] border border-solid border-gray-300 bg-white-2 p-12 shadow-sm md:p-5 sm:gap-[30px] sm:p-4 ${className}`}
  >
    {children}
  </div>
);
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const SliderContainer = ({ children }) => (
  <div className="relative h-[298px] content-center lg:h-auto lg:px-5 md:h-auto md:px-5">
    <div className="mx-auto flex w-full gap-4 md:flex-col">{children}</div>
  </div>
);
SliderContainer.propTypes = {
  children: PropTypes.node,
};

const Slide = ({ children }) => (
  <div className="px-2 w-full">
    <div className="flex flex-col items-center gap-[60px] rounded-[24px] border border-solid border-gray-300 bg-white-2 p-[46px] shadow-sm md:p-5 sm:gap-[30px] sm:p-4">
      {children}
    </div>
  </div>
);
Slide.propTypes = {
  children: PropTypes.node,
};

const SliderControls = ({ children }) => (
  <div className="absolute bottom-0 left-0 right-0 top-0 flex justify-between items-center w-full rounded-[50%] bg-dark-0 shadow-md">
    {children}
  </div>
);
SliderControls.propTypes = {
  children: PropTypes.node,
};

const FeaturedImage = ({ children }) => (
  <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max justify-center px-14 lg:px-5 md:px-5">
    {children}
  </div>
);
FeaturedImage.propTypes = {
  children: PropTypes.node,
};