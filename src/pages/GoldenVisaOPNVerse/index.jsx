import { Helmet } from "react-helmet";
import OPNVerseHeroSection from './OPNVerseHeroSection'
import OPNVerseFeature from './OPNVerseFeature'
import OPNVerseTopics from './OPNVerseTopics'
import OPNVerseDigitalTwins from './OPNVerseDigitalTwins'
import OPNVerseUseCase from './OPNVerseUseCase'
import Footer from '../../components/Footer/FooterEl'
import footerImg from '../../assets/OPNVerse/footer.png'

import './opnVerse.css'

function OPNVersePage() {
    return (
        <>
            <Helmet>
                <title>
                    OPN Verse - Unlock Your Future with Golden Visa Chances
                </title>
                <meta
                    name="description"
                    content="Join the IOPn ecosystem and mint OPN tokens for a chance to win a UAE Golden Visa. Invest in your future with exclusive access and global recognition. Act now and be part of the GenZ Talent Program."
                />
                <meta
                    name="description"
                    content="Unlock endless opportunities with a UAE Golden Visa"
                />
                <meta name="keywords" content="IOPn, OPN Token, Minting, Fair Minting" />
            </Helmet>
            <div className="px-4 max-w-screen-2xl mx-auto relative" id="opnVerse">
                <OPNVerseHeroSection />
                <OPNVerseFeature />
                <OPNVerseTopics />
                <OPNVerseDigitalTwins />
                <OPNVerseUseCase />
            </div>
            <Footer
                footerImg={footerImg}
                hideConnectChip
                title="Get Started at OPNVerse"
                summary="Building the future of Web3 together. We'd love to hear from developers, creators, and anyone passionate about a more open internet. Feel free to reach out with any questions, feedback, or collaboration ideas."
                footerButton={
                    <button className="flex justify-center  w-full xl:w-3/4 bg-gradient3 items-center gap-2.5 border-blue-900_1e border border-solid  text-white-0 rounded-[36px] p-1 md:p-3 bg-white-0">
                        Join the AI-Powered Web3 Revolution
                        <div
                            className="w-[36px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium text-sm px-2 py-2 rounded-3xl max-w-64"
                            style={{
                                backgroundColor: "white",
                                padding: "12px",
                            }}
                        >
                            <img
                                src="images/img_arrowleft_blue_800.svg"
                                alt="testImg"
                                loading="lazy"
                            />
                        </div>
                    </button>
                }
            />
        </>
    )
}

export default OPNVersePage