import React from 'react';
import { Home, Smartphone, CreditCard, MessageSquare, HelpCircle, LogOut } from 'lucide-react';
import userPic from '../assets/fit.jpg'; // replace with your image path

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">

      {/* Sidebar */}
      <aside className="bg-white w-64 h-screen rounded-r-3xl shadow-lg p-6">
        <div className="text-3xl mb-10">💰</div>
        <ul className="space-y-6 text-[15px] font-medium">
          <li className="flex items-center gap-3 text-pink-600 font-semibold">
            <Home className="w-5 h-5" /> My dashboard
          </li>
          <li className="flex items-center gap-3 hover:text-pink-600 cursor-pointer">
            <CreditCard className="w-5 h-5" /> Accounts
          </li>
          <li className="flex items-center gap-3 hover:text-pink-600 cursor-pointer">
            <Smartphone className="w-5 h-5" /> Mobile
          </li>
          <li className="flex items-center gap-3 hover:text-pink-600 cursor-pointer">
            <CreditCard className="w-5 h-5" /> Payments
          </li>
          <li className="flex items-center gap-3 hover:text-pink-600 cursor-pointer">
            <MessageSquare className="w-5 h-5" /> Complaints
          </li>
          <li className="flex items-center gap-3 hover:text-pink-600 cursor-pointer">
            <HelpCircle className="w-5 h-5" /> Supports
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">My dashboard</h2>
            <p className="text-sm text-gray-500">Welcome to xPay payment portal</p>
          </div>
            {/* <img src={userPic} alt="User" className="w-10 h-10 rounded-full" /> */}
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-md p-6 col-span-1 flex flex-col items-center text-center">
            <img src={userPic} alt="User" className="w-28 h-28 rounded-full mb-4" />
            <h3 className="text-lg font-semibold">My profile</h3>
            <p className="text-sm text-gray-500">Last login: 27 April | Windows 10, Delhi</p>
            <div className="mt-4 space-y-1 text-sm">
              <p className="font-semibold">Shubham kumar</p>
              <p>+91 7876660787</p>
              <p>shubhamkumar65604@gmail.com</p>
              <p className="text-red-500">SMS alerts activation <span className="inline-block w-2 h-2 rounded-full bg-green-500 ml-2"></span></p>
            </div>
            <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600">Save</button>
          </div>

          {/* xPay Account Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex-1">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold">My xPay accounts</h3>
              <button className="text-sm text-gray-500 hover:text-black">Edit</button>
            </div>
            <div className="text-sm space-y-4">
              <div>
                <p className="text-gray-600">Active account</p>
                <p className="text-md font-medium">8400 5680 8808 4256</p>
                <button className="mt-2 text-xs bg-pink-500 text-white px-4 py-1 rounded-full">Block Account</button>
              </div>
              <div>
                <p className="text-gray-600">Blocked account</p>
                <p className="text-md font-medium">7820 9999 2200 4244</p>
                <button className="mt-2 text-xs bg-green-500 text-white px-4 py-1 rounded-full">Unlock account</button>
              </div>
            </div>
          </div>

          {/* Bills Card */}
          <div className="bg-white rounded-xl shadow-md p-6 flex-1">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold">My bills</h3>
              <button className="text-sm text-gray-500 hover:text-black">Filter by</button>
            </div>
            <div className="text-sm space-y-3">
              <div className="flex justify-between">
                <span>Phone bill</span>
                <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">Still paid</span>
              </div>
              <div className="flex justify-between">
                <span>Internet bill</span>
                <span className="text-xs bg-pink-600 text-white px-3 py-1 rounded-full">Not paid</span>
              </div>
              <div className="flex justify-between">
                <span>House rent</span>
                <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">Still paid</span>
              </div>
              <div className="flex justify-between">
                <span>Income tax</span>
                <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">Still paid</span>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
