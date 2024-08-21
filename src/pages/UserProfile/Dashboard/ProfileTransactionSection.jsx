import React from 'react';
import TransactionIcon from '../../../../public/images/transaction_icon.svg';

const ProfileTransactionSection = () => {
  return (
    <div className="px-4 py-16 w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-[#08122A]">
          Transaction history
        </h1>
        <p className="opacity-50 text-lg mt-2">
          The live price of Tether OPN Token is $ 1.000715 per (OPN / USD) with
          a current market cap of $ 115.72B USD. 24-hour <br /> trading volume
          is $ 45.77B USD. USDT to OPN price is updated in real-time.
        </p>
      </div>
      <div className="bg-gray-100 rounded-2xl p-6">
        {/* Tabs */}
        <div className="flex space-x-6 border-b border-gray-300 mb-6">
          <button className="py-2 text-blue-600 border-b-2 border-blue-600">
            Minting
          </button>
          <button className="py-2 text-gray-600 hover:text-blue-600">
            GenZ Talent Program
          </button>
          <button className="py-2 text-gray-600 hover:text-blue-600">
            Web3 Entrepreneur Program
          </button>
          <button className="py-2 text-gray-600 hover:text-blue-600">
            Referral rewards
          </button>
        </div>
        <div className="bg-white-0 rounded-2xl m-6">
          {/* Filters */}
          <div className="flex justify-between mb-6 ">
            <div className="flex space-x-4">
              <select className="px-4 py-2 bg-gray-100 rounded-3xl m-4">
                <option>Transaction type</option>
                <option>Purchase</option>
                <option>Transfer</option>
              </select>
              <select className="px-4 py-2 bg-gray-100 rounded-3xl m-4">
                <option>Status</option>
                <option>Completed</option>
                <option>Processing</option>
              </select>
            </div>
            <select className="px-4 py-2 bg-gray-100 rounded-3xl m-4">
              <option>Sort by Date</option>
            </select>
          </div>

          {/* Transaction Table */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-6 py-4">Transaction</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Code</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4">
                    <div className="flex items-center px-4 py-2 rounded-full ">
                      <img
                        src={TransactionIcon}
                        alt="Transaction Icon"
                        className="w-4 h-4 mr-2"
                      />
                      Purchase
                    </div>
                  </td>
                  <td className="px-6 py-4">675 OPN</td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2 rounded-full inline-block">
                      12 August, 2024
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2 bg-yellow-100 text-yellow-500 rounded-full inline-block">
                      Processing
                    </div>
                  </td>
                  <td className="px-6 py-4">0x1234567890ABCDEF123...</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">
                    <div className="flex items-center px-4 py-2 rounded-full ">
                      <img
                        src={TransactionIcon}
                        alt="Transaction Icon"
                        className="w-4 h-4 mr-2"
                      />
                      Purchase
                    </div>
                  </td>
                  <td className="px-6 py-4">1 500 OPN</td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2  rounded-full inline-block">
                      12 August, 2024
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2 bg-green-100 text-green-500 rounded-full inline-block">
                      Completed
                    </div>
                  </td>
                  <td className="px-6 py-4">0x1234567890ABCDEF123...</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">
                    <div className="flex items-center px-4 py-2 rounded-full ">
                      <img
                        src={TransactionIcon}
                        alt="Transaction Icon"
                        className="w-4 h-4 mr-2"
                      />
                      Transfer
                    </div>
                  </td>
                  <td className="px-6 py-4">2 150 OPN</td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2  rounded-full inline-block">
                      8 August, 2024
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2 bg-green-100 text-green-500 rounded-full inline-block">
                      Completed
                    </div>
                  </td>
                  <td className="px-6 py-4">0x1234567890ABCDEF123...</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">
                    <div className="flex items-center px-4 py-2 rounded-full ">
                      <img
                        src={TransactionIcon}
                        alt="Transaction Icon"
                        className="w-4 h-4 mr-2"
                      />
                      Purchase
                    </div>
                  </td>
                  <td className="px-6 py-4">750 OPN</td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2  rounded-full inline-block">
                      6 August, 2024
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2 bg-green-100 text-green-500 rounded-full inline-block">
                      Completed
                    </div>
                  </td>
                  <td className="px-6 py-4">0x1234567890ABCDEF123...</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">
                    <div className="flex items-center px-4 py-2 rounded-full ">
                      <img
                        src={TransactionIcon}
                        alt="Transaction Icon"
                        className="w-4 h-4 mr-2"
                      />
                      Purchase
                    </div>
                  </td>
                  <td className="px-6 py-4">1 205 OPN</td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2  rounded-full inline-block">
                      6 August, 2024
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="px-4 py-2 bg-green-100 text-green-500 rounded-full inline-block">
                      Completed
                    </div>
                  </td>
                  <td className="px-6 py-4">0x1234567890ABCDEF123...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTransactionSection;
