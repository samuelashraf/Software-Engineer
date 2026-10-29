import React, { useState, useEffect, useMemo } from 'react';
import { 
  CheckSquare, Square, CheckCircle2, RotateCcw, Search, 
  ExternalLink, Sparkles, Filter, ArrowDownToLine, Copy, 
  Check, Clock, BookOpen, Layers, Award, ChevronDown, ChevronUp
} from 'lucide-react';
import { TODO_SECTIONS, TodoSection, TodoItem } from '../data/todoData';

const STORAGE_KEY = 'se_roadmap_todo_completed_tasks_v1';

export const TodoListView: React.FC = () => {
  const [completedTaskIds, setCompletedTaskIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [filterMode, setFilterMode] = useState<'all' | 'pending' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedTaskIds));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [completedTaskIds]);

  // Total count calculation
  const allTasks = useMemo(() => {
    return TODO_SECTIONS.flatMap(sec => sec.items);
  }, []);

  const totalTasksCount = allTasks.length;
  const completedCount = useMemo(() => {
    return allTasks.filter(t => completedTaskIds[t.id]).length;
  }, [allTasks, completedTaskIds]);

  const progressPercentage = totalTasksCount > 0 
    ? Math.round((completedCount / totalTasksCount) * 100) 
    : 0;

  const toggleTask = (id: string) => {
    setCompletedTaskIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const markAllCompleted = () => {
    const updated: Record<string, boolean> = {};
    allTasks.forEach(t => {
      updated[t.id] = true;
    });
    setCompletedTaskIds(updated);
  };

  const resetAllTasks = () => {
    if (window.confirm('هل أنت متأكد من إعادة ضبط جميع المهام وتصفير التقدم؟')) {
      setCompletedTaskIds({});
    }
  };

  const toggleSectionCollapse = (secId: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [secId]: !prev[secId]
    }));
  };

  const handleExportText = () => {
    let output = `# قائمة مهام تطوير مهندس البرمجيات (Software Engineer To-Do List)\n`;
    output += `نسبة الإنجاز: ${progressPercentage}% (${completedCount} من أصل ${totalTasksCount} مهمة مكتملة)\n\n`;

    TODO_SECTIONS.forEach(sec => {
      output += `=========================================\n`;
      output += `${sec.title}\n`;
      output += `=========================================\n`;
      sec.items.forEach(item => {
        const isDone = completedTaskIds[item.id] ? '[x]' : '[ ]';
        output += `${isDone} ${item.title}\n`;
        output += `    - الوصف: ${item.description}\n`;
        output += `    - المدة المقترحة: ${item.estimatedDuration}\n`;
        if (item.freeResources.length > 0) {
          output += `    - مصادر مجانية:\n`;
          item.freeResources.forEach(res => {
            output += `      * ${res.title} (${res.platform}): ${res.url}\n`;
          });
        }
        output += `\n`;
      });
    });

    const blob = new Blob([output], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'قائمة_مهام_تطوير_مهندس_البرمجيات.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopySummary = () => {
    const text = `قائمة تطوير مهندس البرمجيات: أنجزت ${completedCount} من أصل ${totalTasksCount} مهمة بنسبة ${progressPercentage}%!`;
    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Sticky Progress Overview Banner */}
      <div className="bg-slate-900/95 backdrop-blur-xl p-5 sm:p-7 rounded-3xl border border-slate-800 shadow-2xl space-y-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-2">
              <CheckSquare className="w-3.5 h-3.5" />
              <span>قائمة المهام التفاعلية — Software Engineer To-Do List</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              قائمة تطويرك ومهامك خطوة بخطوة
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              علّم على كل مهمة عند إنجازها. يتم حفظ تقدمك تلقائياً في المتصفح، مع روابط مباشرة لكافة المصادر المجانية.
            </p>
          </div>

          {/* Progress Metric Badge */}
          <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 flex items-center gap-4 shrink-0 w-full sm:w-auto justify-between sm:justify-start">
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                {progressPercentage}%
              </span>
              <p className="text-xs text-slate-400">
                {completedCount} من أصل {totalTasksCount} مهمة مكتملة
              </p>
            </div>
            <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center relative">
              <div 
                className="absolute inset-0 rounded-full border-2 border-amber-400 transition-all duration-500"
                style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 ${progressPercentage}%)` }}
              />
              <Award className={`w-6 h-6 ${progressPercentage === 100 ? 'text-emerald-400 animate-bounce' : 'text-amber-400'}`} />
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="space-y-1.5">
          <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800 relative">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 transition-all duration-500 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-slate-500 font-mono">
            <span>البداية (0%)</span>
            <span>الهدف: مهندس برمجيات ناضج (100%)</span>
          </div>
        </div>

        {/* Action Controls & Filters */}
        <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في المهام أو المصادر (مثال: Docker, Testing, LLD)..."
              className="w-full pl-3 pr-10 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>

          {/* Filter Status Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterMode === 'all' 
                  ? 'bg-amber-500 text-slate-950 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              الكل ({totalTasksCount})
            </button>
            <button
              onClick={() => setFilterMode('pending')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterMode === 'pending' 
                  ? 'bg-amber-500 text-slate-950 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              المتبقية ({totalTasksCount - completedCount})
            </button>
            <button
              onClick={() => setFilterMode('completed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterMode === 'completed' 
                  ? 'bg-amber-500 text-slate-950 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              المكتملة ({completedCount})
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportText}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="تحميل قائمة المهام كاملة كملف ماركداون"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>تصدير MD</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
              title="نسخ ملخص التقدم"
            >
              {copiedNotification ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedNotification ? 'تم النسخ' : 'مشاركة'}</span>
            </button>

            <button
              onClick={markAllCompleted}
              className="px-2.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-emerald-400 text-xs transition-colors"
              title="تحديد الكل كمكتمل"
            >
              تحديد الكل
            </button>

            <button
              onClick={resetAllTasks}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-400 transition-colors"
              title="إعادة ضبط وتصفير المهام"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Sections and Items List */}
      <div className="space-y-6">
        {TODO_SECTIONS.map((section) => {
          const sectionTasks = section.items.filter(item => {
            const matchesSearch = 
              !searchQuery.trim() ||
              item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.freeResources.some(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()));

            const isDone = !!completedTaskIds[item.id];
            let matchesFilter = true;
            if (filterMode === 'pending') matchesFilter = !isDone;
            if (filterMode === 'completed') matchesFilter = isDone;

            return matchesSearch && matchesFilter;
          });

          if (sectionTasks.length === 0) return null;

          const sectionCompletedCount = section.items.filter(i => completedTaskIds[i.id]).length;
          const isCollapsed = !!collapsedSections[section.id];

          return (
            <div
              key={section.id}
              className="bg-slate-900/80 rounded-3xl border border-slate-800/80 overflow-hidden shadow-xl transition-all"
            >
              {/* Section Header */}
              <div 
                onClick={() => toggleSectionCollapse(section.id)}
                className="p-4 sm:p-5 bg-slate-950/60 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-950/80 transition-colors border-b border-slate-800/80"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 font-black text-sm flex items-center justify-center shrink-0 border border-amber-500/20">
                    {section.number}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      {section.title}
                    </h3>
                    <p className="text-xs text-slate-400 hidden sm:block">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {sectionCompletedCount} / {section.items.length} منجز
                  </span>
                  <div className="text-slate-400 hover:text-white">
                    {isCollapsed ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Items List */}
              {!isCollapsed && (
                <div className="divide-y divide-slate-800/60 p-2 sm:p-4 space-y-2">
                  {sectionTasks.map((task) => {
                    const isDone = !!completedTaskIds[task.id];

                    return (
                      <div
                        key={task.id}
                        className={`p-4 rounded-2xl transition-all ${
                          isDone 
                            ? 'bg-emerald-500/5 border border-emerald-500/20 opacity-80' 
                            : 'bg-slate-950/40 hover:bg-slate-950/70 border border-slate-800/60'
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          {/* Checkbox */}
                          <button
                            onClick={() => toggleTask(task.id)}
                            className="mt-1 text-slate-400 hover:text-amber-400 transition-colors shrink-0"
                            title={isDone ? 'إلغاء التحديد' : 'تحديد كمكتمل'}
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-6 h-6 text-emerald-400 fill-emerald-500/20" />
                            ) : (
                              <Square className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            )}
                          </button>

                          {/* Task Content */}
                          <div className="flex-1 min-w-0 space-y-2">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h4 
                                onClick={() => toggleTask(task.id)}
                                className={`text-sm sm:text-base font-bold cursor-pointer transition-all ${
                                  isDone 
                                    ? 'line-through text-slate-400' 
                                    : 'text-slate-100 hover:text-amber-300'
                                }`}
                              >
                                {task.title}
                              </h4>

                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 flex items-center gap-1">
                                  <Clock className="w-3 h-3 text-amber-400" />
                                  <span>{task.estimatedDuration}</span>
                                </span>
                              </div>
                            </div>

                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                              {task.description}
                            </p>

                            {/* Free Courses / Resources Direct Links */}
                            {task.freeResources.length > 0 && (
                              <div className="pt-2 flex flex-wrap items-center gap-2">
                                <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                                  <Sparkles className="w-3 h-3" />
                                  <span>المصادر المجانية:</span>
                                </span>
                                {task.freeResources.map((res, rIdx) => (
                                  <a
                                    key={rIdx}
                                    href={res.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-200 hover:text-amber-300 transition-colors group"
                                  >
                                    <span className="truncate max-w-[220px] sm:max-w-none">{res.title}</span>
                                    <span className="text-[10px] text-slate-400 font-mono">({res.platform})</span>
                                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-400 shrink-0" />
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
