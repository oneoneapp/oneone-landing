// pages/index.tsx

import Image from 'next/image';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-black">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="rounded-3xl"
        />
        <h1 className="text-xl font-bold text-yellow-500 mt-3 uppercase animate-pulse">
          Coming Soon
        </h1>
        
        <footer className="absolute bottom-8 text-gray-500 text-sm flex gap-6">
          <a href="/terms" className="hover:text-gray-300 transition-colors">
            Terms of Service
          </a>
          <a href="/privacy" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </a>
        </footer>
    </div>
  );
};

export default Home;
