import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles
import { Autoplay, Navigation } from 'swiper/modules'; // Import Navigation module
import { Swiper, SwiperSlide } from 'swiper/react';

import islandCard1 from "../../assets/OPNVerse/islandCard1.png"
import islandCard2 from "../../assets/OPNVerse/islandCard2.png"
import islandCard3 from "../../assets/OPNVerse/islandCard3.png"

const features = [
    {
        name: "BNB Island",
        description: "Seamlessly blending the virtual and real worlds into an immersive journey.",
        image: islandCard1
    },
    {
        name: "BTC Island",
        description: "Seamlessly blending the virtual and real worlds into an immersive journey.",
        image: islandCard2
    },
    {
        name: "ETH Island",
        description: "Seamlessly blending the virtual and real worlds into an immersive journey.",
        image: islandCard3
    }
]
export default function OPNVerseFeature() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (<div className="mt-16">
        <h4 className="text-4xl">Megavrse Open World Islands</h4>
        <p className="mt-4 mb-12 text-xl text-dark-0/40 max-w-screen-sm">
            A connected digital ecosystem, seamlessly blending the virtual and real worlds into an unparalleled, immersive journey.
        </p>

        <div className="relative">
            <Swiper
                slidesPerView={1}
                spaceBetween={15}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
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
                modules={[Autoplay, Navigation]}>
                {features.map((card, index) => (
                    <SwiperSlide key={index} className="flex items-stretch">
                        <div className="flex flex-col items-stretch p-3 gap-2.5 rounded-2xl features-card island-feature-card relative z-0 overflow-hidden flex-1">
                            <img
                                src={card.image}
                                alt=""
                                className="w-full h-full object-cover absolute inset-0"
                            />
                            <div className="features-card-icon island-feature-card-icon">→</div>
                            <div className="features-card-content flex flex-col justify-between h-full">
                                <div className="features-card-content-text">
                                    <h2 className="features-card-title text-lg md:text-2xl font-semibold">
                                        {card.name}
                                    </h2>
                                    <p className="features-card-description text-sm">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-30 h-[100px] w-[100px] rounded-full bg-[#fff] hidden md:flex lg:hidden items-center justify-center">
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
    </div>)
}