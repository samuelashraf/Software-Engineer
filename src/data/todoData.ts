/**
 * Data file containing structured To-Do tasks, categorized strictly from the user's transcript/document,
 * enriched with free resources, priority order, and execution milestones.
 */

export interface TodoItem {
  id: string;
  sectionId: string;
  title: string;
  description: string;
  priority: 'must' | 'should' | 'high';
  estimatedDuration: string;
  freeResources: {
    title: string;
    platform: string;
    url: string;
    badge?: string;
  }[];
}

export interface TodoSection {
  id: string;
  number: number;
  title: string;
  iconName: string;
  description: string;
  items: TodoItem[];
}

export interface LearningStep {
  stepNumber: number;
  stageName: string;
  duration: string;
  headline: string;
  objective: string;
  topicsToCover: string[];
  mandatoryFreeCourses: {
    name: string;
    instructor: string;
    platform: string;
    url: string;
  }[];
  expectedDeliverable: string;
}

export const TODO_SECTIONS: TodoSection[] = [
  {
    id: "sec-english",
    number: 1,
    title: "1. الإنجليزي التقني (Technical English)",
    iconName: "Languages",
    description: "البوابة الحقيقية للتعلم المستمر، مواكبة أحدث التوثيقات والمراجع العالمية والمحتوى المتقدم.",
    items: [
      {
        id: "task-eng-1",
        sectionId: "sec-english",
        title: "تخصيص وقت يومي منتظم لتحسين الإنجليزي التقني",
        description: "الاستماع والمشاهدة لبودكاست تقنية ومحاضرات برمجية باللغة الإنجليزية لمدة 30 دقيقة يومياً.",
        priority: "must",
        estimatedDuration: "مستمر (30 دقيقة يومياً)",
        freeResources: [
          {
            title: "قناة Hussein Nasser البودكاستية والتقنية (شرح معمق بالإنجليزية)",
            platform: "YouTube",
            url: "https://www.youtube.com/@hnasr"
          },
          {
            title: "تطبيق Elsa Speak أو بودكاست Software Engineering Radio",
            platform: "Podcast / Free",
            url: "https://www.se-radio.net/"
          }
        ]
      },
      {
        id: "task-eng-2",
        sectionId: "sec-english",
        title: "التدرب على قراءة الـ Documentation وفهم المصطلحات التقنية",
        description: "قراءة التوثيق الرسمي للأدوات مباشرة باللغة الإنجليزية (مثل MDN, Docker Docs, PostgreSQL Docs) دون ترجمة حرفية فورية.",
        priority: "must",
        estimatedDuration: "أسبوعين تدريب مكثف",
        freeResources: [
          {
            title: "قاموس المصطلحات البرمجية التقنية (freeCodeCamp Tech Dictionary)",
            platform: "freeCodeCamp",
            url: "https://www.freecodecamp.org/news/technical-terms-and-jargon-guide/"
          },
          {
            title: "PostgreSQL Official Documentation",
            platform: "Official Docs",
            url: "https://www.postgresql.org/docs/"
          }
        ]
      }
    ]
  },
  {
    id: "sec-core-skills",
    number: 2,
    title: "2. المهارات الأساسية الخمس (The 5 Core Skills)",
    iconName: "ShieldAlert",
    description: "المهارات الحاكمة التي تصنع الفارق بين المبرمج الروتيني ومهندس البرمجيات الناضج.",
    items: [
      {
        id: "task-skill-1",
        sectionId: "sec-core-skills",
        title: "التدرب على اتخاذ القرار وتحليل المقايضات (Trade-offs)",
        description: "تعلم أساليب المفاضلة بين الحلول التقنية (Pros & Cons)، كتابة Architecture Decision Records (ADRs)، والتعلم من الأخطاء.",
        priority: "must",
        estimatedDuration: "أسبوعان",
        freeResources: [
          {
            title: "دليل كتابة وثائق القرارات المعمارية (ADR - Architectural Decision Records)",
            platform: "GitHub Free Guide",
            url: "https://adr.github.io/"
          },
          {
            title: "Engineering Trade-offs & System Decisions (Martin Fowler)",
            platform: "Martin Fowler Articles",
            url: "https://martinfowler.com/architecture/"
          }
        ]
      },
      {
        id: "task-skill-2",
        sectionId: "sec-core-skills",
        title: "تعلم التصميم التقني (Technical Design)",
        description: "فهم السياق الهندسي وتصميم الوحدات البرمجية والواجهات قبل الشروع في كتابة الكود.",
        priority: "must",
        estimatedDuration: "3 أسابيع",
        freeResources: [
          {
            title: "Concept && Coding: Low-Level Design (LLD) Complete Playlist",
            platform: "YouTube Free",
            url: "https://www.youtube.com/@ConceptandCoding/playlists"
          },
          {
            title: "Design Patterns Video Series (freeCodeCamp)",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=tv-_1er1mWI"
          }
        ]
      },
      {
        id: "task-skill-3",
        sectionId: "sec-core-skills",
        title: "تحسين التخطيط والتقدير وإدارة التسليم والـ Version Management",
        description: "تعلم تقنيات تقدير المهام بدقة (Estimation)، تقسيم الأعمال الكبيرة، Git branching models، وإدارة الإصدارات (SemVer).",
        priority: "must",
        estimatedDuration: "أسبوعان",
        freeResources: [
          {
            title: "Git & Version Control Mastery Course (freeCodeCamp)",
            platform: "YouTube Free",
            url: "https://www.youtube.com/watch?v=RGOj5yH7evk"
          },
          {
            title: "Software Estimation Best Practices (Atlassian Guide)",
            platform: "Atlassian Agile Free",
            url: "https://www.atlassian.com/agile/project-management/estimation"
          }
        ]
      },
      {
        id: "task-skill-4",
        sectionId: "sec-core-skills",
        title: "فهم البيزنس والقيمة التي يقدّمها المنتج (Added Value)",
        description: "فهم نموذج عمل الشركة، مؤشرات الأداء (KPIs)، والتحول إلى عقلية الـ Product Engineer بدلاً من مبرمج ينفذ أوامر.",
        priority: "must",
        estimatedDuration: "مستمر مع كل مشروع",
        freeResources: [
          {
            title: "The Product-Minded Software Engineer (Gergely Orosz - The Pragmatic Engineer)",
            platform: "Free Article",
            url: "https://blog.pragmaticengineer.com/the-product-minded-engineer/"
          },
          {
            title: "Product Thinking for Developers (ThoughtWorks)",
            platform: "ThoughtWorks Insights",
            url: "https://www.thoughtworks.com/insights/blog"
          }
        ]
      },
      {
        id: "task-skill-5",
        sectionId: "sec-core-skills",
        title: "تطوير مهارة استشعار واكتشاف المشكلات والتواصل مع البشر",
        description: "تدريب العين على التقاط المعضلات التقنية والبيزنس قبل تفاقمها، والتواصل الاحترافي مع الفريق والمديرين والعملاء.",
        priority: "must",
        estimatedDuration: "مستمر",
        freeResources: [
          {
            title: "Soft Skills & Communication for Software Engineers (freeCodeCamp)",
            platform: "freeCodeCamp Guide",
            url: "https://www.freecodecamp.org/news/soft-skills-for-developers/"
          },
          {
            title: "How to Communicate with Stakeholders and Clients",
            platform: "Dev.to Career Guides",
            url: "https://dev.to/t/communication"
          }
        ]
      }
    ]
  },
  {
    id: "sec-ai-usage",
    number: 3,
    title: "3. استخدام الذكاء الاصطناعي (AI & Quality)",
    iconName: "Cpu",
    description: "توظيف أدوات الـ AI لتسريع التسليم وخفض التكلفة مع فرض بوابات جودة صارمة وقراءة الكود بعمق.",
    items: [
      {
        id: "task-ai-1",
        sectionId: "sec-ai-usage",
        title: "استخدام أدوات AI لتسريع التسليم وتقليل التكلفة",
        description: "توظيف نماذج الـ AI في كتابة الـ Boilerplate، إعداد الاختبارات، ومقارنة الحلول للوصول لحل متكامل لحالة عمل (Business Case).",
        priority: "high",
        estimatedDuration: "أسبوع",
        freeResources: [
          {
            title: "Prompt Engineering & AI Coding Tools Guide",
            platform: "Google Cloud / DeepLearning.AI Free",
            url: "https://www.deeplearning.ai/short-courses/"
          }
        ]
      },
      {
        id: "task-ai-2",
        sectionId: "sec-ai-usage",
        title: "مراجعة مخرجات AI وعدم الاعتماد عليها من غير تحقق",
        description: "التحقق المنهجي من صحة منطق الكود المُولَّد ومطابقته لمتطلبات الأمان والأداء وعدم وجود ثغرات أمنية خفية.",
        priority: "must",
        estimatedDuration: "مستمر",
        freeResources: [
          {
            title: "OWASP Top 10 Security Vulnerabilities in Code",
            platform: "OWASP Foundation Free",
            url: "https://owasp.org/www-project-top-ten/"
          }
        ]
      },
      {
        id: "task-ai-3",
        sectionId: "sec-ai-usage",
        title: "تطبيق بوابات الجودة (Quality Gates) ومراجعة الكود",
        description: "إعداد Linters, Static Analysis, SonarQube, والتأكد من تغطية الاختبارات الآلية للكود المولد.",
        priority: "must",
        estimatedDuration: "أسبوع",
        freeResources: [
          {
            title: "Code Review & Quality Gates Best Practices (Google Engineering Practices)",
            platform: "Google GitHub Open Source",
            url: "https://google.github.io/eng-practices/"
          }
        ]
      },
      {
        id: "task-ai-4",
        sectionId: "sec-ai-usage",
        title: "التدرب على قراءة الكود وفهمه بسرعة ونقد",
        description: "تخصيص وقت لقراءة أكواد المشاريع المفتوحة المصدر المشهورة وتدريب العين على النقد البناء للكود.",
        priority: "must",
        estimatedDuration: "ساعتان أسبوعياً",
        freeResources: [
          {
            title: "Reading Open Source Code for Fun and Profit",
            platform: "GitHub Explore",
            url: "https://github.com/trending"
          }
        ]
      }
    ]
  },
  {
    id: "sec-layers",
    number: 4,
    title: "4. الطبقات الهندسية الست (The 6 Engineering Layers)",
    iconName: "Layers",
    description: "الأساس الهندسي الرصين الذي لا يتغير مع تغير الستاكات.",
    items: [
      {
        id: "task-layer-1",
        sectionId: "sec-layers",
        title: "فهم Presentation و API و Interfaces و Dependencies",
        description: "تصميم واجهات الـ RESTful و gRPC، إدارة الاعتماديات (Dependency Injection)، وفصل الاهتمامات.",
        priority: "must",
        estimatedDuration: "أسبوعان",
        freeResources: [
          {
            title: "API Design Patterns & RESTful API Best Practices",
            platform: "Microsoft Learn Free",
            url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design"
          },
          {
            title: "gRPC and Protocol Buffers Crash Course (Hussein Nasser)",
            platform: "YouTube Free",
            url: "https://www.youtube.com/watch?v=gn7VnU8mHio"
          }
        ]
      },
      {
        id: "task-layer-2",
        sectionId: "sec-layers",
        title: "دراسة Low-Level Design و Software Architecture و Refactoring",
        description: "مبادئ SOLID، معمارية Clean & Hexagonal، وأنماط التصميم (Design Patterns)، وتقنيات إعادة الهيكلة.",
        priority: "must",
        estimatedDuration: "4 أسابيع",
        freeResources: [
          {
            title: "Refactoring.guru — الدليل الكامل لمكافحة Code Smells وتقنيات Refactoring",
            platform: "Web Free Reference",
            url: "https://refactoring.guru/refactoring"
          },
          {
            title: "Clean Architecture Principles by Uncle Bob (Talk & Guide)",
            platform: "YouTube Free",
            url: "https://www.youtube.com/watch?v=o_TH-Y78tt4"
          }
        ]
      },
      {
        id: "task-layer-3",
        sectionId: "sec-layers",
        title: "دراسة High-Level Design و System Design",
        description: "موازنة الأحمال (Load Balancers)، الـ Caching، قواعد البيانات الموزعة، تجزئة البيانات (Sharding)، والـ Microservices.",
        priority: "must",
        estimatedDuration: "4 أسابيع",
        freeResources: [
          {
            title: "ByteByteGo Free System Design 101 (Illustrated)",
            platform: "GitHub Free / Newsletter",
            url: "https://github.com/ByteByteGoHq/system-design-101"
          },
          {
            title: "HelloInterview System Design Interactive Guides",
            platform: "HelloInterview Free Track",
            url: "https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction"
          },
          {
            title: "Concept && Coding: System Design (HLD) Playlist (Shrayansh Jain)",
            platform: "YouTube Free",
            url: "https://www.youtube.com/@ConceptandCoding"
          }
        ]
      },
      {
        id: "task-layer-4",
        sectionId: "sec-layers",
        title: "فهم Testing و Quality و Testing Pyramid",
        description: "هرم الاختبار (Unit, Integration, E2E Tests)، الـ Mocks و Stubs، واختبارات الأداء و الـ Load Testing.",
        priority: "must",
        estimatedDuration: "أسبوعان",
        freeResources: [
          {
            title: "The Practical Test Pyramid (Ham Vocke - Martin Fowler's Site)",
            platform: "Martin Fowler Free Article",
            url: "https://martinfowler.com/articles/practical-test-pyramid.html"
          },
          {
            title: "Unit Testing & Integration Testing Masterclass (freeCodeCamp)",
            platform: "YouTube Free",
            url: "https://www.youtube.com/watch?v=Jv2uxzhPFl4"
          }
        ]
      },
      {
        id: "task-layer-5",
        sectionId: "sec-layers",
        title: "دراسة Data Modeling و ERD و Database Design ومحركات التخزين",
        description: "رسم الـ ERD، التطبيع (Normalization/Denormalization)، فهارس B-Trees، والـ ACID transactions.",
        priority: "must",
        estimatedDuration: "3 أسابيع",
        freeResources: [
          {
            title: "قناة Tech Vault with Amr Elhelw (شروحات قواعد بيانات وبنية التخزين والفهارس بالعربي مجاناً)",
            platform: "YouTube Free",
            url: "https://www.youtube.com/@techvault-amrelhelw"
          },
          {
            title: "Hussein Nasser: Database Engineering YouTube Playlist",
            platform: "YouTube Free",
            url: "https://backend.husseinnasser.com"
          }
        ]
      },
      {
        id: "task-layer-6",
        sectionId: "sec-layers",
        title: "التدرب على اختيار التقنية المناسبة والتعامل كمهندس شامل (Generalist)",
        description: "توسيع النطاق المعرفي عبر تعلم تكنولوجيز متنوعة ومعرفة نقاط قوة وضعف كل تقنية لاختيار الحل الأنسب.",
        priority: "high",
        estimatedDuration: "مستمر",
        freeResources: [
          {
            title: "Technology Radar (ThoughtWorks — تحديثات ربع سنوية لأفضل التقنيات)",
            platform: "ThoughtWorks Free",
            url: "https://www.thoughtworks.com/radar"
          }
        ]
      }
    ]
  },
  {
    id: "sec-courses",
    number: 5,
    title: "5. المصادر التقنية المذكورة في التسجيل وبدائلها المجانية",
    iconName: "GraduationCap",
    description: "الدورات المحددة بالاسم في التسجيل مع سلاسلها المجانية بالكامل على يوتيوب ومنصات التعلم.",
    items: [
      {
        id: "task-course-1",
        sectionId: "sec-courses",
        title: "Hussein Nasser: Fundamentals of Backend Engineering",
        description: "بروتوكولات الاتصال (HTTP/1/2/3, WebSockets, gRPC, TCP/IP)، الخوادم ونماذج الاتصال.",
        priority: "must",
        estimatedDuration: "3 أسابيع",
        freeResources: [
          {
            title: "سلسلة الباك إند المجانية الكاملة لـ Hussein Nasser (قوائم تشغيل مرتبة)",
            platform: "YouTube Free / backend.husseinnasser.com",
            url: "https://backend.husseinnasser.com"
          },
          {
            title: "Backend Engineering Roadmap (Roadmap.sh)",
            platform: "Roadmap.sh Free",
            url: "https://roadmap.sh/backend"
          }
        ]
      },
      {
        id: "task-course-2",
        sectionId: "sec-courses",
        title: "Hussein Nasser: Fundamentals of Database Engineering",
        description: "آلية عمل قواعد البيانات من الداخل، محركات التخزين، فهارس B-Trees، التوافقية ومستويات العزل.",
        priority: "must",
        estimatedDuration: "3 أسابيع",
        freeResources: [
          {
            title: "Hussein Nasser Database Internals & Engineering Free Playlist",
            platform: "YouTube Free",
            url: "https://www.youtube.com/playlist?list=PLQnljOFTspQUNn640FLFxZchqcJYTeAkq"
          }
        ]
      },
      {
        id: "task-course-3",
        sectionId: "sec-courses",
        title: "Hussein Nasser: Fundamentals of Operating Systems",
        description: "العمليات (Processes)، الخيوط (Threads)، إدارة الذاكرة الظاهرية (Paging)، ونظام الملفات والـ I/O.",
        priority: "must",
        estimatedDuration: "أسبوعان",
        freeResources: [
          {
            title: "Operating Systems Principles Playlist (Hussein Nasser)",
            platform: "YouTube Free",
            url: "https://www.youtube.com/playlist?list=PLQnljOFTspQU1vGZ0UqPbhR2VlK5e5J-P"
          },
          {
            title: "Operating Systems: Three Easy Pieces (الكتاب المجاني الأفضل عالمياً OSTEP)",
            platform: "Free Online Book",
            url: "https://pages.cs.wisc.edu/~remzi/OSTEP/"
          }
        ]
      },
      {
        id: "task-course-4",
        sectionId: "sec-courses",
        title: "Software Debugging (كورس اختياري مفيد)",
        description: "التحقيق في المشاكل المعقدة في الإنتاج، الـ Traces، والـ Profiling ومشاكل تسريب الذاكرة.",
        priority: "should",
        estimatedDuration: "أسبوع",
        freeResources: [
          {
            title: "Production Debugging & Troubleshooting Guide (Hussein Nasser & Julia Evans)",
            platform: "YouTube / Free Zines",
            url: "https://wizardzines.com/"
          }
        ]
      },
      {
        id: "task-course-5",
        sectionId: "sec-courses",
        title: "Hassan Ibrahim: Software Architecture Fundamentals",
        description: "الأنماط المعمارية (N-Tier, Hexagonal, Clean Architecture)، مبادئ التصميم والمفاضلات.",
        priority: "must",
        estimatedDuration: "3 أسابيع",
        freeResources: [
          {
            title: "محاضرات وندوات المهندس حسن إبراهيم حول Software Architecture & DDD",
            platform: "YouTube Free",
            url: "https://www.youtube.com/results?search_query=Hassan+Ibrahim+Software+Architecture"
          },
          {
            title: "Software Architecture Patterns (Free O'Reilly Book by Mark Richards)",
            platform: "Free PDF Book",
            url: "https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/"
          }
        ]
      },
      {
        id: "task-course-6",
        sectionId: "sec-courses",
        title: "Hassan Ibrahim: Docker & Kubernetes (DevOps Basics)",
        description: "بناء الحاويات، كتابة ملفات Dockerfile، إدارة الـ Pods والـ Deployments على Kubernetes.",
        priority: "must",
        estimatedDuration: "3 أسابيع",
        freeResources: [
          {
            title: "Docker & Kubernetes Full Free Course for Beginners (TechWorld with Nana)",
            platform: "YouTube Free (freeCodeCamp)",
            url: "https://www.youtube.com/watch?v=d6WC5n9G_sM"
          },
          {
            title: "Kubernetes The Hard Way (Kelsey Hightower)",
            platform: "GitHub Free",
            url: "https://github.com/kelseyhightower/kubernetes-the-hard-way"
          }
        ]
      },
      {
        id: "task-course-7",
        sectionId: "sec-courses",
        title: "Hassan Ibrahim: Microservices Architecture (System Design Focus)",
        description: "فهم الميكروسيرفسيز ليس لتطبيقها عشوائياً، بل لفهم الأنظمة الموزعة والاتصالات غير المتزامنة والـ Saga Pattern.",
        priority: "must",
        estimatedDuration: "3 أسابيع",
        freeResources: [
          {
            title: "Microservices Design Patterns (Chris Richardson - Microservices.io)",
            platform: "Free Guide",
            url: "https://microservices.io/patterns/index.html"
          },
          {
            title: "Microservices Architecture Full Course (freeCodeCamp)",
            platform: "YouTube Free",
            url: "https://www.youtube.com/watch?v=1xo-0gCVhTU"
          }
        ]
      },
      {
        id: "task-course-8",
        sectionId: "sec-courses",
        title: "Hassan Ibrahim: Refactoring Code",
        description: "إعادة هيكلة الأكواد القديمة، التخلص من الـ Code Smells، وجعل الكود نظيفاً وسهل الصيانة.",
        priority: "must",
        estimatedDuration: "أسبوعان",
        freeResources: [
          {
            title: "Refactoring Catalog (Martin Fowler)",
            platform: "Official Free Catalog",
            url: "https://refactoring.com/catalog/"
          },
          {
            title: "Refactoring Guru Interactive Guide",
            platform: "Web Free",
            url: "https://refactoring.guru/refactoring"
          }
        ]
      },
      {
        id: "task-course-9",
        sectionId: "sec-courses",
        title: "عمرو الحلو: هندسة قواعد البيانات (المحتوى العربي)",
        description: "سلسلة متكاملة باللغة العربية تشرح ملفات التخزين، الفهارس، والصفحات وتقسيم البيانات.",
        priority: "must",
        estimatedDuration: "3 أسابيع",
        freeResources: [
          {
            title: "قناة Tech Vault with Amr Elhelw (سلاسل قواعد البيانات المجانية كاملة)",
            platform: "YouTube Free",
            url: "https://www.youtube.com/@techvault-amrelhelw"
          }
        ]
      },
      {
        id: "task-course-10",
        sectionId: "sec-courses",
        title: "مصادر تصميم الأنظمة: Hello Interview و ByteByteGo و Concept && Coding",
        description: "تعلم تصميم الأنظمة الكبيرة عبر دراسات حالة ورسومات توضيحية ومفاضلات معمارية.",
        priority: "must",
        estimatedDuration: "4 أسابيع",
        freeResources: [
          {
            title: "ByteByteGo Free System Design Newsletter & GitHub 101",
            platform: "GitHub & Newsletter",
            url: "https://github.com/ByteByteGoHq/system-design-101"
          },
          {
            title: "HelloInterview Free Learn Track",
            platform: "HelloInterview Free",
            url: "https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction"
          },
          {
            title: "قناة Concept && Coding (Shrayansh Jain — تغطية شاملة لـ LLD و HLD)",
            platform: "YouTube Free",
            url: "https://www.youtube.com/@ConceptandCoding"
          }
        ]
      }
    ]
  },
  {
    id: "sec-business-product",
    number: 6,
    title: "6. فهم المنتج وإدارة العمل (Product & Agile Management)",
    iconName: "Briefcase",
    description: "التوازن المطلوب مع الجانب التقني لفهم لغة الأعمال والمنتج ودورات التطوير الرشيقة.",
    items: [
      {
        id: "task-biz-1",
        sectionId: "sec-business-product",
        title: "تعلم Agile و Project Management",
        description: "فهم فلسفة أجايل، سكرام، كانبان، إدارة السبرنتات، والتخطيط الرشيق مع الفريق.",
        priority: "must",
        estimatedDuration: "أسبوعان",
        freeResources: [
          {
            title: "دليل سكرام الرسمي (Scrum Guide Official — متاح مجاناً بالعربية والإنجليزية)",
            platform: "Scrum.org Free PDF",
            url: "https://scrumguides.org/download-guide.html"
          },
          {
            title: "Agile Project Management Course (freeCodeCamp)",
            platform: "YouTube Free",
            url: "https://www.youtube.com/watch?v=vsnOug8iZ_Y"
          }
        ]
      },
      {
        id: "task-biz-2",
        sectionId: "sec-business-product",
        title: "فهم Product Design و Product Management",
        description: "قراءة مدخل لإدارة وتصميم المنتجات لمعرفة كيف يفكر مدير المنتج وتحديد الأولويات ومؤشرات الأداء.",
        priority: "should",
        estimatedDuration: "أسبوعان",
        freeResources: [
          {
            title: "Product Management for Beginners (Product School Guide)",
            platform: "Product School Free",
            url: "https://productschool.com/blog"
          },
          {
            title: "Marty Cagan Articles on Product Teams & Tech Alignment",
            platform: "Silicon Valley Product Group (SVPG) Free",
            url: "https://www.svpg.com/articles/"
          }
        ]
      },
      {
        id: "task-biz-3",
        sectionId: "sec-business-product",
        title: "فهم قطاع العمل وسياق البيزنس (Domain & Business Context)",
        description: "التعمق في سياق المجال الذي تعمل به حالياً (Fintech, Healthtech, E-commerce, Edtech) لفهم المنطق التجاري للمشروع.",
        priority: "must",
        estimatedDuration: "مستمر",
        freeResources: [
          {
            title: "Domain-Driven Design (DDD) Fundamentals Overview",
            platform: "Microsoft Learn Free",
            url: "https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice"
          }
        ]
      }
    ]
  },
  {
    id: "sec-execution",
    number: 7,
    title: "7. التطبيق العملي والقاعدة الذهبية (90-Day Practice)",
    iconName: "Zap",
    description: "تحويل المعرفة إلى مهارة عبر إنتاج مخرجات ملموسة (Output) كل ربع سنة.",
    items: [
      {
        id: "task-exec-1",
        sectionId: "sec-execution",
        title: "اختيار تكنولوجيا جديدة كل 90 يوماً (كل 3 شهور)",
        description: "الالتزام بتعلم أداة أو تكنولوجيا جديدة كل ربع سنة (قاعدة بيانات نوعية، Message Queue، أداة DevOps، لغة جديدة).",
        priority: "must",
        estimatedDuration: "ربع سنوي (مستمر)",
        freeResources: [
          {
            title: "خارطة طريق المطورين التفاعلية (Roadmap.sh - Best Tech Roadmaps)",
            platform: "Roadmap.sh Free",
            url: "https://roadmap.sh"
          }
        ]
      },
      {
        id: "task-exec-2",
        sectionId: "sec-execution",
        title: "تنفيذ مشروع عملي ملموس مع كل تكنولوجيا جديدة (Real Output)",
        description: "بناء ونشر مشروع تطبيقي حقيقي يثبت قدرتك على توظيف التقنية وحل مشكلة واقعية.",
        priority: "must",
        estimatedDuration: "شهر لكل مشروع",
        freeResources: [
          {
            title: "Build Your Own X (مكتبة مفتوحة المصدر لبرمجة مشاريع من الصفر)",
            platform: "GitHub Free",
            url: "https://github.com/codecrafters-io/build-your-own-x"
          }
        ]
      },
      {
        id: "task-exec-3",
        sectionId: "sec-execution",
        title: "ربط المعرفة النظرية بالمهارة والتطبيق الفعلي",
        description: "عدم الاكتفاء بمشاهدة الكورسات، بل كتابة الكود واختبار الفرضيات وقياس الأداء تحت الضغط.",
        priority: "must",
        estimatedDuration: "مستمر",
        freeResources: [
          {
            title: "Katas & Architecture Katas Practice (Ted Neward Katas)",
            platform: "GitHub Free",
            url: "https://nealford.com/katas/"
          }
        ]
      }
    ]
  },
  {
    id: "sec-growth",
    number: 8,
    title: "8. طريقة التطور ومثلث المقدرة (Knowledge - Skill - Mental Model)",
    iconName: "Brain",
    description: "بناء النموذج الذهني السليم الذي يربط المعرفة بالمهارة ويدوم عبر الأجيال.",
    items: [
      {
        id: "task-grow-1",
        sectionId: "sec-growth",
        title: "تطوير المعرفة (Knowledge): القراءة والدراسة النظرية للأسس",
        description: "القراءة المنتظمة في كتب معمارية البرمجيات، قواعد البيانات، والأنظمة الموزعة.",
        priority: "must",
        estimatedDuration: "مستمر",
        freeResources: [
          {
            title: "Free Programming Books Collection (GitHub Library)",
            platform: "GitHub Free Books",
            url: "https://github.com/EbookFoundation/free-programming-books"
          }
        ]
      },
      {
        id: "task-grow-2",
        sectionId: "sec-growth",
        title: "تطوير المهارة (Skill): التدريب اليدوي على المشاكل والأكواد",
        description: "الممارسة المباشرة للـ Refactoring، حل أعطال حقيقية، واستخدام أدوات المراقبة واستكشاف الأخطاء.",
        priority: "must",
        estimatedDuration: "مستمر",
        freeResources: [
          {
            title: "Exercism — تدريب برمجيات متقدم مع مراجعات موجهين مجاناً",
            platform: "Exercism Free",
            url: "https://exercism.org/"
          }
        ]
      },
      {
        id: "task-grow-3",
        sectionId: "sec-growth",
        title: "تطوير النموذج الذهني (Attitude & Mental Models): عقلية المهندس الناضج",
        description: "تبني التواضع البرمجي، تقبل المراجعات والنقد، التفكير النقدي، وتحمل مسؤولية اتخاذ القرارات وحل المشاكل.",
        priority: "must",
        estimatedDuration: "أسلوب حياة مهني",
        freeResources: [
          {
            title: "Mental Models for Software Engineers (Farnam Street & Tech Articles)",
            platform: "FS Blog Free",
            url: "https://fs.blog/mental-models/"
          }
        ]
      }
    ]
  }
];

