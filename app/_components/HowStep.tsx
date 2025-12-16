import React from 'react';

export function HowStep({
  index,
  title,
  desc,
  icon,
}: {
  index: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <li className="how-step">
      <div className="how-step-head">
        <div className="how-icon" aria-hidden="true">
          {icon}
        </div>
        <div className="how-badge" aria-label={`Step ${index}`}>
          {index}
        </div>
      </div>
      <div className="how-step-meta">
        <div className="how-step-title">{title}</div>
        <div className="how-step-desc">{desc}</div>
      </div>
    </li>
  );
}
