import React from 'react';
import Sidebar from './Sidebar';
import Tabs from './Tabs';
import Headerprofile from './Headerprofile';
import ProfileSummary from './ProfileSummary';
import Footer from '../../components/Footer/FooterEl';

function UserProfile() {
  const [isMobileOrTablet, setIsMobileOrTablet] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1095);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Headerprofile />
      <div className="flex min-h-screen md:space-x-4 xl:space-x-8 min-[765px]:p-10 lg:p-10">
        {!isMobileOrTablet && <Sidebar />}
        <div className="flex-row w-full">
          {isMobileOrTablet && <ProfileSummary />}
          <Tabs />
        </div>
      </div>
      <Footer className='!mt-0 !max-w-full md:!px-4 lg:!px-10'/>
    </>
  );
}

export default UserProfile;
