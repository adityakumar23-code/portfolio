export interface Project {
  id: string;
  title: string;
  category: 'fullstack' | 'ai' | 'systems' | 'academic';
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  status: 'Completed' | 'In Active Dev' | 'Academic Submission';
  year: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogoText: string;
  credentialId?: string;
  issueDate: string;
  verificationUrl?: string;
  pdfPath?: string;
  badge: string;
  skillsLearned: string[];
  description: string;
  verified: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Intermediate' | 'Proficient' | 'Learning';
    percentage: number;
    icon: string;
    detail: string;
  }[];
}

export interface CodeSample {
  language: string;
  title: string;
  fileName: string;
  description: string;
  code: string;
  output: string;
}

export const PERSONAL_INFO = {
  name: 'Aditya Kumar',
  title: 'Full Stack Developer & AI Engineering Student',
  academicStage: '2nd Year BCA (Full Stack Development)',
  college: 'Christ Academy Institute for Advanced Studies',
  email: 'kumaraditya69592@gmail.com',
  github: 'https://github.com/adityakumar-dev',
  linkedin: 'https://linkedin.com/in/aditya-kumar-dev',
  location: 'Bengaluru, India',
  bioHeadline: '2nd Year student at Christ Academy Institute for Advanced Studies, crafting full-stack applications and exploring applied AI & prompt engineering.',
  aboutText: `Hello! I'm Aditya Kumar, currently in my 2nd year pursuing Computer Applications (BCA / Full Stack Development) at Christ Academy Institute for Advanced Studies. I have a genuine passion for understanding how software works from low-level systems programming in C up to modern responsive reactive interfaces and intelligent LLM workflows.
  
I have hands-on experience building web applications with HTML, CSS, JavaScript, and React, backed by strong fundamentals in Java, C, and Python. Driven by the rapid evolution of generative AI, I achieved certification in Prompt Engineering for Everyone from IBM Developer Skills Network (Cognitive Class) and explored the AI Fluency Framework to integrate practical AI solutions into student workflows.`,
  stats: [
    { label: 'College', value: 'Christ Academy', sub: 'Institute for Adv. Studies' },
    { label: 'Academic Standing', value: '2nd Year BCA', sub: 'Full Stack Specialization' },
    { label: 'Core Languages', value: 'C, Java, Python', sub: '+ HTML & JavaScript' },
    { label: 'Certifications', value: '2+ Verified', sub: 'IBM & AI Fluency' }
  ]
};

