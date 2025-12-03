import React from 'react';
import type { Metadata } from 'next';
import { storyContent } from '@/lib/content/story';
import { LetterSection } from '@/components/web/LetterSection';
import { DataInterlude } from '@/components/web/DataInterlude';
import { ImpactSnapshot } from '@/components/web/ImpactSnapshot';

export const metadata: Metadata = {
  title: "Jordan's Story | Foster Greatness",
  description: "A personal letter about foster care, finding my sister, and building a business that creates lifelong community for foster youth.",
  authors: [{ name: "Jordan Bartlett" }],
  openGraph: {
    title: "Jordan's Story | Foster Greatness",
    description: "A personal letter about foster care, finding my sister, and building a business that creates lifelong community for foster youth.",
    type: "article",
    siteName: "Foster Greatness",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan's Story | Foster Greatness",
    description: "A personal letter about foster care, finding my sister, and building a business that creates lifelong community for foster youth.",
  },
};

export default function StoryPage() {
  const { sections, metadata } = storyContent;

  return (
    <main className="min-h-screen bg-fg-warm-bg">
      <article className="max-w-letter mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 sm:space-y-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-fg-navy">
            Story of Foster Greatness
          </h1>
        </header>

        {/* Opening Section */}
        <LetterSection
          heading={sections.opening.heading}
          paragraphs={sections.opening.paragraphs}
        />

        {/* Data Interlude */}
        <DataInterlude data={sections.dataInterlude} />

        {/* Business Model Section */}
        <LetterSection
          heading={sections.businessModel.heading}
          paragraphs={sections.businessModel.paragraphs}
        />

        {/* Impact Snapshot */}
        <ImpactSnapshot data={sections.impactSnapshot} />

        {/* Sister Update Section */}
        <LetterSection
          heading={sections.sisterUpdate.heading}
          paragraphs={sections.sisterUpdate.paragraphs}
        />

        {/* Invitation Section */}
        <LetterSection
          heading={sections.invitation.heading}
          paragraphs={sections.invitation.paragraphs}
        />

        {/* Signature */}
        <div className="mt-12 pt-8 border-t border-fg-light-blue">
          <div className="letter-text">
            <p className="font-semibold">{sections.invitation.signature.name}</p>
            <p>{sections.invitation.signature.title}</p>
            <p>{sections.invitation.signature.company}</p>
            <p>
              <a
                href={`mailto:${sections.invitation.signature.email}`}
                className="text-fg-teal hover:text-fg-navy underline"
              >
                {sections.invitation.signature.email}
              </a>
            </p>
          </div>

          {/* Impact Report Button */}
          <div className="mt-8">
            <a
              href="https://www.fostergreatness.co/impact-report"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-fg-teal text-white font-semibold rounded-lg hover:bg-fg-navy transition-colors duration-200"
            >
              2024 Impact Report
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
