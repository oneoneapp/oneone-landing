import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-gray-300 p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-yellow-500 hover:underline">
            &larr; Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <p className="mb-4">
              At <strong>One One</strong>, respect for privacy and protection of our users&apos; personal data (the &quot;<strong>data</strong>&quot;) are part of our fundamental values. Our friends and family use One One every day, so we can guarantee that you will be treated the same way 🫶
            </p>
            <p className="mb-4">
              We are aware that others before us have given apps a bad reputation in terms of data management 🤡, that&apos;s why we want to clarify some key points right from the start:
            </p>

            <div className="bg-gray-900 p-6 rounded-lg space-y-6 border border-gray-800">
              <div className="flex gap-4">
                <span className="text-2xl">🔒</span>
                <div>
                  <h3 className="text-white font-bold text-lg">Ephemeral Conversations</h3>
                  <p>All your conversations are ephemeral by design. We cannot listen to them and we don&apos;t even store them! We do not store any voice recordings.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">🫶</span>
                <div>
                  <h3 className="text-white font-bold text-lg">Minimal Data</h3>
                  <p>Our golden rule is to keep only the data necessary for the use of the application (like your Google profile data for authentication) and for a limited time!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h3 className="text-white font-bold text-lg">No Selling</h3>
                  <p>We will never sell your data and do not use it for advertising purposes!</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">App Functionality & Permissions</h2>
            <p className="mb-4">
              To provide the &quot;walkie-talkie&quot; experience, One One requires specific permissions:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Microphone:</strong> To record your voice messages when you push to talk.</li>
              <li><strong>Background Audio:</strong> The app has a feature where the voice from the other side can be heard even when the app is closed and connected to the internet. This ensures you never miss a moment with your friends.</li>
              <li><strong>Google Sign-In:</strong> We use Google for authentication to securely manage your account and profile. We only store the basic profile information provided by Google.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">🎂 Age Verification</h2>
            <p className="mb-4">
              Upon opening One One for the first time, we ask you to manually enter your age to verify that you have the digital majority in your country.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-2">Minimum age required by country</h3>
            <p className="mb-4">For all countries not listed below, the minimum age required is 13 years old.</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-2 font-bold text-white w-1/2">Region / Country</th>
                    <th className="py-2 font-bold text-white">Age</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr><td className="py-2 font-semibold text-white pt-4" colSpan={2}>Asia</td></tr>
                  <tr><td className="py-2 pl-4">South Korea</td><td className="py-2">14</td></tr>
                  <tr><td className="py-2 pl-4">Vietnam</td><td className="py-2">15</td></tr>

                  <tr><td className="py-2 font-semibold text-white pt-4" colSpan={2}>Caribbean</td></tr>
                  <tr><td className="py-2 pl-4">Aruba, Caribbean Netherlands, Curacao, Sint Maarten</td><td className="py-2">16</td></tr>

                  <tr><td className="py-2 font-semibold text-white pt-4" colSpan={2}>Europe</td></tr>
                  <tr><td className="py-2 pl-4">Austria, Cyprus, Italy, Lithuania, Spain</td><td className="py-2">14</td></tr>
                  <tr><td className="py-2 pl-4">Czech Republic, Denmark, France, Greece, Serbia</td><td className="py-2">15</td></tr>
                  <tr><td className="py-2 pl-4">Bulgaria, Croatia, Germany, Hungary, Ireland, Luxembourg, Netherlands, Poland, Romania, San Marino, Slovakia, Slovenia</td><td className="py-2">16</td></tr>

                  <tr><td className="py-2 font-semibold text-white pt-4" colSpan={2}>South America</td></tr>
                  <tr><td className="py-2 pl-4">Chile, Colombia, Peru, Venezuela</td><td className="py-2">14</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              If we discover that we have inadvertently collected data from minors under the required age, we will delete them without delay!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us.
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
