import React, { useState } from 'react';
import { 
  Network, Sparkles, ChevronRight, ChevronDown, ExternalLink, 
  Layers, Brain, GraduationCap, ShieldAlert, Zap, Compass, 
  Languages, Eye, BookOpen, CheckCircle, Maximize2, Minimize2
} from 'lucide-react';

interface MindNode {
  id: string;
  title: string;
  badge: string;
  color: string;
  summary: string;
  children?: {
    id: string;
    title: string;
    description: string;
    items?: string[];
  }[];
}

export const MindMapView: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('all');
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    'branch-1': true,
    'branch-2': true,
    'branch-3': true,
    'branch-4': true,
    'branch-5': true,
    'branch-6': true,
    'branch-7': true,
  });

  const mindMapData: MindNode[] = [
    {
      id: "branch-1",
      title: "1. الأساس اللغوي (Technical English)",
      badge: "البوابة الإجبارية",
      color: "from-blue-500/20 to-blue-600/10 border-blue-500/40 text-blue-400",
      summary: "اللغة الإنجليزية هي بوابة كل مادة تعليمية متقدمة ومستحدثة في عالم البرمجيات.",
      children: [
        {
          id: "node-1-1",
          title: "قراءة الـ Official Documentation مباشرة",
          description: "التوقف عن الاعتماد على الترجمات الفورية وقراءة توثيق أدواتك مباشرة بالإنجليزية."
        },
        {
          id: "node-1-2",
          title: "استيعاب المصطلحات التقنية العالمية",
          description: "فهم المفردات المعمارية الدقيقة (Concurrency, Latency, Sharding, Idempotency) دون التباس."
        }
      ]
    },
    {
      id: "branch-2",
      title: "2. الهوية والعقلية (Identity & Mindset)",
      badge: "تلاشي الـ Stack",
      color: "from-indigo-500/20 to-indigo-600/10 border-indigo-500/40 text-indigo-400",
      summary: "الـ AI أذاب الفروق بين أطر العمل ولغات البرمجة؛ لم يعد تعريفك كـ .NET أو Angular كافياً.",
      children: [
        {
          id: "node-2-1",
          title: "التحول إلى Product Engineer",
          description: "مهندس يفهم سياق البيزنس ويسلّم حلولاً تقدم قيمة تجارية حقيقية (Added Value)."
        },
        {
          id: "node-2-2",
          title: "عقلية المهندس الشامل (Generalist Mindset)",
          description: "امتلاك رؤية أفقية واسعة تمكنك من مقارنة الحلول واختيار التكنولوجيا الملائمة لكل مسألة."
        }
      ]
    },
    {
      id: "branch-3",
      title: "3. المهارات الأساسية الخمس (Core 5 Skills)",
      badge: "المهارات الحاكمة",
      color: "from-amber-500/20 to-amber-600/10 border-amber-500/40 text-amber-400",
      summary: "المهارات الإنسانية والتحليلية التي لا يستطيع الذكاء الاصطناعي استبدالها بل يحتاج إليها لتوجهه.",
      children: [
        {
          id: "node-3-1",
          title: "1. اتخاذ القرار والمقايضات (Decision Making & Trade-offs)",
          description: "الموازنة بين البدائل، دراسة Pros & Cons، وتوثيق القرارات المعمارية."
        },
        {
          id: "node-3-2",
          title: "2. التصميم التقني (Technical Design)",
          description: "تصميم بنية البرمجيات والواجهات والحدود المنطقية قبل التكويد."
        },
        {
          id: "node-3-3",
          title: "3. إدارة التسليم (Delivery & Version Management)",
          description: "دقة التقدير الزمني (Estimation)، الاعتمادية، والالتزام بالمواعيد وإدارة الإصدارات."
        },
        {
          id: "node-3-4",
          title: "4. فهم البيزنس وسياق المنتج (Business Context)",
          description: "معرفة نموذج ربح المشروع ومؤشرات الأداء والقيمة المضافة للعميل."
        },
        {
          id: "node-3-5",
          title: "5. استشعار المشكلات والتواصل البشري",
          description: "التقاط المشاكل مبكراً ومهارات التواصل الفعال مع الفريق والإدارة والعملاء."
        }
      ]
    },
    {
      id: "branch-4",
      title: "4. الطبقات الهندسية الست (The 6 Layers)",
      badge: "الأساس الهندسي",
      color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/40 text-emerald-400",
      summary: "طبقات هندسية متكاملة تصنع الحل البرمجي المتين من الواجهة وحتى محرك القرص.",
      children: [
        {
          id: "node-4-1",
          title: "L1: Presentation Layer & API Design",
          description: "تصميم واجهات الاستدعاء (REST, gRPC) وإدارة الاعتماديات (Dependencies)."
        },
        {
          id: "node-4-2",
          title: "L2: Low-Level Design (LLD) & Architecture",
          description: "مبادئ SOLID، معمارية Clean Architecture، وتنظيف الكود بالـ Refactoring."
        },
        {
          id: "node-4-3",
          title: "L3: High-Level Design (HLD) & System Design",
          description: "تصميم النظم الموزعة، موازنة الأحمال، الكاش، والـ Microservices."
        },
        {
          id: "node-4-4",
          title: "L4: Testing Pyramid & Quality Gates",
          description: "آليات الاختبارات المتدرجة لمراجعة ومراقبة كود الـ AI والتأكد من دقته."
        },
        {
          id: "node-4-5",
          title: "L5: Data Modeling & Database Internals",
          description: "رسم الـ ERD، فهارس B-Trees، محركات التخزين، وتوزيع البيانات."
        },
        {
          id: "node-4-6",
          title: "L6: اختيار التكنولوجيا المناسبة",
          description: "معرفة متى تختار كل تقنية بناءً على متطلبات الحمل والموثوقية."
        }
      ]
    },
    {
      id: "branch-5",
      title: "5. مثلث المقدرة الإنسانية (Ability Triangle)",
      badge: "معادلة التميز",
      color: "from-purple-500/20 to-purple-600/10 border-purple-500/40 text-purple-400",
      summary: "كيف تترابط المعرفة والمهارة تحت مظلة طريقة التفكير والنموذج الذهني.",
      children: [
        {
          id: "node-5-1",
          title: "المعرفة (Knowledge)",
          description: "المعلومات والنظريات المستقاة من قراءة الكتب والتوثيقات."
        },
        {
          id: "node-5-2",
          title: "المهارة (Skill)",
          description: "القدرة اليدوية العملية على التنفيذ والتطبيق وحل الأعطال."
        },
        {
          id: "node-5-3",
          title: "طريقة التفكير (Attitude & Mental Model)",
          description: "البوصلة الحاكمة التي تربط المعرفة بالمهارة، وهي الثابت الوحيد عبر العصور (Assembly -> C -> Java -> AI)."
        }
      ]
    },
    {
      id: "branch-6",
      title: "6. خارطة الكورسات والمصادر المجانية",
      badge: "المصادر المعتمدة",
      color: "from-rose-500/20 to-rose-600/10 border-rose-500/40 text-rose-400",
      summary: "أبرز المحاضرين والمراجع المذكورة في التسجيل وروابطها المجانية بالكامل.",
      children: [
        {
          id: "node-6-1",
          title: "سلاسل م. حسين ناصر (Hussein Nasser)",
          description: "قوائم تشغيل مجانية على يوتيوب: Backend Engineering, Databases, Operating Systems, Debugging."
        },
        {
          id: "node-6-2",
          title: "كورسات ومحاضرات م. حسن إبراهيم",
          description: "Software Architecture, Kubernetes & Docker, Microservices, Refactoring."
        },
        {
          id: "node-6-3",
          title: "محتوى قواعد البيانات بالعربي: م. عمرو الحلو",
          description: "قناة Tech Vault with Amr Elhelw (شروحات معمارية التخزين والفهارس)."
        },
        {
          id: "node-6-4",
          title: "تصميم النظم (System Design)",
          description: "ByteByteGo 101, HelloInterview Guides, وقناة Concept && Coding."
        },
        {
          id: "node-6-5",
          title: "إدارة المشاريع والبيزنس",
          description: "Scrum Guide Official, Atlassian Agile, ومقالات Product Thinking."
        }
      ]
    },
    {
      id: "branch-7",
      title: "7. التطبيق العملي والقاعدة الذهبية (90-Day Challenge)",
      badge: "الإنتاج الواقعي",
      color: "from-teal-500/20 to-teal-600/10 border-teal-500/40 text-teal-400",
      summary: "كل 3 شهور تكنولوجيا جديدة تنتج بها مشروعاً ذو أثر ومخرجات ملموسة (Output).",
      children: [
        {
          id: "node-7-1",
          title: "تكنولوجيا جديدة كل ربع سنة",
          description: "تجربة قواعد بيانات غير معتادة، Message Queues مثل Kafka، أو أدوات DevOps."
        },
        {
          id: "node-7-2",
          title: "إنتاج مشروع حقيقي (Output-Driven Learning)",
          description: "التعلم لا يكتمل إلا ببناء تطبيق حي يحل مشكلة واقعية تحت الضغط."
        }
      ]
    }
  ];

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    mindMapData.forEach(n => { all[n.id] = true; });
    setExpandedNodes(all);
  };

  const collapseAll = () => {
    setExpandedNodes({});
  };

  const filteredBranches = selectedBranchId === 'all' 
    ? mindMapData 
    : mindMapData.filter(b => b.id === selectedBranchId);

  return (
    <div className="space-y-6">
      {/* Mind Map Header */}
      <div className="bg-slate-900/90 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 text-purple-400 text-xs font-bold border border-purple-500/30 mb-2">
              <Network className="w-3.5 h-3.5" />
              <span>الخريطة الذهنية الشاملة — Interactive Mind Map</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              خريطة ترابط مسارات تطوير مهندس البرمجيات
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              رؤية بصرية تفاعلية توضح كيف تتشابك مهارات اللغة، الهوية، الطبقات الهندسية، والمصادر المجانية لتكوين المهندس المحترف.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              فتح جميع الفروع
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              طي الفروع
            </button>
          </div>
        </div>

        {/* Branch Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs border-t border-slate-800 pt-3">
          <span className="text-slate-500 shrink-0">تصفية الفرع:</span>
          <button
            onClick={() => setSelectedBranchId('all')}
            className={`px-3 py-1 rounded-lg font-bold whitespace-nowrap transition-all ${
              selectedBranchId === 'all'
                ? 'bg-purple-500 text-slate-950 shadow-sm'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            الخريطة كاملة (7 فروع)
          </button>
          {mindMapData.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBranchId(b.id)}
              className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-all ${
                selectedBranchId === b.id
                  ? 'bg-purple-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800/60 text-slate-400 hover:text-white'
              }`}
            >
              {b.badge}
            </button>
          ))}
        </div>
      </div>

      {/* Central Root Anchor */}
      <div className="relative flex justify-center py-4">
        <div className="relative z-10 px-6 py-4 rounded-3xl bg-gradient-to-r from-purple-600 via-amber-500 to-emerald-500 text-slate-950 font-black shadow-2xl text-center border-2 border-white/20 transform hover:scale-105 transition-all max-w-xl">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Brain className="w-6 h-6" />
            <h3 className="text-lg sm:text-xl font-extrabold tracking-wide">
              مهندس البرمجيات في عصر الذكاء الاصطناعي
            </h3>
          </div>
          <p className="text-xs font-bold text-slate-950/80">
            العقلية • الأساس الهندسي • استيعاب البيزنس • التطبيق العملي
          </p>
        </div>
      </div>

      {/* Branches Grid / Tree */}
      <div className="space-y-6">
        {filteredBranches.map((branch, index) => {
          const isExpanded = !!expandedNodes[branch.id];

          return (
            <div
              key={branch.id}
              className={`bg-slate-900/80 rounded-3xl border transition-all duration-300 shadow-xl overflow-hidden ${
                isExpanded ? 'border-slate-700' : 'border-slate-800/80 opacity-90'
              }`}
            >
              {/* Branch Header */}
              <div
                onClick={() => toggleNode(branch.id)}
                className={`p-5 cursor-pointer bg-gradient-to-r ${branch.color} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:brightness-110 transition-all border-b border-slate-800/60`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-950/60 text-white font-mono font-black text-xs flex items-center justify-center shrink-0 border border-white/10">
                    {index + 1}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-950/40 px-2 py-0.5 rounded-full border border-white/10">
                      {branch.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      {branch.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <span className="hidden md:inline text-slate-400 max-w-md truncate">
                    {branch.summary}
                  </span>
                  <div className="p-1 rounded-lg bg-slate-950/40">
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Sub-nodes / Leaves */}
              {isExpanded && branch.children && (
                <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/40">
                  {branch.children.map((child, cIdx) => (
                    <div
                      key={child.id}
                      className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all space-y-2 group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
                        <h4 className="text-sm font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                          {child.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pr-4">
                        {child.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
