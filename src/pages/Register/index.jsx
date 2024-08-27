import { Helmet } from "react-helmet";
import Logo from '../../assets/logo.png'
import registerBanner from '../../assets/auth/registerBanner.png'
import RegisterForm from './RegisterForm'
import GoogleLogo from '../../assets/auth/Google.png'
import MetaMask from '../../assets/auth/MetaMask_Fox 2.png'

export default function RegisterPage() {
    return (<>
        <Helmet>
            <title>Sign Up - Unlock Your Future with Golden Visa Chances</title>
            <meta
                name="description"
                content="Join the IOPn ecosystem and mint OPN tokens for a chance to win a UAE Gloden Visa. Invest in your future with exclusive access and global recognition. Act now and be part of the GenZ Talent Program."
            />
            <meta
                name="description"
                content="Unlock endless opportunities with a UAE Gloden Visa"
            />
            <meta
                name="keywords"
                content="IOPn, OPN Token, Minting, Fair Minting"
            />
        </Helmet>
        <div className="px-4 mx-auto relative h-full my-4">
            <div className="flex justify-center md:justify-start">
                <img src={Logo} alt="sign-in-header-logo" />
            </div>
            <div className="flex mx-auto max-w-screen-2xl mt-4 w-full h-[calc(100dvh-80px)] gap-10">
                <div className="w-full md:w-1/2 xl:w-1/3 flex my-auto flex-col">
                    <RegisterForm />
                    <div className="my-10 flex w-full justify-between items-center gap-5">
                        <hr className="w-full" />
                        <span> OR </span>
                        <hr className="w-full" />
                    </div>
                    <div className="flex justify-center items-center flex-nowrap border rounded-full py-4 gap-2">
                        <img src={GoogleLogo} className="h-4 w-4" />
                        <span className="font-semibold text-center">Sign Up With Google</span>
                    </div>
                    <div className="mt-4 flex justify-center items-center flex-nowrap border rounded-full py-4 gap-2">
                        <img src={MetaMask} className="h-5 w-5" />
                        <span className="font-semibold text-center">Sign up with Metamask</span>
                        <span className="text-xs bg-[#E0EBFF] text-[#003DB8] font-semibold px-3 py-2 rounded-full">Web3</span>
                    </div>
                </div>
                <div className="hidden md:block md:w-1/2 xl:w-2/3 rounded-xl overflow-hidden">
                    <img src={registerBanner} alt="Login Banner" className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    </>)
}