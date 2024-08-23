import { handleScrollToSection } from "../../utils/helper";
import Header from './Header'

const menuItems = [
    { href: "/#/OPNChain", label: "OPNChain" },
    { href: "/#/iCognative", label: "iCognative" },
    { label: "OPNVerse", onClick: (event) => handleScrollToSection(event, "opnVerse") },
    { href: "/#/Talent", label: "GenZ Talent Program" },
    { href: "/#/Entrepreneur", label: "Web3 Entrepreneur Program" },
    { href: "/#/goldenvisa", label: "UAE Golden Visa" },
    { href: "/#/opntoken", label: "OPN Token" },
];

const OPNVerseHeroSection = () => {
    return (
        <div className="pt-0 pb-2.5 lg:pt-2.5" >
            <div className="w-full opn-verse-main-hero relative z-0">
                <div className="flex flex-col justify-between items-center w-full h-[785px] relative">
                    <Header menuItems={menuItems} />
                    <div className="w-full flex flex-col md:flex-row justify-between items-center relative">
                        <div className="flex flex-col justify-end items-start bg-white-0 rounded-2xl mb-3 md:mb-0 mx-2 md:ms-4">
                            <div className="flex flex-col items-start gap-5 p-[24px] md:p-12">
                                <p className="text-xl font-medium text-dark-0/40">
                                    OPNVerse
                                </p>
                                <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium">
                                    <span className="bg-clip-text text-3xl md:text-4xl lg:text-6xl font-medium text-transparent bg-gradient-to-b from-[#9ba6c1] via-[#314168] to-[#314168]">
                                        Revolutionizing
                                    </span>
                                    <br />
                                    the Web3 experience
                                </h1>
                                <span className="text-xl font-medium text-dark-0/40 sm:w-[600px] mt-4">
                                    Step into an immersive experience with OPNVerse, where the boundaries between digital and physical blur.
                                </span>
                                <button className="box-border font-medium mt-5 flex flex-row justify-center items-center py-2 ps-8 pr-2 gap-4 border border-dark-0 rounded-full text-dark-0 cursor-pointer bg-white-0 w-full sm:w-auto">
                                    Explore Metaverse
                                    <div className="flex flex-row justify-center items-center p-0 gap-2.5 w-8 h-8 text-white-0 bg-dark-0 rounded-full rotate-[-45deg]">
                                        →
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OPNVerseHeroSection;