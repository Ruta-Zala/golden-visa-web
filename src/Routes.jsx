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
import GoldenVisaOPNVersePage from './pages/GoldenVisaOPNVerse';
import LogInPage from './pages/Login';
import RegisterPage from './pages/Register';

const Routes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/:locale/goldenvisa",
      element: <GoldenVisaLandingvTwoPage />,
    },
    {
      path: "/:locale/opntoken",
      element: <GoldenVisaOPNTokenTokenMintPage />,
    },
    {
      path: "/:locale/Talent",
      element: <GoldenVisaGenZTalentProgramPage />,
    },
    {
      path: "/:locale/Entrepreneur",
      element: <GoldenVisaWeb3EntrepreneurPage />,
    },
    {
      path: "/:locale/Icognative",
      element: <GoldenVisaIcognativePage />,
    },
    {
      path: "/:locale/OPNChain",
      element: <GoldenVisaOPNChainPage />,
    },
    {
      path: "/:locale/profile",
      element: <UserProfilePage />,
    },
    {
      path: "/:locale/OPNVerse",
      element: <GoldenVisaOPNVersePage />,
    },
    {
      path: "/:locale/login",
      element: <LogInPage />,
    },
    {
      path: "/:locale/register",
      element: <RegisterPage />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default Routes;
