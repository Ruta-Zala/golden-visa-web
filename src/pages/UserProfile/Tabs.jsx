import React, { useState } from 'react';
import Referrals from './Referrals';

function Tabs() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b">
        <button
          className={`py-2 px-4 text-2xl font-medium ${
            activeTab === 'dashboard'
              ? 'border-b-2 border-blue-500 text-gray-900'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={`py-2 px-4 text-2xl font-medium ${
            activeTab === 'referrals'
              ? 'border-b-2 border-blue-500 text-gray-900'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('referrals')}
        >
          Referrals
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-[50px]">
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-xl font-bold">Dashboard Content</h2>
            {/* Dashboard content goes here */}
          </div>
        )}
        {activeTab === 'referrals' && (
          <div>
           <Referrals/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
