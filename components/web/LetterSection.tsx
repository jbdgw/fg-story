import React from 'react';

interface LetterSectionProps {
  heading?: string | null;
  paragraphs: string[];
  className?: string;
}

export function LetterSection({ heading, paragraphs, className = '' }: LetterSectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      {heading && (
        <h2 className="font-sans text-h2 font-bold text-fg-teal mb-8">
          {heading}
        </h2>
      )}
      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="letter-text"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </section>
  );
}
