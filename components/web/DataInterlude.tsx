import React from 'react';
import { StatCard } from './StatCard';
import { DataInterlude as DataInterludeType } from '@/lib/content/story';

interface DataInterludeProps {
  data: DataInterludeType;
}

export function DataInterlude({ data }: DataInterludeProps) {
  return (
    <section className="py-16 -mx-4 px-4 md:mx-0 md:px-0">
      {/* Heading */}
      <h2 className="font-sans text-h2 font-bold text-fg-navy mb-8 text-center">
        {data.heading}
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
        {data.stats.map((stat, index) => (
          <StatCard
            key={index}
            label={stat.label}
            value={stat.value}
            context={stat.context}
            percentage={index === 0 ? 70 : 55}
          />
        ))}
      </div>

      {/* Outcomes */}
      <div className="bg-fg-light-blue/30 rounded-lg p-6 max-w-3xl mx-auto">
        <h3 className="font-sans text-xl font-semibold text-fg-navy mb-4">
          Outcomes After Aging Out:
        </h3>
        <ul className="space-y-3">
          {data.outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start">
              <span className="text-fg-teal mr-3 font-bold">•</span>
              <span className="data-text text-fg-navy">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
