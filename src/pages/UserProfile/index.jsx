import React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
import Tabs from './Tabs';
import Headerprofile from './Headerprofile';
import Footer from '../../components/FooterMint';
import ProfileSummary from './ProfileSummary';

function UserProfile() {
  const [isMobileOrTablet, setIsMobileOrTablet] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          UAE Golden Visa - Unlock Opportunities with GenZ Talent Program
        </title>
        <meta
          name="description"
          content="Discover the UAE Golden Visa benefits, including a 10-year residency, investment growth, and a vibrant Web3 community. Join the GenZ Talent Program and enter the golden draw for a chance to secure your future with OPN tokens."
        />
        <meta
          name="description"
          content="Unlock endless opportunities with a UAE Golden Visa"
        />
        <meta name="keywords" content="IOPn, RAKDAO, GenZ Talent Program" />
      </Helmet>
      <Headerprofile />
      <div className="flex min-h-screen space-x-8 min-[765px]:p-10 p-5">
        {!isMobileOrTablet && <Sidebar />}
        <div className="flex-row w-full">
          {isMobileOrTablet && <ProfileSummary />}
          <Tabs />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
