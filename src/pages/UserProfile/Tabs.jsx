import React, { useState, useEffect } from 'react';
import Referrals from './Referrals';
import Dashboard from './Dashboard';
import ProfileDetails from './ProfileDetails';

function Tabs() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024); // Adjust the width as needed for tablet breakpoint
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 border-b">
        <button
          className={`py-2 px-4 text-lg sm:text-2xl font-medium ${
            activeTab === 'dashboard'
              ? 'border-b-2 border-blue-500 text-gray-900'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('dashboard')}>
          Dashboard
        </button>
        <button
          className={`py-2 px-4 text-lg sm:text-2xl font-medium ${
            activeTab === 'referrals'
              ? 'border-b-2 border-blue-500 text-gray-900'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('referrals')}>
          Referrals
        </button>
        {isMobileOrTablet && (
          <button
            className={`py-2 px-4 text-lg sm:text-2xl font-medium ${
              activeTab === 'profileDetails'
                ? 'border-b-2 border-blue-500 text-gray-900'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('profileDetails')}>
            Profile Details
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div className="mt-4 sm:mt-[50px]">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'referrals' && <Referrals />}
        {isMobileOrTablet && activeTab === 'profileDetails' && (
          <ProfileDetails />
        )}
      </div>
    </div>
  );
}

export default Tabs;
