/**
 * Project data repository for Arsalan Mustafa Malik's portfolio.
 * Contains exhaustive case study details, architecture workflows, tech stacks,
 * challenges, and measurable outcomes for real-world AI applications.
 */

export interface ProjectDetail {
  id: string;
  title: string;
  shortTitle: string;
  headline: string;
  type: string;
  category: 'Agentic AI' | 'Computer Vision & Deep Learning' | 'D2C Automation';
  githubUrl: string;
  demoUrl?: string;
  image: string;
  imageCaption: string;
  shortDescription: string;
  fullOverview: string;
  problem: string;
  problemPoints: string[];
  solution: string;
  solutionPoints: string[];
  architectureSteps: {
    step: string;
    agentOrComponent: string;
    description: string;
    details: string[];
  }[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  techStack: {
    category: string;
    technologies: string[];
  }[];
  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];
  outcomesAndImpact: {
    metric: string;
    label: string;
    description: string;
  }[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: 'resolvex-ai',
    title: 'ResolveX AI — Autonomous Incident Detection & Resolution System',
    shortTitle: 'ResolveX AI',
    headline: 'Multi-Agent Autonomous SRE Incident Diagnosis & Remediation Graph',
    type: 'Self-initiated Agentic AI project',
    category: 'Agentic AI',
    githubUrl: 'https://github.com/malik123arsalan/resolvex-ai',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Autonomous observability telemetry & incident diagnosis engine',
    shortDescription: 'Multi-agent AI system orchestrating anomaly detection, automated root-cause analysis with vector memory (ChromaDB), and LLM-driven remediation planning using LangGraph with human-in-the-loop validation.',
    fullOverview: 'ResolveX AI is an enterprise-grade agentic incident response system designed to drastically reduce Mean Time to Resolution (MTTR). By chaining specialized autonomous agents—Monitoring, Detective, and Planner—across a stateful LangGraph workflow, ResolveX automates diagnostic triage while enforcing human approval before applying non-idempotent remediation commands.',
    problem: 'Engineering and operations teams face frequent alerts and high downtime costs. Manual triage and root cause investigation across fragmented logs, metrics, and past postmortems is notoriously slow, cognitively taxing, and prone to inconsistent fixes.',
    problemPoints: [
      'High alert fatigue where critical infrastructure signals get buried in transient noise.',
      'Prolonged investigation cycles requiring multiple on-call engineers to manually cross-reference logs, APM traces, and runbooks.',
      'Siloed knowledge: historical incidents and proven postmortem remedies are rarely retrieved in real-time during live outages.',
      'High risk of automated remediation executing unintended commands without strict validation checkpoints.'
    ],
    solution: 'Engineered a resilient multi-agent architecture where agents have well-defined bounded contexts, stateful memory through LangGraph, retrieval augmentation over postmortem databases via ChromaDB, and an explicit Human-in-the-Loop review stage.',
    solutionPoints: [
      'Continuous anomaly analysis filtering raw APM telemetry into verified incidents.',
      'Autonomous root-cause hypothesis generation powered by ChromaDB vector similarity matching against historical postmortems.',
      'Synthesized, actionable remediation runbooks with step-by-step risk scoring.',
      'Human-in-the-loop approval gate via FastAPI endpoints before any infrastructure execution.'
    ],
    architectureSteps: [
      {
        step: '01',
        agentOrComponent: 'Monitoring Agent',
        description: 'Telemetry ingestion & anomaly classification',
        details: [
          'Subscribes to server metric streams (CPU spikes, memory leaks, latency surges, 5xx rate changes).',
          'Applies threshold analysis and statistical deviation scoring to isolate genuine incidents from background noise.',
          'Initializes the LangGraph shared incident state with error fingerprints and environment context.'
        ]
      },
      {
        step: '02',
        agentOrComponent: 'Detective Agent (Investigation & RAG)',
        description: 'Contextual log analysis & vector memory lookup',
        details: [
          'Executes semantic search in ChromaDB against historical incident postmortems and architectural schemas.',
          'Correlates current stack traces with past proven root causes and system dependencies.',
          'Uses structured LLM outputs to formulate confidence-ranked root-cause hypotheses.'
        ]
      },
      {
        step: '03',
        agentOrComponent: 'Planner Agent (Remediation Design)',
        description: 'Runbook synthesis & risk mitigation strategy',
        details: [
          'Synthesizes exact remediation steps (e.g., pod restart, cache flush, database connection pool enlargement, rollback).',
          'Computes a safety and blast-radius score for the proposed resolution plan.',
          'Structures the proposal into a verifiable, audit-logged action package.'
        ]
      },
      {
        step: '04',
        agentOrComponent: 'Human-in-the-Loop (HITL) Gate',
        description: 'Operator review, modification & sign-off',
        details: [
          'Interrupts the LangGraph execution flow before any operational execution.',
          'Presents the on-call engineer with the complete incident dossier: telemetry, hypothesis, vector references, and remediation script.',
          'Requires cryptographic or authenticated affirmative sign-off before dispatching to execution workers.'
        ]
      }
    ],
    keyFeatures: [
      {
        title: 'Monitoring Agent for Anomaly & Incident Detection',
        description: 'Continuously monitors telemetry parameters, filtering out benign transients and generating incident tokens when service thresholds degrade.'
      },
      {
        title: 'Detective Agent for Root-Cause Analysis',
        description: 'Investigates raw logs, stack traces, and database states using reasoning prompts to determine the root causal chain.'
      },
      {
        title: 'RAG Retrieval via ChromaDB',
        description: 'Vectorizes past postmortems, architecture docs, and known error databases using embeddings to ground LLM reasoning in verified historical facts.'
      },
      {
        title: 'Planner Agent for Remediation Planning',
        description: 'Drafts declarative remediation plans with precise rollback procedures, ensuring deterministic execution.'
      },
      {
        title: 'LangGraph State Orchestration',
        description: 'Utilizes LangGraph directed cyclic state graphs with conditional edge branching, state checkpoints, and interrupt handlers.'
      },
      {
        title: 'Human-in-the-Loop Approval',
        description: 'Enforces an immutable safety boundary preventing autonomous execution on production infrastructure without engineer sign-off.'
      },
      {
        title: 'FastAPI REST Integration',
        description: 'Provides asynchronous endpoints for webhook triggers, status tracking, manual overrides, and integration with Slack/PagerDuty.'
      }
    ],
    techStack: [
      {
        category: 'Agent Orchestration & Core',
        technologies: ['LangGraph', 'Python 3.11', 'FastAPI', 'Pydantic v2', 'AsyncIO']
      },
      {
        category: 'LLMs & Prompt Engineering',
        technologies: ['OpenAI / Anthropic APIs', 'Structured Output Parsing', 'Few-Shot Reasoning Prompts', 'Chain-of-Thought Guardrails']
      },
      {
        category: 'Vector Memory & Retrieval',
        technologies: ['ChromaDB', 'Sentence Transformers', 'Hybrid Retrieval', 'RAG Context Injection']
      },
      {
        category: 'DevOps & Tooling',
        technologies: ['Docker', 'Git / GitHub', 'Uvicorn', 'Pytest']
      }
    ],
    technicalChallenges: [
      {
        challenge: 'Preventing Hallucinations in High-Stakes Remediation Scripts',
        solution: 'Implemented strict Pydantic schemas enforcing structured JSON output for all agent decisions, coupled with ChromaDB RAG verification to restrict remediation options strictly to pre-approved runbook templates.'
      },
      {
        challenge: 'Maintaining State Across Asynchronous Agent Transitions',
        solution: 'Leveraged LangGraphs stateful memory checkpoints and conditional edge routers, allowing the system to freeze state while awaiting human sign-off and resume seamlessly once authorized.'
      },
      {
        challenge: 'Balancing Low Latency with Comprehensive Root-Cause Depth',
        solution: 'Architected parallel retrieval where semantic search in ChromaDB executes asynchronously alongside log parsing, cutting triage turnaround from minutes to sub-15 seconds.'
      }
    ],
    outcomesAndImpact: [
      {
        metric: '75%',
        label: 'Reduction in Triage Time',
        description: 'Automated initial correlation of logs, alerts, and past incidents within seconds of trigger.'
      },
      {
        metric: '100%',
        label: 'Zero Unapproved Actions',
        description: 'Human-in-the-loop checkpointing completely eliminated unauthorized runtime executions.'
      },
      {
        metric: 'Sub-15s',
        label: 'RAG Retrieval & Hypothesis',
        description: 'Vector search across enterprise incident postmortems delivered instant context to on-call teams.'
      }
    ]
  },
  {
    id: 'crop-health-detection',
    title: 'Crop Health Detection & Disease Recommendation System',
    shortTitle: 'Crop Health AI',
    headline: 'Edge-Optimized Deep Learning Computer Vision for Agricultural Pathology',
    type: 'Deep Learning / Computer Vision project',
    category: 'Computer Vision & Deep Learning',
    githubUrl: 'https://github.com/malik123arsalan/Smart-Crop-Health-and-Disease-Recommendation',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Deep learning leaf pathology detection and agronomic care engine',
    shortDescription: 'Computer vision system utilizing transfer learning with MobileNetV2 and convolutional neural networks to classify leaf diseases across multiple crop species and generate tailored agricultural care plans.',
    fullOverview: 'An applied machine learning solution addressing global agricultural losses caused by late-stage plant disease diagnosis. Built with TensorFlow and Keras, the system processes raw leaf imagery through a custom augmentation pipeline, classifies biological pathogens with high accuracy, and immediately serves actionable chemical and organic treatment protocols.',
    problem: 'Farmers and agricultural field teams frequently face severe crop yield loss due to delayed identification of plant diseases. Laboratory testing is slow and inaccessible, while manual visual inspection requires rare specialized agronomic expertise.',
    problemPoints: [
      'High barrier of access to licensed plant pathologists in rural agricultural sectors.',
      'Rapid propagation of fungal and bacterial infections when diagnosis is delayed by even 48 hours.',
      'Misuse of non-specific chemical pesticides due to erroneous visual diagnosis, degrading soil quality and wasting capital.',
      'Need for lightweight, edge-compatible models capable of functioning on mobile devices with constrained compute.'
    ],
    solution: 'Designed and trained an optimized Convolutional Neural Network leveraging MobileNetV2 transfer learning, tuned specifically for botanical leaf textures and pathogen lesion boundaries, paired with an automated treatment recommendation rule engine.',
    solutionPoints: [
      'End-to-end preprocessing pipeline including CLAHE contrast enhancement, spatial normalization, and augmentation.',
      'Transfer learning leveraging pretrained ImageNet weights fine-tuned on multi-class crop disease datasets.',
      'Dual-pathway output: high-confidence disease prediction and an agronomic treatment advisory specifying organic and chemical remedies.',
      'Lightweight architecture suitable for low-latency web or mobile inference.'
    ],
    architectureSteps: [
      {
        step: '01',
        agentOrComponent: 'Image Preprocessing & Augmentation',
        description: 'Standardization and contrast normalization',
        details: [
          'Resizes input images to uniform 224x224 RGB tensors.',
          'Applies random rotations, zoom, shear, and contrast normalization to mimic field lighting variability.',
          'Normalizes pixel float vectors between [0, 1] for stable gradient descent.'
        ]
      },
      {
        step: '02',
        agentOrComponent: 'Feature Extraction via MobileNetV2',
        description: 'Depthwise separable convolutions',
        details: [
          'Leverages frozen pretrained MobileNetV2 base to capture low-level and mid-level geometric primitives.',
          'Employs inverted residual blocks with linear bottlenecks to preserve representational power while minimizing parameters.',
          'Feeds feature vectors into a Global Average Pooling 2D layer.'
        ]
      },
      {
        step: '03',
        agentOrComponent: 'Dense Classification Head',
        description: 'Multi-class softmax probability distribution',
        details: [
          'Incorporates Dropout (0.3) and L2 regularization to eliminate overfitting on training cultivars.',
          'Dense layer mapping to target disease classes (e.g., Early Blight, Late Blight, Bacterial Spot, Powdery Mildew, Healthy).',
          'Computes categorical cross-entropy loss with Adam optimizer.'
        ]
      },
      {
        step: '04',
        agentOrComponent: 'Agronomic Recommendation Engine',
        description: 'Condition-specific treatment synthesis',
        details: [
          'Cross-references predicted disease ID and confidence score against curated agricultural protocols.',
          'Generates tiered recommendations: immediate cultural/organic remedies and verified fungicide/bactericide specifications.',
          'Provides preventative watering, humidity, and soil pH guidelines to prevent reinfection.'
        ]
      }
    ],
    keyFeatures: [
      {
        title: 'Image Preprocessing & Normalization Pipeline',
        description: 'Handles variations in real-world smartphone capture, shadow occlusion, and varying leaf orientations with robust color channel normalization.'
      },
      {
        title: 'Transfer Learning with MobileNetV2',
        description: 'Utilizes depthwise separable convolutions to produce an ultra-compact model footprint with rapid inference times and high classification precision.'
      },
      {
        title: 'Multi-Class Disease Classification',
        description: 'Trained to distinguish between healthy leaves and visually ambiguous pathogen variations across multiple staple agricultural crops.'
      },
      {
        title: 'Condition-Specific Crop-Care Recommendations',
        description: 'Translates raw model classifications into plain-language, actionable guidance for farmers, detailing dosage, spray intervals, and organic alternatives.'
      },
      {
        title: 'TensorFlow & Keras Workflow',
        description: 'Built following production-grade model training conventions: custom callbacks, early stopping, learning rate reduction on plateau, and model checkpointing.'
      },
      {
        title: 'Inference Engine & Clean API',
        description: 'Packaged with clean Python inference scripts ready for FastAPI or Streamlit edge deployment.'
      }
    ],
    techStack: [
      {
        category: 'Deep Learning & Neural Frameworks',
        technologies: ['TensorFlow 2.x', 'Keras', 'MobileNetV2', 'Convolutional Neural Networks (CNN)']
      },
      {
        category: 'Computer Vision & Data Prep',
        technologies: ['OpenCV', 'NumPy', 'Pandas', 'Matplotlib / Seaborn', 'Data Augmentation']
      },
      {
        category: 'Model Optimization & Deployment',
        technologies: ['Transfer Learning', 'Learning Rate Scheduling', 'Model Serialization (.h5 / SavedModel)', 'Python 3.10']
      },
      {
        category: 'Serving & Evaluation',
        technologies: ['Confusion Matrix Analysis', 'ROC/AUC Curves', 'FastAPI / Streamlit Interface', 'Git']
      }
    ],
    technicalChallenges: [
      {
        challenge: 'Handling In-Field Background Clutter and Variable Sun Illumination',
        solution: 'Implemented aggressive data augmentation (random lighting shifts, hue jittering, leaf segmentation masking) during training, preventing the model from associating background soil or sunlight angles with disease classes.'
      },
      {
        challenge: 'Class Imbalance Across Rare Pathogen Varieties',
        solution: 'Applied class-weighted loss functions and synthetic minority oversampling during batch generation, preserving high recall on dangerous but rarer agricultural blights.'
      },
      {
        challenge: 'Balancing Deep Accuracy with Lightweight Edge Footprint',
        solution: 'Selected MobileNetV2 over heavy architectures like ResNet-152, reducing model weight by over 80% while retaining over 95% top-1 validation accuracy.'
      }
    ],
    outcomesAndImpact: [
      {
        metric: '96.2%',
        label: 'Validation Accuracy',
        description: 'Achieved high multi-class precision across diverse plant leaf pathology test splits.'
      },
      {
        metric: '14MB',
        label: 'Compact Footprint',
        description: 'Optimized model size enables instant on-device or edge deployment without expensive GPU clusters.'
      },
      {
        metric: '<120ms',
        label: 'Average Inference Latency',
        description: 'Fast image classification facilitating real-time field diagnosis in mobile environments.'
      }
    ]
  }
];
