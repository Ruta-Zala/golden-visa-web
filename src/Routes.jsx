import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import GoldenVisaLandingvTwoPage from "./pages/GoldenVisaLandingvTwo";
import GoldenVisaOPNTokenTokenMintPage from "./pages/GoldenVisaOPNTokenTokenMint";
import GoldenVisaGenZTalentProgramPage from "./pages/GoldenVisaGenZTalentProgram";
import GoldenVisaWeb3EntrepreneurPage from "./pages/GoldenVisaWeb3Entrepreneur";
import NotFound from "./pages/NotFound";
import GoldenVisaIcognativePage from "./pages/GoldenVisaIcognativePage";
import GoldenVisaOPNChainPage from "./pages/GoldenVisaOPNChain";
import UserProfilePage from "./pages/UserProfile";
import GoldenVisaOPNVersePage from './pages/GoldenVisaOPNVerse'
import LogInPage from './pages/Login'
import RegisterPage from './pages/Register'

const Routes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/goldenvisa",
      element: <GoldenVisaLandingvTwoPage />,
    },
    {
      path: "/opntoken",
      element: <GoldenVisaOPNTokenTokenMintPage />,
    },
    {
      path: "/Talent",
      element: <GoldenVisaGenZTalentProgramPage />,
    },
    {
      path: "/Entrepreneur",
      element: <GoldenVisaWeb3EntrepreneurPage />,
    },
    {
      path: "/Icognative",
      element: <GoldenVisaIcognativePage />,
    },
    {
      path: "/OPNChain",
      element: <GoldenVisaOPNChainPage />,
    },
    {
      path: "/profile",
      element: <UserProfilePage />,
    },
    {
      path: "/OPNVerse",
      element: <GoldenVisaOPNVersePage />,
    },
    {
      path: "/login",
      element: <LogInPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default Routes;
