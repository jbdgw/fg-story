import React from 'react';
import { renderToBuffer } from '@react-pdf/renderer';
import { PDFLetter } from '@/components/pdf/PDFLetter';
import { storyContent } from '@/lib/content/story';

export async function generateStoryPDF(): Promise<Buffer> {
  const pdfDoc = <PDFLetter content={storyContent} />;
  const buffer = await renderToBuffer(pdfDoc);
  return buffer;
}
