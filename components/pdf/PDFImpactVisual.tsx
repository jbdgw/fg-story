import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { pdfStyles } from '@/lib/styles/pdfStyles';
import { ImpactSnapshot } from '@/lib/content/story';

interface PDFImpactVisualProps {
  data: ImpactSnapshot;
}

export function PDFImpactVisual({ data }: PDFImpactVisualProps) {
  return (
    <View>
      <Text style={pdfStyles.heading}>{data.heading}</Text>

      {/* Timeline */}
      <View style={pdfStyles.timeline}>
        {data.timeline.map((event, index) => (
          <View key={index} style={pdfStyles.timelineEvent}>
            <Text style={pdfStyles.timelineYear}>{event.year}</Text>
            <Text style={pdfStyles.timelineLabel}>{event.label}</Text>
          </View>
        ))}
      </View>

      {/* Metrics */}
      <View style={{ marginTop: 16 }}>
        {data.metrics.map((metric, index) => (
          <View key={index} style={pdfStyles.metricCard}>
            <Text style={pdfStyles.metricValue}>{metric.value}</Text>
            <Text style={pdfStyles.metricLabel}>{metric.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
