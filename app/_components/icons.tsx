import React from 'react';

export function DownloadIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M16 4v14" stroke="currentColor" strokeWidth="2.65" strokeLinecap="round" />
      <path
        d="M10 14l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 24h20" stroke="currentColor" strokeWidth="2.65" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M7 16h16" stroke="currentColor" strokeWidth="2.65" strokeLinecap="round" />
      <path
        d="M17 10l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SquareMark() {
  return <span className="inline-block w-[31px] h-[31px] bg-transparent border-2 border-black" />;
}

export function HandIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M15 22v-6" stroke="var(--accent)" strokeWidth="3.75" strokeLinecap="round" />
      <path d="M24 24V12" stroke="var(--accent)" strokeWidth="3.75" strokeLinecap="round" />
      <path d="M33 24v-8" stroke="var(--accent)" strokeWidth="3.75" strokeLinecap="round" />
      <path
        d="M12 24c0 10 6 16 12 16s12-6 12-16"
        stroke="var(--accent)"
        strokeWidth="3.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MicIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M24 30a6 6 0 0 0 6-6V14a6 6 0 0 0-12 0v10a6 6 0 0 0 6 6Z"
        stroke="var(--accent)"
        strokeWidth="3.75"
      />
      <path d="M14 22c0 6 4 10 10 10s10-4 10-10" stroke="var(--accent)" strokeWidth="3.75" strokeLinecap="round" />
      <path d="M24 32v6" stroke="var(--accent)" strokeWidth="3.75" strokeLinecap="round" />
    </svg>
  );
}

export function SpeakerIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 28V20h8l10-8v32l-10-8h-8Z" stroke="var(--accent)" strokeWidth="3.75" strokeLinejoin="round" />
      <path d="M34 18c2 2 2 10 0 12" stroke="var(--accent)" strokeWidth="3.75" strokeLinecap="round" />
    </svg>
  );
}

export function SignalIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 34c8-8 20-8 28 0" stroke="var(--accent)" strokeWidth="3.75" strokeLinecap="round" />
      <path d="M16 28c5-5 11-5 16 0" stroke="var(--accent)" strokeWidth="3.75" strokeLinecap="round" />
      <path d="M24 26v0" stroke="var(--accent)" strokeWidth="3.75" strokeLinecap="round" />
    </svg>
  );
}

export function EyeIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 24s6-10 18-10 18 10 18 10-6 10-18 10S6 24 6 24Z" stroke="var(--accent)" strokeWidth="3.75" strokeLinejoin="round" />
      <path d="M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="var(--accent)" strokeWidth="3.75" />
    </svg>
  );
}