export const ORDERED_LEARNING_PATH: LearningStep[] = [
  {
    stepNumber: 1,
    stageName: "المرحلة الأولى: الأساس التكنيكال واللغوي (الشهر 1 - 2)",
    duration: "6 إلى 8 أسابيع",
    headline: "بناء الأساس التقني الصلب وإتقان اللغة والمفاهيم الجوهرية",
    objective: "التمكن من بروتوكولات الشبكات والباك إند، كيفية عمل قواعد البيانات من الداخل، وأنظمة التشغيل.",
    topicsToCover: [
      "تخصيص وقت يومي للإنجليزي التقني ومصطلحات الـ Documentation",
      "Fundamentals of Backend Engineering (بروتوكولات HTTP/2/3, gRPC, WebSockets, TCP/IP)",
      "Fundamentals of Database Engineering (محركات التخزين، فهارس B-Trees، وعزل المعاملات ACID)",
      "Fundamentals of Operating Systems (العمليات والخيوط والذاكرة الظاهرية ونظام الملفات)",
      "شروحات داتابيز عربي: قناة Tech Vault مع عمرو الحلو"
    ],
    mandatoryFreeCourses: [
      {
        name: "Hussein Nasser Backend & Database Free Playlists",
        instructor: "Hussein Nasser",
        platform: "YouTube (backend.husseinnasser.com)",
        url: "https://backend.husseinnasser.com"
      },
      {
        name: "سلسلة البنية الداخلية لقواعد البيانات والفهارس",
        instructor: "Amr Elhelw (Tech Vault)",
        platform: "YouTube",
        url: "https://www.youtube.com/@techvault-amrelhelw"
      },
      {
        name: "كتاب Operating Systems: Three Easy Pieces (OSTEP)",
        instructor: "Remzi & Andrea Arpaci-Dusseau",
        platform: "Free Book",
        url: "https://pages.cs.wisc.edu/~remzi/OSTEP/"
      }
    ],
    expectedDeliverable: "بناء خادم مصغر (Custom HTTP/TCP Server) مع قاعدة بيانات تجريبية واختبار استعلامات وفهارس B-Tree وقياس الأداء تحت الحمل."
  },
  {
    stepNumber: 2,
    stageName: "المرحلة الثانية: معمارية البرمجيات والكود والنشر (الشهر 3 - 4)",
    duration: "8 أسابيع",
    headline: "التحكم في جودة الكود، الأنماط المعمارية، وأساسيات الديف اوبس",
    objective: "إتقان الـ Low-Level Design (LLD)، تنظيف الكود بالـ Refactoring، وفهم الـ Docker و Kubernetes للنشر السحابي.",
    topicsToCover: [
      "مبادئ Clean Architecture و Hexagonal Architecture ومبادئ SOLID",
      "إعادة هيكلة الأكواد القديمة ومكافحة روائح الكود (Refactoring & Code Smells)",
      "بناء الحاويات بـ Docker والتشغيل على Kubernetes (DevOps Basics)",
      "هرم الاختبار (Testing Pyramid) وآليات الـ Quality Gates لمراجعة كود الـ AI",
      "تصميم واجهات الـ APIs والاعتماديات (Interfaces & Dependency Injection)"
    ],
    mandatoryFreeCourses: [
      {
        name: "Refactoring.guru — الدليل الشامل لـ Refactoring & Code Smells",
        instructor: "Alexander Shvets",
        platform: "Free Web",
        url: "https://refactoring.guru/refactoring"
      },
      {
        name: "Docker & Kubernetes Course for Beginners",
        instructor: "TechWorld with Nana (freeCodeCamp)",
        platform: "YouTube",
        url: "https://www.youtube.com/watch?v=d6WC5n9G_sM"
      },
      {
        name: "Low-Level Design (LLD) & Design Patterns Playlist",
        instructor: "Shrayansh Jain (Concept && Coding)",
        platform: "YouTube",
        url: "https://www.youtube.com/@ConceptandCoding"
      }
    ],
    expectedDeliverable: "إعادة هيكلة تطبيق قديم بالكامل بتطبيق Clean Architecture وإضافة تغطية اختبارات شاملة مع تشغيله داخل Docker Container على Kubernetes."
  },
  {
    stepNumber: 3,
    stageName: "المرحلة الثالثة: تصميم الأنظمة الموزعة (الشهر 5 - 6)",
    duration: "8 أسابيع",
    headline: "التصميم عالي المستوى (High-Level Design / System Design)",
    objective: "تصميم أنظمة ضخمة تتحمل ملايين المستخدمين، فهم الميكروسيرفسيز والاتصالات غير المتزامنة والمقايضات.",
    topicsToCover: [
      "Microservices Architecture (Saga Pattern, Event-Driven, Circuit Breaking)",
      "موازنة الأحمال والـ Caching (Redis) وشبكات توزيع المحتوى (CDN)",
      "تصميم أنظمة مشهورة (URL Shortener, Chat System, Rate Limiter, Notification Service)",
      "دراسة المقايضات (CAP Theorem, PACELC, Latency vs Throughput)"
    ],
    mandatoryFreeCourses: [
      {
        name: "ByteByteGo System Design 101 Guide",
        instructor: "Alex Xu",
        platform: "GitHub & Newsletter",
        url: "https://github.com/ByteByteGoHq/system-design-101"
      },
      {
        name: "HelloInterview System Design Interactive Guides",
        instructor: "HelloInterview",
        platform: "Free Learning Track",
        url: "https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction"
      },
      {
        name: "Concept && Coding: System Design (HLD) Series",
        instructor: "Shrayansh Jain",
        platform: "YouTube",
        url: "https://www.youtube.com/@ConceptandCoding"
      }
    ],
    expectedDeliverable: "رسم وكتابة وثيقة تصميم معماري كاملة (System Architecture Document) لنظام حقيقي مع تحليل Trade-offs واختيار التقنيات."
  },
  {
    stepNumber: 4,
    stageName: "المرحلة الرابعة: عقلية المنتج والبيزنس وقاعدة الـ 90 يوماً (مستمر)",
    duration: "مستمر وربع سنوي",
    headline: "التحول لـ Product Engineer وتبني خطة الـ 90 يوماً الذهبية",
    objective: "التحدث بلغة الأعمال، إدارة التسليم، والتواصل البشري الفعال، مع التوسع المستمر كمهندس شامل (Generalist).",
    topicsToCover: [
      "فلسفة Agile وسكرام وإدارة السبرنتات بدقة التقدير (Estimation)",
      "عقلية الـ Product Engineer والربط بين الكود ومؤشرات الأداء (KPIs/ROI)",
      "مهارات التواصل مع المديرين والعملاء وإدارة توقعات أصحاب المصلحة",
      "تطبيق قاعدة الـ 90 يوماً: تعلم أداة أو تكنولوجيا جديدة كل ربع سنة بمشروع ذو Output عملي"
    ],
    mandatoryFreeCourses: [
      {
        name: "دليل سكرام الرسمي (Scrum Guide Official)",
        instructor: "Ken Schwaber & Jeff Sutherland",
        platform: "Scrum.org Free PDF",
        url: "https://scrumguides.org/download-guide.html"
      },
      {
        name: "The Product-Minded Engineer Guide",
        instructor: "Gergely Orosz (The Pragmatic Engineer)",
        platform: "Free Tech Essay",
        url: "https://blog.pragmaticengineer.com/the-product-minded-engineer/"
      },
      {
        name: "Build Your Own X (مشاريع تطبيقية مفتوحة المصدر)",
        instructor: "CodeCrafters Community",
        platform: "GitHub Open Source",
        url: "https://github.com/codecrafters-io/build-your-own-x"
      }
    ],
    expectedDeliverable: "إطلاق مشروع متكامل (Live Project) كل 3 شهور يحل مشكلة مستخدم حقيقية مع قياس الأداء وتطبيق كل ما تم تعلمه."
  }
];
