import React from "react";

const NavBar = ({ searchQuery, onSearch }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center lg:justify-between md:justify-between justify-center">
      <div
        className="lg:flex md:flex hidden
       items-center space-x-2"
      >
        <a href="/" className="text-gray-600 text-sm">
          Home
        </a>
        <span className="text-gray-400">/</span>
        <a href="/" className="text-gray-800 text-sm font-semibold">
          Dashboard V2
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search anything..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="bg-gray-100 border border-gray-300 text-sm rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full focus:outline-none">
            {/* Notification Icon */}
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405C18.79 14.21 18 12.11 18 10V7a6 6 0 10-12 0v3c0 2.11-.79 4.21-2.595 5.595L3 17h5m4 0v1a3 3 0 11-6 0v-1m6 0a3 3 0 016 0v1a3 3 0 11-6 0v-1"
              ></path>
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full focus:outline-none">
            {/* User Icon */}
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A5 5 0 0110 15h4a5 5 0 014.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
