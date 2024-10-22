import React from 'react';
import './Learn.scss';

interface StatsRingCardProps {
  title: string;
  completed: number;
  total: number;
  stats: {
    value: number;
    label: string;
  }[];
}

function Learn({ title, completed, total, stats }: StatsRingCardProps) {
  return (
    <div className="card custom-card">
      <div className="custom-inner">
        <div>
          <h2 className="custom-label-xl">{title}</h2>
          <div>
            <h3 className="custom-lead">{completed}</h3>
            <div className="custom-label-xs text-muted">Completed</div>
          </div>
          <div className="mt-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="custom-label">{stat.value}</div>
                <div className="custom-label-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="custom-ring">
          {/* Replace with your custom ring progress component */}
          {/* You can use Bootstrap's progress or create a custom component */}
        </div>
      </div>
    </div>
  );
}

export default Learn;
