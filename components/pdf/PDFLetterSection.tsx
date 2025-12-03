import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { pdfStyles } from '@/lib/styles/pdfStyles';

interface PDFLetterSectionProps {
  heading?: string | null;
  paragraphs: string[];
}

export function PDFLetterSection({ heading, paragraphs }: PDFLetterSectionProps) {
  return (
    <View>
      {heading && (
        <Text style={pdfStyles.heading}>{heading}</Text>
      )}
      {paragraphs.map((paragraph, index) => (
        <Text key={index} style={pdfStyles.letterText}>
          {paragraph}
        </Text>
      ))}
    </View>
  );
}