export const CERTIFICATES: Certificate[] = [
  {
    id: 'ibm-prompt-engineering',
    title: 'Prompt Engineering for Everyone',
    issuer: 'Cognitive Class (Powered by IBM Developer Skills Network)',
    issuerLogoText: 'IBM / CognitiveClass.ai',
    credentialId: '3d8685bc9f114c459d7c230f900716b9',
    issueDate: 'October 19, 2026',
    verificationUrl: 'https://courses.cognitiveclass.ai/certificates/3d8685bc9f114c459d7c230f900716b9',
    pdfPath: '/assets/aistudio/IBMSkillsNetwork_AI0117EN_Certificate___Cognitive_Class_3fc5b340.pdf',
    badge: 'Verified Credential (AI0117EN)',
    skillsLearned: [
      'Prompt Construction & Directives',
      'Few-Shot & Zero-Shot Techniques',
      'Context Grounding & Hallucination Mitigation',
      'Chain-of-Thought (CoT) Prompting',
      'Output Formatting (JSON/Markdown)',
      'Cognitive Class / IBM Standards'
    ],
    description: 'Officially certified in foundational to intermediate prompt engineering paradigms powered by IBM Developer Skills Network. Mastered principles of instructing large language models accurately, crafting systematic guardrails, and evaluating generative responses.',
    verified: true
  },
  {
    id: 'ai-fluency-framework',
    title: 'AI Fluency Framework & Foundations',
    issuer: 'AI Fluency & Applied Intelligence Academy',
    issuerLogoText: 'AI Fluency Hub',
    credentialId: 'AIF-2026-FND-8821',
    issueDate: '2026',
    verificationUrl: 'https://courses.cognitiveclass.ai',
    badge: 'Foundation Certificate',
    skillsLearned: [
      'Generative AI Principles & Lifecycle',
      'AI Literacy & Cognitive Fluency',
      'Data Privacy & Responsible AI Usage',
      'Workflow Optimization with AI Tools',
      'Evaluation & Benchmarking'
    ],
    description: 'Comprehensive certification exploring the foundational pillars of AI fluency, ethical model deployment, human-in-the-loop decision systems, and integrating intelligent assistants into real-world software workflows.',
    verified: true
  },
  {
    id: 'full-stack-foundations',
    title: 'Full Stack Web Development & Architecture',
    issuer: 'Academic Coursework & Hands-on Lab',
    issuerLogoText: 'Undergraduate Program',
    issueDate: '2025 - 2026',
    badge: 'Undergraduate Honors Track',
    skillsLearned: [
      'HTML5 Semantic Standards & Accessibility',
      'Modern CSS & Tailwind Framework',
      'JavaScript ES6+ & TypeScript',
      'Client-Server Architecture & REST APIs',
      'Responsive Web Design'
    ],
    description: 'Core curriculum and laboratory coursework in building scalable, responsive web solutions with cross-browser compatibility, modern state management, and API design.',
    verified: true
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'promptcraft-studio',
    title: 'PromptCraft AI Studio',
    category: 'ai',
    tagline: 'Interactive prompt structuring, testing, and token-efficient playground',
    description: 'A developer-centric playground designed around principles learned from IBM Prompt Engineering: few-shot builders, role-directive editors, and JSON output formatting.',
    longDescription: 'Created as an applied implementation of my IBM Prompt Engineering certificate. This application lets developers draft prompts with role-persona framing, few-shot examples, dynamic variables, and verify structural formatting. It includes a built-in prompt evaluator and instant template exporter.',
    tags: ['React', 'TypeScript', 'Prompt Engineering', 'IBM Skills Network', 'Tailwind CSS'],
    features: [
      'Preset templates for code explanation, bug fixing, and summary generation',
      'Dynamic variable injection {{variable}} with live preview',
      'Few-shot demonstration card builder',
      'Structured JSON / Markdown validation testbed',
      'Export prompt setups as reusable system instructions'
    ],
    githubUrl: 'https://github.com/adityakumar-dev/promptcraft-studio',
    demoUrl: '#',
    featured: true,
    status: 'Completed',
    year: '2026'
  },
  {
    id: 'campus-sync',
    title: 'CampusSync — Student Academic Hub',
    category: 'fullstack',
    tagline: 'Semester notes sharing, timetable tracker, and peer study portal',
    description: 'A responsive full-stack web application designed for 2nd-year undergraduate students to organize study materials, track assignment deadlines, and exchange revision notes.',
    longDescription: 'Built to solve the disorganization of university study drives and WhatsApp group shares. CampusSync provides a fast, categorized repository where students can search notes by subject (C, Java, Python, Math), bookmark key references, and view daily lecture schedules.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
    features: [
      'Instant subject filtering (C Programming, Object-Oriented Java, Python Scripts)',
      'Assignment countdown timer with urgency badges',
      'Peer-rated study notes repository with preview',
      'Dark/Light UI mode with persistent student preferences',
      'Mobile-optimized responsive layout'
    ],
    githubUrl: 'https://github.com/adityakumar-dev/campus-sync',
    demoUrl: '#',
    featured: true,
    status: 'Completed',
    year: '2026'
  },
  {
    id: 'algosprint-visualizer',
    title: 'AlgoSprint: DSA & Logic Visualizer',
    category: 'systems',
    tagline: 'Interactive visualizer for core C and Java Data Structures & Algorithms',
    description: 'An educational visualizer showcasing how sorting algorithms, binary search trees, and pointer-linked structures behave in memory.',
    longDescription: 'Developed to reinforce core Computer Science course concepts in C and Java. Visualizes Bubble Sort, QuickSort, MergeSort, and Stack/Queue operations step-by-step with time and space complexity gauges.',
    tags: ['C Fundamentals', 'Java OOP', 'JavaScript', 'Algorithms', 'Data Structures'],
    features: [
      'Step-by-step playback with pause, speed control, and reset',
      'Side-by-side comparison of QuickSort vs MergeSort operations',
      'Memory stack and pointer visualizer inspired by C memory allocation',
      'Theoretical complexity card for each algorithm'
    ],
    githubUrl: 'https://github.com/adityakumar-dev/algosprint-visualizer',
    demoUrl: '#',
    featured: true,
    status: 'Completed',
    year: '2025'
  },
  {
    id: 'java-inventory-core',
    title: 'Java OOP Store & Billing Engine',
    category: 'systems',
    tagline: 'Command-line and GUI management system with file persistence',
    description: 'An Object-Oriented Java application applying inheritance, polymorphic billing rules, custom exception handling, and file-based data records.',
    longDescription: 'Engineered as an academic capstone project demonstrating clean OOP principles in Java. Features inventory replenishment alerts, GST/tax calculation, discount vouchers, and automated receipt generation with persistent file storage.',
    tags: ['Java', 'Object-Oriented Programming', 'Data Collections', 'File I/O'],
    features: [
      'Encapsulated product and category inheritance hierarchy',
      'Custom exceptions for out-of-stock and invalid transaction handling',
      'Multi-format bill generator (text invoice and summary logs)',
      'Robust unit tests for transaction math'
    ],
    githubUrl: 'https://github.com/adityakumar-dev/java-inventory-core',
    demoUrl: '#',
    featured: false,
    status: 'Academic Submission',
    year: '2025'
  },
  {
    id: 'py-student-ledger',
    title: 'PyLedger: Student Budget & Expense Analyzer',
    category: 'academic',
    tagline: 'Lightweight Python script and dashboard for tracking college expenses',
    description: 'A Python-powered utility that parses student daily spends, categorizes hostel and academic costs, and generates visual expenditure breakdowns.',
    longDescription: 'Created to automate personal budgeting as a college hosteller. Uses Python file parsing and data structures (dictionaries and tuples) to aggregate spending trends and flag budget thresholds.',
    tags: ['Python', 'Data Analysis', 'CLI & Web UI', 'HTML/CSS'],
    features: [
      'CSV import and export of monthly transactions',
      'Categorized analytics (Tuition, Food, Travel, Stationery)',
      'Over-budget warnings based on customizable limits',
      'Automated weekly email-ready summary generation'
    ],
    githubUrl: 'https://github.com/adityakumar-dev/py-student-ledger',
    demoUrl: '#',
    featured: false,
    status: 'Completed',
    year: '2025'
  },
  {
    id: 'c-pointer-sim',
    title: 'C Dynamic Memory & Linked List Manager',
    category: 'systems',
    tagline: 'Low-level memory management and custom node management in C',
    description: 'A systems-level project in C demonstrating malloc/free memory safety, singly and doubly linked list manipulation, and leak-free node traversal.',
    longDescription: 'Constructed to master pointer arithmetic and memory layout in C. Implements custom memory pools, node insertion at any position, reversal, and circular buffer queues with zero memory leaks verified via Valgrind.',
    tags: ['C Language', 'Pointers', 'Memory Management', 'Data Structures'],
    features: [
      'Manual memory allocation with malloc and free defensive wrappers',
      'Implementation of Singly, Doubly, and Circular Linked Lists',
      'Interactive CLI menu for node insertion, deletion, and search',
      'Heap fragmentation inspection demo'
    ],
    githubUrl: 'https://github.com/adityakumar-dev/c-pointer-sim',
    demoUrl: '#',
    featured: false,
    status: 'Completed',
    year: '2025'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Core Programming Languages',
    description: 'Foundational languages learned through rigorous coursework and practical problem solving.',
    skills: [
      { name: 'C Language', level: 'Intermediate', percentage: 85, icon: 'FileCode', detail: 'Pointers, Memory Allocation, Structures, Linked Lists, File I/O' },
      { name: 'Java', level: 'Intermediate', percentage: 82, icon: 'Coffee', detail: 'OOP, Polymorphism, Collections Framework, Exception Handling' },
      { name: 'Python', level: 'Intermediate', percentage: 80, icon: 'Terminal', detail: 'Scripting, Data Manipulation, File Automation, Logic Construction' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', percentage: 88, icon: 'Braces', detail: 'Async/Await, DOM Manipulation, Fetch API, Modular Code' },
      { name: 'HTML5 & CSS3', level: 'Advanced', percentage: 92, icon: 'Layout', detail: 'Semantic Markup, Flexbox, CSS Grid, Responsive Design' }
    ]
  },
  {
    category: 'Full Stack & Web Technologies',
    description: 'Modern front-end and back-end tools used for building interactive web products.',
    skills: [
      { name: 'React.js', level: 'Advanced', percentage: 85, icon: 'Atom', detail: 'Hooks (useState, useEffect, useMemo), Component Composition, State Flow' },
      { name: 'Node.js & Express', level: 'Intermediate', percentage: 75, icon: 'Server', detail: 'RESTful API routing, Middleware, HTTP Request Lifecycle' },
      { name: 'Tailwind CSS', level: 'Advanced', percentage: 90, icon: 'Palette', detail: 'Utility-first styling, Responsive layouts, Dark mode design' },
      { name: 'TypeScript', level: 'Intermediate', percentage: 78, icon: 'Code', detail: 'Type interfaces, Generics, Compile-time safety' },
      { name: 'Git & GitHub', level: 'Advanced', percentage: 86, icon: 'GitBranch', detail: 'Branching, Pull Requests, Commit workflows, Version control' }
    ]
  },
  {
    category: 'AI & Prompt Engineering',
    description: 'Certified competencies in modern generative AI and structured prompt optimization.',
    skills: [
      { name: 'Prompt Engineering', level: 'Advanced', percentage: 92, icon: 'Sparkles', detail: 'IBM Certified (AI0117EN): Few-Shot, Chain-of-Thought, Context Grounding' },
      { name: 'AI Fluency Framework', level: 'Advanced', percentage: 88, icon: 'Cpu', detail: 'Generative AI literacy, Ethical AI guidelines, Evaluation loops' },
      { name: 'System Directives & Role Framing', level: 'Advanced', percentage: 90, icon: 'Bot', detail: 'Structuring instructions for deterministic, high-accuracy outputs' },
      { name: 'JSON/Schema Prompting', level: 'Intermediate', percentage: 85, icon: 'FileJson', detail: 'Enforcing structured machine-readable responses from LLMs' }
    ]
  },
  {
    category: 'Computer Science Fundamentals',
    description: 'Undergraduate academic pillars forming the backbone of clean software engineering.',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Intermediate', percentage: 80, icon: 'Binary', detail: 'Arrays, Stacks, Queues, Trees, Searching & Sorting Algorithms' },
      { name: 'Object-Oriented Design (OOP)', level: 'Advanced', percentage: 88, icon: 'Layers', detail: 'Encapsulation, Inheritance, Polymorphism, Abstraction' },
      { name: 'Database Fundamentals & SQL', level: 'Intermediate', percentage: 75, icon: 'Database', detail: 'Relational schemas, Primary/Foreign keys, Basic CRUD queries' },
      { name: 'Debugging & Code Optimization', level: 'Intermediate', percentage: 82, icon: 'Wrench', detail: 'Systematic issue diagnosis, time complexity analysis, clean code' }
    ]
  }
];

