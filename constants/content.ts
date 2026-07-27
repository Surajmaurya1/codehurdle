import { FeatureItem, TestimonialItem, StatItem, FAQItem, TerminalExecutionStep } from "@/types";

export const TICKER_ITEMS = [
  "Introducing AI System Design Whiteboard v2.0",
  "150,000+ Engineers Hired at FAANG & Unicorns",
  "2026 Frontend Staff Engineer Tracks Now Live",
  "Real-Time Mock Interview Speech & Code Diagnostics",
  "94% Placement Rate Within 90 Days",
];

export const WHY_CODEHURDLE_ITEMS: FeatureItem[] = [
  {
    id: "roadmaps",
    index: "// 001",
    title: "Algorithmic & System Architecture Roadmaps",
    description: "Battle-tested learning paths structured by principal engineers from Stripe, Meta, and Vercel.",
    category: "Structured Mastery",
    iconName: "Compass",
    accentColor: "#7B2DFF",
    metrics: "45+ Curated Modules",
    codeSnippet: "const path = await CodeHurdle.getRoadmap('staff-frontend');",
  },
  {
    id: "projects",
    index: "// 002",
    title: "Production-Grade Engineering Projects",
    description: "Build real-world distributed systems, real-time web state engines, and high-throughput canvas applications.",
    category: "Hands-on Code",
    iconName: "Code2",
    accentColor: "#A675FF",
    metrics: "12 Full-Stack Projects",
    codeSnippet: "npm run test:architecture --strict",
  },
  {
    id: "mock-interviews",
    index: "// 003",
    title: "AI & Peer Interactive Mock Interviews",
    description: "Simulate pressure-packed FAANG interview rounds with adaptive AI interviewers evaluating code structure and communication.",
    category: "Real-time Simulation",
    iconName: "Terminal",
    accentColor: "#7B2DFF",
    metrics: "96% Scoring Precision",
    codeSnippet: "$ codehurdle start --mode=live-mock",
  },
  {
    id: "resume-reviews",
    index: "// 004",
    title: "Automated Resume & Portfolio Diagnostics",
    description: "Parse your resume against top tech recruiter filters to pinpoint high-impact phrasing, metrics, and project positioning.",
    category: "Recruiter Optimization",
    iconName: "FileCheck",
    accentColor: "#A675FF",
    metrics: "Instant ATS Analysis",
    codeSnippet: "Review Score: 98/100 (FAANG Ready)",
  },
  {
    id: "career-guidance",
    index: "// 005",
    title: "Compensation & Offer Negotiation Coach",
    description: "Data-backed compensation benchmarks and counter-offer strategy to maximize your Total Compensation.",
    category: "Negotiation Playbook",
    iconName: "TrendingUp",
    accentColor: "#7B2DFF",
    metrics: "+$42k Avg Salary Lift",
    codeSnippet: "counterOffer = currentOffer * 1.25;",
  },
  {
    id: "company-prep",
    index: "// 006",
    title: "Company-Specific Interview Question Vault",
    description: "Deep dive into verified interview questions tagged by company, frequency, and exact rubric solutions.",
    category: "Targeted Prep",
    iconName: "Building2",
    accentColor: "#A675FF",
    metrics: "1,200+ Verified Questions",
    codeSnippet: "filterByCompany(['Stripe', 'Linear', 'Vercel']);",
  },
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "adaptive-practice",
    index: "01",
    title: "Adaptive Problem Engine",
    description: "Algorithms continuously analyze your weak spots, automatically tuning problem difficulty to accelerate retention.",
    category: "AI Engine",
    iconName: "Zap",
  },
  {
    id: "sandbox-execution",
    index: "02",
    title: "Instant WebAssembly Sandbox",
    description: "Zero-latency in-browser execution environment with full TypeScript, Node.js, and browser API mocking.",
    category: "Runtime",
    iconName: "Cpu",
  },
  {
    id: "system-design",
    index: "03",
    title: "Interactive Architecture Canvas",
    description: "Design distributed systems, load balancers, and reactive state stores on an intelligent collaborative canvas.",
    category: "System Design",
    iconName: "Layers",
  },
  {
    id: "behavioral-coach",
    index: "04",
    title: "STAR Framework Voice Evaluator",
    description: "Real-time speech feedback assessing tone, clarity, leadership signals, and technical storytelling.",
    category: "Soft Skills",
    iconName: "Mic",
  },
  {
    id: "peer-battles",
    index: "05",
    title: "Live Peer Code Battles",
    description: "Match with candidate peers for timed 45-minute practice interviews with mutual peer scoring.",
    category: "Community",
    iconName: "Users",
  },
  {
    id: "offer-benchmarks",
    index: "06",
    title: "Leveling & Offer Analytics",
    description: "Comprehensive salary insights mapped to L4/L5/L6 levels across US, EU, and Remote compensation tiers.",
    category: "Career",
    iconName: "BarChart3",
  },
];

