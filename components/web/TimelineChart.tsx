'use client';

import React from 'react';
import { TimelineEvent } from '@/lib/content/story';

interface TimelineChartProps {
  events: TimelineEvent[];
}

export function TimelineChart({ events }: TimelineChartProps) {
  return (
    <div className="py-8">
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="absolute top-6 left-0 right-0 h-1 bg-fg-light-blue" />

          <div className="relative flex justify-between items-start">
            {events.map((event, index) => (
              <div key={index} className="flex flex-col items-center" style={{ flex: 1 }}>
                <div className="w-12 h-12 rounded-full bg-fg-teal border-4 border-white shadow-md z-10 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{event.year}</span>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-sm font-semibold text-fg-navy">
                    {event.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-fg-teal border-4 border-white shadow-md flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">{event.year}</span>
            </div>
            <div className="flex-1 pt-4">
              <div className="text-base font-semibold text-fg-navy">
                {event.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
