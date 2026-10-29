import React, { useState } from 'react';
import { 
  GraduationCap, Search, ExternalLink, Check, Copy, 
  Sparkles, Youtube, BookOpen, Layers, ShieldCheck, 
  Flame, Globe, FolderGit2
} from 'lucide-react';

interface FreeResourceCard {
  id: string;
  category: 'hussein' | 'amr' | 'hassan_arch' | 'system_design' | 'business';
  categoryLabel: string;
  title: string;
  instructor: string;
  platform: string;
  isFullyFree: boolean;
  freeLabel: string;
  description: string;
  syllabus: string[];
  url: string;
}

export const FreeResourcesView: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'جميع المصادر المجانية' },
    { id: 'hussein', label: 'م. حسين ناصر (Hussein Nasser)' },
    { id: 'amr', label: 'م. عمرو الحلو (Tech Vault)' },
    { id: 'hassan_arch', label: 'المعمارية والديف اوبس (Architecture & DevOps)' },
    { id: 'system_design', label: 'تصميم الأنظمة (System Design)' },
    { id: 'business', label: 'البيزنس والمنتجات (Agile & Product)' },
  ];

  const freeResources: FreeResourceCard[] = [
    {
      id: "res-hn-backend",
      category: "hussein",
      categoryLabel: "باك إند وشبكات",
      title: "قوائم تشغيل هندسة الباك إند المجانية (Backend Engineering Playlists)",
      instructor: "Hussein Nasser (حسين ناصر)",
      platform: "YouTube (@hnasr) / backend.husseinnasser.com",
      isFullyFree: true,
      freeLabel: "مجاني بالكامل 100%",
      description: "سلسلة فيديوهات منظمة في 3 مستويات (Beginner, Intermediate, Advanced) تشرح بروتوكولات الاتصال HTTP/1/2/3، الـ WebSockets، الـ gRPC، الـ TCP/IP، الـ Reverse Proxies، والـ Load Balancing من الصفر حتى الاحتراف.",
      syllabus: [
        "Communication Protocols: HTTP/1.1 vs HTTP/2 vs HTTP/3 (QUIC)",
        "WebSockets, gRPC, and Long Polling deep dives",
        "TCP Three-way Handshake and Socket Programming",
        "Reverse Proxy (NGINX, Envoy, HAProxy) & Load Balancing algorithms"
      ],
      url: "https://backend.husseinnasser.com"
    },
    {
      id: "res-hn-db",
      category: "hussein",
      categoryLabel: "قواعد بيانات",
      title: "سلسلة هندسة قواعد البيانات من الداخل (Database Internals)",
      instructor: "Hussein Nasser (حسين ناصر)",
      platform: "YouTube (@hnasr)",
      isFullyFree: true,
      freeLabel: "مجاني بالكامل 100%",
      description: "شروحات تفصيلية لكيفية عمل قواعد البيانات على مستوى الهاردوير والقرص، محركات التخزين، فهارس B-Trees، والـ ACID transactions ومستويات العزل (Isolation Levels).",
      syllabus: [
        "How Database Indexes Work (B-Trees & Hash Indexes)",
        "Database Storage Engines & Page Layouts",
        "ACID Properties & Transaction Isolation Anomalies",
        "Database Partitioning, Sharding & Replication"
      ],
      url: "https://www.youtube.com/@hnasr"
    },
    {
      id: "res-hn-os",
      category: "hussein",
      categoryLabel: "أنظمة تشغيل",
      title: "مبادئ أنظمة التشغيل والـ Concurrency للمهندسين",
      instructor: "Hussein Nasser (حسين ناصر)",
      platform: "YouTube (@hnasr)",
      isFullyFree: true,
      freeLabel: "مجاني بالكامل 100%",
      description: "فهم العمليات (Processes)، الخيوط (Threads)، الذاكرة الظاهرية (Virtual Memory & Paging)، ونظام الملفات (File Systems & Page Cache) وتأثيرها على استهلاك موارد البرامج.",
      syllabus: [
        "Processes vs Threads & Context Switching",
        "Virtual Memory, Page Tables & TLB",
        "File Descriptors, Epoll, and Asynchronous I/O",
        "Memory Leaks & CPU Bottlenecks"
      ],
      url: "https://www.youtube.com/@hnasr"
    },
    {
      id: "res-amr-vault",
      category: "amr",
      categoryLabel: "قواعد بيانات بالعربي",
      title: "قناة Tech Vault: البنية الداخلية لقواعد البيانات والفهارس بالعربي",
      instructor: "Amr Elhelw (عمرو الحلو)",
      platform: "YouTube (@techvault-amrelhelw)",
      isFullyFree: true,
      freeLabel: "مجاني بالكامل 100% بالعربي",
      description: "المحتوى العربي الأفضل والأعمق لشرح محركات قواعد البيانات (Database Storage Pages & Slotted Pages)، فهارس B+ Trees، قواعد البيانات العمودية (Columnar Databases)، وتقنيات الـ Sharding.",
      syllabus: [
        "Database Storage: Pages, Slotted Pages & Heap Files",
        "Database Indexes: B-Trees, B+ Trees & Composite Indexes",
        "Row vs Column-Oriented Databases",
        "Data Partitioning, Sharding & Keys Strategy"
      ],
      url: "https://www.youtube.com/@techvault-amrelhelw"
    },
    {
      id: "res-refactoring-guru",
      category: "hassan_arch",
      categoryLabel: "تنظيف الكود ومعمارية",
      title: "Refactoring.guru — الدليل الكامل لمكافحة Code Smells وتقنيات Refactoring",
      instructor: "Alexander Shvets (Refactoring Guru)",
      platform: "Interactive Web Guide",
      isFullyFree: true,
      freeLabel: "دليل تفاعلي مجاني بالكامل",
      description: "المرجع العالمي الأكثر وضوحاً لتعلم كيفية تنظيف الكود، اكتشاف الـ Bloaters والـ Couplers، وتطبيق تقنيات إعادة الهيكلة دون كسر البرمجيات (التطبيق المباشر لنصيحة م. حسن إبراهيم).",
      syllabus: [
        "Catalog of 20+ Code Smells with code examples",
        "Composing Methods, Moving Features, Simplifying Conditionals",
        "Refactoring to Design Patterns",
        "Clean Code & Unit Testing prerequisites"
      ],
      url: "https://refactoring.guru/refactoring"
    },
    {
      id: "res-devops-nana",
      category: "hassan_arch",
      categoryLabel: "DevOps & Containers",
      title: "Docker & Kubernetes Full Masterclass Course for Beginners",
      instructor: "TechWorld with Nana (freeCodeCamp)",
      platform: "YouTube (freeCodeCamp)",
      isFullyFree: true,
      freeLabel: "كورس كامل مجاني (ساعات مكثفة)",
      description: "شرح شامل وعملي لأساسيات الـ DevOps، بناء الحاويات بـ Docker، الـ Images، والـ Volumes، وتشغيل وإدارة الـ Pods والـ Deployments والـ Services على Kubernetes.",
      syllabus: [
        "Docker Architecture, Containers, and Dockerfile Best Practices",
        "Docker Compose for Multi-Container Development",
        "Kubernetes Components: Pods, Services, Ingress, Deployments",
        "CI/CD deployment fundamentals for software engineers"
      ],
      url: "https://www.youtube.com/watch?v=d6WC5n9G_sM"
    },
    {
      id: "res-concept-coding",
      category: "system_design",
      categoryLabel: "تصميم النظم و LLD",
      title: "قناة Concept && Coding — Low-Level Design (LLD) & System Design",
      instructor: "Shrayansh Jain (Concept && Coding)",
      platform: "YouTube (@ConceptandCoding)",
      isFullyFree: true,
      freeLabel: "سلاسل مجانية بالكامل",
      description: "تغطية مذهلة وعملية لتطبيق مبادئ SOLID و Design Patterns وبناء أنظمة مشهورة (Tic-Tac-Toe, Parking Lot, Elevator System, Rate Limiter, Splitwise) مع كود تطبيقي كامل.",
      syllabus: [
        "Design Patterns (Factory, Observer, Strategy, Decorator, Adapter)",
        "Machine Coding & Low-Level Design Interviews",
        "High-Level Design of Distributed Systems",
        "Concurrency & Multi-Threading in Real Scenarios"
      ],
      url: "https://www.youtube.com/@ConceptandCoding"
    },
    {
      id: "res-bytebytego",
      category: "system_design",
      categoryLabel: "تصميم النظم (HLD)",
      title: "ByteByteGo System Design 101 & Visual Guides",
      instructor: "Alex Xu (ByteByteGo)",
      platform: "GitHub Open Source & Free Newsletter",
      isFullyFree: true,
      freeLabel: "مرجع بصري مجاني على GitHub",
      description: "المستودع الأكثر شهرة على غيت هاب لتبسيط هندسة الأنظمة الموزعة (Load Balancing, Caching, Sharding, Message Queues) برسوم بيانية واضحة وشروحات ملخصة.",
      syllabus: [
        "Distributed System Design 101 (Illustrations)",
        "Caching Strategies (Write-Through, Cache-Aside, Read-Through)",
        "Database Scaling: Master-Slave, Sharding, Federation",
        "Design YouTube, Netflix, Twitter, WhatsApp Architectures"
      ],
      url: "https://github.com/ByteByteGoHq/system-design-101"
    },
    {
      id: "res-hello-interview",
      category: "system_design",
      categoryLabel: "تصميم النظم (HLD)",
      title: "HelloInterview Free System Design Learn Track",
      instructor: "HelloInterview Team",
      platform: "Interactive Web Track",
      isFullyFree: true,
      freeLabel: "مسار تفاعلي مجاني 100%",
      description: "دليل حديث ممتاز يركز على صياغة المتطلبات الوظيفية وغير الوظيفية، حسابات التوسع، وإجراء المقايضات (Trade-offs) بدقة.",
      syllabus: [
        "System Design Framework in a Hurry",
        "Core Building Blocks: Caching, Queues, Databases",
        "Real Company System Design Breakdowns",
        "Step-by-Step Architecture Decision Guidelines"
      ],
      url: "https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction"
    },
    {
      id: "res-scrum-guide",
      category: "business",
      categoryLabel: "أجايل وإدارة مشاريع",
      title: "دليل سكرام الرسمي (The Official Scrum Guide)",
      instructor: "Ken Schwaber & Jeff Sutherland (مبتكرو سكرام)",
      platform: "Scrum.org Official (Free PDF)",
      isFullyFree: true,
      freeLabel: "الوثيقة الرسمية مجاناً بالعربية والإنجليزية",
      description: "المرجع الأساسي لفهم فلسفة أجايل وسكرام: الأدوار (Product Owner, Scrum Master, Developers)، الأحداث (Sprint Planning, Daily, Review, Retro)، والنواتج.",
      syllabus: [
        "Scrum Values & Empirical Process Control",
        "Sprint Execution & Velocity",
        "Backlog Refinement & Estimation",
        "Effective Team Communication"
      ],
      url: "https://scrumguides.org/download-guide.html"
    },
    {
      id: "res-product-engineer",
      category: "business",
      categoryLabel: "عقلية مهندس المنتجات",
      title: "The Product-Minded Software Engineer",
      instructor: "Gergely Orosz (The Pragmatic Engineer)",
      platform: "Free Essay & Article",
      isFullyFree: true,
      freeLabel: "مقال توجيهي مجاني بالكامل",
      description: "المقال الأكثر تأثيراً في سيليكون فالي لشرح كيفية تحول المبرمج إلى Product Engineer يفهم لغة الأعمال والمستخدمين وعائد الاستثمار (ROI).",
      syllabus: [
        "Characteristics of Product-Minded Engineers",
        "Speaking Business Language vs Pure Tech",
        "Prioritization based on User Impact",
        "Building High-Trust Relationships with Product Managers"
      ],
      url: "https://blog.pragmaticengineer.com/the-product-minded-engineer/"
    }
  ];

  const filtered = freeResources.filter(r => {
    const matchesCat = selectedCat === 'all' || r.category === selectedCat;
    const matchesSearch = 
      !searchQuery.trim() ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.syllabus.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleCopyLink = (res: FreeResourceCard) => {
    navigator.clipboard.writeText(res.url);
    setCopiedId(res.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Search and Category Filter */}
      <div className="bg-slate-900/90 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30 mb-2">
              <Globe className="w-3.5 h-3.5" />
              <span>نتائج البحث المعمق (Deep Research) — مراجع مجانية 100%</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              دليل الكورسات والمصادر المجانية المعتمدة
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              جميع المصادر المذكورة في التسجيل تم توفير روابطها وقوائم تشغيلها المجانية بالكامل على YouTube و GitHub و Web Guides.
            </p>
          </div>

          <div className="text-xs text-slate-400 bg-slate-950 px-3.5 py-2 rounded-2xl border border-slate-800 font-mono">
            {filtered.length} مورد مجاني متاح
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن كورس، محاضر، أو موضوع (مثال: حسين ناصر, Amr Elhelw, Docker, Refactoring, ByteByteGo)..."
            className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs border-t border-slate-800 pt-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all ${
                selectedCat === cat.id
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((res) => (
          <div
            key={res.id}
            className="bg-slate-900/80 p-6 rounded-3xl border border-slate-800 hover:border-slate-700 shadow-xl flex flex-col justify-between transition-all hover:-translate-y-0.5 group"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <Flame className="w-3 h-3" />
                  <span>{res.freeLabel}</span>
                </span>
                <span className="text-[11px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 font-mono">
                  {res.categoryLabel}
                </span>
              </div>

              {/* Title & Instructor */}
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-1 font-['Cairo']">
                {res.title}
              </h3>
              <p className="text-xs text-amber-400 font-medium mb-3">
                المحاضر / المصدر: {res.instructor} • <span className="text-slate-400 font-mono">{res.platform}</span>
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {res.description}
              </p>

              {/* Key Syllabus */}
              <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800/80 mb-4 space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 block mb-1">أبرز محتويات الكورس:</span>
                {res.syllabus.map((s, sIdx) => (
                  <div key={sIdx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => handleCopyLink(res)}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
                title="نسخ رابط المرجع"
              >
                {copiedId === res.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">تم النسخ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>نسخ الرابط</span>
                  </>
                )}
              </button>

              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95"
              >
                <span>فتح المحتوى المجاني الآن</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
