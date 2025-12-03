import React from 'react';
import { TimelineChart } from './TimelineChart';
import { MetricCard } from './MetricCard';
import { ImpactSnapshot as ImpactSnapshotType } from '@/lib/content/story';

interface ImpactSnapshotProps {
  data: ImpactSnapshotType;
}

export function ImpactSnapshot({ data }: ImpactSnapshotProps) {
  return (
    <section className="py-16 -mx-4 px-4 md:mx-0 md:px-0">
      {/* Heading */}
      <h2 className="font-sans text-h2 font-bold text-fg-navy mb-12 text-center">
        {data.heading}
      </h2>

      {/* Timeline */}
      <div className="mb-16 max-w-4xl mx-auto">
        <TimelineChart events={data.timeline} />
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {data.metrics.map((metric, index) => (
          <MetricCard
            key={index}
            label={metric.label}
            value={metric.value}
          />
        ))}
      </div>
    </section>
  );
}
