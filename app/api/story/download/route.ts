import { NextResponse } from 'next/server';
import { generateStoryPDF } from '@/lib/utils/pdfGenerator';

export async function GET() {
  try {
    const pdfBuffer = await generateStoryPDF();

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="jordan-bartlett-story-foster-greatness.pdf"',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('PDF download failed:', error);
    return new NextResponse('PDF download failed', { status: 500 });
  }
}
