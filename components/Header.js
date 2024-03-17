// components/Header.jsx
"use client";
import React from 'react';
import Link from 'next/link';

const Header = ({ username }) => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
         Home
          </Link>
          <Link href="/employee-list">
            Employee List
          </Link>
          <span className="text-white font-bold text-xl">{username}</span>
        </div>
        <Link href="/logout">
          Logout
        </Link>
      </div>
    </header>
  );
};

export default Header;
