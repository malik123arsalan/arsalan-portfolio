/**
 * Structured skills data repository for Arsalan Mustafa Malik.
 * Categorized strictly according to developer strengths and domain specialties.
 */

export interface SkillCategory {
  categoryName: string;
  categorySlug: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient' | 'Fundamental';
    context: string;
    tags?: string[];
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    categoryName: 'Agentic AI & LLMs',
    categorySlug: 'agentic-ai-llms',
    description: 'Multi-agent orchestration, state graphs, retrieval augmentation, and structured model reasoning.',
    iconName: 'Bot',
    skills: [
      {
        name: 'AI Agents',
        level: 'Expert',
        context: 'Autonomous task decomposition, planning loops, tool use execution, and reflexivity.',
        tags: ['Agents', 'Automation', 'Autonomous Systems']
      },
      {
        name: 'Multi-Agent Systems',
        level: 'Expert',
        context: 'Collaborative graphs with specialized roles (monitoring, detective, planner) and bounded state contexts.',
        tags: ['Architecture', 'Multi-Agent', 'Orchestration']
      },
      {
        name: 'LangGraph',
        level: 'Expert',
        context: 'Stateful directed cyclic graphs, checkpointing, conditional edge routing, and human-in-the-loop interrupts.',
        tags: ['LangGraph', 'Python', 'State Machines']
      },
      {
        name: 'RAG (Retrieval-Augmented Generation)',
        level: 'Expert',
        context: 'Dense vector retrieval, semantic search, hybrid chunking, contextual compression, and ground-truth validation.',
        tags: ['RAG', 'Vector Search', 'Knowledge Bases']
      },
      {
        name: 'LLM APIs',
        level: 'Advanced',
        context: 'Integration with state-of-the-art foundation models, streaming responses, and token optimization.',
        tags: ['OpenAI', 'Anthropic', 'Gemini']
      },
      {
        name: 'Prompt Engineering',
        level: 'Advanced',
        context: 'Few-shot prompting, chain-of-thought, structured schema extraction (Pydantic), and anti-hallucination guardrails.',
        tags: ['CoT', 'Structured Outputs', 'Guardrails']
      },
      {
        name: 'ChromaDB',
        level: 'Advanced',
        context: 'Persistent vector database collection management, embedding index configuration, and semantic querying.',
        tags: ['ChromaDB', 'Embeddings', 'Vector Storage']
      }
    ]
  },
  {
    categoryName: 'D2C AI Automation',
    categorySlug: 'd2c-ai-automation',
    description: 'Practical high-ROI automated intelligence systems designed specifically for direct-to-consumer eCommerce.',
    iconName: 'Sparkles',
    skills: [
      {
        name: 'AI Workflow Automation',
        level: 'Expert',
        context: 'Automating repetitive support tickets, order tracking exceptions, return intake, and operational handovers.',
        tags: ['eCommerce Ops', 'Webhooks', 'Workflow Automation']
      },
      {
        name: 'Competitor & Pricing Intelligence',
        level: 'Advanced',
        context: 'Real-time scraper pipelines monitoring rival price movements, flash sales, inventory stockouts, and margin shifts.',
        tags: ['Scraping', 'Market Intel', 'Dynamic Pricing']
      },
      {
        name: 'Content Automation',
        level: 'Advanced',
        context: 'Bulk generative catalog enrichment, SEO-optimized PDP descriptions, ad copy angle matrices, and email drafts.',
        tags: ['Catalog Enrichment', 'PDP Copy', 'Ad Angles']
      },
      {
        name: 'RAG Chatbots',
        level: 'Expert',
        context: 'Brand-grounded virtual shopping concierges, size recommenders, and verified policy support assistants.',
        tags: ['Customer Support', 'Shopping Concierge', 'Zero-Hallucination']
      },
      {
        name: 'Reporting Dashboards',
        level: 'Advanced',
        context: 'Automated executive KPI summaries, blended CAC/LTV trackers, stockout alerts, and natural language SQL query tools.',
        tags: ['KPI Dashboards', 'Executive Briefings', 'Data Alerts']
      }
    ]
  },
  {
    categoryName: 'Programming & Core',
    categorySlug: 'programming-core',
    description: 'Foundational programming principles, system architecture, database design, and algorithmic thinking.',
    iconName: 'Code',
    skills: [
      {
        name: 'Python',
        level: 'Expert',
        context: 'Primary language for AI agents, asynchronous microservices, deep learning models, data manipulation, and automation.',
        tags: ['Python 3.10+', 'AsyncIO', 'Typing', 'Pydantic']
      },
      {
        name: 'SQL',
        level: 'Advanced',
        context: 'Relational data querying, complex aggregations, window functions, schema normalization, and database optimization.',
        tags: ['PostgreSQL', 'SQLite', 'Analytics']
      },
      {
        name: 'JavaScript Basics',
        level: 'Proficient',
        context: 'Client-side scripting, modern ES6+, DOM manipulation, and frontend component integration for full-stack prototypes.',
        tags: ['ES6+', 'Web Basics', 'Frontend']
      },
      {
        name: 'Object-Oriented Programming (OOP)',
        level: 'Advanced',
        context: 'Clean architectural patterns, design principles (SOLID), dependency injection, and modular software abstractions.',
        tags: ['SOLID', 'Design Patterns', 'Architecture']
      },
      {
        name: 'Data Structures & Algorithms Fundamentals',
        level: 'Advanced',
        context: 'Algorithmic efficiency, Big-O complexity analysis, trees, graphs, search algorithms, and hash maps.',
        tags: ['Algorithms', 'Complexity', 'Graph Traversal']
      }
    ]
  },
  {
    categoryName: 'AI & Machine Learning',
    categorySlug: 'ai-machine-learning',
    description: 'Computer vision, deep neural networks, transfer learning, and production machine learning pipelines.',
    iconName: 'BrainCircuit',
    skills: [
      {
        name: 'Convolutional Neural Networks (CNN)',
        level: 'Advanced',
        context: 'Deep image feature extraction, spatial filtering, pooling layers, and custom convolutional architectures.',
        tags: ['Computer Vision', 'Deep Learning', 'PyTorch/TensorFlow']
      },
      {
        name: 'Transfer Learning',
        level: 'Expert',
        context: 'Fine-tuning pretrained ImageNet backbones on specialized domain datasets to achieve high precision with smaller training sizes.',
        tags: ['Model Adaptation', 'Fine-Tuning', 'Edge Deploy']
      },
      {
        name: 'MobileNetV2',
        level: 'Expert',
        context: 'Depthwise separable convolutions, inverted residuals, and linear bottlenecks for low-latency edge inference.',
        tags: ['Edge AI', 'Mobile Vision', 'Efficient Models']
      },
      {
        name: 'TensorFlow & Keras',
        level: 'Advanced',
        context: 'End-to-end model definition, data augmentation pipelines, custom callbacks, learning rate schedules, and model export.',
        tags: ['TensorFlow 2.x', 'Keras', 'Model Pipelines']
      },
      {
        name: 'Image Classification',
        level: 'Advanced',
        context: 'Multi-class and multi-label pathology detection, confusion matrix analysis, and agricultural condition scoring.',
        tags: ['Classification', 'Precision/Recall', 'Pathology']
      }
    ]
  },
  {
    categoryName: 'Backend & Tools',
    categorySlug: 'backend-tools',
    description: 'Modern asynchronous web frameworks, APIs, version control, and cloud deployment targets.',
    iconName: 'Server',
    skills: [
      {
        name: 'FastAPI',
        level: 'Advanced',
        context: 'High-performance asynchronous REST endpoints, Pydantic request validation, automated OpenAPI docs, and SSE streaming.',
        tags: ['FastAPI', 'Async', 'REST APIs']
      },
      {
        name: 'REST APIs',
        level: 'Advanced',
        context: 'Stateless resource design, HTTP status discipline, webhook receivers, and third-party service integration.',
        tags: ['HTTP', 'Webhooks', 'Integration']
      },
      {
        name: 'Git & GitHub',
        level: 'Advanced',
        context: 'Branch management, pull requests, semantic versioning, CI/CD actions, and collaborative software engineering.',
        tags: ['Version Control', 'CI/CD', 'Open Source']
      },
      {
        name: 'Streamlit',
        level: 'Advanced',
        context: 'Rapid prototyping of interactive AI demonstrations, data dashboards, and internal team utilities in pure Python.',
        tags: ['Rapid Prototyping', 'Interactive UI', 'Python UI']
      },
      {
        name: 'Cloudflare Pages',
        level: 'Advanced',
        context: 'Fast edge-hosted static and single-page application deployments with custom domains and SSL provisioning.',
        tags: ['Cloudflare', 'Edge Hosting', 'Deployment']
      }
    ]
  }
];
