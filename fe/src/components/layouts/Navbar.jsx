import React from 'react';
import { Bell, Menu, LayoutGrid } from 'lucide-react';

const Navbar = ({ onMenuClick, pageTitle = 'Dashboard' }) => {
  return (
    <header className="sticky top-0 z-10 h-16 border-b bg-white px-4 lg:px-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-semibold flex items-center space-x-2">
          <LayoutGrid className="h-5 w-5 text-primer hidden sm:block" />
          <span>{pageTitle}</span>
        </h2>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium hidden sm:inline">Super Admin</span>
          <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar