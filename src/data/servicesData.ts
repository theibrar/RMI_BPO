export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  heroImage: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  metrics: { value: string; label: string }[];
  coreCompetencies: { title: string; desc: string; icon: string }[];
  deliverables: string[];
  whyChooseUs: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "inbound-outbound",
    title: "Inbound & Outbound Sales Solutions",
    shortTitle: "Sales & Support",
    subtitle: "High-Conversion Sales & Proactive 24/7 Customer Acquisition",
    heroImage: "/assets/services/sales-team.png",
    iconName: "PhoneCall",
    badge: "Revenue Driver",
    shortDesc: "Drive revenue with elite sales and support teams specialized in high-velocity acquisition and retention.",
    fullDesc:
      "Maximize every customer interaction with RMI BPO LLC's elite inbound and outbound sales professionals. From cold outbound prospect qualification to inbound conversion acceleration and multi-tier customer success, our domestic and global agents are rigorously trained to represent your brand with precision, empathy, and relentless focus on measurable ROI.",
    metrics: [
      { value: "40%+", label: "Avg Conversion Rate Lift" },
      { value: "24/7/365", label: "Multi-Channel Coverage" },
      { value: "15s", label: "Avg Inbound Speed-to-Lead" },
      { value: "98.4%", label: "First Call Resolution (FCR)" },
    ],
    coreCompetencies: [
      {
        title: "Technical Sales & Closing",
        desc: "Expert negotiation and deep product knowledge tailored to overcome objections and close complex deals.",
        icon: "TrendingUp",
      },
      {
        title: "Customer Success & Retention",
        desc: "Proactive account management and white-glove support that transforms first-time buyers into loyal brand advocates.",
        icon: "HeartHandshake",
      },
      {
        title: "Lead Generation & Appointment Setting",
        desc: "High-quality B2B & B2C prospecting that keeps your sales calendar consistently full with sales-ready buyers.",
        icon: "Target",
      },
      {
        title: "Omnichannel Helpdesk & Tier 1-3 Support",
        desc: "Seamless voice, ticket, and escalation workflows with strict SLA compliance and zero downtime.",
        icon: "Headphones",
      },
    ],
    deliverables: [
      "Dedicated, accent-neutral, college-educated sales representatives",
      "Custom call scripting, objection handling matrices, and playbooks",
      "Seamless CRM integration (Salesforce, HubSpot, Zoho, GoHighLevel)",
      "Real-time call recording, sentiment analysis, and QA monitoring",
      "Weekly KPI dashboards with full pipeline attribution and analytics",
    ],
    whyChooseUs: [
      {
        title: "Quality Assured Excellence",
        desc: "Continuous training loops, daily speech analytics, and weekly calibration calls ensure perfection.",
      },
      {
        title: "Elastic Scale On-Demand",
        desc: "Rapidly ramp agent headcount up or down to match seasonal spikes without recruiting overhead.",
      },
      {
        title: "Real-Time Telephony Transparency",
        desc: "Complete visibility into live queues, wait times, talk duration, and customer sentiment scores.",
      },
    ],
    faqs: [
      {
        question: "How quickly can RMI BPO launch an inbound or outbound sales team?",
        answer:
          "Standard deployment takes between 10 to 21 business days, including recruitment, bespoke training, CRM synchronization, and test call calibration.",
      },
      {
        question: "Do you integrate with our existing CRM and dialer software?",
        answer:
          "Yes. We support all major telephony platforms and CRMs including Salesforce, HubSpot, Zendesk, Vicidial, Five9, Talkdesk, and custom webhooks.",
      },
    ],
  },
  {
    slug: "live-chat",
    title: "Omnichannel Live Chat & Real-Time Engagement",
    shortTitle: "Live Chat Support",
    subtitle: "Real-Time Conversations That Turn Casual Visitors Into Loyal Customers",
    heroImage: "/assets/services/live-chat.png",
    iconName: "MessageSquare",
    badge: "Instant Engagement",
    shortDesc: "Engage web visitors instantly 24/7 with rapid response times and high-converting chat agents.",
    fullDesc:
      "Modern consumers expect immediate answers. RMI BPO LLC delivers 24/7 conversational commerce and technical live chat support that eliminates buyer hesitation, handles inquiries in seconds, and dramatically boosts on-site conversion rates.",
    metrics: [
      { value: "< 20s", label: "Average Response Time" },
      { value: "3.5x", label: "Higher Website Conversion" },
      { value: "99.1%", label: "Customer Satisfaction (CSAT)" },
      { value: "100%", label: "24/7 Uptime & Coverage" },
    ],
    coreCompetencies: [
      {
        title: "Real-Time Conversational Sales",
        desc: "Guiding website visitors through product selection, checkout funnels, and promotional offerings.",
        icon: "Zap",
      },
      {
        title: "Multi-Session Handling",
        desc: "Efficient multi-tasking agents capable of maintaining high empathy across concurrent conversations.",
        icon: "Layers",
      },
      {
        title: "Proactive Engagement Triggers",
        desc: "Targeted chat popups triggered on exit-intent, high-value carts, or pricing page dwell time.",
        icon: "Bell",
      },
      {
        title: "AI-Assisted Hybrid Workflows",
        desc: "Smart human-in-the-loop workflows where agents leverage AI copilots for instant knowledge retrieval.",
        icon: "Cpu",
      },
    ],
    deliverables: [
      "24/7 coverage across all time zones with zero abandoned chats",
      "Integration with Intercom, LiveChat, Zendesk, Tidio, Drift, and Shopify",
      "Standard operating procedure (SOP) documentation and canned responses",
      "Lead capture and automatic routing directly to your sales pipeline",
      "Detailed transcript reporting and customer sentiment categorization",
    ],
    whyChooseUs: [
      {
        title: "Zero Abandoned Conversations",
        desc: "Our active monitoring ensures every prospective customer is greeted in under 20 seconds.",
      },
      {
        title: "Trained Brand Ambassadors",
        desc: "Agents speak in your distinct brand voice, maintaining company values and technical accuracy.",
      },
      {
        title: "Direct Revenue Attribution",
        desc: "Track every dollar generated through chat interactions with our detailed analytics.",
      },
    ],
    faqs: [
      {
        question: "Can chat agents handle both sales and support inquiries?",
        answer:
          "Yes. Our agents are trained on full-funnel workflows, answering pre-sales queries to close orders as well as resolving post-purchase inquiries.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Data-Driven Digital Marketing Solutions",
    shortTitle: "Digital Marketing",
    subtitle: "Full-Funnel Customer Acquisition, Media Buying, and Growth Strategies",
    heroImage: "/assets/services/digital-marketing.png",
    iconName: "BarChart3",
    badge: "High Growth",
    shortDesc: "Scale your revenue through disciplined performance marketing, paid media, and funnel optimization.",
    fullDesc:
      "In a crowded digital landscape, generic campaigns waste ad budget. RMI BPO LLC engineers full-funnel digital marketing strategies backed by statistical testing, aggressive ROI targets, and creative storytelling that captures attention and dominates target demographics.",
    metrics: [
      { value: "500+", label: "Successful Campaigns" },
      { value: "4.8x", label: "Average Return on Ad Spend (ROAS)" },
      { value: "-35%", label: "Average Cost Per Acquisition Reduction" },
      { value: "100%", label: "Data & Attribution Transparency" },
    ],
    coreCompetencies: [
      {
        title: "Paid Search & Social Media Buying",
        desc: "High-precision Google Ads, Meta, LinkedIn, and TikTok campaigns engineered for low CPA.",
        icon: "Crosshair",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        desc: "Rigorous A/B testing of landing pages, copy, and visual triggers to squeeze maximum value from traffic.",
        icon: "Maximize",
      },
      {
        title: "Email & SMS Marketing Automation",
        desc: "Lifecycle nurturing, cart abandonment flows, and VIP segmentation that boosts customer LTV.",
        icon: "Mail",
      },
      {
        title: "Performance Analytics & BI Reporting",
        desc: "Custom looker studio dashboards tracking end-to-end attribution from click to closed sale.",
        icon: "LineChart",
      },
    ],
    deliverables: [
      "Custom multi-channel marketing roadmap aligned with enterprise goals",
      "Creative asset production including ad banners, copy, and video briefs",
      "Pixel tracking, Google Tag Manager, and server-side CAPI implementation",
      "Weekly sprint reviews with media buyers and performance strategists",
      "Dedicated account manager and 24/7 Slack communication channel",
    ],
    whyChooseUs: [
      {
        title: "Performance First Philosophy",
        desc: "We focus on real revenue, profit margins, and pipeline value rather than superficial vanity clicks.",
      },
      {
        title: "Proprietary Creative Frameworks",
        desc: "High-converting design templates tested across hundreds of competitive industries.",
      },
      {
        title: "Full Account Ownership",
        desc: "You retain 100% ownership of your ad accounts, pixel data, and intellectual property.",
      },
    ],
    faqs: [
      {
        question: "What ad platforms do you specialize in?",
        answer:
          "We manage campaigns across Google Search/Display/PMax, Meta (Facebook & Instagram), LinkedIn, YouTube, TikTok, and Bing Ads.",
      },
    ],
  },
  {
    slug: "seo",
    title: "Enterprise SEO & Organic Search Dominance",
    shortTitle: "SEO Optimization",
    subtitle: "Sustainable First-Page Rankings, Technical Health, and High-Intent Inbound Traffic",
    heroImage: "/assets/services/seo.png",
    iconName: "Search",
    badge: "Organic Authority",
    shortDesc: "Dominate search engine results pages with comprehensive technical, on-page, and authority building SEO.",
    fullDesc:
      "Search Engine Optimization is the foundation of compounding organic traffic. RMI BPO LLC executes enterprise-level SEO strategies that combine technical crawl optimization, semantic content architecture, and white-hat digital PR to position your website as the definitive industry authority.",
    metrics: [
      { value: "#1", label: "Target Rankings Achieved" },
      { value: "+210%", label: "Average Organic Traffic Growth" },
      { value: "100%", label: "White-Hat Compliance" },
      { value: "0", label: "Algorithmic Penalties" },
    ],
    coreCompetencies: [
      {
        title: "Deep Technical Audits & Core Web Vitals",
        desc: "Optimizing crawl budget, site architecture, rendering speed, and structured JSON-LD schema.",
        icon: "Code2",
      },
      {
        title: "High-Intent Keyword Architecture",
        desc: "Identifying transactional queries that attract buyers with immediate purchasing intent.",
        icon: "Key",
      },
      {
        title: "Authority Link Building & Digital PR",
        desc: "Securing relevant editorial backlinks from high Domain Authority publications.",
        icon: "Link2",
      },
      {
        title: "Local & National Search Domination",
        desc: "Optimizing Google Business profiles, local citations, and geo-targeted landing pages.",
        icon: "MapPin",
      },
    ],
    deliverables: [
      "Comprehensive 120-point technical site audit and prioritized remediation plan",
      "Competitive keyword gap analysis and content roadmap",
      "Monthly on-page optimization of title tags, meta descriptions, and headers",
      "High-authority white-hat backlink placements with editorial review",
      "Google Search Console and GA4 ranking tracking dashboard",
    ],
    whyChooseUs: [
      {
        title: "Zero Black-Hat Tactics",
        desc: "We strictly adhere to Google Search Essentials for long-term algorithmic safety.",
      },
      {
        title: "Revenue-Focused SEO",
        desc: "We prioritize keywords that drive commercial leads, phone calls, and closed transactions.",
      },
      {
        title: "Transparent Reporting",
        desc: "Clear monthly reports detailing keyword movement, organic clicks, and conversion attribution.",
      },
    ],
    faqs: [
      {
        question: "How long until we see SEO results?",
        answer:
          "Initial technical and indexing improvements typically reflect within 30 to 60 days. Significant revenue-generating ranking gains compound powerfully between months 3 and 6.",
      },
    ],
  },
  {
    slug: "social-media",
    title: "Strategic Social Media Management & Branding",
    shortTitle: "Social Media",
    subtitle: "Engage Audiences, Build Brand Equity, and Scale Organic Social Reach",
    heroImage: "/assets/services/social-media.png",
    iconName: "Share2",
    badge: "Brand Voice",
    shortDesc: "Elevate your social presence across platforms with high-impact content, active engagement, and community growth.",
    fullDesc:
      "Your social presence is the modern front door to your business. RMI BPO LLC crafts cohesive social media strategies that combine professional graphic design, captivating copywriting, active community management, and influencer outreach to forge authentic relationships with your prospective clients.",
    metrics: [
      { value: "+300%", label: "Average Social Reach Expansion" },
      { value: "24/7", label: "Community Moderation" },
      { value: "4.9/5", label: "Brand Sentiment Score" },
      { value: "100%", label: "Original Creative Content" },
    ],
    coreCompetencies: [
      {
        title: "Custom Creative Production",
        desc: "Eye-catching carousels, video shorts, branded infographics, and corporate photography.",
        icon: "Image",
      },
      {
        title: "Active Community Moderation",
        desc: "Responding to comments, direct messages, and brand mentions within minutes to preserve reputation.",
        icon: "Users",
      },
      {
        title: "B2B LinkedIn Thought Leadership",
        desc: "Positioning your C-suite as definitive thought leaders through insightful, trend-driven articles.",
        icon: "Award",
      },
      {
        title: "Social Listening & Trend Analysis",
        desc: "Monitoring competitor sentiment and jumping on viral industry topics at the right moment.",
        icon: "Radio",
      },
    ],
    deliverables: [
      "Monthly content calendar with advance preview and approval workflows",
      "Custom high-resolution graphic designs tailored to platform specifications",
      "Daily community engagement and comment moderation",
      "Paid social boost recommendations to maximize viral organic winners",
      "Comprehensive monthly reach, engagement, and follower demographic reports",
    ],
    whyChooseUs: [
      {
        title: "Brand Voice Consistency",
        desc: "Every post strictly follows your brand typography, color palette, tone, and corporate ethos.",
      },
      {
        title: "Rapid Response Time",
        desc: "We ensure customer queries submitted through social channels receive rapid attention.",
      },
      {
        title: "Holistic Social Integration",
        desc: "Our social campaigns seamlessly integrate with your sales funnels and promotional calendars.",
      },
    ],
    faqs: [
      {
        question: "Do you create custom graphics and video reels?",
        answer:
          "Yes. Our in-house creative team designs custom static assets, motion graphics, and short-form video content specifically formatted for each network.",
      },
    ],
  },
  {
    slug: "web-dev",
    title: "High-Performance Web Development & Engineering",
    shortTitle: "Web Development",
    subtitle: "Pixel-Perfect, Lightning-Fast Digital Experiences Built for Maximum Conversion",
    heroImage: "/assets/services/web-dev.png",
    iconName: "Globe",
    badge: "Digital Engineering",
    shortDesc: "Custom web development using modern frameworks like Next.js, React, and TypeScript engineered for speed and conversion.",
    fullDesc:
      "Your website is your most valuable digital asset. RMI BPO LLC designs and engineers enterprise-grade websites, responsive web apps, and high-converting landing pages. Built with Next.js, React, Tailwind CSS, and headless architectures, we deliver sub-second loading speeds, bulletproof security, and seamless mobile usability.",
    metrics: [
      { value: "99+", label: "Google PageSpeed Score" },
      { value: "< 0.8s", label: "Largest Contentful Paint (LCP)" },
      { value: "100%", label: "Responsive Mobile Perfection" },
      { value: "0", label: "Vulnerabilities with Modern Stack" },
    ],
    coreCompetencies: [
      {
        title: "Next.js & React Engineering",
        desc: "Modern server-side rendering, static generation, and edge delivery for uncompromised speed.",
        icon: "Code",
      },
      {
        title: "High-Converting UI/UX Design",
        desc: "User journeys engineered with psychological trigger points, clear CTAs, and frictionless forms.",
        icon: "Layout",
      },
      {
        title: "API & Third-Party System Integrations",
        desc: "Connecting payment gateways, CRMs, ERPs, inventory management, and custom REST/GraphQL APIs.",
        icon: "Boxes",
      },
      {
        title: "Enterprise Web Security & Compliance",
        desc: "SSL/TLS hardening, DDoS shielding, GDPR cookie compliance, and OWASP best practices.",
        icon: "ShieldCheck",
      },
    ],
    deliverables: [
      "Custom responsive design tailored to your corporate brand guidelines",
      "Production-ready Next.js / TypeScript codebase with clean architecture",
      "Integrated SEO metadata, Open Graph cards, and JSON-LD schema",
      "Automated testing, cross-browser compatibility, and mobile optimization",
      "Complete deployment to high-availability CDN (Vercel, AWS, or Cloudflare)",
    ],
    whyChooseUs: [
      {
        title: "Modern Jamstack Speed",
        desc: "Say goodbye to clunky, slow legacy CMS platforms and hello to sub-second headless page loads.",
      },
      {
        title: "Built for Search & Conversion",
        desc: "Every layout is architected from the ground up to rank on Google and convert visitors into buyers.",
      },
      {
        title: "Clean, Maintainable Code",
        desc: "Well-documented, modular code that your internal engineers can easily expand in the future.",
      },
    ],
    faqs: [
      {
        question: "What frameworks do you use for development?",
        answer:
          "We primarily develop modern web applications using Next.js, React, TypeScript, and Tailwind CSS, backed by headless CMS or robust REST/GraphQL APIs.",
      },
    ],
  },
  {
    slug: "back-office",
    title: "Secure Back-Office & Data Operations",
    shortTitle: "Back Office Solutions",
    subtitle: "Precision Operations, Data Entry, Document Verification, and Workflow Optimization",
    heroImage: "/assets/services/back-office.png",
    iconName: "Shield",
    badge: "Operational Efficiency",
    shortDesc: "Streamline operations with HIPAA and SOC2 compliant back-office teams handling data, billing, and processing.",
    fullDesc:
      "Operational friction slows growth. RMI BPO LLC provides secure, highly accurate back-office support that handles repetitive, data-intensive tasks so your executive team can focus on strategic innovation. From medical billing and insurance verification to customer onboarding and database scrub operations, we deliver 99.8% data accuracy with strict security compliance.",
    metrics: [
      { value: "99.8%", label: "Data Accuracy Rate" },
      { value: "60%", label: "Operational Cost Reduction" },
      { value: "SOC 2", label: "Compliant Infrastructure" },
      { value: "HIPAA", label: "Certified Healthcare Support" },
    ],
    coreCompetencies: [
      {
        title: "Document Verification & Underwriting Support",
        desc: "Rapid validation of IDs, legal forms, financial records, and compliance paperwork.",
        icon: "FileCheck",
      },
      {
        title: "Data Scrubbing, Entry & Cleansing",
        desc: "De-duplicating databases, scrub compliance (DNC, TCPA), and continuous record hygiene.",
        icon: "Database",
      },
      {
        title: "Medical & Insurance Billing Operations",
        desc: "HIPAA-certified claim submissions, charge entry, pre-authorizations, and denial management.",
        icon: "Stethoscope",
      },
      {
        title: "Inventory & Order Processing",
        desc: "Real-time order fulfillment coordination, vendor reconciliation, and return management.",
        icon: "Truck",
      },
    ],
    deliverables: [
      "Dedicated back-office specialists with background checks and NDAs",
      "Documented SOPs with double-entry verification loops to guarantee 99.8% accuracy",
      "Encrypted VPN access and restricted workstation environments",
      "Daily throughput reporting and error tracking analytics",
      "Flexible hourly or per-transaction pricing models",
    ],
    whyChooseUs: [
      {
        title: "Ironclad Security & Compliance",
        desc: "SOC 2, HIPAA, and GDPR compliant workflows ensuring total data protection.",
      },
      {
        title: "Unmatched Accuracy",
        desc: "Our two-pass verification systems virtually eliminate human clerical errors.",
      },
      {
        title: "Huge Cost Savings",
        desc: "Cut operational overhead by up to 60% compared to domestic in-house administrative staffing.",
      },
    ],
    faqs: [
      {
        question: "How do you protect sensitive customer and financial data?",
        answer:
          "All back-office personnel operate on secure, sandboxed terminals with no local download capabilities, multi-factor authentication, biometric access, and complete audit logging.",
      },
    ],
  },
  {
    slug: "enterprise-pods",
    title: "Dedicated Enterprise Pods & Custom BPO Teams",
    shortTitle: "Enterprise Pods",
    subtitle: "Custom Multi-Discipline Domestic & Hybrid Teams Built for Scale",
    heroImage: "/assets/services/sales-team.png",
    iconName: "Users",
    badge: "Bespoke Scale",
    shortDesc: "Deploy turnkey, custom-staffed teams combining sales, technical support, engineering, and back-office management.",
    fullDesc:
      "For organizations with complex, fast-evolving operational requirements, off-the-shelf staffing models fall short. RMI BPO LLC builds dedicated Enterprise Pods: cohesive, cross-functional domestic and hybrid units engineered specifically around your workflows, proprietary software, and KPI benchmarks. Under Montana executive leadership, your pod operates as a frictionless extension of your corporate headquarters.",
    metrics: [
      { value: "100%", label: "Custom Skill Matrix" },
      { value: "14 Days", label: "Average Pod Assembly" },
      { value: "0%", label: "Recruiting & HR Overhead" },
      { value: "55%", label: "Average Cost Efficiency" },
    ],
    coreCompetencies: [
      {
        title: "Cross-Functional Pod Architecture",
        desc: "Co-locating specialized agents, QA leads, and operations managers under one unified SLA.",
        icon: "Users",
      },
      {
        title: "Proprietary Software Training",
        desc: "Deep knowledge transfer on your internal ERP, proprietary tools, and custom SaaS dashboards.",
        icon: "Cpu",
      },
      {
        title: "Dedicated QA & Calibration Lead",
        desc: "Embedded quality assurance supervisor continuously grading tickets, calls, and SLAs.",
        icon: "ShieldCheck",
      },
      {
        title: "Executive Escalation Routing",
        desc: "Direct daily liaison with your internal VPs and Directors for strategic agility.",
        icon: "Award",
      },
    ],
    deliverables: [
      "Custom-recruited, dedicated multi-tier team staffed to your exact skill requirements",
      "Embedded QA Manager and Team Lead providing daily operational oversight",
      "Private dedicated communication channels (Slack/Teams) with real-time presence",
      "Custom weekly executive dashboards with SLA adherence and throughput telemetry",
      "Scalable contract tiers with seamless headcount expansion as your enterprise grows",
    ],
    whyChooseUs: [
      {
        title: "Zero Operational Distraction",
        desc: "We handle payroll, benefits, hardware provisioning, compliance, and ongoing training.",
      },
      {
        title: "Total Cultural Alignment",
        desc: "Pod members undergo intensive brand immersion to embody your exact corporate voice and ethos.",
      },
      {
        title: "Montana Executive Oversight",
        desc: "Direct access to RMI BPO LLC domestic leadership in Kalispell, MT for total accountability.",
      },
    ],
    faqs: [
      {
        question: "How is an Enterprise Pod different from standard outsourced staffing?",
        answer:
          "Unlike shared or transactional agents, an Enterprise Pod is 100% dedicated to your company, works solely on your systems, and includes dedicated embedded management and QA supervision.",
      },
    ],
  },
];
