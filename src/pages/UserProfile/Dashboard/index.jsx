import React from 'react';
import TransactionSection from './TransactionSection';
import SocialMedia from './SocialMedia';
import BalanceInfoSection from './BalanceInfoSection';
import TopSection from './TopSection';
import ContentSection from './ContentSection';
import GenZTalentSection from './GenZTalentSection';

function Dashboard() {
  return (
    <>
      <TopSection />
      <ContentSection />
      <GenZTalentSection />
      <BalanceInfoSection />
      <SocialMedia />
      <TransactionSection />
    </>
  );
}

export default Dashboard;
