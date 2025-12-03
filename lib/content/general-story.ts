/**
 * General Story Content
 *
 * Template-based story following the communicative strategy structure.
 * This serves as a customizable template for broader audience outreach.
 */

export interface GeneralStoryMetadata {
  title: string;
  subtitle: string;
  organization: string;
}

export interface ProblemSection {
  heading: string;
  paragraphs: string[];
}

export interface SolutionSection {
  heading: string;
  paragraphs: string[];
}

export interface ImpactStat {
  value: string;
  label: string;
  sublabel: string;
}

export interface ReasonToBelieveSection {
  heading: string;
  impactStats: ImpactStat[];
  paragraphs: string[];
}

export interface StatisticCard {
  value: string;
  label: string;
  sublabel: string;
}

export interface OutcomeStatistic {
  percentage: string;
  description: string;
}

export interface DataSection {
  heading: string;
  nationalStats: StatisticCard[];
  outcomesHeading: string;
  outcomes: OutcomeStatistic[];
  source: string;
}

export interface CallToActionSection {
  heading: string;
  paragraphs: string[];
  primaryCTA: {
    text: string;
    url: string;
  };
  secondaryCTA: {
    text: string;
    url: string;
  };
}

export interface GeneralStoryContent {
  metadata: GeneralStoryMetadata;
  sections: {
    problem: ProblemSection;
    solution: SolutionSection;
    data: DataSection;
    reasonToBelieve: ReasonToBelieveSection;
    callToAction: CallToActionSection;
  };
}

export const generalStoryContent: GeneralStoryContent = {
  metadata: {
    title: "Building Community That Lasts a Lifetime",
    subtitle: "How Foster Greatness Creates Belonging for Current and Former Foster Youth",
    organization: "Foster Greatness & Doing Good Works"
  },
  sections: {
    problem: {
      heading: "The Belonging Gap",
      paragraphs: [
        "Every year, over 328,000 young people navigate foster care in the United States. About 20,000 reach age 18 and transition out of the system annually—often without permanent families, consistent support networks, or the structural advantages most of us rely on throughout our lives.",
        "The challenge isn't just about resources. It's about something more fundamental: belonging. While housing programs, job training, and educational scholarships matter, they can't replace what foster youth need most—a lifelong community where they're seen, celebrated, and supported unconditionally.",
        "Most support systems have expiration dates. Foster youth experience this reality repeatedly: services end, programs close enrollment, and the people who were there yesterday aren't answering calls tomorrow. The pattern reinforces a painful message: you're on your own."
      ]
    },
    solution: {
      heading: "A Community You Never Age Out Of",
      paragraphs: [
        "Ten years ago, we founded Doing Good Works to support foster youth. Through that work, we learned something critical: foster youth didn't just need services—they needed community. Two years ago, this realization led us to launch Foster Greatness with a simple but revolutionary idea: create a community where foster youth and alumni can age into—but never age out of.",
        "We're not a traditional charity. We're a movement led by people who have experienced foster care, building lifelong belonging through a comprehensive digital platform, 24/7 peer support, and programs designed by and for those who've navigated foster care. Over 2,000 members across the country connect through our community app, attend weekly gatherings and workshops, access personalized resource navigation, and receive crisis support exactly when they need it.",
        "We're closing in on 1,000 individual support requests—from housing navigation and scholarship matching to crisis funding and tax preparation support. We've hosted almost 200 community events and workshops. We granted 300+ wishes totaling over $50,000 through our partnership with One Simple Wish. We helped 35 members access $39,000+ in Foster Youth Tax Credit returns. We produced 19 Thriver Stories that reached 2,637 viewers nationwide.",
        "But here's what matters most: we show up. Yesterday, today, and tomorrow. Members engage at their own pace, choosing what feels right for them. From their first connection through every milestone that follows—graduating, getting married, raising children, building careers—we're here. Because belonging isn't a program. It's a promise."
      ]
    },
    data: {
      heading: "Foster Care By The Numbers",
      nationalStats: [
        {
          value: "328,000+",
          label: "Kids in foster care",
          sublabel: "nationally"
        },
        {
          value: "20,000+",
          label: "Age out annually",
          sublabel: "without permanent families"
        }
      ],
      outcomesHeading: "Outcomes After Aging Out",
      outcomes: [
        {
          percentage: "20%",
          description: "experience homelessness within 18 months of aging out"
        },
        {
          percentage: "50%",
          description: "are unemployed by age 24"
        },
        {
          percentage: "3%",
          description: "earn a college degree"
        }
      ],
      source: "National data compiled from multiple child welfare research sources"
    },
    reasonToBelieve: {
      heading: "What We've Built Together",
      impactStats: [
        {
          value: "2,000+",
          label: "Members nationwide",
          sublabel: "current and former foster youth"
        },
        {
          value: "200+",
          label: "Community events",
          sublabel: "hosted since launch"
        },
        {
          value: "300+",
          label: "Wishes granted",
          sublabel: "totaling over $50,000"
        }
      ],
      paragraphs: [
        "Foster Greatness is a lifelong community where foster youth and alumni find belonging, connection, and support—on their terms. We're proving that when people have a place to belong, they thrive.",
        "Here's what makes giving to Foster Greatness different: we're powered by DGW Branded, a social enterprise whose business revenue covers our operational costs. That means 100% of your donation goes directly to impact—crisis support, scholarships, career development, and the technology that keeps our community connected 24/7.",
        "When you give to Foster Greatness, your dollars don't just fund programs—they're multiplied by sustainable business revenue that lets us respond to member needs immediately, plan for the long term, and grow without chasing grant cycles. Every dollar you donate is paired with enterprise revenue to stretch further and last longer."
      ]
    },
    callToAction: {
      heading: "Your Year-End Impact",
      paragraphs: [
        "As you finalize your giving strategy, consider this: you're not choosing between smart giving and maximum impact. At Foster Greatness, you get both. Your contribution builds belonging for people who've spent too long without it—and a business model ensures that belonging endures."
      ],
      primaryCTA: {
        text: "Make a Donation",
        url: "https://fostergreatness.co/donate"
      },
      secondaryCTA: {
        text: "Make a Donation",
        url: "https://fostergreatness.co/donate"
      }
    }
  }
};
