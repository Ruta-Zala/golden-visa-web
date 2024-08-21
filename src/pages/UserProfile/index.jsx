import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderGenz from '../../components/HeaderGenz';
import Sidebar from './Sidebar';
import Tabs from './Tabs';
import Headerprofile from './Headerprofile';
import Footer from '../../components/FooterMint';

function UserProfile() {
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
      <div className="flex min-h-screen  p-10 space-x-8">
        <Sidebar />
        <div className="flex-row w-full">
          <Tabs />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;