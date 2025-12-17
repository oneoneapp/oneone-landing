import React from 'react';
import { DiagonalStrip, Download, Features, Footer, Hero, HowItWorks, Navbar } from './_components/sections';

export default function Page() {
  return (
    <main className="oneone-shell min-h-screen">
      <div className="oneone-container">
        <Navbar />
        <Hero />
        <DiagonalStrip />
        <Features />
        <HowItWorks />
        <Download />
        <Footer />
      </div>
    </main>
  );
}

function ArrowRightIcon() {