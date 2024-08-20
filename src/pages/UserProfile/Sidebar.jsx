import React from 'react';

function Sidebar() {
  return (
    <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
      <div className="text-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-24 mx-auto"
        />
        <h2 className="text-xl font-bold mt-4">John Doe</h2>
        <p className="text-gray-500">Joined August 2024</p>
      </div>
      <div className="mt-6">
        <p className="font-semibold">Bio</p>
        <p className="text-gray-600">
          Crypto enthusiast. OPN to the moon! 🚀 Passionate about blockchain & its potential. Investing in OPN for a future.
        </p>
        <div className="mt-4">
          <p className="font-semibold">Email</p>
          <p className="text-gray-600">johndoe@gmail.com</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Phone</p>
          <p className="text-gray-600">(123) 456-78-90</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Wallet address</p>
          <p className="text-gray-600 break-words">0x1234567890ABCDEF1234567890...</p>
        </div>
        <div className="mt-6 flex space-x-3 justify-center">
          {/* Add social media icons here */}
        </div>
        <div className="mt-6 text-center">
          <button className="text-red-500">Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
