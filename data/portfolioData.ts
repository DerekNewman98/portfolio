import {
  AcademicItem,
  Award,
  ContactLink,
  Course,
  Demo,
  HeroStatement,
  NavItem,
  Presentation,
  Publication,
  ResearchTopic,
  SiteSectionIntro,
} from "../types";

export const navItems: NavItem[] = [
  { label: "About", path: "about", type: "scroll" },
  { label: "Research", path: "/research", type: "route" },
  { label: "Courses", path: "/courses", type: "route" },
  { label: "Demos", path: "/demos", type: "route" },
  { label: "Contact", path: "contact", type: "scroll" },
];

export const heroStatement: HeroStatement = {
  eyebrow: "Neuroscience • Complexity • Consciousness",
  title: "Derek Newman",
  subtitle: "I study how brain dynamics organize consciousness, and I build visual systems to explain it.",
  description:
    "PhD candidate at McGill University working across EEG, fMRI, complexity science, criticality, and machine learning. The site is designed as a premium academic portfolio with room for demos, theory explainers, and future interactive scientific tools.",
  metrics: [
    { label: "Primary modalities", value: "EEG • fMRI • MEG" },
    { label: "Core themes", value: "Criticality • Entropy • Recovery" },
    { label: "Mode", value: "Researcher • Builder • Visual thinker" },
  ],
};

export const aboutIntro: SiteSectionIntro = {
  eyebrow: "About",
  title: "Research grounded in clinical neuroscience, complexity theory, and computational modeling.",
  description:
    "My work focuses on how neural dynamics reorganize across consciousness, sedation, and severe brain injury. I combine signal analysis, machine learning, and scientific visualization to build interpretable tools and strong conceptual models.",
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "derek.newman@mail.mcgill.ca",
    href: "mailto:derek.newman@mail.mcgill.ca",
  },
  {
    label: "Focus",
    value: "Consciousness, NeuroAI, Dynamical Brain States",
    href: "#",
  },
  {
    label: "Based in",
    value: "Montreal, Quebec",
    href: "#",
  },
];

export const researchTopics: ResearchTopic[] = [
  {
    title: "Criticality and complexity in neural systems",
    description:
      "I study whether healthy and disrupted brain states occupy specific regions of the order-disorder landscape, and whether those transitions can be measured reliably in electrophysiology and neuroimaging.",
    details: [
      "Entropy, fractal, and multiscale complexity metrics for EEG and fMRI.",
      "Brain-state transitions under anesthesia and during recovery.",
      "Interpretation of complexity changes in a clinical context.",
    ],
    tags: ["Criticality", "Entropy", "Dynamical systems"],
  },
  {
    title: "Consciousness assessment and prognosis",
    description:
      "I develop biomarkers that track conscious processing, predict recovery trajectories, and support better stratification in disorders of consciousness and pediatric intensive care.",
    details: [
      "Sedation-state characterization with EEG criticality features.",
      "Outcome prediction in severe brain injury.",
      "Clinically grounded marker design and validation.",
    ],
    tags: ["DOC", "ICU", "Prediction"],
  },
  {
    title: "Machine learning for neuroimaging",
    description:
      "I use statistical learning and representation methods to identify latent structure in neural data and to connect brain dynamics with prognosis, diagnosis, and theory.",
    details: [
      "Supervised classification of conscious versus unconscious states.",
      "Unsupervised embeddings of neural trajectories.",
      "Graph-based and temporal models for multimodal data.",
    ],
    tags: ["ML", "Neuroimaging", "Representation learning"],
  },
  {
    title: "Scientific visualization and theory communication",
    description:
      "I build custom diagrams, animated figures, and concept-driven visuals that translate difficult theoretical material into rigorous but elegant explanations.",
    details: [
      "Neural geometry, dynamical systems, and criticality visuals.",
      "Publication and presentation figure systems.",
      "Interactive demos for future theory pages.",
    ],
    tags: ["Visual systems", "Explainers", "Scientific branding"],
  },
];

export const publications: Publication[] = [
  {
    title: "EEG criticality as a prognostic tool for functional outcomes in sedated pediatric intensive care patients",
    authors:
      "Newman, D., Grinberg, M., Jones, K., Woodward, K., Esser, M. J., & Blain-Moraes, S.",
    journal: "Annals of Clinical and Translational Neurology",
    year: 2025,
    summary:
      "Shows how criticality-derived EEG features can improve prognosis in highly challenging clinical settings.",
    links: [
      { name: "PDF", url: "#" },
      { name: "DOI", url: "#" },
    ],
  },
  {
    title: "Neural Complexity and Prognosis: Predicting Recovery in Pediatric Epilepsy Using EEG Markers",
    authors: "Naish, M., Newman, D., & Blain-Moraes, S.",
    journal: "McGill Science Undergraduate Research Journal",
    year: 2025,
    summary:
      "Explores whether complexity metrics capture clinically meaningful information during recovery trajectories.",
    links: [
      { name: "PDF", url: "#" },
      { name: "DOI", url: "#" },
    ],
  },
  {
    title: "Disentangling EEG complexity and entropy: Resting-state dynamics predict paradoxical brain responses to anesthesia",
    authors: "Newman, D., Maschke, C., & Blain-Moraes, S.",
    journal: "Manuscript in preparation",
    year: 2025,
    summary:
      "Separates complexity from entropy to explain counterintuitive neural responses under anesthesia.",
    links: [
      { name: "Abstract", url: "#" },
      { name: "Preprint", url: "#" },
    ],
  },
];

