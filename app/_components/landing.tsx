import React from 'react'
import { FaGooglePlay, FaAppStore } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

function Landing() {
  return (
    <div className='bg-[#FDEC00] min-h-screen flex flex-col items-center justify-between py-8 px-4'>
        
        <div className="flex-1 flex items-center justify-center">
          <img src="1-1 -black.png" className="w-36"  alt="OneOne Logo" />
        </div>

        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex gap-4">
            <a 
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FaGooglePlay size={24} />
              <span className="font-medium">Play Store</span>
            </a>
            <button
              disabled
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-not-allowed"
            >
              <FaAppStore size={24} />
              <span className="font-medium">App Store</span>
            </button>
          </div>

          <div className="flex gap-4 text-sm">
            <Link href="/terms" className="text-black hover:underline">
              Terms of Service
            </Link>
            <span className="text-black">•</span>
            <Link href="/privacy" className="text-black hover:underline">
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col items-center gap-3 mt-4">
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/1.1.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://x.com/oneoneapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition-colors"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={24} />
              </a>
            </div>
            <a 
              href="mailto:hello@oneoneapp.in"
              className="text-black text-sm hover:underline"
            >
              hello@oneoneapp.in
            </a>
          </div>
        </div>
        </div>
      )
    }

    export default Landing
