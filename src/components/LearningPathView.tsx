import React from 'react';
import { 
  ArrowLeft, CheckCircle2, Clock, Calendar, ExternalLink, 
  Sparkles, Layers, BookOpen, Target, Award, ShieldCheck, Flame
} from 'lucide-react';
import { ORDERED_LEARNING_PATH, LearningStep } from '../data/todoData';

export const LearningPathView: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
          <Target className="w-3.5 h-3.5" />
          <span>التسلسل المنهجي الموصى به — تبدأ بإيه وبعده إيه؟</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          خارطة الطريق الزمنية المرتبة بالأولويات
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          لتجنب التشتت بين المواد المتعددة، تم ترتيب المحتوى إلى <strong>4 مراحل زمنية متتالية</strong>، 
          تبدأ من بناء الأساس التقني الرصين للباك إند والداتابيز، ثم معمارية البرمجيات وجودة الكود، 
          ثم تصميم الأنظمة الكبيرة، وصولاً إلى عقلية مهندس المنتجات (Product Engineer) وقاعدة الـ 90 يوماً.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative space-y-8 before:absolute before:inset-0 before:right-6 sm:before:right-8 before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:via-purple-500 before:to-emerald-500 before:pointer-events-none">
        {ORDERED_LEARNING_PATH.map((step, idx) => {
          return (
            <div key={step.stepNumber} className="relative flex items-start gap-4 sm:gap-6 group">
              {/* Step Circle Marker */}
              <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-900 border-2 border-amber-500/60 text-amber-400 font-mono font-black text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-xl group-hover:scale-105 group-hover:border-amber-400 transition-all">
                0{step.stepNumber}
              </div>

              {/* Step Card Content */}
              <div className="flex-1 bg-slate-900/90 rounded-3xl border border-slate-800 hover:border-slate-700 p-6 sm:p-7 shadow-xl space-y-5 transition-all">
                {/* Stage Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold text-amber-400 font-mono uppercase tracking-wider block">
                      {step.stageName}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                      {step.headline}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 shrink-0">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>المدة المقترحة: {step.duration}</span>
                  </div>
                </div>

                {/* Objective */}
                <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80">
                  <span className="text-xs font-bold text-slate-400 block mb-1">🎯 الهدف المحوري للمرحلة:</span>
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">
                    {step.objective}
                  </p>
                </div>

                {/* Topics Covered */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>المواضيع التي يجب إتقانها في هذه المرحلة:</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                    {step.topicsToCover.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/50">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mandatory Free Courses for this Stage */}
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>الكورسات والمراجع المجانية الإلزامية:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {step.mandatoryFreeCourses.map((course, cIdx) => (
                      <a
                        key={cIdx}
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-xs font-medium text-slate-200 hover:text-amber-300 transition-all group"
                      >
                        <span className="font-bold">{course.name}</span>
                        <span className="text-[11px] text-slate-400 font-mono">({course.instructor} • {course.platform})</span>
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-400" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Expected Deliverable / Project */}
                <div className="pt-3 border-t border-slate-800/80 flex items-start gap-3 text-xs sm:text-sm text-emerald-300 bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/20">
                  <Flame className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-emerald-400">المخرج التطبيقي المتوقع بنهاية المرحلة (Deliverable):</span>
                    <span className="text-slate-300">{step.expectedDeliverable}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
