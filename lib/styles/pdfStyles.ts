import { StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts (React-PDF has limited font support)
// We use built-in fonts: Helvetica, Times-Roman

export const pdfStyles = StyleSheet.create({
  page: {
    padding: '0.75in',
    fontFamily: 'Times-Roman',
    fontSize: 12,
    lineHeight: 1.6,
    color: '#1a2949',
  },

  letterText: {
    fontFamily: 'Times-Roman',
    fontSize: 12,
    lineHeight: 1.8,
    color: '#1a2949',
    marginBottom: 12,
  },

  heading: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: '#0067a2',
    marginBottom: 16,
    marginTop: 24,
  },

  dataSection: {
    marginVertical: 24,
    padding: 16,
    backgroundColor: '#ddf3ff',
    borderRadius: 4,
  },

  dataHeading: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: '#1a2949',
    marginBottom: 12,
  },

  statValue: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#fa8526',
    marginBottom: 4,
  },

  statLabel: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: '#1a2949',
    marginBottom: 8,
  },

  outcomesList: {
    marginTop: 12,
  },

  outcomeItem: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    color: '#1a2949',
    marginBottom: 6,
    paddingLeft: 12,
  },

  timeline: {
    marginVertical: 24,
  },

  timelineEvent: {
    marginBottom: 8,
  },

  timelineYear: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#0067a2',
  },

  timelineLabel: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    color: '#1a2949',
  },

  metricCard: {
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },

  metricValue: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: '#0067a2',
    marginBottom: 4,
  },

  metricLabel: {
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#1a2949',
    textTransform: 'uppercase',
  },

  signature: {
    marginTop: 24,
    paddingTop: 12,
    borderTop: '1 solid #ddf3ff',
  },

  signatureLine: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    color: '#1a2949',
    marginBottom: 4,
  },

  signatureName: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#1a2949',
    marginBottom: 4,
  },

  link: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    color: '#0067a2',
    textDecoration: 'underline',
  },
});
