import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/effect-coverflow';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules'; // Import Navigation module
import { Swiper, SwiperSlide } from 'swiper/react';
import topic1 from '../../assets/OPNVerse/topic1.png'


const features = [
    {
        name: "Deepak Chopra- Seva Love Yoga & Meditation Environment",
        description: "Immerse yourself in the breathtaking virtual replica of Marjan Island, a jewel in the crown of Ras Al Khaimah. This meticulously crafted digital landscape captures the island's essence, from its pristine beaches and turquoise waters to its luxurious resorts and vibrant marina. Explore every corner of this virtual paradise, from the bustling promenade lined with upscale boutiques to the serene private beaches perfect for relaxation. Marvel at the stunning architecture of the island's iconic landmarks, all recreated with stunning detail. Experience the magic of Marjan Island, anytime, anywhere.",
        image: topic1
    },
    {
        name: "Marjan Island for Ras al Khaimah Government",
        description: "Immerse yourself in the breathtaking virtual replica of Marjan Island, a jewel in the crown of Ras Al Khaimah. This meticulously crafted digital landscape captures the island's essence, from its pristine beaches and turquoise waters to its luxurious resorts and vibrant marina. Explore every corner of this virtual paradise, from the bustling promenade lined with upscale boutiques to the serene private beaches perfect for relaxation. Marvel at the stunning architecture of the island's iconic landmarks, all recreated with stunning detail. Experience the magic of Marjan Island, anytime, anywhere.",
        image: topic1
    },
    {
        name: "DMCC- video of environment used for live VC pitch event",
        description: "Immerse yourself in the breathtaking virtual replica of Marjan Island, a jewel in the crown of Ras Al Khaimah. This meticulously crafted digital landscape captures the island's essence, from its pristine beaches and turquoise waters to its luxurious resorts and vibrant marina. Explore every corner of this virtual paradise, from the bustling promenade lined with upscale boutiques to the serene private beaches perfect for relaxation. Marvel at the stunning architecture of the island's iconic landmarks, all recreated with stunning detail. Experience the magic of Marjan Island, anytime, anywhere.",
        image: topic1
    }, 
    {
        name: "Marjan Island for Ras al Khaimah Government",
        description: "Immerse yourself in the breathtaking virtual replica of Marjan Island, a jewel in the crown of Ras Al Khaimah. This meticulously crafted digital landscape captures the island's essence, from its pristine beaches and turquoise waters to its luxurious resorts and vibrant marina. Explore every corner of this virtual paradise, from the bustling promenade lined with upscale boutiques to the serene private beaches perfect for relaxation. Marvel at the stunning architecture of the island's iconic landmarks, all recreated with stunning detail. Experience the magic of Marjan Island, anytime, anywhere.",
        image: topic1
    },
]

export default function OPNVerseTopics() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (<div className="mt-16">
        <h4 className="text-4xl text-center">Topics</h4>
        <p className="mt-4 mb-12 text-xl text-dark-0/40 max-w-screen-sm text-center mx-auto">
            A connected digital ecosystem, seamlessly blending the virtual and real worlds into an unparalleled, immersive journey.
        </p>
        <div className="relative">
            <Swiper
                effect={'coverflow'}
                slidesPerView={1}
                spaceBetween={15}
                centeredSlides={true}
                grabCursor={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                }}
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
                        spaceBetween: 0,
                    },
                }}
                autoplay={false}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                modules={[Autoplay, Navigation, EffectCoverflow]}
                className="open-verse-topic-slider">
                {features.map((card, index) => (
                    <SwiperSlide key={index} className="flex items-stretch">
                        {({ isActive }) => (
                            <div className="rounded-2xl opn-verse-topic-card relative overflow-hidden">
                                <img
                                    src={card.image}
                                    alt=""
                                    className={`w-full ${isActive ? 'h-96' : 'h-80'} object-cover absolute inset-0 z-0`}
                                />
                                <div className={`opn-verse-topic-card-text h-full ${isActive ? 'pt-96' : 'pt-80'} mt-2 text-left p-4`}>
                                    <div>
                                        <div className="flex justify-between">
                                            <h2 className="opn-verse-topic-card-title text-lg md:text-2xl font-semibold truncate">
                                                {card.name}
                                            </h2>
                                            <button
                                                className={`ml-3 box-border font-medium flex-row justify-center items-center py-2 ps-5 pr-2 gap-4 rounded-full text-dark-0 cursor-pointer bg-stroke w-full sm:w-auto text-sm text-nowrap ${isActive ? 'flex' : 'hidden'}`}
                                            >
                                                Join Now
                                                <div className="flex flex-row justify-center items-center p-0 gap-2.5 w-6 h-6 text-white-0 bg-dark-0 rounded-full rotate-[-45deg]">
                                                    →
                                                </div>
                                            </button>
                                        </div>
                                        <p hidden={!isActive} className="opn-verse-topic-card-description text-sm mt-5">
                                            {card.description}
                                        </p>
                                    </div>
                                    <div hidden={!isActive}>
                                        <hr className="my-4" />
                                        <div className="flex justify-between items-center" >
                                            <div className="text-sm text-dark-0/40">Features for participants:</div>
                                            <div className="flex gap-2 flex-wrap">
                                                <span className="text-xs bg-light_base p-2 rounded-lg">Video tours</span>
                                                <span className="text-xs bg-light_base p-2 rounded-lg">Open world chat</span>
                                                <span className="text-xs bg-light_base p-2 rounded-lg">Special offers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
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
    </div >
    )
}