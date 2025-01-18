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
    </div>
  );
};

export default Home;
