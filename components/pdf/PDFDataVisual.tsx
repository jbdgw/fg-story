import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { pdfStyles } from '@/lib/styles/pdfStyles';
import { DataInterlude } from '@/lib/content/story';

interface PDFDataVisualProps {
  data: DataInterlude;
}

export function PDFDataVisual({ data }: PDFDataVisualProps) {
  return (
    <View style={pdfStyles.dataSection}>
      <Text style={pdfStyles.dataHeading}>{data.heading}</Text>

      {/* Stats */}
      {data.stats.map((stat, index) => (
        <View key={index} style={{ marginBottom: 16 }}>
          <Text style={pdfStyles.statValue}>{stat.value}</Text>
          <Text style={pdfStyles.statLabel}>{stat.label}</Text>
          <Text style={{ fontSize: 10, color: '#4a5568' }}>{stat.context}</Text>
        </View>
      ))}

      {/* Outcomes */}
      <View style={pdfStyles.outcomesList}>
        <Text style={pdfStyles.statLabel}>Outcomes After Aging Out:</Text>
        {data.outcomes.map((outcome, index) => (
          <Text key={index} style={pdfStyles.outcomeItem}>
            • {outcome}
          </Text>
        ))}
      </View>
    </View>
  );
}
