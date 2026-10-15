/**
 * Professional profile data and resume details for Arsalan Mustafa Malik.
 * Strictly adheres to guidelines: no college or university names, verified technical achievements,
 * recruiter-friendly and brand-friendly summary.
 */

export interface ResumeData {
  name: string;
  headline: string;
  subheadline: string;
  introShort: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  coreHighlights: string[];
  philosophies: {
    title: string;
    description: string;
  }[];
  whatIWorkWith: {
    area: string;
    description: string;
    stack: string[];
  }[];
}

export const resumeData: ResumeData = {
  name: 'Arsalan Mustafa Malik',
  headline: 'Agentic AI Developer | AI Automation Developer for D2C Brands',
  subheadline: 'Specializing in Python, Multi-Agent Systems, LangGraph, RAG, and High-Impact Commerce Automation',
  introShort: 'I build practical AI agents, automation workflows, and intelligent systems using Python, LLMs, RAG, and LangGraph.',
  location: 'Available for Remote Roles & Contract Projects Worldwide',
  email: 'arsalanmustafamalik@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arsalan-mustafa-malik',
  github: 'https://github.com/malik123arsalan',
  summary: `Agentic AI Developer and AI Automation Specialist with deep focus on building practical, deterministic, and scalable intelligent systems. I specialize in architecting multi-agent architectures using LangGraph and Python, designing dense vector RAG workflows with ChromaDB, fine-tuning computer vision models with TensorFlow/Keras, and deploying robust asynchronous backend services via FastAPI. 

For direct-to-consumer (D2C) brands, I build production-ready automation engines that reduce human overhead across customer support, catalog generation, competitive market intelligence, and executive reporting. My engineering focus is always on real business impact, reliable system boundaries, and low-latency execution.`,
  coreHighlights: [
    'Agentic AI & Multi-Agent Orchestration with LangGraph',
    'Python 3.10+ & Asynchronous Microservices with FastAPI',
    'RAG Architectures & Vector Databases (ChromaDB)',
    'Deep Learning & Edge Computer Vision (TensorFlow, MobileNetV2)',
    'D2C Commerce Automation & Competitor Intelligence Systems',
    'Deterministic Output Enforcement via Pydantic & Structured Extraction'
  ],
  philosophies: [
    {
      title: 'Practical Impact Over Theoretical Hype',
      description: 'AI is only as good as the operational bottleneck it eliminates. I build systems engineered for measurable business outcomes, not demo vanity.'
    },
    {
      title: 'Deterministic Guardrails in Stochastic Systems',
      description: 'LLMs are inherently probabilistic. Production reliability requires rigid validation schemas, bounded agent states, and human-in-the-loop safety gates.'
    },
    {
      title: 'Domain-Native Context & Zero Fluff',
      description: 'Generic AI outputs destroy brand trust. I ground systems in verified enterprise data, customer history, and strict brand voice guardrails.'
    },
    {
      title: 'Continuous Technical Evolution',
      description: 'Committed to mastering state-of-the-art developments in multi-agent orchestration, speculative decoding, and model optimization.'
    }
  ],
  whatIWorkWith: [
    {
      area: 'Multi-Agent Frameworks & Orchestration',
      description: 'Designing stateful cyclic workflows where specialized autonomous agents collaborate with clear division of responsibility and explicit error checkpoints.',
      stack: ['LangGraph', 'Python', 'State Checkpointing', 'Human-in-the-Loop']
    },
    {
      area: 'Dense Vector Retrieval & RAG Pipelines',
      description: 'Indexing unstructured documentation, incident logs, and product knowledge into optimized vector stores for accurate ground-truth retrieval.',
      stack: ['ChromaDB', 'Sentence Transformers', 'Semantic Chunking', 'Hybrid Search']
    },
    {
      area: 'High-Performance APIs & Microservices',
      description: 'Building asynchronous, resilient REST endpoints capable of streaming tokens, handling high-concurrency webhooks, and validating payloads.',
      stack: ['FastAPI', 'Pydantic v2', 'AsyncIO', 'Uvicorn']
    },
    {
      area: 'Computer Vision & Deep Learning',
      description: 'Training and deploying edge-optimized convolutional neural networks using transfer learning for accurate image classification.',
      stack: ['TensorFlow', 'Keras', 'MobileNetV2', 'OpenCV']
    },
    {
      area: 'eCommerce & D2C Workflow Systems',
      description: 'Automating multi-channel retail operations including competitor price intelligence, content generation, and live support routing.',
      stack: ['Shopify APIs', 'Web Scraping', 'Dynamic Pricing', 'Klaviyo / CRM Hooks']
    }
  ]
};
