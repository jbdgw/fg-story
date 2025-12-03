import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  context: string;
  percentage?: number; // For bar chart fill
}

export function StatCard({ label, value, context, percentage = 60 }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-fg-light-blue">
      <div className="text-4xl font-bold text-fg-orange mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-fg-navy mb-2">
        {label}
      </div>
      <div className="text-sm text-fg-text-secondary">
        {context}
      </div>
    </div>
  );
}
