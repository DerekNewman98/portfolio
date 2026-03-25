import { ResearchTopic, Publication, Course, Demo, AcademicItem, Presentation, Award } from '../types';

export const researchTopics: ResearchTopic[] = [
  {
    title: 'Criticality & Complexity in Neural Systems',
    description: 'I study how the brain operates near critical points—transitions between order and disorder. Using entropy, fractal, and complexity measures, I analyze EEG and multimodal neuroimaging data to reveal how critical dynamics relate to consciousness and recovery after brain injury.',
  },
  {
    title: 'Consciousness Assessment & Prognosis',
    description: 'My work develops physiologically grounded biomarkers of consciousness, including EEG-based criticality features and the complexity–entropy causal plane. These tools track anesthesia-induced transitions, predict recovery in brain-injured patients, and help design better prognostic models in the ICU.',
  },
  {
    title: 'Machine Learning for Neuroimaging',
    description: 'I apply supervised, unsupervised, and network-based machine learning approaches to EEG, fMRI, and MEG data. Methods include:',
    details: [
      'Supervised classifiers to distinguish conscious vs. unconscious states.',
      'Unsupervised embedding and manifold learning to uncover hidden brain-state trajectories.',
      'Graph-theoretic ML linking connectivity and prognosis in intensive care.',
      'Time-series ML to model evolving neural dynamics under anesthesia.',
    ],
  },
  {
    title: 'Translational Applications',
    description: 'My research is grounded in clinical practice. By combining EEG criticality, network science, and machine learning, I aim to develop prognostic tools for ICU patients and robust, generalizable markers of anesthetic depth and recovery potential.',
  },
];

export const publications: Publication[] = [
  {
        title: "EEG criticality as a prognostic tool for functional outcomes in sedated pediatric intensive care patients",
        authors: "Newman, D., Grinberg, M., Jones, K., Woodward, K., Esser, M.J., & Blain-Moraes, S.",
        journal: "Annals of Clinical and Translational Neurology",
        year: 2025,
        links: [
            { name: "PDF", url: "#" },
            { name: "DOI", url: "#" },
        ]    },
  {
        title: "Neural Complexity and Prognosis: Predicting Recovery in Pediatric Epilepsy Using EEG Markers",
        authors: "Naish, M., Newman, D., & Blain-Moraes, S.",
        journal: "McGill Science Undergraduate Research Journal",
        year: 2025,
        links: [
            { name: "PDF", url: "#" },
            { name: "DOI", url: "#" },
        ]  
  },
  {
        title: "Disentangling EEG complexity and entropy: Resting-state dynamics predict paradoxical brain responses to anesthesia",
        authors: "Newman, D., Maschke, C., & Blain-Moraes, S.",
        journal: "Manuscript in preparation",
        year: 2025,
        links: [
            { name: "PDF", url: "#" },
            { name: "DOI", url: "#" },
        ]
  }
];

export const courses: Course[] = [
    {
        title: 'Introduction to Deep Learning',
        id: 'CS-401',
        description: 'A foundational course covering the principles of neural networks, backpropagation, and major architectures like CNNs and RNNs.',
        imageUrl: 'https://picsum.photos/seed/course1/600/400'
    },
    {
        title: 'Advanced Natural Language Processing',
        id: 'CS-550',
        description: 'Exploring state-of-the-art models for NLP, including Transformers, BERT, and GPT, with hands-on projects.',
        imageUrl: 'https://picsum.photos/seed/course2/600/400'
    },
    {
        title: 'Reinforcement Learning',
        id: 'CS-585',
        description: 'An in-depth study of RL algorithms, from Q-learning to policy gradients and their applications in games and robotics.',
        imageUrl: 'https://picsum.photos/seed/course3/600/400'
    },
    {
        title: 'Computer Vision',
        id: 'CS-520',
        description: 'This course covers the fundamentals of computer vision, from image formation to object recognition and 3D reconstruction.',
        imageUrl: 'https://picsum.photos/seed/course4/600/400'
    }
];

