import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-gray-300 p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-yellow-500 hover:underline">
            &larr; Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-8">
          <section>
            <p className="mb-4">
              We’ve drafted these Terms of Service (“<strong>Terms</strong>”) so you’ll know the rules that govern our relationship with you as a user of One One (“<strong>Services</strong>”).
            </p>
            <p className="mb-4">
              Although we have tried to make these Terms as simple as possible to understand 😎, there are places where they may still read like a traditional contract. There’s a good reason for that: these Terms form a legally binding contract between you and One One ("<strong>One One</strong>," "<strong>our</strong>," "<strong>we</strong>," or "<strong>us</strong>"). So please read them carefully.
            </p>
            <p className="mb-4">
              By accessing or using the Services, you accept and agree to comply with these Terms. You also confirm that you have read our <Link href="/privacy" className="text-yellow-500 hover:underline">Privacy Policy</Link>.
            </p>
            <p className="mb-4">
              We are constantly working to improve our Services and develop new features to make our products even better for you. Therefore, we may need to update these Terms from time to time to reflect our Services and practices correctly. We will only make changes if the provisions are no longer appropriate or incomplete. We will notify you of material changes to the Terms, but we encourage you to check the Terms frequently to learn about any changes. Your continued use of the Services after any changes to the Terms constitutes your acceptance of the amended Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimers and Release</h2>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <p className="mb-4">
                You use our Services at your own risk and subject to the following disclaimers. We are providing our Services on an "as is" basis without any express or implied warranties, including, but not limited to, warranties of merchantability, fitness for a particular purpose, title, non-infringement, and freedom from computer virus or other harmful code.
              </p>
              <p className="mb-4">
                We do not warrant that any information provided by us is accurate, complete, or useful, that our Services will be operational, error free, secure, or safe, or that our Services will function without disruptions, delays, or imperfections.
              </p>
              <p className="mb-4">
                We do not control and are not responsible for, controlling how or when our users use our Services or the features, services, and interfaces our Services provide. We are not responsible for and are not obligated to control the actions or information (including content) of our users or other third-parties.
              </p>
              <p>
                You release us, our subsidiaries, affiliates, and our and their directors, officers, employees, partners, and agents (together, the "One One Parties") from any claim, complaint, cause of action, controversy, or damages (together, "Claim"), known and unknown, relating to, arising out of, or in any way connected with any such Claim you have against any third-parties.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">🫡 Limitation of Liability</h2>
            <p className="mb-4">
              One One is only liable to the following extent:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                One One is liable without limitation in accordance with the statutory provisions for damages resulting from injury to life, body or health; in the case of intent; in the case of gross negligence; and in accordance with the Product Liability Directive.
              </li>
              <li>
                One One will exercise professional diligence in providing the Services to you. Provided that we have acted with professional diligence, One One does not accept responsibility for losses not caused by our breach of these Terms or otherwise by our acts; losses that are not reasonably foreseeable by you and us at the time of entering into these Terms; and events beyond our reasonable control.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">User Conduct</h2>
            <p className="mb-4">
              One One is a social app designed for fun communication between friends. By using the app, you agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use the service for any illegal purpose.</li>
              <li>Harass, bully, or intimidate other users.</li>
              <li>Interfere with or disrupt the integrity or performance of the Services.</li>
              <li>Attempt to gain unauthorized access to the Services or related systems.</li>
            </ul>
          </section>
        </div>
        
        <footer className="text-center text-gray-600 text-sm mt-20 border-t border-gray-900 pt-8">
          <p>&copy; {new Date().getFullYear()} One One. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
