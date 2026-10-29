import React, { useState, useMemo } from 'react';
import { 
  Search, Copy, Check, Play, Volume2, Sparkles, 
  FileText, ArrowDownToLine, Printer, Filter, BookOpen,
  Share2, ChevronRight, CheckCircle2, Bookmark
} from 'lucide-react';
import { TRANSCRIPT_SEGMENTS, TranscriptSegment } from '../data/transcriptData';

interface TranscriptViewProps {
  currentTime: number;
  onSeek: (seconds: number) => void;
  onPlay: () => void;
  isPlaying: boolean;
  activeSegmentId: string | null;
}

export const TranscriptView: React.FC<TranscriptViewProps> = ({
  currentTime,
  onSeek,
  onPlay,
  isPlaying,
  activeSegmentId,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [savedNotes, setSavedNotes] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'جميع الأقسام' },
    { id: 'english', label: 'اللغة الإنجليزية' },
    { id: 'mindset', label: 'الهوية والعقلية' },
    { id: 'core_skills', label: 'المهارات الـ 5' },
    { id: 'technical', label: 'المهارات التقنية والـ AI' },
    { id: 'triangle', label: 'مثلث المقدرة' },
    { id: 'courses_hussein', label: 'كورسات حسين ناصر' },
    { id: 'courses_hassan', label: 'كورسات حسن إبراهيم' },
    { id: 'resources_extra', label: 'السيستم ديزاين والبيزنس' },
    { id: 'business_quarterly', label: 'القاعدة الذهبية' },
  ];

  const filteredSegments = useMemo(() => {
    return TRANSCRIPT_SEGMENTS.filter((seg) => {
      const matchesCategory = selectedCategory === 'all' || seg.category === selectedCategory;
      const matchesSearch = 
        !searchQuery.trim() ||
        seg.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seg.keyPoints.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopySegment = (seg: TranscriptSegment) => {
    const textToCopy = `[${seg.startTime} - ${seg.endTime}] ${seg.title}\n${seg.text}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(seg.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyFullTranscript = () => {
    const fullText = TRANSCRIPT_SEGMENTS.map(
      (s) => `[${s.startTime} - ${s.endTime}] ${s.title}\n${s.text}\n---\n`
    ).join('\n');
    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const handleDownloadTxt = () => {
    const fullText = `تفريغ التسجيل الصوتي الكامل: نصائح وخارطة طريق مهندس البرمجيات في عصر الذكاء الاصطناعي\n\n` +
      TRANSCRIPT_SEGMENTS.map(
        (s) => `[${s.startTime} - ${s.endTime}] ${s.title}\nالقسم: ${s.badge}\n\n${s.text}\n\nالنقاط المستخلصة:\n${s.keyPoints.map(k => `• ${k}`).join('\n')}\n\n=========================================\n`
      ).join('\n');
    
    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'تفريغ_صوتي_مهندس_البرمجيات.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadMarkdown = () => {
    const markdownContent = `# تفريغ صوتي: خارطة طريق مهندس البرمجيات في عصر الذكاء الاصطناعي\n\n` +
      `**المدة الإجمالية:** 10 دقائق و 44 ثانية\n\n` +
      TRANSCRIPT_SEGMENTS.map(
        (s) => `## [${s.startTime} - ${s.endTime}] ${s.title}\n> **التصنيف:** ${s.badge}\n\n${s.text}\n\n### أهم المخرجات والنقاط المستفادة:\n${s.keyPoints.map(k => `- ${k}`).join('\n')}\n`
      ).join('\n---\n\n');

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'تفريغ_شامل_مهندس_البرمجيات.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  const toggleBookmark = (id: string) => {
    setSavedNotes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper to highlight search terms safely
  const highlightSearch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={i} className="bg-amber-400 text-slate-950 font-semibold px-1 rounded">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="bg-slate-900/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في نص التفريغ أو العناوين أو المصطلحات (مثال: AI, Database, حسين ناصر, Quality)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                مسح
              </button>
            )}
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleCopyFullTranscript}
              className="px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
              title="نسخ النص الكامل لجميع المقاطع"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAll ? 'تم نسخ النص كاملاً!' : 'نسخ التفريغ كاملاً'}</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-all"
              title="تحميل كملف نصي عادي TXT"
            >
              <ArrowDownToLine className="w-3.5 h-3.5 text-slate-400" />
              <span>تحميل TXT</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-all"
              title="تحميل كملف ماركداون Markdown"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>تحميل MD</span>
            </button>

            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all"
              title="طباعة أو حفظ بصيغة PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-500 ml-1 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all font-medium ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm shadow-amber-500/20'
                  : 'bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results summary counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800/60">
          <span>
            يتم عرض <strong className="text-amber-400 font-semibold">{filteredSegments.length}</strong> من أصل{' '}
            {TRANSCRIPT_SEGMENTS.length} مقطعاً
          </span>
          <span className="text-[11px] text-slate-500">
            اضغط على زر التوقيت بجانب أي فقرة للاستماع المباشر إليها من التسجيل
          </span>
        </div>
      </div>

      {/* Segments Stream */}
      <div className="space-y-4">
        {filteredSegments.length === 0 ? (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800/80">
            <Search className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-300 font-semibold mb-1">لم يتم العثور على نتائج مطابقة لـ "{searchQuery}"</p>
            <p className="text-xs text-slate-500">جرب البحث بكلمات أخرى أو اختر "جميع الأقسام".</p>
          </div>
        ) : (
          filteredSegments.map((seg, idx) => {
            const isActive = activeSegmentId === seg.id;
            const isBookmarked = !!savedNotes[seg.id];

            return (
              <div
                key={seg.id}
                id={seg.id}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative group ${
                  isActive
                    ? 'bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 border-amber-500/60 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/30'
                    : 'bg-slate-900/70 hover:bg-slate-900 border-slate-800/80 hover:border-slate-700 shadow-md'
                }`}
              >
                {/* Active Segment Glow Indicator */}
                {isActive && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[11px] font-bold flex items-center gap-1 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
                    <span>جارٍ الاستماع الآن...</span>
                  </div>
                )}

                {/* Header row: Index, Title, Badge, Time button, Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                      {highlightSearch(seg.title, searchQuery)}
                    </h3>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700/60">
                      {seg.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Timestamp seek button */}
                    <button
                      onClick={() => {
                        onSeek(seg.startSeconds);
                        if (!isPlaying) onPlay();
                      }}
                      className={`px-2.5 py-1 rounded-xl text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                          : 'bg-slate-800 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-slate-700'
                      }`}
                      title="تشغيل الصوت من هذا التوقيت"
                    >
                      {isActive && isPlaying ? (
                        <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                      ) : (
                        <Play className="w-3 h-3 fill-current ml-0.5" />
                      )}
                      <span>{seg.startTime}</span>
                    </button>

                    {/* Bookmark toggle */}
                    <button
                      onClick={() => toggleBookmark(seg.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isBookmarked 
                          ? 'text-amber-400 bg-amber-500/15' 
                          : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                      }`}
                      title={isBookmarked ? 'إلغاء التمييز' : 'تمييز كفقرة مهمة'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>

                    {/* Copy segment */}
                    <button
                      onClick={() => handleCopySegment(seg)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                      title="نسخ نص هذه الفقرة"
                    >
                      {copiedId === seg.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Verbatim Spoken Text */}
                <div className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line mb-4 font-['Cairo']">
                  {highlightSearch(seg.text, searchQuery)}
                </div>

                {/* Key Takeaways Section */}
                {seg.keyPoints.length > 0 && (
                  <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>الخلاصة المستفادة:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      {seg.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                          <span>{highlightSearch(point, searchQuery)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