export const TERMINAL_STEPS: TerminalExecutionStep[] = [
  {
    command: "codehurdle mock-interview --track=frontend-staff --company=Stripe",
    questionTitle: "Explain Closures & Memory Leak Mitigation in Event-Driven Architecture",
    category: "JavaScript Core & Memory Management",
    difficulty: "Staff",
    userCodeSnippet: `function createDebounce(fn, delay) {
  let timerId = null;
  return function(...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
      timerId = null; // Prevent stale reference retention
    }, delay);
  };
}`,
    outputLog: [
      "[SYS] Initializing WebAssembly V8 Sandbox Environment...",
      "[SYS] Executing test suite against 14 edge cases...",
      "[SANDBOX] Heap allocation profile: 1.2MB peak memory",
      "[SANDBOX] Asynchronous loop execution: 0.4ms latency",
      "[AI EVAL] Analyzing lexical scope retention & cleanup safety...",
    ],
    confidenceScore: 96,
    feedback: {
      correctness: "Optimal closure preservation with explicit timerId cleanup prevent memory leaks.",
      complexity: "Time Complexity: O(1) invocation overhead | Space Complexity: O(1) heap scope",
      edgeCases: "Passed rapid re-triggering, scope binding preservation, and unmount cancellation.",
    },
  },
  {
    command: "codehurdle mock-interview --track=react-architecture --company=Vercel",
    questionTitle: "Design an In-Memory Reactive State Store with Concurrent Mode Support",
    category: "React 19 & Concurrent Engine",
    difficulty: "Staff",
    userCodeSnippet: `function useCustomStore(store) {
  return useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot
  );
}`,
    outputLog: [
      "[SYS] Mounting React 19 Concurrent Renderer...",
      "[SYS] Simulating 1,000 state mutations per second...",
      "[SANDBOX] Tearing prevention test: PASSED",
      "[AI EVAL] Evaluating Hydration safety & SSR snapshot compliance...",
    ],
    confidenceScore: 98,
    feedback: {
      correctness: "Implements official useSyncExternalStore contract correctly for SSR safety.",
      complexity: "Time Complexity: O(1) store subscribe/unsubscribe registration",
      edgeCases: "Zero hydration mismatch across server and client render passes.",
    },
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Senior Frontend Engineer",
    company: "Stripe",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content: "CodeHurdle's AI mock terminal gave me the exact confidence boost I needed. The feedback on code complexity and communication was spot-on for Stripe's Staff round.",
    outcome: "L5 Offer • $310k TC",
    rating: 5,
    highlightTag: "Staff Engineer Track",
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "Staff Software Engineer",
    company: "Linear",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    content: "The system design Whiteboard module and production project tracks are unmatched. It feels like practicing inside the actual engineering teams at Vercel and Linear.",
    outcome: "Hired at Linear",
    rating: 5,
    highlightTag: "System Design",
  },
  {
    id: "3",
    name: "Marcus Vance",
    role: "Lead UI Architect",
    company: "Vercel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content: "I went from failing phone screens to receiving 3 top-tier offers within 6 weeks. The company-specific question vault is shockingly accurate.",
    outcome: "+65% Salary Increase",
    rating: 5,
    highlightTag: "FAANG Prep",
  },
  {
    id: "4",
    name: "Sophia Chen",
    role: "Full Stack Engineer",
    company: "Notion",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    content: "CodeHurdle isn't just leetcode practice; it teaches you how to present yourself as a senior engineer who solves real business problems.",
    outcome: "Hired at Notion",
    rating: 5,
    highlightTag: "Product Engineering",
  },
];

export const STATS_DATA: StatItem[] = [
  {
    id: "developers",
    numericValue: 150000,
    suffix: "+",
    label: "Active Engineers",
    sublabel: "Practicing daily across 40+ countries",
  },
  {
    id: "rating",
    numericValue: 4.9,
    suffix: "★",
    label: "Average Student Rating",
    sublabel: "From over 12,000 verified candidate reviews",
  },
  {
    id: "questions",
    numericValue: 1200,
    suffix: "+",
    label: "FAANG Questions",
    sublabel: "Updated weekly with official rubrics",
  },
  {
    id: "success-rate",
    numericValue: 94,
    suffix: "%",
    label: "Offer Success Rate",
    sublabel: "Candidates who secure offers within 90 days",
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "How is CodeHurdle different from LeetCode or HackerRank?",
    answer: "CodeHurdle focuses on production-grade engineering, full system architecture, and realistic voice/code AI mock interviews. Instead of isolated puzzle solving, you prepare for real senior/staff engineer evaluation rubrics used at companies like Stripe, Vercel, Linear, and Meta.",
  },
  {
    id: "faq-2",
    category: "interviews",
    question: "How realistic is the AI Mock Interviewer?",
    answer: "Our AI interviewer evaluates both code correctness, computational complexity, memory management, and verbal explanation structure using modern voice processing models trained on thousands of actual top-tier technical interviews.",
  },
  {
    id: "faq-3",
    category: "pricing",
    question: "Is there a free trial or money-back guarantee?",
    answer: "Yes! You can test our interactive roadmaps and terminal for free. All paid memberships come with a 14-day 100% money-back guarantee with zero hassle.",
  },
  {
    id: "faq-4",
    category: "platform",
    question: "Can I use CodeHurdle for Frontend, Backend, and Full Stack roles?",
    answer: "Absolutely. We offer specialized tracks for Frontend Staff Engineering, React/Next.js Architecture, Distributed Backend Systems, AI Engineering, and Engineering Management.",
  },
  {
    id: "faq-5",
    category: "interviews",
    question: "Do you offer company-specific prep modules?",
    answer: "Yes. Our company question vault contains verified, freshly reported interview prompts from candidates who interviewed at Stripe, Vercel, Linear, Google, Meta, Apple, and OpenAI.",
  },
];
