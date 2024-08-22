import React, { useState } from "react";

const CNAPPDashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className=" flex flex-col md:flex-row md:justify-between md:items-center py-5 px-4">
      <h1 className="text-lg font-semibold">CNAPP Dashboard</h1>
      <div className="mt-4 md:mt-0 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded">
          Add Widget +
        </button>
        <div className="relative sm:mt-0">
          <button
            className="bg-white border border-gray-300 text-sm font-medium py-2 px-4 rounded flex items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Last 2 days
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute bg-white border border-gray-200 mt-1 rounded-md shadow-lg z-10 w-full">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Last 7 days
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Last 30 days
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CNAPPDashboard;