export const demos: Demo[] = [
    {
        title: 'The Schrödinger Equation',
        description: "A cornerstone of quantum mechanics, the time-dependent Schrödinger equation describes how the quantum state of a physical system changes over time.",
        latexEquation: "i\\hbar\\frac{\\partial}{\\partial t}\\Psi(r,t) = \\left[ -\\frac{\\hbar^2}{2m}\\nabla^2 + V(r,t) \\right]\\Psi(r,t)"
    },
    {
        title: 'Fourier Transform',
        description: "The Fourier Transform is a mathematical transform that decomposes functions depending on space or time into functions depending on spatial or temporal frequency.",
        latexEquation: "\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} dx",
        codeSnippet: `
import numpy as np

def fourier_transform(signal):
    N = len(signal)
    n = np.arange(N)
    k = n.reshape((N, 1))
    e = np.exp(-2j * np.pi * k * n / N)
    return np.dot(e, signal)
        `,
        language: 'python'
    },
    {
        title: "Maxwell's Equations",
        description: "These four equations form the foundation of classical electromagnetism, classical optics, and electric circuits.",
        latexEquation: "\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\epsilon_0} \\quad \\quad \\nabla \\times \\mathbf{B} = \\mu_0 (\\mathbf{J} + \\epsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t})"
    }
];

export const academicBackground: AcademicItem[] = [
  {
    tenure: "2023 – Present",
    title: "PhD Candidate in Neuroscience",
    institution: "McGill University",
    description: "Integrated Program in Neuroscience. Research focuses on EEG-based complexity and criticality metrics to assess consciousness in anesthesia and brain injury."
  },
  {
    tenure: "2021 – 2023",
    title: "MSc in Neuroscience",
    institution: "McGill University",
    description: "Worked on EEG criticality as a prognostic tool in pediatric intensive care. Developed novel preprocessing and feature-extraction pipelines; fast-tracked directly into the PhD program based on research excellence."
  },
  {
    tenure: "2015 – 2019",
    title: "BSc in Behavioural Neuroscience",
    institution: "Concordia University",
    description: "Graduated with Distinction. Honours thesis compared critical dynamics in fMRI and FDG-fPET."
  }
];

export const awards: Award[] = [
  {
    year: "2025-2026",
    name: "UNIQUE Excellence Scholarship",
    awardedBy: "UNIQUE NeuroAI Program"
  },
  {
    year: "2025",
    name: "Travel Grant",
    awardedBy: "IEEE Brain Discovery & Neurotechnology Workshop"
  },
  {
    year: "2025",
    name: "Travel Grant",
    awardedBy: "UNIQUE NeuroAI Program"
  }
];

export const oralPresentations: Presentation[] = [
  {
    title: "Brain criticality under GABAergic sedation outperforms drug-free state in predicting recovery of consciousness after severe brain injury across the lifespan",
    authors: "Newman, D.*, Maschke, C., Norton, L., Duclos, C., Laforge, G., et al.",
    event: "28th Annual Meeting of the Association for the Scientific Study of Consciousness (ASSC)",
    year: 2025,
    location: "Crete, Greece",
  },
  {
    title: "Prognostic value of EEG criticality features for assessing recovery in sedated pediatric intensive care patients",
    authors: "Newman, D.*, Grinberg, M., Woodward, K., Esser, M., Jones, K., & Blain-Moraes, S.",
    event: "IBIA 15th World Congress on Brain Injury",
    year: 2025,
    location: "Montreal, Canada",
  },
  {
    title: "Prognostic value of EEG criticality features for assessing recovery in severely brain-injured pediatric patients under sedation",
    authors: "Newman, D.*, Grinberg, M., Woodward, K., Esser, M., Jones, K., & Blain-Moraes, S.",
    event: "Canadian Consciousness Research Symposium (CCRS), 3rd Edition",
    year: 2024,
    location: "Montreal, Canada",
  },
  {
    title: "Changes in EEG microstate complexity during cognitive recovery following anesthesia in healthy participants",
    authors: "Banerji, A.*, Newman, D., Blain-Moraes, S., & Sleigh, J.",
    event: "Canadian Consciousness Research Symposium (CCRS), 3rd Edition",
    year: 2024,
    location: "Montreal, Canada",
  }
];

