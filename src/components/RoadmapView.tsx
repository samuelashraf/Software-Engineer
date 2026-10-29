import React, { useState } from 'react';
import { 
  Compass, Layers, Brain, Calendar, ShieldCheck, 
  Workflow, GitFork, CheckCircle, ArrowRight, Lightbulb,
  Zap, Award, TrendingUp, Cpu, Users, Eye
} from 'lucide-react';
import { EXECUTIVE_ROADMAP } from '../data/transcriptData';

export const RoadmapView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'layers' | 'triangle' | 'quarterly'>('skills');

  return (
    <div className="space-y-8">
      {/* Hero Banner for Roadmap */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/15 via-slate-900 to-slate-950 p-6 sm:p-8 border border-amber-500/30 shadow-2xl">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>خارطة طريق مهندس البرمجيات المستقبلي</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            كيف تبني مسارك المهني في عصر الذكاء الاصطناعي؟
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            الذكاء الاصطناعي أذاب الفروق بين الستاكات ولغات البرمجة؛ لم يعد كافياً تعريف نفسك كـ .NET أو Angular Developer. 
            القيمة الحقيقية الآن تكمن في الأساسيات الهندسية العميقة، فهم أهداف البيزنس، والتفكير كـ <strong>Product Engineer</strong>.
          </p>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'skills'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>المهارات الخمس الجوهرية</span>
        </button>

        <button
          onClick={() => setActiveTab('layers')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'layers'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>الطبقات الـ 6 في التأسيس الهندسي</span>
        </button>

        <button
          onClick={() => setActiveTab('triangle')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'triangle'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>مثلث المقدرة الإنسانية</span>
        </button>

        <button
          onClick={() => setActiveTab('quarterly')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'quarterly'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>القاعدة الذهبية (كل 3 شهور)</span>
        </button>
      </div>

      {/* Tab 1: The 5 Core Skills */}
      {activeTab === 'skills' && (
        <div className="space-y-4">
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-slate-300 text-xs sm:text-sm">
            💡 هذه المهارات الخمس هي التي تحميك وتميزك عن أي نموذج ذكاء اصطناعي أو مبرمج سطحي:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EXECUTIVE_ROADMAP.coreSkills.map((skill, index) => {
              const icons = [GitFork, Layers, Workflow, TrendingUp, Users];
              const Icon = icons[index] || CheckCircle;

              return (
                <div
                  key={skill.num}
                  className="bg-slate-900/80 p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all hover:-translate-y-0.5 shadow-lg relative group"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-2xl font-black font-mono text-amber-400/80 group-hover:text-amber-400 transition-colors">
                      {skill.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {skill.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: The 6 Engineering Layers */}
      {activeTab === 'layers' && (
        <div className="space-y-4">
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-slate-300 text-xs sm:text-sm">
            🏗️ التأسيس الهندسي لا يتغير مع تغير الأدوات؛ هذه هي الطبقات الست التي تصنع مهندس الحلول (Solution Architect):
          </div>
          <div className="space-y-3">
            {EXECUTIVE_ROADMAP.engineeringLayers.map((layer, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-slate-800 text-amber-400 font-bold font-mono text-sm flex items-center justify-center shrink-0 border border-slate-700">
                    0{idx + 1}
                  </span>
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                      {layer.layer}
                    </span>
                    <h4 className="text-base font-bold text-slate-100">
                      {layer.name}
                    </h4>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: The Human Ability Triangle */}
      {activeTab === 'triangle' && (
        <div className="space-y-6">
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-slate-300 text-xs sm:text-sm">
            🔺 كل مهندس يمتلك 3 أبعاد متمايزة: المعرفة وحدها لا تكفي، والمهارة وحدها لا تكفي؛ النموذج الذهني هو الحاكم الحقيقي:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Knowledge */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-blue-500/30 shadow-lg relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-blue-300 mb-2">
                {EXECUTIVE_ROADMAP.abilityTriangle.knowledge.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {EXECUTIVE_ROADMAP.abilityTriangle.knowledge.description}
              </p>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-blue-500/20 text-xs text-blue-200">
                ⚠️ قد تقرأ كتباً وتحفظ معلومات، لكن بدون ممارسة تظل حبيس التنظير.
              </div>
            </div>

            {/* Skill */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-emerald-500/30 shadow-lg relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-emerald-300 mb-2">
                {EXECUTIVE_ROADMAP.abilityTriangle.skill.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {EXECUTIVE_ROADMAP.abilityTriangle.skill.description}
              </p>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-emerald-500/20 text-xs text-emerald-200">
                ⚠️ قد تبني برامج عملية، ولكن بدون أساس نظري تفاجئك الأعطال ولا تفهم سببها.
              </div>
            </div>

            {/* Mental Model */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/40 shadow-xl relative overflow-hidden ring-1 ring-amber-500/30">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-amber-300 mb-2">
                {EXECUTIVE_ROADMAP.abilityTriangle.mentalModel.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {EXECUTIVE_ROADMAP.abilityTriangle.mentalModel.description}
              </p>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-amber-500/30 text-xs text-amber-200 font-medium">
                ⭐ هو الجوهر الثابت عبر كل أجيال الحوسبة (Assembly ➔ C ➔ Java ➔ Python ➔ AI).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: The 90-Day Quarterly Upskilling */}
      {activeTab === 'quarterly' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 p-6 sm:p-7 rounded-2xl border border-amber-500/30 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {EXECUTIVE_ROADMAP.quarterlyRule.title}
                </h3>
                <span className="text-xs text-amber-400">استراتيجية التحول إلى مهندس شامل (Generalist) عالي القيمة</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {EXECUTIVE_ROADMAP.quarterlyRule.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                q: "الربع الأول (Q1)",
                title: "قواعد بيانات تخصصية",
                example: "جرب Graph DB (Neo4j) أو Vector DB (Pinecone/Qdrant) أو Time-series DB.",
                focus: "فهم محركات التخزين ونماذج البيانات المختلفة"
              },
              {
                q: "الربع الثاني (Q2)",
                title: "أنظمة الرسائل والاصطفاف (Queues)",
                example: "Kafka أو RabbitMQ أو Redis Streams لفهم الـ Event-Driven Architecture.",
                focus: "الاتصالات غير المتزامنة والموثوقية"
              },
              {
                q: "الربع الثالث (Q3)",
                title: "أدوات السحاب والـ DevOps",
                example: "Docker, Kubernetes, GitHub Actions, Terraform, Observability (Prometheus/Grafana).",
                focus: "نشر ومراقبة البرمجيات كالمحترفين"
              },
              {
                q: "الربع الرابع (Q4)",
                title: "إطار عمل أو لغة جديدة بالكامل",
                example: "Go أو Rust أو Elixir لتوسيع فهمك للـ Concurrency وإدارة الذاكرة.",
                focus: "بناء حلول ملموسة بنواتج حقيقية (Output)"
              }
            ].map((plan, idx) => (
              <div key={idx} className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 block mb-1">{plan.q}</span>
                  <h4 className="text-base font-bold text-white mb-1.5">{plan.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{plan.example}</p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                  🎯 الهدف: {plan.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
