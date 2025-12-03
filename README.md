# Jordan's Story - Foster Greatness

Personal story landing page featuring Jordan's journey with Serena and the creation of Foster Greatness.

## About

This landing page tells Jordan Bartlett's personal story about finding his sister in foster care and building Doing Good Works / Foster Greatness as a response. It's designed for personal donor outreach and storytelling.

## Deploy to Vercel

1. Push this repository to GitHub
2. Import to Vercel
3. Connect to `fostergreatness.co/story`

### Vercel Configuration

**Root Directory:** `.` (leave blank)

**Build Settings:**
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`

### Custom Domain Setup

In your Vercel project settings:
1. Go to Settings → Domains
2. Add domain: `fostergreatness.co`
3. Configure DNS or use Vercel's nameservers
4. Set up path rewrites in your main project:

Add to main `fostergreatness.co` project's `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/story",
      "destination": "https://fg-story.vercel.app"
    }
  ]
}
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Foster Greatness Design System

## Content Management

Edit content in: `lib/content/story.ts`
