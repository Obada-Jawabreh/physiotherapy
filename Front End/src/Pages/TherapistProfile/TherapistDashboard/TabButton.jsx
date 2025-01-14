import React from "react";

const TabButton = ({ icon: Icon, label, isActive, onClick }) => (
  <button 
    className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
      isActive ? 'bg-[#46808B] text-[#EEF6F9] shadow-md' : 'bg-[#EEF6F9] text-gray-600 hover:bg-[#B9D9D6]'
    }`}
    onClick={onClick}
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </button>
);

export default TabButton;