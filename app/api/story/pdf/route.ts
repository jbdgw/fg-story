import { NextResponse } from 'next/server';
import { generateStoryPDF } from '@/lib/utils/pdfGenerator';

export async function GET() {
  try {
    const pdfBuffer = await generateStoryPDF();

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('PDF generation failed:', error);
    return new NextResponse('PDF generation failed', { status: 500 });
  }
}
