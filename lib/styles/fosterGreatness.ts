export const fgColors = {
  primary: {
    navy: '#1a2949',
    teal: '#0067a2',
  },
  accent: {
    orange: '#fa8526',
    yellow: '#faca2c',
    tealLight: '#00c8b7',
    blue: '#7abad8',
  },
  support: {
    lightBlue: '#ddf3ff',
    warmBg: '#faf9f7',
  },
  text: {
    primary: '#1a2949',
    secondary: '#4a5568',
  },
} as const;

export const fgTypography = {
  fonts: {
    primary: "'Nunito Sans', 'Century Gothic', 'Futura', sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
  },
  sizes: {
    web: {
      h1: '3rem',      // 48px
      h2: '2.25rem',   // 36px
      h3: '1.75rem',   // 28px
      body: '1.125rem', // 18px
      caption: '0.875rem', // 14px
    },
    pdf: {
      h1: 24,
      h2: 18,
      body: 12,
      caption: 10,
    },
  },
  lineHeight: {
    letter: 1.8,
    data: 1.5,
    headings: 1.2,
  },
} as const;

export const fgSpacing = {
  section: '4rem',      // 64px between major sections
  paragraph: '1.5rem',  // 24px between paragraphs
  card: '2rem',         // 32px for card padding
} as const;

export const fgLayout = {
  maxWidth: {
    letter: '680px',
    container: '1440px',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
  },
} as const;