export const courses: Course[] = [
  {
    title: "Computational Neuroscience Foundations",
    id: "NEUR-COMP-401",
    description:
      "A structured introduction to dynamical systems, signal analysis, network models, and the logic of computational explanations in neuroscience.",
    format: "Seminar + code lab",
    focus: ["Signals and spectra", "Network thinking", "State-space intuition"],
  },
  {
    title: "Consciousness Science and Neural Dynamics",
    id: "NEUR-CONSC-510",
    description:
      "An advanced course on theories of consciousness, anesthesia, disorders of consciousness, and the quantitative tools used to study them.",
    format: "Graduate reading + figure-based discussion",
    focus: ["Theory comparison", "Clinical translation", "Consciousness metrics"],
  },
  {
    title: "Machine Learning for Brain Data",
    id: "NEUR-ML-550",
    description:
      "Practical methods for classification, embeddings, and interpretable models applied to EEG, fMRI, and multimodal brain-state datasets.",
    format: "Methods course",
    focus: ["Supervised learning", "Embeddings", "Model interpretation"],
  },
];

export const demos: Demo[] = [
  {
    title: "Complexity-entropy causal plane",
    description:
      "A reusable explainer for how entropy and statistical complexity jointly characterize neural states across sedation and recovery.",
    tags: ["Entropy", "Complexity", "State space"],
    latexEquation:
      "H[P] = -\\sum_{i=1}^{N} p_i \\log p_i \\quad\\quad C[P] = Q_J[P, P_e] \\cdot H[P]",
  },
  {
    title: "Spectral slope and neural organization",
    description:
      "A conceptual and computational module for linking 1/f structure, scale-free dynamics, and shifts in cortical organization.",
    tags: ["1/f", "Spectra", "Critical dynamics"],
    latexEquation: "P(f) \\propto \\frac{1}{f^{\\beta}}",
    codeSnippet: `
import numpy as np

def spectral_slope(freqs, psd):
    x = np.log10(freqs[1:])
    y = np.log10(psd[1:])
    slope, intercept = np.polyfit(x, y, 1)
    return slope, intercept
    `,
    language: "python",
  },
  {
    title: "Attractor landscapes for brain-state transitions",
    description:
      "A demo family for communicating how neural states may move across basins, transitions, and metastable regimes.",
    tags: ["Attractors", "Dynamics", "Theory visuals"],
    latexEquation: "\\dot{x} = -\\nabla V(x) + \\eta(t)",
  },
];

export const academicBackground: AcademicItem[] = [
  {
    tenure: "2023 – Present",
    title: "PhD Candidate in Neuroscience",
    institution: "McGill University",
    description:
      "Integrated Program in Neuroscience. Investigating neural criticality, complexity, and recovery markers across anesthesia and brain injury.",
  },
  {
    tenure: "2021 – 2023",
    title: "MSc in Neuroscience",
    institution: "McGill University",
    description:
      "Developed EEG prognostic pipelines for pediatric intensive care and advanced directly into the PhD program.",
  },
  {
    tenure: "2015 – 2019",
    title: "BSc in Behavioural Neuroscience",
    institution: "Concordia University",
    description:
      "Graduated with distinction. Honours work focused on critical dynamics in multimodal neuroimaging.",
  },
];

export const awards: Award[] = [
  {
    year: "2025–2026",
    name: "UNIQUE Excellence Scholarship",
    awardedBy: "UNIQUE NeuroAI Program",
  },
  {
    year: "2025",
    name: "Travel Grant",
    awardedBy: "IEEE Brain Discovery & Neurotechnology Workshop",
  },
  {
    year: "2025",
    name: "Travel Grant",
    awardedBy: "UNIQUE NeuroAI Program",
  },
];

export const oralPresentations: Presentation[] = [
  {
    title:
      "Brain criticality under GABAergic sedation outperforms drug-free state in predicting recovery of consciousness after severe brain injury across the lifespan",
    authors:
      "Newman, D., Maschke, C., Norton, L., Duclos, C., Laforge, G., et al.",
    event: "Association for the Scientific Study of Consciousness",
    year: 2025,
    location: "Crete, Greece",
  },
  {
    title:
      "Prognostic value of EEG criticality features for assessing recovery in sedated pediatric intensive care patients",
    authors: "Newman, D., Grinberg, M., Woodward, K., Esser, M., Jones, K., & Blain-Moraes, S.",
    event: "IBIA World Congress on Brain Injury",
    year: 2025,
    location: "Montreal, Canada",
  },
  {
    title: "Changes in EEG microstate complexity during cognitive recovery following anesthesia in healthy participants",
    authors: "Banerji, A., Newman, D., Blain-Moraes, S., & Sleigh, J.",
    event: "Canadian Consciousness Research Symposium",
    year: 2024,
    location: "Montreal, Canada",
  },
];

export const posterPresentations: Presentation[] = [
  {
    title: "EEG criticality as a prognostic tool for functional outcomes in sedated pediatric intensive care patients",
    authors: "Newman, D., Grinberg, M., Jones, K., Woodward, K., Esser, M. J., & Blain-Moraes, S.",
    event: "World Congress in Intensive and Critical Care",
    year: 2025,
    location: "Vancouver, Canada",
  },
  {
    title: "Tracking neural state transitions under anesthesia using the complexity-entropy causal plane",
    authors: "Newman, D., & Blain-Moraes, S.",
    event: "IEEE Brain Discovery & Neurotechnology Workshop",
    year: 2025,
    location: "Vancouver, Canada",
  },
  {
    title: "Self-similar properties of simultaneous fPET and fMRI",
    authors: "Newman, D., Paul, J., & Steele, C. J.",
    event: "PERFORM Student Health Research Event",
    year: 2019,
    location: "Montreal, Canada",
  },
];