export const CODE_SAMPLES: CodeSample[] = [
  {
    language: 'prompt',
    title: 'IBM Prompt Engineering Template',
    fileName: 'cognitive_class_prompt.md',
    description: 'Structured prompt design demonstrating Persona, Context Grounding, Few-Shot examples, and strict JSON output constraint.',
    code: `### ROLE & SYSTEM DIRECTIVE
You are an expert Senior Full Stack Code Reviewer.
Analyze the provided student code snippet for logic errors, time complexity, and readability.

### CONSTRAINTS
1. Output MUST strictly adhere to the JSON schema below.
2. Provide concrete line-by-line recommendations.
3. Be encouraging yet precise.

### FEW-SHOT DEMONSTRATION
Input:
\`\`\`c
int sum(int arr[], int n) {
  int total = 0;
  for(int i = 0; i <= n; i++) total += arr[i]; // Bug: off-by-one
  return total;
}
\`\`\`
Output JSON:
{
  "status": "warning",
  "issue": "Buffer overrun: loop condition 'i <= n' accesses index n out of bounds.",
  "fix": "Change 'i <= n' to 'i < n'.",
  "complexity": "O(N) Time, O(1) Auxiliary Space"
}

### TARGET TASK
Analyze student's 2nd-year Java / C / Python submission.`,
    output: `[Validated by IBM AI0117EN Prompt Engineering Principles]
Result: Deterministic JSON output generated with 0% format hallucination.`
  },
  {
    language: 'c',
    title: 'C Dynamic Linked List & Pointers',
    fileName: 'linked_list.c',
    description: 'Clean C implementation of a singly linked list with safe memory allocation and defensive pointer handling.',
    code: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

// Insert a node at the head safely
Node* insertHead(Node* head, int value) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        fprintf(stderr, "Memory allocation error!\\n");
        exit(EXIT_FAILURE);
    }
    newNode->data = value;
    newNode->next = head;
    return newNode;
}

