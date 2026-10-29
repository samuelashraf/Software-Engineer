import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, Search, ExternalLink, BookOpen, Star, 
  Tag, Filter, Check, Copy, User, Globe, Sparkles 
} from 'lucide-react';
import { CURATED_COURSES, CourseResource } from '../data/transcriptData';

export const CoursesHubView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedQueryId, setCopiedQueryId] = useState<string | null>(null);

  const instructors = [
    { id: 'all', label: 'جميع المحاضرين' },
    { id: 'hussein', label: 'حسين ناصر (Hussein Nasser)' },
    { id: 'hassan', label: 'حسن إبراهيم (Hassan Ibrahim)' },
    { id: 'arabic', label: 'محتوى عربي (عمرو الحلو)' },
    { id: 'global', label: 'منصات عالمية (ByteByteGo وغيرها)' },
    { id: 'business', label: 'إدارة وبيزنس (Agile & Product)' },
  ];

  const categories = [
    { id: 'all', label: 'جميع المجالات' },
    { id: 'backend', label: 'الباك إند والأنظمة' },
    { id: 'database', label: 'قواعد البيانات' },
    { id: 'architecture', label: 'معمارية البرمجيات والكود' },
    { id: 'system_design', label: 'تصميم النظم (System Design)' },
    { id: 'devops', label: 'الـ DevOps والنشر' },
    { id: 'business', label: 'البيزنس والمنتجات' },
  ];

  const filteredCourses = useMemo(() => {
    return CURATED_COURSES.filter((course) => {
      // Instructor match
      let matchesInstructor = true;
      if (selectedInstructor === 'hussein') {
        matchesInstructor = course.instructor.includes('Hussein') || course.instructor.includes('حسين');
      } else if (selectedInstructor === 'hassan') {
        matchesInstructor = course.instructor.includes('Hassan') || course.instructor.includes('حسن');
      } else if (selectedInstructor === 'arabic') {
        matchesInstructor = course.instructor.includes('عمرو') || course.instructor.includes('العربي');
      } else if (selectedInstructor === 'global') {
        matchesInstructor = course.platform.includes('ByteByteGo') || course.platform.includes('HelloInterview') || course.platform.includes('YouTube');
      } else if (selectedInstructor === 'business') {
        matchesInstructor = course.category === 'business';
      }

      // Category match
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;

      // Search match
      const matchesSearch = 
        !searchQuery.trim() ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.keyTopics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesInstructor && matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedInstructor, selectedCategory]);

  const handleCopySearch = (course: CourseResource) => {
    navigator.clipboard.writeText(course.searchQuery);
    setCopiedQueryId(course.id);
    setTimeout(() => setCopiedQueryId(null), 2000);
  };

  const handleOpenSearch = (course: CourseResource) => {
    if (course.url) {
      window.open(course.url, '_blank', 'noopener,noreferrer');
    } else {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(course.searchQuery)}`;
      window.open(searchUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>دليل المراجع والكورسات المستخلصة من التسجيل</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              المصادر الموصى بها لتأسيس المهندس المحترف
            </h2>
          </div>

          <div className="text-xs text-slate-400 bg-slate-950/80 px-3 py-2 rounded-xl border border-slate-800">
            📚 تم ذكر <strong className="text-amber-400 font-bold">{CURATED_COURSES.length} مصادر ودورات رئيسية</strong>
          </div>
        </div>

        {/* Filter controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث بالاسم أو المحاضر أو الموضوع..."
              className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
            />
          </div>

          {/* Instructor selector */}
          <div>
            <select
              value={selectedInstructor}
              onChange={(e) => setSelectedInstructor(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-950/90 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50"
            >
              {instructors.map((ins) => (
                <option key={ins.id} value={ins.id}>
                  {ins.label}
                </option>
              ))}
            </select>
          </div>

          {/* Category selector */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-950/90 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Courses Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCourses.map((course) => {
          const isHussein = course.instructor.includes('Hussein') || course.instructor.includes('حسين');
          const isHassan = course.instructor.includes('Hassan') || course.instructor.includes('حسن');

          return (
            <div
              key={course.id}
              className="bg-slate-900/80 p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-slate-700 shadow-xl flex flex-col justify-between transition-all hover:-translate-y-0.5 group"
            >
              <div>
                {/* Header: Platform, Type badge, Instructor */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                    course.type === 'core'
                      ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                      : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {course.type === 'core' ? '⭐ كورس أساسي موصى به' : '💡 مرجع مقترح ومكمل'}
                  </span>

                  <span className="text-xs text-slate-400 font-mono bg-slate-950/60 px-2 py-0.5 rounded-lg border border-slate-800">
                    {course.platform}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5 font-['Cairo']">
                  {course.title}
                </h3>

                {/* Instructor */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold text-slate-300">{course.instructor}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Key topics pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.keyTopics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-950/80 text-slate-400 border border-slate-800"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Open & Copy Search */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleCopySearch(course)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
                  title="نسخ اسم الكورس للبحث عنه"
                >
                  {copiedQueryId === course.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">تم نسخ الاسم</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ اسم البحث</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleOpenSearch(course)}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <span>{course.url ? 'زيارة المنصة' : 'بحث في Google/Udemy'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
