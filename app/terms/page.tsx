import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-gray-300 p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-[#FDEC00] hover:underline">
            &larr; Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-8">
          <section>
            <p className="mb-4">
              These Terms of Service (&quot;Terms&quot;) explain the rules and conditions that apply when you use One One (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) and its services (the &quot;Services&quot;).
            </p>
            <p className="mb-4">
              By accessing or using our Services, you confirm that you understand and agree to these Terms. You also acknowledge that you have reviewed and accepted our <Link href="/privacy" className="text-[#FDEC00] hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to These Terms</h2>
            <p className="mb-4">
              We&apos;re continuously improving One One and may update these Terms from time to time to reflect changes in our Services, features, or legal requirements. Updates will only be made when necessary. If we make significant changes, we&apos;ll notify you. However, we recommend checking these Terms periodically. Continuing to use the Services after changes are published means you accept the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimers</h2>
            <p className="mb-4">
              You use One One at your own discretion and risk.
            </p>
            <p className="mb-4">
              The Services are provided &quot;as is&quot; and &quot;as available,&quot; without any guarantees or warranties of any kind. This includes, but is not limited to, implied warranties of merchantability, suitability for a specific purpose, non-infringement, ownership, or absence of harmful software.
            </p>
            <p className="mb-4">
              We do not guarantee that:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>The Services will always be available, secure, or error-free</li>
              <li>Information provided through the Services will be accurate, complete, or reliable</li>
              <li>The Services will operate without delays, interruptions, or technical issues</li>
            </ul>
            <p className="mb-4">
              We do not oversee or control how users interact with the Services. As such, we are not responsible for user behavior, shared content, or actions taken by third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Release</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, you agree to release and hold harmless One One, including its affiliates, subsidiaries, officers, directors, employees, partners, and agents (collectively, the &quot;One One Parties&quot;), from any claims, disputes, liabilities, or damages arising out of or related to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Your interactions with other users</li>
              <li>Third-party actions or content</li>
              <li>Any disputes you may have with parties other than One One</li>
            </ul>
            <p className="mb-4">
              This applies to claims that are known or unknown, suspected or unsuspected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              One One&apos;s liability is limited as follows:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                We remain fully liable where required by law, including for damages related to life, bodily injury, health, intentional misconduct, gross negligence, or applicable product liability laws.
              </li>
              <li>
                We commit to providing the Services with reasonable professional care.
              </li>
            </ul>
            <p className="mb-4">
              Except where legally required, One One is not responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Losses not caused by our breach of these Terms</li>
              <li>Damages that were not reasonably foreseeable at the time these Terms were agreed</li>
              <li>Events beyond our reasonable control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">User Conduct</h2>
            <p className="mb-4">
              One One is built to enable simple, real-time communication between friends. By using the Services, you agree that you will not:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Use the app for unlawful or unauthorized purposes</li>
              <li>Harass, threaten, bully, or abuse other users</li>
              <li>Disrupt or interfere with the operation, security, or performance of the Services</li>
              <li>Attempt to access systems, accounts, or data without permission</li>
            </ul>
            <p className="mb-4">
              Failure to follow these rules may result in suspension or termination of your access to One One.
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