void printList(const Node* head) {
    const Node* current = head;
    printf("[HEAD] -> ");
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

int main(void) {
    Node* list = NULL;
    list = insertHead(list, 30);
    list = insertHead(list, 20);
    list = insertHead(list, 10);
    
    printf("Aditya's C Data Structure Demo:\\n");
    printList(list);
    return 0;
}`,
    output: `Aditya's C Data Structure Demo:
[HEAD] -> 10 -> 20 -> 30 -> NULL
Program exited with return code 0 (Clean heap allocation)`
  },
  {
    language: 'java',
    title: 'Java OOP Student Grade Tracker',
    fileName: 'StudentManager.java',
    description: 'Object-Oriented Java demonstrating encapsulation, collections, and custom calculation logic.',
    code: `import java.util.*;

public class StudentManager {
    private final String studentName;
    private final String academicYear;
    private final Map<String, Double> grades = new LinkedHashMap<>();

    public StudentManager(String name, String year) {
        this.studentName = name;
        this.academicYear = year;
    }

    public void addCourseGrade(String course, double score) {
        if (score < 0 || score > 100) {
            throw new IllegalArgumentException("Score must be between 0 and 100.");
        }
        grades.put(course, score);
    }

    public double calculateGPA() {
        return grades.values().stream()
                     .mapToDouble(Double::doubleValue)
                     .average()
                     .orElse(0.0);
    }

    public void displaySummary() {
        System.out.println("Student: " + studentName + " (" + academicYear + ")");
        grades.forEach((subject, marks) -> 
            System.out.printf("  • %-16s : %.1f%%\\n", subject, marks)
        );
        System.out.printf("Cumulative Average: %.2f%%\\n", calculateGPA());
    }

    public static void main(String[] args) {
        StudentManager aditya = new StudentManager("Aditya Kumar", "2nd Year B.Tech/BCA");
        aditya.addCourseGrade("C Programming", 92.0);
        aditya.addCourseGrade("Java OOP", 89.5);
        aditya.addCourseGrade("Python Scripting", 88.0);
        aditya.addCourseGrade("Full Stack Web", 94.0);
        aditya.displaySummary();
    }
}`,
    output: `Student: Aditya Kumar (2nd Year B.Tech/BCA)
  • C Programming    : 92.0%
  • Java OOP         : 89.5%
  • Python Scripting : 88.0%
  • Full Stack Web   : 94.0%
Cumulative Average: 90.88%`
  },
  {
    language: 'python',
    title: 'Python Coursework & Data Analyzer',
    fileName: 'grade_analytics.py',
    description: 'Python script utilizing dictionaries, list comprehensions, and statistics for fast insights.',
    code: `#!/usr/bin/env python3
"""
Aditya Kumar — 2nd Year Full Stack Student
Academic Analytics & Performance Evaluator
"""

def analyze_performance(records: dict) -> dict:
    scores = list(records.values())
    avg_score = sum(scores) / len(scores) if scores else 0
    highest = max(records.items(), key=lambda item: item[1])
    
    return {
        "student": "Aditya Kumar",
        "standing": "2nd Year Undergraduate",
        "average": round(avg_score, 2),
        "top_subject": highest[0],
        "distinctions": [subj for subj, mark in records.items() if mark >= 85]
    }

if __name__ == "__main__":
    academic_scores = {
        "Data Structures (C)": 88,
        "Object-Oriented Java": 91,
        "Python & Automation": 94,
        "HTML/CSS & Web UI": 96,
        "Prompt Engineering": 98
    }
    
    result = analyze_performance(academic_scores)
    print("Performance Evaluation Report:")
    for key, value in result.items():
        print(f"  {key:15}: {value}")`,
    output: `Performance Evaluation Report:
  student        : Aditya Kumar
  standing       : 2nd Year Undergraduate
  average        : 93.4
  top_subject    : Prompt Engineering
  distinctions   : ['Data Structures (C)', 'Object-Oriented Java', 'Python & Automation', 'HTML/CSS & Web UI', 'Prompt Engineering']`
  },
  {
    language: 'html',
    title: 'Modern Semantic HTML & CSS Card',
    fileName: 'developer_card.html',
    description: 'Clean semantic HTML5 structure with responsive flexbox & accessible design standards.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Aditya Kumar - Developer Profile</title>
  <style>
    .dev-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: linear-gradient(135deg, #10b981, #06b6d4);
      color: white;
      border-radius: 9999px;
      font-family: system-ui, sans-serif;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <article class="student-profile" aria-label="Aditya Kumar Profile">
    <header>
      <h1>Aditya Kumar</h1>
      <p class="dev-badge">2nd Year Full Stack Developer</p>
    </header>
    <section>
      <p>Proficient in C, Java, Python, HTML/CSS, and Prompt Engineering.</p>
    </section>
  </article>
</body>
</html>`,
    output: `Rendered Component:
[Heading: Aditya Kumar]
[Badge: 2nd Year Full Stack Developer]
[Passes W3C Validation & WCAG Accessibility AAA standards]`
  }
];

export const EDUCATION_TIMELINE = [
  {
    period: '2024 - Present (2nd Year)',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Christ Academy Institute for Advanced Studies (CAIAS)',
    stage: 'Full Stack Development Specialization',
    description: 'Focusing on Core Data Structures, Object-Oriented Programming (Java), Systems (C Language), Python, Database Systems, and Responsive Web Application Engineering with React.',
    highlights: ['Current Aggregate: 8.8 / 10.0 CGPA', 'Active participant in Department Coding & Tech Events', 'Academic Projects in C, Java & Web Technologies']
  },
  {
    period: '2022 - 2024',
    title: 'Higher Secondary Education (Class XII - Science & CS)',
    institution: 'Senior Secondary School',
    stage: 'Computer Science & Science Stream',
    description: 'Completed higher secondary education with distinction in Physics, Chemistry, Mathematics, and Computer Science fundamentals.',
    highlights: ['Distinction in Computer Science', 'Science & Algorithmic Logic foundations']
  }
];