export const posterPresentations: Presentation[] = [
  {
    title: "EEG criticality as a prognostic tool for functional outcomes in sedated pediatric intensive care patients",
    authors: "Newman, D.*, Grinberg, M., Jones, K., Woodward, K., Esser, M. J., & Blain-Moraes, S.",
    event: "17th World Congress in Intensive and Critical and Care (WCICC)",
    year: 2025,
    location: "Vancouver, Canada",
  },
  {
    title: "Tracking neural state transitions under anesthesia using the complexity–entropy causal plane",
    authors: "Newman, D.*, & Blain-Moraes, S.",
    event: "3rd IEEE Brain Discovery & Neurotechnology Workshop (IEEE Brain)",
    year: 2025,
    location: "Vancouver, Canada",
  },
  {
    title: "Markers of Neural Complexity Predict Recovery in Pediatric Patients with Epilepsy",
    authors: "Naish, M., Newman, D., & Blain-Moraes, S.",
    event: "Undergraduate Science Showcase",
    year: 2025,
    location: "Montreal, Canada",
  },
  {
    title: "EEG Synchrony and Criticality Predict Functional Outcomes in Intensive Care Unit Patients with Severe Brain Injury",
    authors: "Newman, D.*, Maschke, C., Norton, L., Duclos, C., Laforge, G., Wang, X., Al-Hayawi, H., Lavoie, R., Owen, A. M., & Blain-Moraes, S.",
    event: "IARS International Anesthesia Research Society Annual Meeting",
    year: 2025,
    location: "Honolulu, Hawaii, USA",
  },
  {
    title: "Disentangling Complexity and Entropy to Assess States of Consciousness Under Anesthesia Using the Causal Plane",
    authors: "Newman, D.*, & Blain-Moraes, S.",
    event: "Canadian Consciousness Research Symposium (CCRS), 3rd Edition",
    year: 2024,
    location: "Montreal, Canada",
  },
  {
    title: "Complexity, Entropy, and Criticality: Assessing States of Consciousness Under Anesthesia",
    authors: "Newman, D.*, & Blain-Moraes, S.",
    event: "Brain Criticality Hybrid Meeting, National Institutes of Health (NIH)",
    year: 2024,
    location: "Bethesda, Maryland, USA (Virtual)",
  },
  {
    title: "Assessing Consciousness During Propofol Sedation with EEG Complexity and Entropy: Preliminary Results",
    authors: "Newman, D.*, & Blain-Moraes, S.",
    event: "McGill Integrated Program in Neuroscience Retreat",
    year: 2024,
    location: "Montreal, Canada",
  },
  {
    title: "A depth of anesthesia assessment in severely brain-injured pediatric patients with EEG features: a retrospective observational study",
    authors: "Newman, D.*, Grinberg, M., Jones, K., & Blain-Moraes, S.",
    event: "5th Biennial International Conference on Paediatric Acquired Brain Injury",
    year: 2024,
    location: "Glasgow, United Kingdom",
  },
  {
    title: "Neural markers of consciousness predict diagnosis in anesthetized, brain-injured pediatric patients",
    authors: "Naish, M., Newman, D., & Blain-Moraes, S.",
    event: "RI-MUHC Summer Student Research Day",
    year: 2024,
    location: "Montreal, Canada",
  },
  {
    title: "Assessing depth of anesthesia in severely brain-injured pediatric patients with EEG features: A preliminary study",
    authors: "Newman, D.*, Maschke, C., Grinberg, M., Jones, K., & Blain-Moraes, S.",
    event: "UNIQUE Student Symposium",
    year: 2024,
    location: "Quebec City, Canada",
  },
  {
    title: "Self-Similar Properties of Simultaneous fPET and fMRI",
    authors: "Newman, D.*, Paul, J., & Steele, C. J.",
    event: "PERFORM Student Health Research Event",
    year: 2023,
    location: "Montreal, Canada",
  },
  {
    title: "Self-Similar Properties of Simultaneous fPET and fMRI",
    authors: "Newman, D.*, Paul, J., & Steele, C. J.",
    event: "BOLD Science Conference",
    year: 2023,
    location: "Montreal, Canada",
  },
  {
    title: "Analysis of White Matter Structure in Relation to Behavior",
    authors: "Guzman Moreno, I., Caplan, J., Newman, D., Alasmar, Z., Rousseau, P. N., & Steele, C. J.",
    event: "BOLD Science Conference",
    year: 2022,
    location: "Montreal, Canada",
  }
];
