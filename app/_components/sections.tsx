import Image from 'next/image';
import React from 'react';
import { HowStep } from './HowStep';
import {
  ArrowRightIcon,
  DownloadIcon,
  EyeIcon,
  HandIcon,
  MicIcon,
  SignalIcon,
  SpeakerIcon,
} from './icons';

export function Navbar() {
  return (
    <header className="figma-navbar">
      <div className="figma-nav">
        <div className="flex items-center gap-4" style={{ width: 276.26 }}>
          <Image src="/1-1 -yellow.png" alt="One One" width={50} height={50} priority />
        </div>

        <nav className="hidden md:flex nav-links" aria-label="Primary">
          <a className="nav-link active" href="#home">
            Home
          </a>
          <a className="nav-link" href="#features">
            Features
          </a>
          <a className="nav-link" href="#how">
            How it works
          </a>
          <a className="nav-link" href="#download">
            Download
          </a>
        </nav>

        <div className="flex items-center gap-5 nav-cta" style={{ width: 261.61 }}>
          <a className="nav-pill fill" href="#download">
            Download
          </a>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-copy">
          <h1 className="hero-title">
            Turn Your Phone Into a
            <br />
            <span className="accent">Modern Walkie-Talkie</span>
          </h1>
          <div className="hero-underline" />
          <p className="hero-subtitle">
            One tap. One channel. Always live.
            <br />
            Instant, push-to-talk voice for friends, teams, and communities.
          </p>

          <div className="hero-buttons">
            <a className="button-yellow" href="#download">
              Download
              <DownloadIcon />
            </a>
          </div>
        </div>

        <div className="glow glow-1" />
        <div className="glow glow-2" />
      </div>
    </section>
  );
}

export function DiagonalStrip() {
  return (
    <section className="diagonal-strip" aria-label="Tap Speak Connect">
      <div className="layer back" />
      <div className="layer mid" />
      <div className="layer front">
        <div className="strip-content" aria-hidden="true">
          <span>Tap</span>
          <Image src="/Logo-black.png" alt="" width={31} height={31} />
          <span>Speak</span>
          <Image src="/Logo-black.png" alt="" width={31} height={31} />
          <span>Connect</span>
          <Image src="/Logo-black.png" alt="" width={31} height={31} />
          <span>Tap</span>
          <Image src="/Logo-black.png" alt="" width={31} height={31} />
          <span>Speak</span>
          <Image src="/Logo-black.png" alt="" width={31} height={31} />
          <span>Connect</span>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="section-pad pb-[50px]">
      <div className="space-y-6 md:space-y-10">
        <div className="feature-panel">
          <div className="feature-inner center">
            <Image className="feature-bgmark left" src="/1-1 -yellow.png" alt="" width={260} height={260} />
            <div className="feature-content">
              <h2 className="title">
                Push-to-talk
                <br />
                <span className="accent">voice messaging</span>
              </h2>
              <p className="desc">
                Fire off real-time audio the moment you press and hold.
                <br />
                Ultra-low latency ensures your message lands instantly.
              </p>
            </div>
          </div>
        </div>

        <div className="feature-panel">
          <div className="feature-inner">
            <Image className="feature-bgmark right" src="/1-1 -yellow.png" alt="" width={260} height={260} />
            <div className="feature-content">
              <h2 className="title">
                Always – available
                <br />
                <span className="accent">channels</span>
              </h2>
              <p className="desc">
                Create private or open channels that stay live 24/7.
                <br />
                Join, leave, or switch on demand — no dialing required.
              </p>
            </div>
          </div>
        </div>

        <div className="feature-panel">
          <div className="feature-inner center">
            <Image className="feature-bgmark left" src="/1-1 -yellow.png" alt="" width={260} height={260} />
            <div className="feature-content">
              <h2 className="title">
                Open source
                <br />
                <span className="accent">foundation</span>
              </h2>
              <p className="desc">
                Backed by a transparent, community-driven codebase so you can trust how your data flows and even contribute to the ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="how-section h-[80vh] rounded-md">
      <div className="relative section-pad py-[50px] flex flex-col items-center gap-[48px]">
        <h2 className="how-title">
          <em>How</em> <span className="accent">it works ?</span>
        </h2>

        <div className="w-full max-w-[1336px] relative how-wrap">
          <div className="how-line how-line-pos" aria-hidden="true" />
          <ol className="how-steps" aria-label="How it works steps">
            <HowStep index={1} title="Tap and Hold" desc="Press the button to talk" icon={<HandIcon />} />
            <HowStep index={2} title="Speak" desc="Your voice transmits instantly" icon={<MicIcon />} />
            <HowStep index={3} title="Release to Listen" desc="Hear responses in real-time" icon={<SpeakerIcon />} />
            <HowStep index={4} title="Join Channels" desc="Create or join conversations" icon={<SignalIcon />} />
            <HowStep index={5} title="Stay Online" desc="Stay connected with presence" icon={<EyeIcon />} />
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Download() {
  return (
    <section id="download" className="download-section h-screen">
      <div className="section-pad">
        <div className="download-wrap">
          <div className="download-graphic" aria-hidden="true">
            <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.9">
                <path d="M70 320 L150 270 L235 295 L205 195 L110 205 L70 320 Z" stroke="currentColor" strokeWidth="2" opacity="0.55" />
                <path d="M150 270 L110 205" stroke="currentColor" strokeWidth="2" opacity="0.55" />
                <path d="M150 270 L205 195" stroke="currentColor" strokeWidth="2" opacity="0.55" />
                <path d="M205 195 L235 295" stroke="currentColor" strokeWidth="2" opacity="0.55" />
                <path d="M110 205 L235 295" stroke="currentColor" strokeWidth="2" opacity="0.35" />

                {[
                  { cx: 70, cy: 320 },
                  { cx: 150, cy: 270 },
                  { cx: 235, cy: 295 },
                  { cx: 205, cy: 195 },
                  { cx: 110, cy: 205 },
                ].map((n, i) => (
                  <g key={i}>
                    <circle cx={n.cx} cy={n.cy} r="36" fill="currentColor" opacity="0.18" />
                    <circle cx={n.cx} cy={n.cy} r="20" fill="currentColor" />
                    <path
                      d="M0 -6a6 6 0 1 0 0.01 0ZM-10 12c2-8 18-8 20 0"
                      transform={`translate(${n.cx} ${n.cy})`}
                      fill="none"
                      stroke="#0C0C0C"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                ))}
              </g>
            </svg>
          </div>

          <div className="download-content">
            <h2 className="download-title">
              Step into the <em>next generation</em> of
              <br />
              <span className="accent">voice-first social communication.</span>
            </h2>
            <a className="button-yellow" href="#">
              Download
              <DownloadIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer-figma">
      <div className="footer-inner">
        <div className="flex items-center gap-3">
          <Image src="/1-1 -black.png" alt="One One" width={44} height={44} />
          <span className="text-sm opacity-80">© {new Date().getFullYear()} One One</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="/terms" className="hover:opacity-80">
            Terms
          </a>
          <a href="/privacy" className="hover:opacity-80">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
