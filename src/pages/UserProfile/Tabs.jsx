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
    <div className="w-full mb-16">
      {/* Tab Navigation */}
      <div className="relative">
        <div className="flex flex-nowrap border-b overflow-x-auto whitespace-nowrap">
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
      </div>

      {/* Tab Content */}
      <div className="mx-4 sm:mx-0 mt-4 sm:mt-[50px]">
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
