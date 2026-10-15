/**
 * D2C AI Services data repository.
 * Dedicated to high-leverage AI automation, agentic workflows,
 * competitor intelligence, RAG customer chatbots, and data systems for modern brands.
 */

export interface D2CService {
  id: string;
  title: string;
  shortTitle: string;
  iconName: string;
  tagline: string;
  image: string;
  imageCaption: string;
  businessProblem: string;
  aiSolution: string;
  keyBenefits: string[];
  practicalUseCases: {
    title: string;
    description: string;
    outcome: string;
  }[];
  techStackHighlight: string[];
  deliverables: string[];
}

export const d2cServicesData: D2CService[] = [
  {
    id: 'd2c-automation',
    title: 'AI Automation for D2C Brands',
    shortTitle: 'Workflow Automation',
    iconName: 'Cpu',
    tagline: 'Eliminate repetitive manual bottlenecks across order processing, customer operations, and store logistics.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Autonomous AI agents synchronizing commerce workflows',
    businessProblem: 'Growing direct-to-consumer brands lose dozens of team hours every week answering repetitive order inquiries, cross-referencing fulfillment tracking across Shopify and courier portals, and copying data between marketing tools and inventory sheets.',
    aiSolution: 'I architect bespoke multi-agent workflows and event-driven automation pipelines using Python, FastAPI, and LangGraph. Agents detect status triggers, query store APIs, validate exceptions, and execute routine operations without requiring constant human intervention.',
    keyBenefits: [
      'Up to 80% reduction in manual data entry and routine store triage.',
      'Instant 24/7 turnaround on ticket escalation and order routing.',
      'Deterministic execution with fallback human-in-the-loop validation checkpoints.',
      'Seamless integration into Shopify, Klaviyo, Gorgias, Zendesk, and ERP webhooks.'
    ],
    practicalUseCases: [
      {
        title: 'Order Status & Courier Exception Triage',
        description: 'Autonomous agents monitor shipping tracking webhooks. When delays, customs holds, or missed deliveries occur, the agent drafts proactive customer updates and flags replacement orders.',
        outcome: 'Cuts customer WISMO ("Where Is My Order") tickets by over 50%.'
      },
      {
        title: 'Return & Exchange Intake Classification',
        description: 'An AI intake agent processes customer return photos and text descriptions, checks eligibility against return policies, and issues exchange credit automatically.',
        outcome: 'Accelerates refund turnaround from 3 days to under 5 minutes.'
      },
      {
        title: 'Cross-Channel Catalog Synchronization',
        description: 'Synchronizes product inventory, metadata, tags, and status updates across Amazon, Shopify, and wholesale channels with automated schema normalization.',
        outcome: 'Eliminates overselling and stockout discrepancies.'
      },
      {
        title: 'VIP Customer VIP Alerts & Priority Routing',
        description: 'Identifies high Lifetime Value (LTV) customers in incoming tickets and escalates them to senior brand advocates with enriched purchase history dossiers.',
        outcome: 'Improves high-value customer retention and loyalty.'
      }
    ],
    techStackHighlight: ['Python', 'LangGraph', 'FastAPI', 'Shopify Admin API', 'Webhooks', 'Pydantic'],
    deliverables: [
      'Custom Python/FastAPI automation service',
      'Webhook listener and stateful event pipeline',
      'Fail-safe retry mechanics & notification alerts (Slack/Email)',
      'Technical architecture documentation and deployment runbook'
    ]
  },
  {
    id: 'pricing-intelligence',
    title: 'Competitor & Pricing Intelligence',
    shortTitle: 'Pricing Intelligence',
    iconName: 'TrendingUp',
    tagline: 'Track competitor pricing movements, inventory stockouts, discounts, and market positioning in real-time.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Real-time competitive price monitoring & market analytics',
    businessProblem: 'D2C brands operate in fiercely contested categories. Manually checking competitor websites, promotions, and stockouts is inconsistent and reactive, causing brands to miss pricing opportunities or lose margin during high-velocity promotional periods.',
    aiSolution: 'I build automated intelligence scrapers and LLM-powered market extraction pipelines that monitor competitor storefronts, catalog shifts, promotional banners, and review sentiment. Raw data is structured and transformed into actionable pricing alerts and strategic summaries.',
    keyBenefits: [
      'Daily automated tracking of key competitor SKU prices and bundle offers.',
      'Instant alerts when competing products go out of stock or launch flash sales.',
      'LLM extraction that decodes promotional mechanics (BOGO, percentage discounts, threshold freebies).',
      'Data-backed dynamic margin and pricing recommendations.'
    ],
    practicalUseCases: [
      {
        title: 'Competitor Stockout Exploitation Alerts',
        description: 'Monitors competitor inventory status on flagship items. When a competitor goes out of stock, triggers an alert to scale ad spend on your matching product line.',
        outcome: 'Captures displaced market demand during rival supply disruptions.'
      },
      {
        title: 'Automated Promotional Mechanic Analysis',
        description: 'Uses vision/LLM parsing to scan competitor homepages and landing pages, extracting discount thresholds, coupon codes, and bundle tactics into structured JSON.',
        outcome: 'Provides executive teams with an instant weekly competitor promotional matrix.'
      },
      {
        title: 'Dynamic Category Price Indexing',
        description: 'Tracks price elasticity and standard category benchmarks across 20+ rival brands, ensuring your pricing stays within optimal perceived value ranges.',
        outcome: 'Protects gross margins while maximizing competitive conversions.'
      },
      {
        title: 'Competitor Review & Sentiment Gap Extraction',
        description: 'Scrapes and analyzes customer complaints on competitor product pages to reveal recurring quality flaws you can counter-position in your advertising.',
        outcome: 'Uncovers proven creative angles and feature enhancements for your brand.'
      }
    ],
    techStackHighlight: ['Python', 'Playwright / BeautifulSoup', 'OpenAI / Claude LLMs', 'ChromaDB', 'PostgreSQL / SQLite'],
    deliverables: [
      'Automated daily/hourly scraping worker pipelines',
      'LLM parsing layer for unstructured product data',
      'Slack/Email alert dispatcher with daily executive digests',
      'Interactive pricing dashboard or Google Sheets / CSV sync'
    ]
  },
  {
    id: 'content-automation',
    title: 'Content Automation & Catalog Generation',
    shortTitle: 'Content Automation',
    iconName: 'Sparkles',
    tagline: 'Generate on-brand product descriptions, ad variants, email copy, and SEO content at scale with fine-tuned tone guardrails.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Generative AI content pipelines with brand voice guardrails',
    businessProblem: 'Launching seasonal collections or catalog expansions requires hundreds of compelling product descriptions, meta tags, ad angles, and social hooks. Traditional copywriting creates severe rollout delays and inconsistent brand tone.',
    aiSolution: 'I develop custom generative content pipelines that take raw technical spec sheets, ingredients, or manufacturing bullets and produce multi-format marketing copy. System prompts enforce strict tone-of-voice rules, forbidden words, and regulatory compliance.',
    keyBenefits: [
      'Scale from 5 to 500 SKU descriptions in minutes with consistent brand voice.',
      'Built-in SEO keyword integration and schema-optimized meta descriptions.',
      'Multi-channel output: PDP copy, Amazon bullets, Meta ad hooks, and email snippets.',
      'Automated tone checks and compliance verification against false claims.'
    ],
    practicalUseCases: [
      {
        title: 'Automated Product Detail Page (PDP) Generator',
        description: 'Converts factory spec sheets and materials into engaging customer-facing copy with benefit bullets, usage guides, and sensory descriptors.',
        outcome: 'Reduces time-to-market for new SKU drops from weeks to hours.'
      },
      {
        title: 'Ad Variant & Hook Matrix Generator',
        description: 'Generates 20+ distinct angle variations (pain-point, aspirational, founder story, social proof) for Meta and TikTok ad creatives based on customer personas.',
        outcome: 'Feeds performance marketing teams with rapid creative iteration assets.'
      },
      {
        title: 'SEO Article & Category Landing Page Enriched Content',
        description: 'Produces search-optimized educational buyer guides, FAQs, and comparison tables grounded in verified brand specifications.',
        outcome: 'Boosts organic discovery and domain authority.'
      },
      {
        title: 'Email Campaign & Flow Variant Drafting',
        description: 'Drafts subject lines, preview text, and email bodies for abandoned cart, welcome series, and post-purchase onboarding.',
        outcome: 'Increases open rates through systematic messaging experimentation.'
      }
    ],
    techStackHighlight: ['Python', 'Prompt Engineering', 'Structured JSON Outputs', 'LangChain / LangGraph', 'Shopify GraphQL'],
    deliverables: [
      'Custom CLI or web-based content generation interface',
      'Brand style guide system prompt repository',
      'Batch processing scripts with CSV/Google Sheets export',
      'Direct Shopify API product description update script'
    ]
  },
  {
    id: 'rag-chatbots',
    title: 'RAG Chatbots for Brands & Support Knowledge',
    shortTitle: 'RAG Chatbots',
    iconName: 'MessageSquareCode',
    tagline: 'Grounded conversational agents that answer customer questions accurately using your product catalog, FAQs, and return policies.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Retrieval-Augmented customer intelligence & shopping advisory',
    businessProblem: 'Standard rule-based chatbots frustrate shoppers with generic "I did not understand" loops, while raw LLMs risk hallucinating false discounts, incorrect shipping policies, or non-existent product specifications.',
    aiSolution: 'I architect enterprise RAG (Retrieval-Augmented Generation) chatbots grounded exclusively in your verified company data. By indexing FAQs, policy manuals, sizing charts, and product reviews in ChromaDB vector stores, the agent answers with exact citations and escalates gracefully when human touch is required.',
    keyBenefits: [
      'Zero hallucination risk: responses are bound to retrieved knowledge chunks.',
      'Acts as a 24/7 personal shopping assistant advising on sizing, ingredients, and compatibility.',
      'Direct order status lookup via authenticated API hooks.',
      'Seamless warm handover to Gorgias, Zendesk, or live agents with full context summaries.'
    ],
    practicalUseCases: [
      {
        title: 'Product Recommendation & Sizing Concierge',
        description: 'Asks targeted questions about customer preferences, skin types, dimensions, or use cases and retrieves the ideal matching product.',
        outcome: 'Lifts on-site conversion rates and decreases size-related returns.'
      },
      {
        title: 'Instant Policy & Shipping Guidance',
        description: 'Instantly answers complex questions regarding international customs, delivery estimates, return windows, and warranty conditions.',
        outcome: 'Resolves pre-purchase friction before checkout abandonment.'
      },
      {
        title: 'Post-Purchase Usage & Care Advisory',
        description: 'Guides customers on how to set up, clean, maintain, or troubleshoot products they have just received.',
        outcome: 'Enhances unboxing satisfaction and reduces support tickets.'
      },
      {
        title: 'Interactive Support Triage & Ticket Drafting',
        description: 'Collects necessary details (order number, photos, problem description) before opening a pre-filled ticket in your CRM.',
        outcome: 'Saves 3-5 support minutes per ticket for human agents.'
      }
    ],
    techStackHighlight: ['Python', 'ChromaDB', 'LangChain', 'FastAPI', 'OpenAI / Claude', 'Vector Embeddings'],
    deliverables: [
      'Complete RAG retrieval pipeline and vector ingestion script',
      'Embeddable chat widget or API backend',
      'Admin evaluation test suite to verify answer accuracy',
      'Automated knowledge base re-indexing script'
    ]
  },
  {
    id: 'reporting-dashboards',
    title: 'Automated Reporting Dashboards & Data Pipelines',
    shortTitle: 'Reporting & Dashboards',
    iconName: 'BarChart3',
    tagline: 'Transform siloed store, ad spend, and inventory data into automated executive dashboards and AI-generated insights.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Automated operational intelligence & executive dashboards',
    businessProblem: 'D2C operators waste hours every Monday stitching together reports from Meta Ads, Google Ads, Shopify Analytics, and warehouse spreadsheets, leaving little time to actually interpret the trends and take action.',
    aiSolution: 'I develop automated data extraction and aggregation pipelines that pull metrics directly from advertising channels, eCommerce platforms, and inventory feeds into a centralized repository. I pair this with automated narrative summaries explaining why metrics shifted.',
    keyBenefits: [
      'Automated daily/weekly executive performance summaries delivered to Slack or Email.',
      'Unified Blended ROAS, Customer Acquisition Cost (CAC), and LTV metrics.',
      'Inventory velocity forecasting warning of stockouts 30 days in advance.',
      'Natural language querying: ask "What was our best-selling bundle in Germany last week?" and get an instant answer.'
    ],
    practicalUseCases: [
      {
        title: 'Automated Monday Executive Briefing',
        description: 'Extracts weekly revenue, contribution margin, blended CAC, and returns, generating an AI narrative highlighting winning campaigns and lagging SKUs.',
        outcome: 'Replaces 4 hours of manual spreadsheet compiling every week.'
      },
      {
        title: 'Inventory Stockout Velocity Alerting',
        description: 'Calculates dynamic burn rates based on recent 7-day sales velocity and projected ad spend, alerting operations when reorder points are breached.',
        outcome: 'Prevents revenue-draining stockouts on flagship bestsellers.'
      },
      {
        title: 'Ad Spend Anomaly & Waste Detection',
        description: 'Monitors hourly ROAS and CPM across ad platforms, alerting the media buying team immediately when costs spike without conversions.',
        outcome: 'Saves thousands of dollars in wasted daily ad spend.'
      },
      {
        title: 'Natural Language SQL/Data Assistant',
        description: 'Enables non-technical team members to query internal commerce databases in plain English without writing SQL queries.',
        outcome: 'Democratizes operational data access across marketing, support, and ops.'
      }
    ],
    techStackHighlight: ['Python', 'FastAPI', 'Streamlit / Modern Web UI', 'SQL / PostgreSQL', 'Pandas', 'LLM Query Engines'],
    deliverables: [
      'Automated ETL data ingestion pipeline',
      'Modern, responsive analytics dashboard',
      'Slack / Email scheduled digest bot',
      'Data documentation and dictionary'
    ]
  }
];
