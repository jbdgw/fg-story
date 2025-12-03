export interface StoryMetadata {
  title: string;
  author: string;
  company: string;
  email: string;
  date: string;
}

export interface LetterSection {
  heading: string | null;
  paragraphs: string[];
  wordCount?: number;
}

export interface DataStat {
  label: string;
  value: string;
  context: string;
}

export interface TimelineEvent {
  year: number;
  label: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface DataInterlude {
  heading: string;
  stats: DataStat[];
  outcomes: string[];
}

export interface ImpactSnapshot {
  heading: string;
  timeline: TimelineEvent[];
  metrics: Metric[];
}

export interface Signature {
  name: string;
  title: string;
  company: string;
  email: string;
}

export interface InvitationSection extends LetterSection {
  signature: Signature;
}

export interface StoryContent {
  metadata: StoryMetadata;
  sections: {
    opening: LetterSection;
    dataInterlude: DataInterlude;
    businessModel: LetterSection;
    impactSnapshot: ImpactSnapshot;
    sisterUpdate: LetterSection;
    invitation: InvitationSection;
  };
}

export const storyContent: StoryContent = {
  metadata: {
    title: "A Letter About Foster Care and Business",
    author: "Jordan Bartlett",
    company: "Doing Good Works / Foster Greatness",
    email: "jordanb@doinggoodworks.com",
    date: "2025",
  },

  sections: {
    opening: {
      heading: null,
      paragraphs: [
        "'I'm your sister. We have the same Dad.'",
        "I was 19, walking through my college campus when a young mother approached me pushing a stroller. That's how she introduced herself.",
        "I knew I was adopted. I had two amazing parents who loved me. I had never thought about another family.",
        "I had no response. We made limited small talk while I ached to get back to my dorm to make sense of what I just heard.",
        "Stephanie grew up three blocks from me. She was in and out of foster care. She was in the process of getting clean. She had been incarcerated. These were barriers that had never crossed my mind—obstacles I never had to face because of the randomness of placement, because someone chose me and not her.",
        "We shared the same father, lived in the same city, walked the same streets. But our childhoods couldn't have been more different. That three-block distance might as well have been a world apart. She navigated systems I never knew existed. She fought battles I never had to fight. And I got opportunities she never had access to.",
        "This is the gap for those who age out with nowhere to belong. This is the gap Foster Greatness exists to close.",
      ],
      wordCount: 350,
    },

    dataInterlude: {
      heading: "Foster Care By The Numbers",
      stats: [
        {
          label: "Kids in foster care",
          value: "328,000+",
          context: "nationally"
        },
        {
          label: "Age out annually",
          value: "20,000+",
          context: "without permanent families"
        },
      ],
      outcomes: [
        "20% experience homelessness within 18 months of aging out",
        "50% are unemployed by age 24",
        "Only 3% earn a college degree",
      ],
    },

    businessModel: {
      heading: null,
      paragraphs: [
        "Here's where it gets business-relevant: I didn't want to build another nonprofit that depends on donations and grants. That model is exhausting, unpredictable, and puts organizations in perpetual survival mode.",
        "Instead, we built Doing Good Works as a promotional products company—a real business with real revenue. Every order for branded swag, company gifts, or event materials funds Foster Greatness, our platform for current and former foster youth. It's not a <strong><em>traditional</em></strong> charity. It's a business model where every transaction creates impact.",
        "Foster Greatness provides what my sister needed: a community that doesn't disappear when you turn 18. A place to find resources, connect with peers who understand the journey, access mentorship, and build the kind of lasting relationships most people take for granted. We call it 'age into but never age out'—support that evolves with you throughout your entire life.",
        "Running a business this way has made me a better entrepreneur. Every decision has to be both profitable and purposeful. We can't survive on good intentions—we have to deliver real value to our customers while creating real impact for our community. That discipline has shaped everything from our operations to our culture.",
      ],
      wordCount: 350,
    },

    impactSnapshot: {
      heading: "The Journey So Far",
      timeline: [
        { year: 2003, label: "Found my sister" },
        { year: 2014, label: "Started Doing Good Works" },
        { year: 2023, label: "Launched Foster Greatness" },
        { year: 2025, label: "Launched internationally" },
      ],
      metrics: [
        { label: "Years operating", value: "10+" },
        { label: "Community members", value: "2,000+" },
        { label: "Reinvested by social enterprise", value: "$4M" },
      ],
    },

    sisterUpdate: {
      heading: null,
      paragraphs: [
        "My sister's doing better now. She's part of the Foster Greatness community, has stable housing, and recently started a career in social work. She's helping other foster youth navigate the system she once struggled through. That's the model working—not rescue, not charity, but real community creating lasting change.",
      ],
      wordCount: 150,
    },

    invitation: {
      heading: "Become a Partner in Closing the Gap",
      paragraphs: [
        "Here's what makes Foster Greatness different:",
        "We're a social enterprise. Our business operations cover overhead, which means 100% of your donation goes directly to creating belonging and opportunity for current and former foster youth.",
        "Not a portion. Not 'most of it.' All of it.",
        "When you give to Foster Greatness, you're not just making a donation—you're becoming a partner in ensuring that a three-block distance, or a random placement decision, doesn't determine a young person's future.",
        "Your partnership funds lifelong community for youth aging out of foster care, direct support with zero administrative overhead, and programs that close the gap between those who had support and those who didn't.",
        "The difference between me and Stephanie shouldn't have been chance. Your gift ensures it won't be.",
      ],
      signature: {
        name: "Jordan Bartlett",
        title: "Founder",
        company: "Doing Good Works",
        email: "jordanb@doinggoodworks.com",
      },
      wordCount: 175,
    },
  },
};
