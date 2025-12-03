import React from 'react';

interface MetricCardProps {
  label: string;
  value: string;
}

export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-fg-light-blue text-center">
      <div className="text-5xl font-bold text-fg-teal mb-2">
        {value}
      </div>
      <div className="text-sm font-semibold text-fg-navy uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
