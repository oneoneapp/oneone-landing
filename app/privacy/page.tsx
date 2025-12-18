import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-gray-300 p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-[#FDEC00] hover:underline">
            &larr; Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <p className="mb-4">
              At One One, protecting your privacy isn't just a requirement — it's a core principle. We built this app for real people we care about, and we treat your data with the same respect we'd expect for our own 🤍
            </p>
    
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Handle Your Data</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl">🔐</span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Conversations That Don't Linger</h3>
                  <p>
                    One One is designed around small communication. Your voice conversations are transmitted in real time and are never recorded or stored. We cannot access, replay, or listen to your conversations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">🧘</span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Minimal Information Only</h3>
                  <p>
                    We follow a strict data minimization approach. We collect and retain only what is essential for the app to function properly — such as basic account details used for authentication — and only for as long as necessary.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">🚫</span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">No Selling. No Ads.</h3>
                  <p>
                    Your data is never sold and never used for advertising. Period.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">App Permissions & Why We Need Them</h2>
            <p className="mb-6">
              To deliver a seamless walkie-talkie experience, One One requires the following permissions:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl">🎙</span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Microphone Access</h3>
                  <p>
                    Used solely to capture your voice when you press and hold to speak.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">🔊</span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Background Audio</h3>
                  <p>
                    Allows you to hear incoming voice messages even when the app is running in the background or the screen is locked, as long as you're connected to the internet — so you stay connected without interruptions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">🔐</span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Google Sign-In</h3>
                  <p>
                    We use Google Sign-In to securely authenticate users. Only the basic profile information provided by Google is stored to manage your account.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions, concerns, or feedback regarding this Privacy Policy or how One One handles your data, feel free to reach out to us. We're always happy to clarify.
            </p>
          </section>
        </div>
        
        <footer className="text-center text-gray-600 text-sm mt-20 border-t border-gray-900 pt-8">
          <p>&copy; {new Date().getFullYear()} One One. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
