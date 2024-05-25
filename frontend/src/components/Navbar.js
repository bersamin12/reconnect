import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaTasks, FaTrophy, FaClipboardList } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-transparent p-4 flex justify-around items-center">
      <Link to="/home" className="text-white">
        <FaHome size={24} />
      </Link>
      <Link to="/profile" className="text-white">
        <FaUser size={24} />
      </Link>
      <Link to="/quests" className="text-white">
        <FaTasks size={24} />
      </Link>
      <Link to="/leaderboard" className="text-white">
        <FaTrophy size={24} />
      </Link>
      <Link to="/register" className="text-white">
        <FaClipboardList size={24} />
      </Link>
    </div>
  );
};

export default Navbar;
