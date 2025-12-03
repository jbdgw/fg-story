import React from 'react';
import { Document, Page, Text, View, Link } from '@react-pdf/renderer';
import { pdfStyles } from '@/lib/styles/pdfStyles';
import { StoryContent } from '@/lib/content/story';
import { PDFLetterSection } from './PDFLetterSection';
import { PDFDataVisual } from './PDFDataVisual';
import { PDFImpactVisual } from './PDFImpactVisual';

interface PDFLetterProps {
  content: StoryContent;
}

export function PDFLetter({ content }: PDFLetterProps) {
  const { sections, metadata } = content;

  return (
    <Document
      title={metadata.title}
      author={metadata.author}
      subject="A letter about foster care and building community"
    >
      <Page size="LETTER" style={pdfStyles.page}>
        {/* Opening Section */}
        <PDFLetterSection
          heading={sections.opening.heading}
          paragraphs={sections.opening.paragraphs}
        />

        {/* Data Interlude */}
        <PDFDataVisual data={sections.dataInterlude} />

        {/* Business Model Section */}
        <PDFLetterSection
          heading={sections.businessModel.heading}
          paragraphs={sections.businessModel.paragraphs}
        />
      </Page>

      <Page size="LETTER" style={pdfStyles.page}>
        {/* Impact Snapshot */}
        <PDFImpactVisual data={sections.impactSnapshot} />

        {/* Sister Update Section */}
        <PDFLetterSection
          heading={sections.sisterUpdate.heading}
          paragraphs={sections.sisterUpdate.paragraphs}
        />

        {/* Invitation Section */}
        <PDFLetterSection
          heading={sections.invitation.heading}
          paragraphs={sections.invitation.paragraphs}
        />

        {/* Signature */}
        <View style={pdfStyles.signature}>
          <Text style={pdfStyles.signatureName}>
            {sections.invitation.signature.name}
          </Text>
          <Text style={pdfStyles.signatureLine}>
            {sections.invitation.signature.title}
          </Text>
          <Text style={pdfStyles.signatureLine}>
            {sections.invitation.signature.company}
          </Text>
          <Link src={`mailto:${sections.invitation.signature.email}`} style={pdfStyles.link}>
            {sections.invitation.signature.email}
          </Link>
        </View>
      </Page>
    </Document>
  );
}
